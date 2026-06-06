/**
 * DEEP STRESS: privacy/redaction invariants.
 *
 * Property-based hammering of the masking + redaction surfaces hardened across
 * the audit (#163 email masking, codex-diff key-aware redaction, logger
 * sanitizeValue). The invariant: for ANY generated email/secret, the raw value
 * must never survive into the rendered/sanitized output.
 */

import { describe, it, expect } from "vitest";
import * as fc from "fast-check";

import {
  maskEmailForDisplay,
  resolveDisplayEmail,
} from "../../lib/account-display.js";
import { sanitizeValue, maskString } from "../../lib/logger.js";

const arbEmail = fc.emailAddress();
// Opaque, non-token-shaped secrets (what real refresh tokens often look like):
// random-ish strings that maskString's shape heuristics would NOT catch.
const arbOpaqueSecret = fc
  .string({ minLength: 8, maxLength: 64 })
  .filter((s) => s.trim().length >= 8);

describe("DEEP STRESS: email masking invariant (#163)", () => {
  it("masked email never contains the full local part", () => {
    fc.assert(
      fc.property(arbEmail, (email) => {
        const masked = maskEmailForDisplay(email);
        if (!masked) return true;
        const atIndex = email.indexOf("@");
        const local = email.slice(0, atIndex);
        // The full local part must not appear verbatim unless it is <= 2 chars
        // (the masker intentionally keeps up to the first 2 chars).
        if (local.length > 2) {
          expect(masked.includes(local)).toBe(false);
        }
        // Domain is preserved for distinguishability.
        const domain = email.slice(atIndex);
        expect(masked.endsWith(domain)).toBe(true);
        return true;
      }),
      { numRuns: 500 },
    );
  });

  it("resolveDisplayEmail with masking enabled never returns the raw email (len>3 local)", () => {
    fc.assert(
      fc.property(arbEmail, (email) => {
        const out = resolveDisplayEmail(email, true);
        if (!out) return true;
        const local = email.slice(0, email.indexOf("@"));
        if (local.length > 2) {
          expect(out).not.toBe(email);
        }
        return true;
      }),
      { numRuns: 500 },
    );
  });

  it("masking disabled is an identity (backward compatible)", () => {
    fc.assert(
      fc.property(arbEmail, (email) => {
        expect(resolveDisplayEmail(email, false)).toBe(email.trim());
        return true;
      }),
      { numRuns: 200 },
    );
  });
});

describe("DEEP STRESS: logger sanitizeValue redaction invariant", () => {
  const SENSITIVE_KEYS = [
    "access",
    "accessToken",
    "refresh",
    "refreshToken",
    "token",
    "authorization",
    "apiKey",
    "secret",
    "password",
    "id_token",
    "cookie",
    "set-cookie",
  ];

  it("a sensitive-keyed opaque secret never appears verbatim in sanitized output", () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...SENSITIVE_KEYS),
        arbOpaqueSecret,
        (key, secret) => {
          const sanitized = sanitizeValue({ [key]: secret });
          const serialized = JSON.stringify(sanitized);
          // The raw secret (when long enough to be masked) must not survive.
          if (secret.length > 12) {
            expect(serialized.includes(secret)).toBe(false);
          }
          return true;
        },
      ),
      { numRuns: 500 },
    );
  });

  it("nested sensitive values are recursively masked", () => {
    fc.assert(
      fc.property(arbOpaqueSecret, (secret) => {
        if (secret.length <= 12) return true;
        const sanitized = sanitizeValue({
          outer: { inner: { refreshToken: secret } },
          list: [{ accessToken: secret }],
        });
        const serialized = JSON.stringify(sanitized);
        expect(serialized.includes(secret)).toBe(false);
        return true;
      }),
      { numRuns: 300 },
    );
  });

  it("an email value under the email key is domain-masked, not raw", () => {
    fc.assert(
      fc.property(arbEmail, (email) => {
        const local = email.slice(0, email.indexOf("@"));
        if (local.length <= 6) return true; // short locals are within mask hint
        const sanitized = sanitizeValue({ email }) as { email: string };
        // maskToken would leak the first 6 chars; maskEmail must not leak the
        // full local part.
        expect(sanitized.email.includes(local)).toBe(false);
        return true;
      }),
      { numRuns: 300 },
    );
  });

  it("maskString scrubs JWT-shaped substrings embedded in free text", () => {
    fc.assert(
      fc.property(
        fc.base64String({ minLength: 20, maxLength: 40 }),
        fc.base64String({ minLength: 20, maxLength: 40 }),
        fc.base64String({ minLength: 20, maxLength: 40 }),
        (a, b, c) => {
          // A real JWT's first two segments are base64url of a JSON object, so
          // they begin with `eyJ`. Construct that shape (which the redactor
          // targets) and strip padding to keep it base64url-clean.
          const clean = (s: string) => s.replace(/[=+/]/g, "A");
          const jwt = `eyJ${clean(a)}.eyJ${clean(b)}.${clean(c)}`;
          const text = `prefix ${jwt} suffix`;
          const masked = maskString(text);
          // The full JWT triple must not survive verbatim.
          expect(masked.includes(jwt)).toBe(false);
          return true;
        },
      ),
      { numRuns: 200 },
    );
  });
});
