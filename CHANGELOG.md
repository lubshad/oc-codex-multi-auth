# Changelog

All notable changes to this project will be documented in this file. Dates are ISO format (YYYY-MM-DD).

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [7.0.0](https://github.com/lubshad/oc-codex-multi-auth/compare/v6.15.0...v7.0.0) (2026-09-01)


### ⚠ BREAKING CHANGES

* rename package and migrate runtime storage

### Added

* add aggregate macOS quota notifications ([4be5b49](https://github.com/lubshad/oc-codex-multi-auth/commit/4be5b497c18cfee0e1b611b55e53e54246c95603))
* add GPT-5.4 support and docs refresh ([e75d6a5](https://github.com/lubshad/oc-codex-multi-auth/commit/e75d6a5094442cc1b25b329941f4150b7271fec6))
* add GPT-5.4 support in v5.4.2 ([67b9c76](https://github.com/lubshad/oc-codex-multi-auth/commit/67b9c76005a014a8ab8de0c82c6043c54d706f08))
* add gpt-5.4.3 model + opencode compatibility updates ([bd79669](https://github.com/lubshad/oc-codex-multi-auth/commit/bd79669ba56e7a3cc0ecd198ce403ff20de923ee))
* add model account pool management tool ([986a41e](https://github.com/lubshad/oc-codex-multi-auth/commit/986a41e273b4731f6ebcbf888c6f4f0c5b8e9c81))
* add model-specific account pools ([a37df4b](https://github.com/lubshad/oc-codex-multi-auth/commit/a37df4ba518fea9cdf8a3d3f4807635eb3630738))
* add model-specific account pools ([56eb42a](https://github.com/lubshad/oc-codex-multi-auth/commit/56eb42a98405fb80e411d0cc6e556443534da33f))
* add prompt cache diagnostics to codex-doctor ([405ef3f](https://github.com/lubshad/oc-codex-multi-auth/commit/405ef3f377ed8ed9d2d445b785934b1da3eeb458))
* add prompt cache diagnostics to codex-doctor ([6411373](https://github.com/lubshad/oc-codex-multi-auth/commit/6411373cc4ff0a8f734de22a5c556066447fc330))
* add strict model account pool routing ([#222](https://github.com/lubshad/oc-codex-multi-auth/issues/222)) ([dcc1e59](https://github.com/lubshad/oc-codex-multi-auth/commit/dcc1e5979eea0b737e2b66ae4da182ac97507f0e))
* add TUI email masking ([#160](https://github.com/lubshad/oc-codex-multi-auth/issues/160)) ([a939c6b](https://github.com/lubshad/oc-codex-multi-auth/commit/a939c6bbdabd45bce8828c0334a4401c48196a3a))
* **auth:** add device code login flow ([9968199](https://github.com/lubshad/oc-codex-multi-auth/commit/9968199b87912c0216792e5ffe2ba1f7f5edf2f6))
* **auth:** phase 1 - persist workspace candidates as separate accounts ([cab071a](https://github.com/lubshad/oc-codex-multi-auth/commit/cab071a45e28e99f359fa6fc701cab72ee915e18))
* **auth:** support OPENAI_BASE_URL ([653155a](https://github.com/lubshad/oc-codex-multi-auth/commit/653155ae43b4599dd64cee46ab9ae869c2976087))
* **auth:** support trusted OpenAI base URLs ([d077b9b](https://github.com/lubshad/oc-codex-multi-auth/commit/d077b9b2ce2235da9d1afdad585b92ef9719d566))
* auto-refresh opencode plugin cache ([8e4fddb](https://github.com/lubshad/oc-codex-multi-auth/commit/8e4fddbfe2eedb715443139cb82a0db5082e7f79))
* beginner toolkit, safe-mode retries, and backup-safe account workflows ([#39](https://github.com/lubshad/oc-codex-multi-auth/issues/39)) ([edda3cb](https://github.com/lubshad/oc-codex-multi-auth/commit/edda3cb0074ec31e84fe39b5a2276a1f35c83232))
* **cli:** add `warm` standalone command — token-free direct warm-up ([#182](https://github.com/lubshad/oc-codex-multi-auth/issues/182)) ([#185](https://github.com/lubshad/oc-codex-multi-auth/issues/185)) ([755aa46](https://github.com/lubshad/oc-codex-multi-auth/commit/755aa460e315be0de986e55e1b47bacfb8117e2d))
* **codex-reset:** view and redeem banked rate-limit reset credits ([#193](https://github.com/lubshad/oc-codex-multi-auth/issues/193)) ([9c4305a](https://github.com/lubshad/oc-codex-multi-auth/commit/9c4305ab0050c6d2324b80fa8f8be9e45402b6e0))
* **config:** add accountToasts opt-out for the account-selection toast ([#203](https://github.com/lubshad/oc-codex-multi-auth/issues/203)) ([a2c4ec8](https://github.com/lubshad/oc-codex-multi-auth/commit/a2c4ec8d603aa1624b417659fd8972fa7ee6ef84))
* **config:** add accountToasts opt-out for the account-selection toast ([#203](https://github.com/lubshad/oc-codex-multi-auth/issues/203)) ([d05dc78](https://github.com/lubshad/oc-codex-multi-auth/commit/d05dc788aeec93ef3185e2921e726a51cabcd2d8))
* default to gpt-5.4 and seed project storage fallback ([4d5d478](https://github.com/lubshad/oc-codex-multi-auth/commit/4d5d478cf797ce10af35df4263a718b6669cb7c5))
* harden codex auth, storage, and CI audit flow ([f208021](https://github.com/lubshad/oc-codex-multi-auth/commit/f2080216113a91450a9180db971ab3e956173ca0))
* harden codex auth, storage, and CI audit flow ([a458bd2](https://github.com/lubshad/oc-codex-multi-auth/commit/a458bd22d1eef1f8a23346a2b1ac97ad34788a9c))
* **models:** add GPT-5.6 Sol / Terra / Luna support ([#189](https://github.com/lubshad/oc-codex-multi-auth/issues/189)) ([1937693](https://github.com/lubshad/oc-codex-multi-auth/commit/19376939ba825472a8b482ff082879e919cdb89e))
* **models:** phase 1 - add gpt-5.4-mini core normalization ([7ae7cb8](https://github.com/lubshad/oc-codex-multi-auth/commit/7ae7cb87983a0661701e2609b20cc384af42ae6e))
* **models:** phase 2 - wire gpt-5.4-mini family surfaces ([d218dd0](https://github.com/lubshad/oc-codex-multi-auth/commit/d218dd09b9bdff40bed042d90941c856a2d04c52))
* **notifications:** add aggregate quota alerts ([0fd62ae](https://github.com/lubshad/oc-codex-multi-auth/commit/0fd62ae4f818d935252d7d775be2b841a2f58f3a))
* **notifications:** brand macOS quota alerts ([6b1037a](https://github.com/lubshad/oc-codex-multi-auth/commit/6b1037a0f9ba21fc4eb32016a4799e79fbdeb46f))
* Phase 3 Batch C - NO_COLOR + codex-diag diagnostics snapshot ([#126](https://github.com/lubshad/oc-codex-multi-auth/issues/126)) ([6ba5df1](https://github.com/lubshad/oc-codex-multi-auth/commit/6ba5df19741f057b722d755271e4c9a22b6709bc))
* Phase 4 F2 - multi-worktree collision detection ([#130](https://github.com/lubshad/oc-codex-multi-auth/issues/130)) ([dba4b26](https://github.com/lubshad/oc-codex-multi-auth/commit/dba4b26e1b23a8096ae7a79382420937a0a83f80))
* **privacy:** mask account emails across all display surfaces ([#164](https://github.com/lubshad/oc-codex-multi-auth/issues/164)) ([2094bf0](https://github.com/lubshad/oc-codex-multi-auth/commit/2094bf0473c97320d937ceaaba30298cbb2e6084))
* rename package and migrate runtime storage ([6140ee1](https://github.com/lubshad/oc-codex-multi-auth/commit/6140ee12b7361b7593bc0f31acceaa2c6df720a2))
* **rotation:** add rotationStrategy selector and codex-warm tool ([#183](https://github.com/lubshad/oc-codex-multi-auth/issues/183), [#182](https://github.com/lubshad/oc-codex-multi-auth/issues/182)) ([#184](https://github.com/lubshad/oc-codex-multi-auth/issues/184)) ([38480e9](https://github.com/lubshad/oc-codex-multi-auth/commit/38480e9b476766bca1b712cb76f32ed59a973d5f))
* **security:** opt-in OS-keychain credential backend via CODEX_KEYCHAIN=1 ([#132](https://github.com/lubshad/oc-codex-multi-auth/issues/132)) ([ae75093](https://github.com/lubshad/oc-codex-multi-auth/commit/ae7509349b04cc4bb81e4c0fd15c06f0c648cbe7))
* **storage:** add cross-process transaction lease ([c1a0010](https://github.com/lubshad/oc-codex-multi-auth/commit/c1a0010acc89d0f0599df51e83b5ac7660d9b8bd))
* **storage:** phase 2 - preserve distinct workspace entries during normalization ([1540621](https://github.com/lubshad/oc-codex-multi-auth/commit/1540621133b13a406278dd841c955edd34f6e327))
* **tools:** add codex-diff redacted config comparison tool ([#129](https://github.com/lubshad/oc-codex-multi-auth/issues/129)) ([10acf92](https://github.com/lubshad/oc-codex-multi-auth/commit/10acf92a89713dd8d2436220addb2a2266fb7198))
* treat built-in Responses tools as first-class bridge entries ([5fccac0](https://github.com/lubshad/oc-codex-multi-auth/commit/5fccac087d3a92cd07e9f9b848318f7cf996311d))
* treat built-in Responses tools as first-class bridge entries ([4de1a27](https://github.com/lubshad/oc-codex-multi-auth/commit/4de1a27b32305ee78af91862a8319785669657f7))


### Fixed

* **accounts:** harden Business seat identity handling ([bb00355](https://github.com/lubshad/oc-codex-multi-auth/commit/bb00355c8fc95d6e0b991edf7849247084af5e61))
* **accounts:** isolate Business member state ([9452695](https://github.com/lubshad/oc-codex-multi-auth/commit/945269524da79aa87726d43a8a67753095c0ebff))
* **accounts:** preserve Business workspace member identity ([69944af](https://github.com/lubshad/oc-codex-multi-auth/commit/69944afe001396d8d6bf8d6a902005bedde0ecd8))
* **accounts:** preserve Business workspace member identity ([a8fc918](https://github.com/lubshad/oc-codex-multi-auth/commit/a8fc91879d922c3daef94f0d49e8488398af07bb))
* **accounts:** preserve persisted workspace variants and verify runtime filtering ([cac9f72](https://github.com/lubshad/oc-codex-multi-auth/commit/cac9f728e60596bb76905d6bd886cc4fcba67d5d))
* **accounts:** replace the stale re-auth note instead of appending a second ([c0d748f](https://github.com/lubshad/oc-codex-multi-auth/commit/c0d748fe5213df787f0a8ee2668d620300b00dbf))
* **accounts:** replace the stale re-auth note instead of appending a second ([79a08c7](https://github.com/lubshad/oc-codex-multi-auth/commit/79a08c761f47bd9b6640f39fa36a8bc42e0b9388))
* **accounts:** stop clobbering refresh tokens rotated by another process ([e157623](https://github.com/lubshad/oc-codex-multi-auth/commit/e157623f66c66e080305e0f36e16cd457e552096))
* **accounts:** transact metadata updates ([4d34f15](https://github.com/lubshad/oc-codex-multi-auth/commit/4d34f15696524d25380bf56c7182cf5784966cb9))
* address account pool review feedback ([5e67b53](https://github.com/lubshad/oc-codex-multi-auth/commit/5e67b53ca6718782c16bcb5be852f0a59d04ee26))
* address CodeRabbit and Greptile review findings ([5da9117](https://github.com/lubshad/oc-codex-multi-auth/commit/5da9117f1acf6374dbd6f10fa4a452c3d986cc50))
* address PR review comments for GPT-5.4.3 support ([610440b](https://github.com/lubshad/oc-codex-multi-auth/commit/610440bf0da7a1dff423cc96392ffca73c00f51c))
* address pr review follow-ups ([c1b4e6b](https://github.com/lubshad/oc-codex-multi-auth/commit/c1b4e6b22390e252d00d8f018d05cf6bee9e885e))
* address review comments ([f77bb2b](https://github.com/lubshad/oc-codex-multi-auth/commit/f77bb2b133638e8c0fa2c98e9ae5b7f1a1cb7d53))
* align prompt cache metrics with fetch attempts ([902194e](https://github.com/lubshad/oc-codex-multi-auth/commit/902194ea0d8ed5d7bd609ec9190849420fbe27bd))
* always redact prompt cache keys in doctor output ([91ffc2b](https://github.com/lubshad/oc-codex-multi-auth/commit/91ffc2b58b3710222801504d0eb6778409701c35))
* **audit:** queue-based writes to prevent EBUSY on Windows ([dfe2731](https://github.com/lubshad/oc-codex-multi-auth/commit/dfe273185d12df4d5802402b03805131ed3ae457))
* **auth:** accept mapped loopback and stop echoing the gateway value ([e7a029c](https://github.com/lubshad/oc-codex-multi-auth/commit/e7a029ca63980fa921e48b420b7da1df99042dee))
* **auth:** batch account hydration to prevent auth0 429 rate limits ([03b0d46](https://github.com/lubshad/oc-codex-multi-auth/commit/03b0d46441187b900b07c64c7e5e9b57ff34ae60))
* **auth:** bind each login to its own workspace quota pool ([466ff95](https://github.com/lubshad/oc-codex-multi-auth/commit/466ff958979bc2c67ddc1b0622122a8785973b6d))
* **auth:** bind each login to its own workspace quota pool ([7f96f94](https://github.com/lubshad/oc-codex-multi-auth/commit/7f96f94be8ead5d3a7ca70f5de516d2a26cf7bd2)), closes [#226](https://github.com/lubshad/oc-codex-multi-auth/issues/226)
* **auth:** canonicalize scope at load and adoption boundaries ([#213](https://github.com/lubshad/oc-codex-multi-auth/issues/213)) ([e9fbf99](https://github.com/lubshad/oc-codex-multi-auth/commit/e9fbf99b7f497a112e5ddb4d517f0caf8b0cf8b7))
* **auth:** catch unhandled promise rejections in proactive refresh daemon ([0b83fa3](https://github.com/lubshad/oc-codex-multi-auth/commit/0b83fa32a025d92e752e17d3673fdb03a3509bf8))
* **auth:** clear stale failure counters on token rotation ([be0039d](https://github.com/lubshad/oc-codex-multi-auth/commit/be0039d32afd1900cd8449c8664b98f65bc6bbbc))
* **auth:** collapse fallback duplicates, stabilize dedupe remap, and harden auth tests ([#38](https://github.com/lubshad/oc-codex-multi-auth/issues/38)) ([0f8ef32](https://github.com/lubshad/oc-codex-multi-auth/commit/0f8ef323573dcb87095a7f5d0dd9c0d27de84c10))
* **auth:** cooldown live accounts on zero grouped removal ([c6531ab](https://github.com/lubshad/oc-codex-multi-auth/commit/c6531abebf4c255986ba1ee957e354d72c7924e6))
* **auth:** coordinate refresh token rotation ([e100e65](https://github.com/lubshad/oc-codex-multi-auth/commit/e100e657dec2f328c95fedd50b4334fdd58edef8))
* **auth:** dedupe duplicate teams by organization identity ([95bee79](https://github.com/lubshad/oc-codex-multi-auth/commit/95bee790973d72e695da3886852259dcbc1939cb))
* **auth:** harden custom OAuth gateways ([243bb01](https://github.com/lubshad/oc-codex-multi-auth/commit/243bb01a622893b416ed86fa869d77c0ccb76861))
* **auth:** harden org identity reconciliation and mapping ([1fc911d](https://github.com/lubshad/oc-codex-multi-auth/commit/1fc911db417331db04114977a95a66b175e58098))
* **auth:** harden proactive refresh exception handling ([6696d7c](https://github.com/lubshad/oc-codex-multi-auth/commit/6696d7c3179bf4471e59fff04f3d99e463e58b83))
* **auth:** load stored codex accounts when host auth is apikey ([#35](https://github.com/lubshad/oc-codex-multi-auth/issues/35)) ([db9ed4e](https://github.com/lubshad/oc-codex-multi-auth/commit/db9ed4ee301927f3d52301856591e8cb92742275))
* **auth:** normalize proactive refresh exception result typing ([ab38913](https://github.com/lubshad/oc-codex-multi-auth/commit/ab389139769e1a7ca32bdb729fc8081fa68ddaac))
* **auth:** normalize scope, weigh both scope sources, persist the repair ([#213](https://github.com/lubshad/oc-codex-multi-auth/issues/213)) ([cf46581](https://github.com/lubshad/oc-codex-multi-auth/commit/cf465819d7507ec1a20811b67acb7fd47ec61712))
* **auth:** phase 5 - avoid cascading org account removals ([5b12625](https://github.com/lubshad/oc-codex-multi-auth/commit/5b12625c3b00f0535f58da81f0e980acadf6b09c))
* **auth:** phase 5 - dedupe duplicate teams via id_token organizations ([d63cb46](https://github.com/lubshad/oc-codex-multi-auth/commit/d63cb46c6b5aaf4217dc99f50c67045ed3d51387))
* **auth:** phase 6 - address PR review edge cases ([c655e3e](https://github.com/lubshad/oc-codex-multi-auth/commit/c655e3e977c7a5a9d1d918c4abdc47f686a673cd))
* **auth:** phase 6 - restore non-team fallback merge behavior ([56d137f](https://github.com/lubshad/oc-codex-multi-auth/commit/56d137f0ef75f914f129c1448bc512db7897a861))
* **auth:** phase 8 - canonicalize org mapping for teams/workspaces ([0600b80](https://github.com/lubshad/oc-codex-multi-auth/commit/0600b80f724c380f9c561099ad635914c07d97c6))
* **auth:** preserve flagged org identity on restore ([b961447](https://github.com/lubshad/oc-codex-multi-auth/commit/b9614478f431d7d36c7d6b5c0eea17855d65a6a1))
* **auth:** preserve pasted authorization codes byte for byte ([7df1b21](https://github.com/lubshad/oc-codex-multi-auth/commit/7df1b21cadc36f9338a946cae9a700bb3a4db8aa))
* **auth:** redact device-code logs ([890f122](https://github.com/lubshad/oc-codex-multi-auth/commit/890f12221ffd71d8491cd9708cef0c36379c9958))
* **auth:** reject empty gateway URL components ([b35a008](https://github.com/lubshad/oc-codex-multi-auth/commit/b35a008e061b7250ca73b38ad970bb9910275113))
* **auth:** reject state-only authorization input ([9c4fb4f](https://github.com/lubshad/oc-codex-multi-auth/commit/9c4fb4facdd23460a1f6024dda2014f61c4517a2))
* **auth:** reject state-only authorization input ([99cf617](https://github.com/lubshad/oc-codex-multi-auth/commit/99cf6177983501e7ab15aa2fbdc791d06bf3985a))
* **auth:** require literal loopback for HTTP gateways ([b02b400](https://github.com/lubshad/oc-codex-multi-auth/commit/b02b40032a404485626ab5c11ec27e7eecd60651))
* **auth:** route refresh callers through coordinator ([bb9cb99](https://github.com/lubshad/oc-codex-multi-auth/commit/bb9cb9910fdcf5e91f910f092bfa709884975e4b))
* **auth:** serialize multiprocess refresh token rotation ([d7a3e9c](https://github.com/lubshad/oc-codex-multi-auth/commit/d7a3e9c5f9647a58020a0cff2d9501c9884db19c))
* **auth:** stop disabling accounts whose OAuth scope is merely unknown ([#213](https://github.com/lubshad/oc-codex-multi-auth/issues/213)) ([e2d3630](https://github.com/lubshad/oc-codex-multi-auth/commit/e2d3630003f2137a613e2c08722551480b3f436d))
* **auth:** stop disabling accounts whose OAuth scope is merely unknown ([#213](https://github.com/lubshad/oc-codex-multi-auth/issues/213)) ([fee4813](https://github.com/lubshad/oc-codex-multi-auth/commit/fee4813d3900770ce71f3c0e723ce1a67fca7547))
* **auth:** unify authorize merge with storage identity semantics ([a1eb834](https://github.com/lubshad/oc-codex-multi-auth/commit/a1eb834405852380f5c9d0ae7c268b7fe45afb9f))
* **auth:** widen loopback gateway range and surface gateway failures ([4a22496](https://github.com/lubshad/oc-codex-multi-auth/commit/4a22496e9ce42bf34a8bac8cc89ac77fe0f877e8))
* batch account hydration to prevent 429 rate limits ([626130e](https://github.com/lubshad/oc-codex-multi-auth/commit/626130e8c35a7684fcdf9d51cbf42a8df29d3353))
* bug sweep — credential clobbers, fake-success streams, stale TUI quota, tool locking ([fd0762b](https://github.com/lubshad/oc-codex-multi-auth/commit/fd0762b548d86d6d857d3b7358ea218c6cfbb691))
* check quotas without model probe ([b06d6f5](https://github.com/lubshad/oc-codex-multi-auth/commit/b06d6f5464416702b018408a3073d01f7e323c98))
* check quotas without model probe ([f441d30](https://github.com/lubshad/oc-codex-multi-auth/commit/f441d303d09a1f491d45e48d44274913b5a7781a))
* clarify gpt-5 alias comments and pro coercion logs ([4445528](https://github.com/lubshad/oc-codex-multi-auth/commit/4445528af959f7a6cecd5643b4c40450c1642e74))
* clear dependency audit findings ([f613afd](https://github.com/lubshad/oc-codex-multi-auth/commit/f613afdb1979eb4aac7427d90379196ba99c2f03))
* clear dependency audit findings ([da45508](https://github.com/lubshad/oc-codex-multi-auth/commit/da45508b2ffeee171b13123ead9ca66a999dd219))
* **cli:** address review findings on warm fallback and limits ([8fbf2d3](https://github.com/lubshad/oc-codex-multi-auth/commit/8fbf2d302e18916424bfa726ee902e8502ccf71a))
* **cli:** warm 400 on retired model and empty limits output ([#209](https://github.com/lubshad/oc-codex-multi-auth/issues/209), [#210](https://github.com/lubshad/oc-codex-multi-auth/issues/210)) ([376d108](https://github.com/lubshad/oc-codex-multi-auth/commit/376d1083ab5544fbc102c54a95067d20c8b9d8ed))
* **cli:** warm 400 on retired model and empty limits output ([#209](https://github.com/lubshad/oc-codex-multi-auth/issues/209), [#210](https://github.com/lubshad/oc-codex-multi-auth/issues/210)) ([10b64c1](https://github.com/lubshad/oc-codex-multi-auth/commit/10b64c141c4397bcc1694486740fe736ded93793))
* codex-doctor stale-state recovery ([#171](https://github.com/lubshad/oc-codex-multi-auth/issues/171)) + clear 8 Dependabot advisories ([#173](https://github.com/lubshad/oc-codex-multi-auth/issues/173)) ([a7e7cc7](https://github.com/lubshad/oc-codex-multi-auth/commit/a7e7cc705f7dc802de667f38ff1a36f5b446befd))
* **codex-keychain:** run migrate and rollback under the storage lock ([0254baa](https://github.com/lubshad/oc-codex-multi-auth/commit/0254baa86a0476ca9c34a72559e5fa4ec53fa262))
* **codex-limits:** deduplicate accounts by refreshToken to avoid duplicate display ([63e94ee](https://github.com/lubshad/oc-codex-multi-auth/commit/63e94ee43d19dec2cf4938c23c56eec3167795c6))
* **codex-limits:** harden deduped usage refresh ([549c137](https://github.com/lubshad/oc-codex-multi-auth/commit/549c137dbbc271b204bada9d5fc7aeb830218b18))
* **codex-limits:** harden usage fetch and dedup refresh ([3afc5d7](https://github.com/lubshad/oc-codex-multi-auth/commit/3afc5d78c8e20008292551dda2aba2c223e6e007))
* **codex-reset:** make the redeem idempotency key stable per credit ([2a28b74](https://github.com/lubshad/oc-codex-multi-auth/commit/2a28b7474cb12cf0f37dd880fc7829f2afff5df1))
* **codex-reset:** never report a spent credit as unredeemed ([87afebc](https://github.com/lubshad/oc-codex-multi-auth/commit/87afebc12a0c08119f713003bebb9f1b914921d0))
* **codex-reset:** satisfy noUncheckedIndexedAccess in redeem key derivation ([5d55578](https://github.com/lubshad/oc-codex-multi-auth/commit/5d5557881707a65865250ec7a3ef48697bffa2a5))
* coerce pro minimal effort to medium ([58ac775](https://github.com/lubshad/oc-codex-multi-auth/commit/58ac775264a9832f7f78df8bb7879041a4564e84))
* **config:** bound contention stall and align the lock error surface ([b3681d1](https://github.com/lubshad/oc-codex-multi-auth/commit/b3681d1a42b2fbc953a9b29011e81f91813d2c45))
* **config:** bound contention stall and align the lock error surface ([5da8a52](https://github.com/lubshad/oc-codex-multi-auth/commit/5da8a52c91957fef45c093e00fe29f2e388efeea)), closes [#224](https://github.com/lubshad/oc-codex-multi-auth/issues/224)
* **config:** expose gpt-5.5-fast selectors ([c967849](https://github.com/lubshad/oc-codex-multi-auth/commit/c967849f1107694aabd3ab24fc4b21494a6bd2db))
* **config:** handle exhausted model pool lock contention ([28c8dc7](https://github.com/lubshad/oc-codex-multi-auth/commit/28c8dc7a64bfdce07f5bb609cb4d2359fdfecdd5))
* **config:** harden config lock release and Windows contention ([8e3126d](https://github.com/lubshad/oc-codex-multi-auth/commit/8e3126decbdebce08a1eacedaf48e1ffe9cca1d8)), closes [#224](https://github.com/lubshad/oc-codex-multi-auth/issues/224)
* **config:** honour an explicitly empty quotaNotifications.thresholds ([99bbb06](https://github.com/lubshad/oc-codex-multi-auth/commit/99bbb06f96e50d1456e798ec029c06e7afbbaabd))
* **config:** revalidate model pool no-ops under lock ([e74df82](https://github.com/lubshad/oc-codex-multi-auth/commit/e74df826b592f2921ce99b33fdf4d6cc61cfc585))
* correct model alias mapping, add gpt-5.4-nano, validate Pro reasoning ([8e2d6e0](https://github.com/lubshad/oc-codex-multi-auth/commit/8e2d6e0163c6b7a4d7f9f3ae69891acf1ad8e04b))
* correct model alias mapping, add gpt-5.4-nano, validate Pro reasoning ([f7d203b](https://github.com/lubshad/oc-codex-multi-auth/commit/f7d203b3935428a4124f0b4a5d64a2875f31dbbe))
* default installer to full model catalog ([000cf1f](https://github.com/lubshad/oc-codex-multi-auth/commit/000cf1fe1d377982accc9125e1205c63d4234f66))
* default missing function call arguments ([f6ebd26](https://github.com/lubshad/oc-codex-multi-auth/commit/f6ebd262477a2723ee38d7b6515b1f6335af8769))
* default to native transform and align bridge tooling ([71756fa](https://github.com/lubshad/oc-codex-multi-auth/commit/71756fa30dd3a223437dd1cf0bbf5f6280dc63e5))
* default to native transform and align bridge tooling ([4203cf6](https://github.com/lubshad/oc-codex-multi-auth/commit/4203cf6887aa38803790950b89824ed4e7ab7e89))
* **deps:** bump hono to 4.12.23 (security) — release 6.3.1 ([#168](https://github.com/lubshad/oc-codex-multi-auth/issues/168)) ([0cc1912](https://github.com/lubshad/oc-codex-multi-auth/commit/0cc19120b17260044f6d6711e16b4ccebd66a953))
* **deps:** drop @openauthjs/openauth and clear all audit advisories ([d208403](https://github.com/lubshad/oc-codex-multi-auth/commit/d2084035bebf6f49f80badbaf4ebd7f09c2ada66))
* **deps:** drop @openauthjs/openauth and clear all audit advisories ([0bc02b5](https://github.com/lubshad/oc-codex-multi-auth/commit/0bc02b526ce2d6ec4f5fac4243fdfec77e3a9340))
* **deps:** pin esbuild &gt;=0.28.1 to clear GHSA-gv7w-rqvm-qjhr / GHSA-g7r4-m6w7-qqqr ([76a4839](https://github.com/lubshad/oc-codex-multi-auth/commit/76a483979725212a5ebc64537da6c0203c7910fb))
* drop deactivated refresh-token variants from rotation ([8e41290](https://github.com/lubshad/oc-codex-multi-auth/commit/8e4129026f61b1e1a0b68bf4dd1c6d0fdb7cbe8d))
* fail over and cool down on 401 token-invalidated responses ([#171](https://github.com/lubshad/oc-codex-multi-auth/issues/171)) ([#172](https://github.com/lubshad/oc-codex-multi-auth/issues/172)) ([007be0a](https://github.com/lubshad/oc-codex-multi-auth/commit/007be0ae84e05f95ebf39491f6abf3a4b7b54273))
* **fallback:** auto-degrade gpt-5.6 tiers under the default strict policy ([61e3938](https://github.com/lubshad/oc-codex-multi-auth/commit/61e3938b4b2acc96125b5c9eb57042763151145a))
* **fallback:** auto-degrade gpt-5.6 tiers under the default strict policy ([7b0886b](https://github.com/lubshad/oc-codex-multi-auth/commit/7b0886b6837c1477469cdff1e86c3bc5123bb3b9)), closes [#196](https://github.com/lubshad/oc-codex-multi-auth/issues/196)
* finalize gpt-5.4.3 review follow-ups ([c13baa7](https://github.com/lubshad/oc-codex-multi-auth/commit/c13baa709594dd232aac7e36d6f0226f60c86a80))
* gracefully handle deactivated_workspace — remove only the dead workspace, preserve siblings ([85877c1](https://github.com/lubshad/oc-codex-multi-auth/commit/85877c1afffbfcba3b0ccfe71b58fc7034b5a25d))
* gracefully handle deactivated_workspace by removing only the dead workspace entry ([f667464](https://github.com/lubshad/oc-codex-multi-auth/commit/f66746446eb7d06dbadc020c21b4236bc380e2e5))
* guard concurrent refresh persistence ([29748a3](https://github.com/lubshad/oc-codex-multi-auth/commit/29748a3f9c0aac42a273f4c7e3dd5761dd24f782))
* handle config lock contention in codex-pool ([bb77802](https://github.com/lubshad/oc-codex-multi-auth/commit/bb778021470446c87e565d171815575c937318fa))
* handle normalized codex fallback ([e267ce2](https://github.com/lubshad/oc-codex-multi-auth/commit/e267ce21b940493d6ecda18923bb08df2377aef1))
* handle normalized codex fallback ([5c138aa](https://github.com/lubshad/oc-codex-multi-auth/commit/5c138aab8af673a56edffc7470e69ed912054005))
* harden cached-manager reload and de-dupe verification finding ([7861ed1](https://github.com/lubshad/oc-codex-multi-auth/commit/7861ed18a2101c1876bbee6c08474d9f498e8a10))
* harden full catalog installer safeguards ([fcbf613](https://github.com/lubshad/oc-codex-multi-auth/commit/fcbf613f6da8645d4619f8c37505b7efaa421503))
* harden gpt-5.4 matching and close review gaps ([2228e77](https://github.com/lubshad/oc-codex-multi-auth/commit/2228e77f9ff7f0a928053b5808da6f8be9a54cff))
* harden installer writes and test full mode ([335362f](https://github.com/lubshad/oc-codex-multi-auth/commit/335362f466796eed72e5f2d4eb5e488057652337))
* harden proactive refresh + audit logging ([057843a](https://github.com/lubshad/oc-codex-multi-auth/commit/057843a21bcb003861ee3e2bef0b20a31bcf5fdb))
* harden prompt cache telemetry and masking ([9fc4001](https://github.com/lubshad/oc-codex-multi-auth/commit/9fc4001e7a29cc91f0600a69bcd9648a21a92b50))
* harden tool-call failure handling for issue [#22](https://github.com/lubshad/oc-codex-multi-auth/issues/22) ([a646fe9](https://github.com/lubshad/oc-codex-multi-auth/commit/a646fe9d64444a699dd416f1a7ab8c2232ca5716))
* harden tool-call failure handling for issue [#22](https://github.com/lubshad/oc-codex-multi-auth/issues/22) ([52cbcd9](https://github.com/lubshad/oc-codex-multi-auth/commit/52cbcd9d6bd5858a6ee2e17f5347030aab499a9e))
* **identity:** address review feedback on dedupe determinism ([954ba9b](https://github.com/lubshad/oc-codex-multi-auth/commit/954ba9b998a1423d85ca4bee353f848ab4f2a47d))
* **identity:** avoid mutating fallback map during iteration ([2f3e2f4](https://github.com/lubshad/oc-codex-multi-auth/commit/2f3e2f4b9569d92bb6a5f251e51fca898e7da128))
* **identity:** preserve org-scoped variants with distinct account ids ([9ba8e5d](https://github.com/lubshad/oc-codex-multi-auth/commit/9ba8e5d75eed2f660b38829bfff740923030f374))
* **identity:** stop collapsing distinct workspace accountIds ([291a7a7](https://github.com/lubshad/oc-codex-multi-auth/commit/291a7a7e055d4c79a759a8650cbca530a5b099fe))
* **identity:** use distinct org account ids in ambiguity check ([206393f](https://github.com/lubshad/oc-codex-multi-auth/commit/206393f676df00bbac2f041eb903d1898e304008))
* **identity:** verify org-scoped preservation and no-org dedupe compatibility ([a98e609](https://github.com/lubshad/oc-codex-multi-auth/commit/a98e60999414e5cb770b32c3424e61f3dcc874bd))
* **index:** guard zero grouped-removal on auth failures ([21601d2](https://github.com/lubshad/oc-codex-multi-auth/commit/21601d2f0fd0b6387c2bfaf6fb7856a5405c4f7c))
* **installer:** deep-merge provider.openai + --dry-run preview ([#114](https://github.com/lubshad/oc-codex-multi-auth/issues/114)) ([cfd093f](https://github.com/lubshad/oc-codex-multi-auth/commit/cfd093f706be15746671d7deb223e1e0676b46b3))
* **installer:** default to compact model picker ([#145](https://github.com/lubshad/oc-codex-multi-auth/issues/145)) ([74be624](https://github.com/lubshad/oc-codex-multi-auth/commit/74be624a9d5154c18816fa1aa06d6a29db38d6ae))
* **installer:** handle UTF-8 BOM in existing opencode.json ([#136](https://github.com/lubshad/oc-codex-multi-auth/issues/136)) ([1c82f27](https://github.com/lubshad/oc-codex-multi-auth/commit/1c82f278cf139dd56b871f175383bc8f018bc4ed))
* **installer:** support npm-linked cli wrapper ([3331324](https://github.com/lubshad/oc-codex-multi-auth/commit/3331324cb14d2b80dd8dfb424619870a88476706))
* keep deactivated workspaces out of restore flow ([c0b51aa](https://github.com/lubshad/oc-codex-multi-auth/commit/c0b51aa6b2afe1fb6c5f2f3b7516b6103c47213a))
* **keychain:** address F1 post-merge review findings (1 HIGH + 3 MEDIUM) ([#133](https://github.com/lubshad/oc-codex-multi-auth/issues/133)) ([f17ff0d](https://github.com/lubshad/oc-codex-multi-auth/commit/f17ff0deb210c7f82fbe0bc627899a62d49e9762))
* **keychain:** F1 LOW + NIT polish from post-merge review ([#134](https://github.com/lubshad/oc-codex-multi-auth/issues/134)) ([e19c645](https://github.com/lubshad/oc-codex-multi-auth/commit/e19c645770c722dcb239cb54933a4337b3163006))
* **license:** add full MIT license text ([8397a1a](https://github.com/lubshad/oc-codex-multi-auth/commit/8397a1a94cf5bdf1dc4478a09137c50cf4cd04ac))
* **loader:** retry after a failed account load instead of caching the rejection ([db5580f](https://github.com/lubshad/oc-codex-multi-auth/commit/db5580f733d4172f859f868c17857ca038a0a150))
* **loader:** retry after a failed account load instead of caching the rejection ([9e364a6](https://github.com/lubshad/oc-codex-multi-auth/commit/9e364a68faf01a036fd6461dd90c113ae4a42bca))
* make the handler one-shot by clearing this.shutdownHandler = null as its first action, so ensureShutdownFlushRegistered() can re-register on the next save. Adds a regression test that schedules a debounced save, runs runCleanup(), schedules again, and confirms the second runCleanup() drains the second save. ([0014f5a](https://github.com/lubshad/oc-codex-multi-auth/commit/0014f5ac060208336a6aacf9533c721cc2f2aa99))
* match login fallback variants by identity ([84b3d2b](https://github.com/lubshad/oc-codex-multi-auth/commit/84b3d2be5229c0865fca17e0fa0cc871209d0628))
* **models:** address PR review feedback for gpt-5.4-mini ([e9197f9](https://github.com/lubshad/oc-codex-multi-auth/commit/e9197f9770ca6da84cd286d06d4f3c34f42a3f90))
* **models:** preserve legacy lightweight reasoning behavior ([6a0bea3](https://github.com/lubshad/oc-codex-multi-auth/commit/6a0bea338a7d7364e8956d3eab54d759edc05720))
* **notifications:** close three defects found while verifying [#239](https://github.com/lubshad/oc-codex-multi-auth/issues/239) ([8077709](https://github.com/lubshad/oc-codex-multi-auth/commit/8077709e001a8fcab8b395b745233c4ea05f0f07))
* **notifications:** close three quota-monitor defects found while verifying [#239](https://github.com/lubshad/oc-codex-multi-auth/issues/239) ([180da38](https://github.com/lubshad/oc-codex-multi-auth/commit/180da385998cea56376a94b0f2b73a4dd20c960a))
* **notifications:** make the quota monitor safe to run unattended ([94d3fe9](https://github.com/lubshad/oc-codex-multi-auth/commit/94d3fe94395df26990d18019aefda929c318d84c))
* **notifications:** refine quota status alerts ([9474b1e](https://github.com/lubshad/oc-codex-multi-auth/commit/9474b1e22cfeeadc54b72a8258f0ec0631854afc))
* **notifications:** simplify quota alert content ([cf13188](https://github.com/lubshad/oc-codex-multi-auth/commit/cf13188808bad5674045a4f3c8e99f4db76c586e))
* **notifications:** use built-in macOS delivery ([0511955](https://github.com/lubshad/oc-codex-multi-auth/commit/0511955bb4f6cc36583b7ea2a271efa059d774c4))
* persist rotated health-check tokens ([4ee023d](https://github.com/lubshad/oc-codex-multi-auth/commit/4ee023d383b59690a8af210c244cbf3666e26df8))
* persist rotated health-check tokens ([af273bf](https://github.com/lubshad/oc-codex-multi-auth/commit/af273bf1476a54837abac2c155be2098f7da75b2))
* **persistence:** keep the longer rate-limit block when merging to disk ([3202f27](https://github.com/lubshad/oc-codex-multi-auth/commit/3202f2706e3ea9f2c8995df801a93e6117c9d49d))
* pin audit override versions ([eca241a](https://github.com/lubshad/oc-codex-multi-auth/commit/eca241aaa28d4a3db72cfaf9435e3c2783adca2c))
* **pools:** preserve Business seat identity ([890437d](https://github.com/lubshad/oc-codex-multi-auth/commit/890437d891ddea5df78618bbfdc6a290b53b0ed1))
* **pr99:** restore-zero-removal-fallback ([9c81a2f](https://github.com/lubshad/oc-codex-multi-auth/commit/9c81a2fd2c25aec1a5fca7b02d8e41585bbfa062))
* preserve gpt-5.3-codex-spark, gpt-5.3-codex, gpt-5.2-codex as distinct canonical model IDs ([#170](https://github.com/lubshad/oc-codex-multi-auth/issues/170)) ([610b86c](https://github.com/lubshad/oc-codex-multi-auth/commit/610b86c240bc5039a09bbd9c536dc369a7a2febc))
* preserve max_output_tokens in transformed requests ([44fc5ef](https://github.com/lubshad/oc-codex-multi-auth/commit/44fc5efefddff81a11acc8b02808c1aa59d16638))
* preserve max_output_tokens in transformed requests ([5657d20](https://github.com/lubshad/oc-codex-multi-auth/commit/5657d20a25779bbf3094f050559749ef8768296f))
* preserve multi-org accounts and prevent cascading auth-removal ([a404a0a](https://github.com/lubshad/oc-codex-multi-auth/commit/a404a0a260e46268be42275b249a55209761e8e9))
* preserve organization variants during deduplication and add org header ([9508791](https://github.com/lubshad/oc-codex-multi-auth/commit/950879167a178ffe9f083563c365707a30697063))
* preserve provider config in default install ([f4a938d](https://github.com/lubshad/oc-codex-multi-auth/commit/f4a938d9b7b81e623bbacf95edf18c63eb4290da))
* preserve workspace identity in flagged cleanup ([de8615b](https://github.com/lubshad/oc-codex-multi-auth/commit/de8615b4841819de2dfb101423ba205435ccfa32))
* preserve workspace-specific usage quotas + harden test isolation ([#161](https://github.com/lubshad/oc-codex-multi-auth/issues/161)) ([15988d2](https://github.com/lubshad/oc-codex-multi-auth/commit/15988d25248740c1ad1ac75c499f88947be1f766))
* **proactive-refresh:** check for a missing access token before the expiry guard ([3a405a1](https://github.com/lubshad/oc-codex-multi-auth/commit/3a405a1a7c37fc01e0e637aae38fd144c66ab721))
* **prompts:** align tool list and substitution directives ([2bb597e](https://github.com/lubshad/oc-codex-multi-auth/commit/2bb597ea1b96745e24ce7d467bf18558db83cef6))
* **prompts:** capture apply_patch in checklist and tests ([dbe0e0c](https://github.com/lubshad/oc-codex-multi-auth/commit/dbe0e0c0d7e6342675f55debedff747fb548db0a))
* **prompts:** clarify available tools list is illustrative ([d603285](https://github.com/lubshad/oc-codex-multi-auth/commit/d603285aec32e50ac5aab9a41218266bb9b4a42d))
* **prompts:** source system instructions from the Codex model catalog ([#190](https://github.com/lubshad/oc-codex-multi-auth/issues/190)) ([bec0884](https://github.com/lubshad/oc-codex-multi-auth/commit/bec0884552275ddf4d67c3f3b1434cb17d3d8faf))
* **quota:** drop disabled zero-length windows; feat(codex-reset): redeem banked rate-limit resets ([3cb9eea](https://github.com/lubshad/oc-codex-multi-auth/commit/3cb9eeab63eeccacdf1dbe1ef3397b7668bb61fe))
* **quota:** treat a zero-length window as disabled, not as a full quota ([#194](https://github.com/lubshad/oc-codex-multi-auth/issues/194)) ([2b4e414](https://github.com/lubshad/oc-codex-multi-auth/commit/2b4e414653a8e8368e86ad2a64c89f33de12fa12))
* redact persisted selection callback failures ([64cc256](https://github.com/lubshad/oc-codex-multi-auth/commit/64cc256404884e7bd1bbf79e63448e663b0cf936))
* redact prompt cache keys in doctor output ([a9453ac](https://github.com/lubshad/oc-codex-multi-auth/commit/a9453acea5683777b538f6bdb92522f04524d3c4))
* **refresh-queue:** serve settled rotation results to late callers ([820b2ea](https://github.com/lubshad/oc-codex-multi-auth/commit/820b2ea451b427ade6269f89361f57b2ee704dd5))
* **release:** preserve unprefixed release tags ([3c5f71d](https://github.com/lubshad/oc-codex-multi-auth/commit/3c5f71d0a1b44ad28490b6519777ae5b21ee9627))
* **reliability:** shutdown flush + forward-compat schema guard ([#110](https://github.com/lubshad/oc-codex-multi-auth/issues/110)) ([0014f5a](https://github.com/lubshad/oc-codex-multi-auth/commit/0014f5ac060208336a6aacf9533c721cc2f2aa99))
* render styled OAuth success screen ([9651a05](https://github.com/lubshad/oc-codex-multi-auth/commit/9651a052829001ac562e710c574008a23b5d3dfb))
* render styled OAuth success screen ([ee60d90](https://github.com/lubshad/oc-codex-multi-auth/commit/ee60d908155678234bf8f5d07341ac74fd7a6604))
* **request-transform:** preserve runtime patch tool names without remapping ([71597bd](https://github.com/lubshad/oc-codex-multi-auth/commit/71597bda0bcda094d52f991b15a637349dc5ef58))
* **request:** address PR [#201](https://github.com/lubshad/oc-codex-multi-auth/issues/201) review — version-token hygiene, host-version self-sync, test coverage ([9bc2d43](https://github.com/lubshad/oc-codex-multi-auth/commit/9bc2d43fb30fd132fa63ead86eca94c548afaa95))
* **request:** cap retry-after headers at the same 5-min bound as the body path ([76ac216](https://github.com/lubshad/oc-codex-multi-auth/commit/76ac216dd1316633efdc17fa4cdb6ee4c5dc9781))
* **request:** default gpt-5.6 tiers to the host (opencode) client identity ([#196](https://github.com/lubshad/oc-codex-multi-auth/issues/196)) ([197c4a7](https://github.com/lubshad/oc-codex-multi-auth/commit/197c4a7156411b0e00fc3cfd1ddd6ae47bf07a29))
* **request:** default gpt-5.6 tiers to the host (opencode) client identity ([#196](https://github.com/lubshad/oc-codex-multi-auth/issues/196)) ([1e8caba](https://github.com/lubshad/oc-codex-multi-auth/commit/1e8cababd18525bb64e83f0cba8266ecc9f58a32))
* **request:** re-clamp reasoning effort on model fallback ([ec32a59](https://github.com/lubshad/oc-codex-multi-auth/commit/ec32a59c2499aa2be4c64d6d321b8943f009bb31))
* **request:** send Codex CLI client identity; stop pinning openai-organization ([#196](https://github.com/lubshad/oc-codex-multi-auth/issues/196)) ([42dbc81](https://github.com/lubshad/oc-codex-multi-auth/commit/42dbc81b899647fca9c4437fbf7d7c68c5c960f3))
* **request:** send Codex CLI client identity; stop pinning openai-organization ([#196](https://github.com/lubshad/oc-codex-multi-auth/issues/196)) ([def180f](https://github.com/lubshad/oc-codex-multi-auth/commit/def180f1b000da1127d7c249302de7038a09688f))
* **request:** set reasoning.context="all_turns" on responses-lite requests ([#192](https://github.com/lubshad/oc-codex-multi-auth/issues/192)) ([9f84880](https://github.com/lubshad/oc-codex-multi-auth/commit/9f848802dacfb2d294cff8389c3234f30c767267)), closes [#191](https://github.com/lubshad/oc-codex-multi-auth/issues/191)
* **request:** surface a truncated SSE stream as 502 instead of a fake 200 ([d53e596](https://github.com/lubshad/oc-codex-multi-auth/commit/d53e5966dda5c2c32b31703180c5c9120a81c093))
* resolve 16 deep-audit findings (data-loss, rotation, redaction, concurrency) ([#165](https://github.com/lubshad/oc-codex-multi-auth/issues/165)) ([b8cdf6b](https://github.com/lubshad/oc-codex-multi-auth/commit/b8cdf6b32a9083515df6d73fab569562411d872b))
* resolve current audit validation issues ([b0a3a21](https://github.com/lubshad/oc-codex-multi-auth/commit/b0a3a21d6ec3552ff9eee0bc4693c7f0df1196ae))
* resolve open oauth diagnostics issues ([cad2d65](https://github.com/lubshad/oc-codex-multi-auth/commit/cad2d65187eb969fbcf467a32d6f82cffe2b015f))
* resolve second-round PR review findings ([4e5ca32](https://github.com/lubshad/oc-codex-multi-auth/commit/4e5ca32be25989e37035fee6affd166e5ac8994d))
* retry locked cache removal on Windows ([9fbcc82](https://github.com/lubshad/oc-codex-multi-auth/commit/9fbcc82aa840eed1dd781d25a3ef282cdb5aa6b2))
* **retry:** align overload handling with the remaining review notes ([e96b14e](https://github.com/lubshad/oc-codex-multi-auth/commit/e96b14e1986a7b8c3b006beb0bf00ae28bbe793d))
* **retry:** keep server overload off rate-limit path ([7c74fb5](https://github.com/lubshad/oc-codex-multi-auth/commit/7c74fb5ad7f5f65043655fe109d1f3db569bda20))
* **retry:** recognize reduced service unavailable overloads ([babb099](https://github.com/lubshad/oc-codex-multi-auth/commit/babb09932652383afc170589a273a2a992085bca))
* **retry:** restore overload backoff when server retries exhaust the account pool ([ede1683](https://github.com/lubshad/oc-codex-multi-auth/commit/ede1683fd683104163729f107040b58cb5aef1a0))
* **retry:** treat server overload responses as retryable ([4004499](https://github.com/lubshad/oc-codex-multi-auth/commit/400449973f9d6f22d2814b3f193af27fd06d7c3e))
* reuse safe account manager reload ([9e04513](https://github.com/lubshad/oc-codex-multi-auth/commit/9e04513b6d509515d4bf1ffc263535f67c99fe25))
* **review:** address PR [#198](https://github.com/lubshad/oc-codex-multi-auth/issues/198) tool-layer review findings ([5322ca2](https://github.com/lubshad/oc-codex-multi-auth/commit/5322ca25e543bf0719009b2040280d520a389a5e))
* **review:** harden credential-merge and rotation-cache edges from PR [#198](https://github.com/lubshad/oc-codex-multi-auth/issues/198) review ([ac51aa2](https://github.com/lubshad/oc-codex-multi-auth/commit/ac51aa2c81621174a2888966f97d42c0c8aa4750))
* **rotation:** bound the quota-block horizon and stop NaN reaching users ([ace32ac](https://github.com/lubshad/oc-codex-multi-auth/commit/ace32ac8aa333e8312afd98bd3f7bc7670114179))
* **rotation:** make every rate-limit write monotonic and parse all reset formats ([48c17af](https://github.com/lubshad/oc-codex-multi-auth/commit/48c17afc2eb179ce3b7441691442db0b3ac7e494))
* **rotation:** make selection token-bucket-aware; stop persisting local limiter ([30ba34f](https://github.com/lubshad/oc-codex-multi-auth/commit/30ba34f3f3dd2f431b0dfc7ff6d00a991631ceb9))
* **rotation:** resolve pool keys by identity when computing pool wait time ([0a05d2d](https://github.com/lubshad/oc-codex-multi-auth/commit/0a05d2d4920e0ce1163eed4e4da72c8c02e9ee95))
* **rotation:** resolve pool keys by identity when computing pool wait time ([2b8de07](https://github.com/lubshad/oc-codex-multi-auth/commit/2b8de079afd11a11020752fa539bad0a5d6bae64))
* **rotation:** retry deactivated workspaces ([76858be](https://github.com/lubshad/oc-codex-multi-auth/commit/76858be1ca60e652697417b0502aad2188f8678b))
* **rotation:** stop retrying accounts whose weekly quota is spent ([#218](https://github.com/lubshad/oc-codex-multi-auth/issues/218)) ([a050241](https://github.com/lubshad/oc-codex-multi-auth/commit/a050241d5b0781789f351df19ab66417f9f4cef7))
* **rotation:** stop retrying accounts whose weekly quota is spent ([#218](https://github.com/lubshad/oc-codex-multi-auth/issues/218)) ([b6eafed](https://github.com/lubshad/oc-codex-multi-auth/commit/b6eafed43ce244a4203ca77cc0ad602cfd8f3c6a))
* **routing:** decide quota-header authority in one place ([3ccdb5c](https://github.com/lubshad/oc-codex-multi-auth/commit/3ccdb5c40e61a3a8ccee1bd1cb6819e09644738f))
* **routing:** drop gpt-5.5-pro (ChatGPT-only) and add gpt-5.5-fast + scoped auto-fallback ([#142](https://github.com/lubshad/oc-codex-multi-auth/issues/142)) ([f34ded3](https://github.com/lubshad/oc-codex-multi-auth/commit/f34ded36355c729fae00c54226333e4cb1864695))
* **routing:** ignore quota headers on entitlement errors ([bd9f622](https://github.com/lubshad/oc-codex-multi-auth/commit/bd9f62266220764aea6b27ac4b8cf10edbb6ed67))
* **routing:** ignore quota headers on entitlement errors ([006ada0](https://github.com/lubshad/oc-codex-multi-auth/commit/006ada052d249cb185c387fba7b0a58fb9cd4ca0))
* **routing:** keep sticky requests in strict pools ([76cb0e2](https://github.com/lubshad/oc-codex-multi-auth/commit/76cb0e2704398ced23ea884f903845163dd459ab))
* **routing:** make the pool-exhaustion diagnostics count real accounts ([783c361](https://github.com/lubshad/oc-codex-multi-auth/commit/783c3612afc5e3b403a993e77f3d0ae0e1445198))
* **routing:** preserve account identity in diagnostics ([a7fac4d](https://github.com/lubshad/oc-codex-multi-auth/commit/a7fac4dfaf68d1cf0f188dfd053ccc542b276b9e))
* **routing:** preserve account identity in diagnostics ([204defb](https://github.com/lubshad/oc-codex-multi-auth/commit/204defb8c833423f16c9e84d0c61ea87bd52d744))
* **routing:** preserve empty pool snapshots ([21550a3](https://github.com/lubshad/oc-codex-multi-auth/commit/21550a367224affb955c236887acf6417fdec905))
* **routing:** report real account counts when a model pool is exhausted ([637b8dd](https://github.com/lubshad/oc-codex-multi-auth/commit/637b8dd93994452ff94855e1073b8a00a47b51a9))
* **routing:** stabilize diagnostic account keys ([ca1df4b](https://github.com/lubshad/oc-codex-multi-auth/commit/ca1df4b8509352e9fdbd6368d4377c5ada555d4d))
* **safety:** serialize auth-failure increment + flip destructive defaults ([#108](https://github.com/lubshad/oc-codex-multi-auth/issues/108)) ([7bf8827](https://github.com/lubshad/oc-codex-multi-auth/commit/7bf88270b01186418d24a3620a0e5cda3a3dab9c))
* sanitize import backup failure reporting ([a4f9519](https://github.com/lubshad/oc-codex-multi-auth/commit/a4f9519172e9eb0d2374d128c3f4f12c57c671ed))
* **security:** strict nullish merge + loopback URI + CLI zod + token redaction ([#112](https://github.com/lubshad/oc-codex-multi-auth/issues/112)) ([e14f37e](https://github.com/lubshad/oc-codex-multi-auth/commit/e14f37e8216c9c0ee3a2509947ba0ef8b87bcc71))
* separate plugin updates from config install ([705f146](https://github.com/lubshad/oc-codex-multi-auth/commit/705f14605b1643d40e6703e28970cf68f9e6b871))
* separate plugin updates from config install ([e1c8ae4](https://github.com/lubshad/oc-codex-multi-auth/commit/e1c8ae46fac5d9b8f3b6dff2a493170c75598f55))
* serialize model pool config across processes ([26eb8c9](https://github.com/lubshad/oc-codex-multi-auth/commit/26eb8c9274f14927853b3171c2b4bd8f3ea4b3bd))
* **shutdown:** don't own process termination inside the opencode host ([#187](https://github.com/lubshad/oc-codex-multi-auth/issues/187)) ([#188](https://github.com/lubshad/oc-codex-multi-auth/issues/188)) ([4390f5e](https://github.com/lubshad/oc-codex-multi-auth/commit/4390f5ef41ca92dc612e2525637e91894f8e1976))
* **storage:** abort the exchange when the refresh lease is lost ([82f8711](https://github.com/lubshad/oc-codex-multi-auth/commit/82f871119c651de16b57edf9941796a03c27f51e))
* **storage:** consistent case-insensitive email identity + surface absorbed re-logins ([#171](https://github.com/lubshad/oc-codex-multi-auth/issues/171)) ([#181](https://github.com/lubshad/oc-codex-multi-auth/issues/181)) ([5c7e936](https://github.com/lubshad/oc-codex-multi-auth/commit/5c7e93663782baa2f6339044369b63e0f7ce461e))
* **storage:** handle V2 schema (migrate or explicit reject) ([#113](https://github.com/lubshad/oc-codex-multi-auth/issues/113)) ([42ebfd2](https://github.com/lubshad/oc-codex-multi-auth/commit/42ebfd263781a7e86702eab81664dd8e829db991))
* **storage:** keep the OAuth exchange out of the storage lease ([81444a9](https://github.com/lubshad/oc-codex-multi-auth/commit/81444a99f41a28b3e64a99d4d2bae96af5b424ab))
* **storage:** phase 9 - preserve org identity in flagged accounts ([5effa34](https://github.com/lubshad/oc-codex-multi-auth/commit/5effa3495abdedd53e35a4b00b8cf48d213ed049))
* **storage:** preserve org-scoped variants and collapse no-org duplicates consistently ([8192edf](https://github.com/lubshad/oc-codex-multi-auth/commit/8192edfbaa9047e38f493f7d43d4d648e422937f))
* **storage:** preserve workspace account variants during persistence ([efbf7f6](https://github.com/lubshad/oc-codex-multi-auth/commit/efbf7f667e8a505b5f8278ee32274cb1a3b5a0a1))
* **storage:** prevent order-dependent org fallback account binding ([0552fbf](https://github.com/lubshad/oc-codex-multi-auth/commit/0552fbf69f59cab399bd2a89d751279265a12825))
* **storage:** scope collision warning throttling ([cfa9614](https://github.com/lubshad/oc-codex-multi-auth/commit/cfa961422b97195229b74e64b57a98dabc26155c))
* **storage:** throttle repeated collision warnings ([36ababc](https://github.com/lubshad/oc-codex-multi-auth/commit/36ababc9068ab1b8d7e893eb3fda415054b7f55c))
* **storage:** token-source duplicate must not disable the real org account on merge ([#171](https://github.com/lubshad/oc-codex-multi-auth/issues/171)) ([#180](https://github.com/lubshad/oc-codex-multi-auth/issues/180)) ([ff06bd5](https://github.com/lubshad/oc-codex-multi-auth/commit/ff06bd5b12180adafeebea8be8a5070de0a5413f))
* surface failed-refresh re-login + extend codex-health diagnostics ([#171](https://github.com/lubshad/oc-codex-multi-auth/issues/171) follow-ups) ([#177](https://github.com/lubshad/oc-codex-multi-auth/issues/177)) ([5ce0415](https://github.com/lubshad/oc-codex-multi-auth/commit/5ce04158278bbcd936d236094105416dc128c46b))
* surface retry-wait cancellation as a proper AbortError ([#176](https://github.com/lubshad/oc-codex-multi-auth/issues/176)) ([#178](https://github.com/lubshad/oc-codex-multi-auth/issues/178)) ([7e39abd](https://github.com/lubshad/oc-codex-multi-auth/commit/7e39abdb81d90422e115a90a47b936c59f8b74a6))
* **test:** remove the check-then-watch race in the multiprocess handshake ([4987e44](https://github.com/lubshad/oc-codex-multi-auth/commit/4987e4478feddd8463d6eb782ab4303ed92dd766))
* tighten json ops routing visibility ([a0b1a5f](https://github.com/lubshad/oc-codex-multi-auth/commit/a0b1a5f14313d205e8b8a1d3d7437f1e8b92c88a))
* tighten storage identity and persistence contracts ([0913e75](https://github.com/lubshad/oc-codex-multi-auth/commit/0913e750a1c0a577249fd282ad75b4ea5c317a00))
* tighten storage identity and persistence contracts ([eb44872](https://github.com/lubshad/oc-codex-multi-auth/commit/eb44872fc11742078467a975786160047514cb6f))
* tighten workspace identity follow-ups ([821678b](https://github.com/lubshad/oc-codex-multi-auth/commit/821678b3b6efe9d2c313bad70c841b4409a5dc37))
* **tools:** degrade codex-pool lock contention ([1d99734](https://github.com/lubshad/oc-codex-multi-auth/commit/1d997344f8178f4406c4d34a29b07d25e9a1ddcd))
* **tools:** run mutating account tools inside the storage transaction ([37ddf89](https://github.com/lubshad/oc-codex-multi-auth/commit/37ddf89d394d82230269bda70ec1bb20ad4fa6d1))
* **tui:** follow latest quota account ([36719f9](https://github.com/lubshad/oc-codex-multi-auth/commit/36719f95a2e1a3c2244c66d77df065285cbce5b7))
* **tui:** re-fetch usage instead of trusting an idle-stale shared quota snapshot ([1dfd67a](https://github.com/lubshad/oc-codex-multi-auth/commit/1dfd67a97397f89ab71505d907ca55ecb0543947))
* unpin cached plugin without clearing cache ([5ba83ff](https://github.com/lubshad/oc-codex-multi-auth/commit/5ba83ff4efae5d86e509888d52d94157e1276116))
* update config metadata for gpt-5.4 family and Codex context windows ([1dc22ab](https://github.com/lubshad/oc-codex-multi-auth/commit/1dc22ab1b4c319dcb6595c9b6bed5df3e0591d34))
* update config metadata for gpt-5.4 family and Codex context windows ([be7a969](https://github.com/lubshad/oc-codex-multi-auth/commit/be7a969bd61fce9ec477b0f07d5b91e63b35fb5e))
* **usage:** tolerate a malformed usage document instead of throwing ([c175f0b](https://github.com/lubshad/oc-codex-multi-auth/commit/c175f0bbdf694bb9d290d58baa465160e63d03c3))
* **warm:** send a JSON content type on the warm ping ([#210](https://github.com/lubshad/oc-codex-multi-auth/issues/210)) ([9ba3d05](https://github.com/lubshad/oc-codex-multi-auth/commit/9ba3d056f122713f943f44cdf8975193d8e37bf8))
* **warm:** send a JSON content type on the warm ping ([#210](https://github.com/lubshad/oc-codex-multi-auth/issues/210)) ([0f7cf32](https://github.com/lubshad/oc-codex-multi-auth/commit/0f7cf32d144313df0079905cdb85ba7f9892a99e))


### Changed

* **auth:** extract shared login runner ([3111667](https://github.com/lubshad/oc-codex-multi-auth/commit/31116677c17be91f6fcb735a2c3e5ce1d6b62a70))
* **dead-code:** remove unused auth-rate-limit + audit modules ([#109](https://github.com/lubshad/oc-codex-multi-auth/issues/109)) ([fbd2efc](https://github.com/lubshad/oc-codex-multi-auth/commit/fbd2efcda8b7a8184ddbe1ad651e2f133895131d))
* harden runtime error contracts ([b6ae45f](https://github.com/lubshad/oc-codex-multi-auth/commit/b6ae45fe492830af084686d844d567f5eca03275))
* harden runtime error handling and contract parity ([9d6295c](https://github.com/lubshad/oc-codex-multi-auth/commit/9d6295cf3170f1edc01a087c6c0386d31d5dcab2))
* **rc-1:** extract remaining 15 tools to lib/tools/* ([#121](https://github.com/lubshad/oc-codex-multi-auth/issues/121)) ([6c1598b](https://github.com/lubshad/oc-codex-multi-auth/commit/6c1598bf8453d1c753d1f5acf99c7618e82f4226))
* **rc-1:** hoist closure-free helpers to lib/runtime.ts and scaffold lib/tools/ ([#115](https://github.com/lubshad/oc-codex-multi-auth/issues/115)) ([69f85ba](https://github.com/lubshad/oc-codex-multi-auth/commit/69f85ba6ebf3048b676dc4b1eb5e3d9762508450))
* **rc-2:** split lib/storage.ts into purpose-specific modules under lib/storage/ ([#116](https://github.com/lubshad/oc-codex-multi-auth/issues/116)) ([ac2f4d8](https://github.com/lubshad/oc-codex-multi-auth/commit/ac2f4d88c9913897f3af80f3b4d9bff479b9f495))
* **rc-3:** typed error hierarchy in lib/errors.ts ([#120](https://github.com/lubshad/oc-codex-multi-auth/issues/120)) ([5a7eb75](https://github.com/lubshad/oc-codex-multi-auth/commit/5a7eb75ac8b81d18f3c892267b21b420525bb0f7))
* **rc-4:** consolidate recovery module layout ([#117](https://github.com/lubshad/oc-codex-multi-auth/issues/117)) ([c6bbb93](https://github.com/lubshad/oc-codex-multi-auth/commit/c6bbb9325f3ed58719ce25a0846df864aed54d73))
* **rc-6:** split runtime-contracts into oauth-constants + error-sentinels ([#118](https://github.com/lubshad/oc-codex-multi-auth/issues/118)) ([7ad3cfc](https://github.com/lubshad/oc-codex-multi-auth/commit/7ad3cfc619af40e385d7d1adcfd5ec5cee1cb2be))
* **rc-7:** split AccountManager into state/persistence/rotation/recovery services ([#122](https://github.com/lubshad/oc-codex-multi-auth/issues/122)) ([ef35af8](https://github.com/lubshad/oc-codex-multi-auth/commit/ef35af8c0d4a076db5f95f4d5bad29efe8a40a5f))
* **rc-8:** wire circuit-breaker half-open gate into request pipeline ([#123](https://github.com/lubshad/oc-codex-multi-auth/issues/123)) ([158c764](https://github.com/lubshad/oc-codex-multi-auth/commit/158c764368f3420c6bba68a93d86434eebf5b188))
* **rc-9:** zod-validate remaining process boundaries ([#119](https://github.com/lubshad/oc-codex-multi-auth/issues/119)) ([a41cb1b](https://github.com/lubshad/oc-codex-multi-auth/commit/a41cb1b8ca104de964e636ffad76f8566bd30bdf))
* **routing:** drop the getAccountsSnapshot capability guards ([a92edce](https://github.com/lubshad/oc-codex-multi-auth/commit/a92edce5beeab846b1c6ed9ab665461be8f0046a))
* unify login finalization across auth flows ([c372ccb](https://github.com/lubshad/oc-codex-multi-auth/commit/c372ccb749f427e5c68752a03d8fd6edbdba84cb))
* unify login finalization across auth flows ([5a6d594](https://github.com/lubshad/oc-codex-multi-auth/commit/5a6d5946d2f0a310713ad92013b3f29b9604c0ca))


### Removed

* undo accidental pr-70 push to main ([155eba0](https://github.com/lubshad/oc-codex-multi-auth/commit/155eba04b1aa5974c8fc7b5ac5f683b903ba1c02))
* **usage:** keep quota reset times on the 24-hour clock ([abafd9f](https://github.com/lubshad/oc-codex-multi-auth/commit/abafd9f92bc35fd897a9239f35db0945250ba05a))


### Documentation

* add current documentation structure map ([911bdd4](https://github.com/lubshad/oc-codex-multi-auth/commit/911bdd4b5af9850425ce9e8a71eb30e79b67b44f))
* align current structure guidance ([962048a](https://github.com/lubshad/oc-codex-multi-auth/commit/962048a0aea257ee96a3de6f37082402a1767707))
* align template count wording with review guidance ([49cc579](https://github.com/lubshad/oc-codex-multi-auth/commit/49cc5792348b1952d5cb9c1c4af51978c9828784))
* **audit:** refresh verification evidence ([a1926e9](https://github.com/lubshad/oc-codex-multi-auth/commit/a1926e955b98daf8149cc43c4c24afe3069cf96c))
* **audit:** regenerate current audit corpus ([ca4eeb7](https://github.com/lubshad/oc-codex-multi-auth/commit/ca4eeb705dbd7712794371d5014b43da75786078))
* **audits:** full-repository audit v1 for v6.0.0 (SHA d92a8eed) ([#107](https://github.com/lubshad/oc-codex-multi-auth/issues/107)) ([da308d4](https://github.com/lubshad/oc-codex-multi-auth/commit/da308d4275ce3a3d7a8d5dfc4c3099408ed47010))
* **batch-b:** README badges + CONTRIBUTING local-dev + Keep-a-Changelog + ARCHITECTURE v6 refresh ([#124](https://github.com/lubshad/oc-codex-multi-auth/issues/124)) ([921d095](https://github.com/lubshad/oc-codex-multi-auth/commit/921d095a46b44f10eb746c83fef07cfec03c59ed))
* **changelog:** 6.10.0 ([a2e53f7](https://github.com/lubshad/oc-codex-multi-auth/commit/a2e53f7cf17cc48d1e06e08c6d323de9f06f38a8))
* **changelog:** 6.10.1 ([7e2396b](https://github.com/lubshad/oc-codex-multi-auth/commit/7e2396bf7160cf6c69092d84f2151c23b3f3cd65))
* **changelog:** 6.11.0 ([3bc051e](https://github.com/lubshad/oc-codex-multi-auth/commit/3bc051eb5beb0db3d5d144a8fd56084936e9fbb3))
* **changelog:** 6.11.1 ([7223564](https://github.com/lubshad/oc-codex-multi-auth/commit/7223564f217fa4130b46530d45689cf06394f4b0))
* **changelog:** 6.11.2 ([77265ab](https://github.com/lubshad/oc-codex-multi-auth/commit/77265ab1f3791fc092e7ed0a1c3bc39ec84c0190))
* **changelog:** 6.11.3 ([e5e8cbe](https://github.com/lubshad/oc-codex-multi-auth/commit/e5e8cbec40204ef625860dce360cf914e61172f8))
* **changelog:** 6.11.4 ([73d59ed](https://github.com/lubshad/oc-codex-multi-auth/commit/73d59edf95b6b796c53d5c35d4b0c6b7f641b44c))
* **changelog:** 6.12.1 ([5cc78be](https://github.com/lubshad/oc-codex-multi-auth/commit/5cc78beb84e6dc42f2ad13bf2d0eabcefc350687))
* **changelog:** 6.13.0 ([17352da](https://github.com/lubshad/oc-codex-multi-auth/commit/17352da8f67532a748fb61554990c2fbd9f756a8))
* **changelog:** 6.14.0 ([2b35048](https://github.com/lubshad/oc-codex-multi-auth/commit/2b35048bf472ae453bc176a1a12cddf19049505e))
* **changelog:** 6.14.1 ([d772d67](https://github.com/lubshad/oc-codex-multi-auth/commit/d772d67d5b7b97d8844c1d035da20bb93027fe6b))
* **changelog:** 6.14.2 ([13af1ee](https://github.com/lubshad/oc-codex-multi-auth/commit/13af1ee48212d45ae652abc14507f6787c796d08))
* **changelog:** 6.14.3 ([b586eef](https://github.com/lubshad/oc-codex-multi-auth/commit/b586eefd587b505ad37d09d722cf43fd1b2bffd1))
* **changelog:** 6.14.4 ([b5c3a15](https://github.com/lubshad/oc-codex-multi-auth/commit/b5c3a153536209e67def558e9e6d407318999560))
* **changelog:** 6.15.0 ([cd548ad](https://github.com/lubshad/oc-codex-multi-auth/commit/cd548ad45d956e8b856cebc5fe1dd7df0fb29c36))
* **changelog:** 6.9.0 ([6f21201](https://github.com/lubshad/oc-codex-multi-auth/commit/6f21201b8f822e0593b306abba5cb7fc4c250c5d))
* **changelog:** 6.9.1 ([466cdd8](https://github.com/lubshad/oc-codex-multi-auth/commit/466cdd819ed04f92dd73c90b332261baddd0a898))
* **changelog:** add 6.7.0 release notes ([8cde130](https://github.com/lubshad/oc-codex-multi-auth/commit/8cde1309692b0d3e3fa049350c2b01ae1bcf9f60))
* **changelog:** correct the [#230](https://github.com/lubshad/oc-codex-multi-auth/issues/230) reporter attribution ([826f4bc](https://github.com/lubshad/oc-codex-multi-auth/commit/826f4bc53b14de74e2235788c79905f8421da460))
* **changelog:** document the bug-sweep fixes ([cdceeee](https://github.com/lubshad/oc-codex-multi-auth/commit/cdceeee36acca7572172e6f590c0032db2c4e613))
* **changelog:** scope 5.4.0 notes to identity branch changes ([cda37b1](https://github.com/lubshad/oc-codex-multi-auth/commit/cda37b1f443f2d827e161eb977e0945c1d17576e))
* clarify concurrent mutation locking ([a53e76a](https://github.com/lubshad/oc-codex-multi-auth/commit/a53e76ac223b75858a4807cd00e43bda210d5ee3))
* clarify loopback gateway policy ([5e8e471](https://github.com/lubshad/oc-codex-multi-auth/commit/5e8e4716f5e6af067d0d2fb5a95a39b10a348680))
* clarify max output token passthrough safety ([cd6cbc7](https://github.com/lubshad/oc-codex-multi-auth/commit/cd6cbc71e5bbdb7cc36dc10210aebee751ddca68))
* clarify modern model preset catalog ([f88fcc1](https://github.com/lubshad/oc-codex-multi-auth/commit/f88fcc10f32c32a2dc8e288e279ae499c7a637fb))
* clarify OAuth gateway trust ([49d3748](https://github.com/lubshad/oc-codex-multi-auth/commit/49d37483a71773af8a1f3b578e3fa266743f0058))
* clarify shipped template count excludes optional models ([f7129ce](https://github.com/lubshad/oc-codex-multi-auth/commit/f7129ce8ff6cc3500f900f6d39f893e2ea54bce7))
* close audit gaps for catalog, envs, and install UX ([f4404c4](https://github.com/lubshad/oc-codex-multi-auth/commit/f4404c4c099d526eaf2af4c50002bafffcdfa4b7))
* correct install docs for the plugin-only default ([a5cbec7](https://github.com/lubshad/oc-codex-multi-auth/commit/a5cbec78e7ed020ef654164e347de30ca1da92b6))
* correct stale and incomplete code comments ([33f9d67](https://github.com/lubshad/oc-codex-multi-auth/commit/33f9d67acebfe379ab776aeab5c14added717e78))
* document concurrent storage signals ([3fd5878](https://github.com/lubshad/oc-codex-multi-auth/commit/3fd58788d4e75a1d39dbd39e6419ddc6bf508cb2))
* document multiprocess refresh safety ([6f8f8f6](https://github.com/lubshad/oc-codex-multi-auth/commit/6f8f8f6767097918dfb343cf5743d33fb34706dd))
* document OPENAI_BASE_URL ([dd27d9a](https://github.com/lubshad/oc-codex-multi-auth/commit/dd27d9a4f8fc9127475b7e56f569ac77b6b7ad65))
* document remaining advanced surfaces and tool args ([6e9b6bb](https://github.com/lubshad/oc-codex-multi-auth/commit/6e9b6bb9923bbddf7505183a2936536722f76632))
* drop the empty Unreleased changelog heading ([0bbcd71](https://github.com/lubshad/oc-codex-multi-auth/commit/0bbcd715b611e28e682ee8d8a4e7b9ad44b616cb))
* improve core API doc coverage for review confidence ([0190f36](https://github.com/lubshad/oc-codex-multi-auth/commit/0190f36c4070385dd33f8d11955ba9341f506696))
* match codex multi auth readme format ([4b129f9](https://github.com/lubshad/oc-codex-multi-auth/commit/4b129f9f443b5162215f9ed8dcc23c585ec8ff1b))
* **notifications:** align the quota notification docs with the code ([3eaa47b](https://github.com/lubshad/oc-codex-multi-auth/commit/3eaa47b316e543b1348845434f7e459c3a75d70a))
* refresh codex-first rebrand and cutover notes ([965eb4a](https://github.com/lubshad/oc-codex-multi-auth/commit/965eb4a1541c5b92004bd24be96cf19d5f4c283d))
* refresh config guidance for current main structure ([8cd8574](https://github.com/lubshad/oc-codex-multi-auth/commit/8cd85741faf65df9a7857da2de912babbd37f4dd))
* remove historical audit corpus and realign docs with current architecture ([fb67965](https://github.com/lubshad/oc-codex-multi-auth/commit/fb67965906c6f5198e179c1dd4a46cff94841f3e))
* remove legacy package name from public docs ([8b1fab5](https://github.com/lubshad/oc-codex-multi-auth/commit/8b1fab5d848589049f367b24c228c7a7c933c0b4))
* restore the Unreleased heading to the top of the changelog ([e7a6df5](https://github.com/lubshad/oc-codex-multi-auth/commit/e7a6df594b6ff694839173821afe6d55bb8ffa48))
* rewrite guides for v6.9.1 architecture ([618e297](https://github.com/lubshad/oc-codex-multi-auth/commit/618e297de2327a473449367520ac71f09b0ddff7))
* rewrite guides for v6.9.1 architecture ([ef93e68](https://github.com/lubshad/oc-codex-multi-auth/commit/ef93e68584476169ce1158a451022f803d1b7c5a))
* sharpen opencode plugin architecture ([2464c5c](https://github.com/lubshad/oc-codex-multi-auth/commit/2464c5cfc94e2fa859a25a3fc75316e737bb6fde))
* **storage:** describe the actual two-phase refresh flow ([a2cdf89](https://github.com/lubshad/oc-codex-multi-auth/commit/a2cdf899662b7b4d937c9b0ee3a0b877e69e62f9))
* track coverage follow-up ([1667c0a](https://github.com/lubshad/oc-codex-multi-auth/commit/1667c0a40b63c3daeca74ea554bb0a6ac0d575a3))

## [6.15.0] - 2026-08-31

### Added
- **Desktop quota notifications for macOS.** Set `quotaNotifications.enabled: true` (or `CODEX_AUTH_QUOTA_NOTIFICATIONS=1`) and the plugin polls every enabled account on an interval and alerts through Notification Center when the pool's 5-hour or weekly quota crosses 25%, 10%, or 0%. Each line reports the account with the most headroom in that window together with that same account's reset, so the percentage and the reset always describe one real account. A window the plan has switched off is skipped rather than counted as a full quota. Account identities are never shown or persisted. `notifyEveryCheck: true` delivers the same summary after every successful poll instead of only on a crossing, `thresholds: []` turns threshold alerts off, and `intervalMs` defaults to 30 minutes with a 30-second floor. Delivery state is shared across processes working in the same account scope, so concurrent instances produce one routine alert per interval. Delivery uses the built-in `osascript`, with no extra dependency, and the feature is off by default and unavailable on Windows and Linux. (#239)

### Fixed
- **An unattended quota refresh could kill an account.** The monitor refreshes any account whose access token is near expiry, and a refresh rotates a single-use refresh token durably to disk. The in-process `AccountManager` cache kept the old token and its debounced save overwrote the rotation, after which the next refresh returned `refresh_token_reused` and the account stayed dead until a fresh login. The monitor now drops that cache at the moment a rotation persists, before the account's usage call, rather than after the whole check. The 500 ms save debounce is far shorter than a check over several accounts, so invalidating at the end of the check left the window open. (#239, #240)
- **A malformed usage document threw instead of reading as empty.** `fetchCodexUsage` casts `response.json()` straight to its declared type, so a `200` carrying the body `null`, a non-array `additional_rate_limits`, or a non-string `limit_name` reached dereferences that assumed the declared shape. The gateway in front of `/wham/usage` is user-configurable through `OPENAI_BASE_URL`, so those are reachable responses. A non-object payload now reads as an empty document and renders as `unavailable`; every field nested inside the payload was already null-tolerant.
- **A disabled quota window was scored as a full quota.** A window the plan has switched off still reports `used_percent: 0`, so without the `hasUsageWindow` guard it counted as 100% remaining and masked every other account's low quota, and the alert never fired for that user. (#239)
- **The alert could describe a quota no account had.** The aggregate paired the highest remaining percentage with the earliest reset across different accounts, so a pool could be told it had 60% left and would recover at a time that restores nothing. (#239)
- **Concurrent processes dropped whole quota checks.** Notification delivery was awaited inside the cross-process state lease, whose retry budget is roughly 660 ms against a 10-second delivery timeout, so a second process exhausted its budget and abandoned a check whose network fetches it had already paid for. Delivery now claims the slot under the lease, delivers outside it, and releases the claim if delivery failed. (#239)
- **The quota monitor outlived shutdown.** Its only teardown was the `server.instance.disposed` event, so the timer survived `SIGINT`/`SIGTERM` and any host that does not emit it. It now registers with the shared shutdown drain, and it stops polling entirely once it observes the feature switched off, an unsupported platform, or a configuration that can never deliver. (#239, #240)
- **`quotaNotifications.thresholds: []` was ignored.** An explicitly empty list was replaced by the `[25, 10, 0]` default, so there was no configuration that ran `notifyEveryCheck` on its own. The default now applies only when the key is absent. (#239)
- **Quota state could leak between projects.** The in-memory threshold state was not keyed by state path, and the path was resolved after the network fetches rather than beside the account load that produced the aggregate, so switching projects mid-check could write one project's thresholds into another project's file. (#239, #240)

### Changed
- Quota reset times stay on the 24-hour clock. A change to 12-hour formatting would have altered every quota display in the product, left the TUI status line rendering `22:30` where `codex-limits` rendered `10:30 PM`, and forced a 12-hour clock on locales that do not use one. (#239)

### Internal
- `test/quota-notifications-fetch.test.ts` covers the monitor's default fetch path, which previously had none because every test injected a fake. That gap is how the token-cache ordering defect above reached `main`. (#240)
- `quotaNotifications` is documented in `docs/development/CONFIG_FIELDS.md`, the notification state file in `AGENTS.md`, and the three new modules in `lib/AGENTS.md`, which the repo treats as a documented contract. (#239)

## [6.14.4] - 2026-08-30

### Fixed
- **Manually pasted authorization input reached the token exchange mangled, or not at all.** The `Codex OAuth (Manual URL Paste)` flow is the escape hatch when the browser callback cannot be captured, and its parser derived every result from `new URL()`, which normalises rather than preserves. The `code#state` shorthand round-tripped the code through `URL.pathname`: a space became `%20`, a backslash became a forward slash, a `..` segment was collapsed away, a leading `//` was absorbed as a host and left no code at all, and everything after a `?` was dropped. Its state came from `URL.hash`, which is percent-encoded, so a state carrying any character the URL serializer escapes could never equal the state generated for that login attempt. The URL branch returned unconditionally, so an opaque code that `new URL()` accepts because it contains a colon (`ac:1a2b3c`) was reported as a callback with no code, and the user was told to paste a URL they do not have. Any raw value carrying a `state=` pair was reinterpreted as a query string and its code discarded, and a bare `#value` fragment was filed under state, throwing away the code it held. Each of these posted a wrong code, or no code, to the token endpoint, where the only feedback is an opaque `invalid_grant`. The shorthand and raw paths now split on the pasted bytes. A value is read as a URL only when it carried a code or state or opens with `scheme://`, and as a query only when it opens with a parameter name. A callback pasted without its scheme (`127.0.0.1:1455/auth/callback?code=...`) is now read as a URL instead of losing its code. (#238)
- **An unexpected `URL` rejection could escape the interactive login prompt.** The parser rethrew anything that was not a `TypeError`, and `instanceof` is realm-sensitive, so a subclassed or cross-realm rejection propagated out of the prompt's `validate()` and `callback()` instead of degrading to "treat the value as a raw code". Every rejection now falls back to the raw path, which is what the preceding bare `catch` did. (#238)
- **A bare authorization code and a callback missing its state now get different instructions.** Both previously produced "Missing OAuth state. Paste the full callback URL including both code and state parameters", which does not tell someone who pasted only the code what they got wrong. The state requirement itself is unchanged: state is what binds a pasted callback to the login attempt that generated it. (#238)

### Internal
- The parser's result type collapsed from four structurally identical union members to two, and the orphaned `ParsedAuthInput` interface, whose last import the same change removed, was deleted from `lib/types.ts`. (#238)
- `test/index.test.ts` no longer hand-writes a stand-in for `parseAuthorizationInput`. A `vi.mock` factory is not type-checked against the real module, so the stand-in still returned the pre-change shape with no `source` field, and the manual-flow tests would have passed vacuously once `index.ts` began branching on it. The mock now delegates to the real parser, and the deleted query-over-fragment precedence test is restored. (#238)

## [6.14.3] - 2026-08-27

### Fixed
- **An implausible quota-reset header took an account out of rotation permanently.** The `x-codex-*` reset headers were parsed with no upper bound: `-reset-after-seconds` was multiplied out and added to the clock as-is, and `-reset-at` was accepted verbatim as an epoch stamp or an ISO date. A garbled value therefore resolved to an arbitrary point in the future — a measured `-reset-after-seconds: 4000000000` produced a reset 127 years out, and `-reset-at: 9999-12-31T00:00:00Z` one 2,912,203 days out. That is not merely a long backoff: the value is written into the persisted `rateLimitResetTimes` map through a deliberately monotonic writer, and expiry only ever drops resets that are already in the past, so nothing in the product could shorten it again. One malformed header — from the backend, an intermediary, or a configured `OPENAI_BASE_URL` gateway — removed the account from rotation until the user edited the state file by hand. The same value also reached the retry-after delay derived from those headers. Reset times further out than any real Codex window are now rejected rather than clamped: an implausible header says nothing about when the account actually recovers, so recording no reset at all (and letting the next request rediscover the truth) is safer than recording a month-long block on the strength of a garbled number. Plausible values are unaffected — a 5h window, a full 7d weekly window, and a reset exactly on the horizon are all still honored.
- **A backwards clock jump turned account health recovery into a penalty.** Passive recovery scaled the elapsed time since an account's last health update, without clamping it at zero. `lastUpdated` is stamped from the local clock, so an NTP correction or a resumed VM makes that interval negative and the recovery term subtracts instead of adding, driving the score arbitrarily below its floor (a measured -17440 against a minimum of 0) and leaving the account ranked last in selection long after the clock settled.
- **`NaN` and `Infinity` reached users verbatim in wait-time messages.** A non-finite duration rendered as the literal strings `NaNs` and `Infinitym NaNs` in toasts, status lines and log warnings. Non-finite input now reads as zero. The same formatter also had no unit above minutes, so a weekly quota block and process uptime both printed as a five-figure minute count (`10080m 0s`); hours and days are now split out.
- **Stale quota headers on an entitlement error blocked healthy accounts.** A response refused for a subscription entitlement problem can still carry the account's last-known `x-codex-*` quota snapshot. Those headers were consumed unconditionally, so an entitlement failure recorded a quota block against an account that had quota left. Quota headers are now believed only on a response the backend actually served, or one it refused with a confirmed usage limit — HTTP 429, including a 404 remapped to one. Entitlement failures, auth failures, 5xx, and upstream overloads dressed up as a 429 are all ignored for this purpose. (#237)

### Internal
- The decision about whether a response's quota headers are authoritative is made once, in the error classifier, and reported to the caller as `quotaHeadersAuthoritative`. It previously lived at a single call site, which left the two other consumers of the same headers on the old behavior: the retry-after parser still read the exhausted-window reset uncapped — in two separate places — and the TUI quota snapshot was still written from headers the router had just discarded, so the status line could report "0% left" for an account rotation considered healthy. The classifier derives the flag from the same overload verdict the caller branches on, so the durable block and the retry delay can no longer disagree. (#237)
- The short 429 retry no longer replays a request on an account whose quota window it has just blocked. That block is monotonic, so a retry that happened to succeed could not walk it back, leaving the account serving traffic while rotation still considered it blocked. (#237)
- The rotation selectors' contracts are documented accurately. `getCurrentOrNextForFamilySticky` claimed to match "the other selectors' contract" in returning null when no account is available; `getCurrentOrNextForFamilyHybrid` deliberately does the opposite, falling back to the least-recently-used account rather than hard-failing — which is what keeps a single-account pool usable when its only account is cooling down. Both now state the difference, and the hybrid selector documents that a returned account is not a promise that it is selectable.

## [6.14.2] - 2026-08-25

### Fixed
- **Pool-exhaustion diagnostics could contradict themselves, and undercounted Business seats.** The identity these counters are keyed on was not stable for the lifetime of a request: it was derived in part from the refresh token, which is single-use and rotates on exchange, and a rotation propagates to every sibling account that shared the old grant. An account fetched earlier in the traversal therefore stopped matching its own recorded identity as soon as any sibling refreshed, and the strict-pool message could report "the model was unsupported on 2 of 2 attempted pooled account(s)" immediately followed by "1 pooled account(s) were never attempted". The key is now built from identity that does not rotate, so two legacy Business seats sharing one workspace id still count as two accounts while a mid-request token rotation leaves the counts alone. Accounts that were never attempted are also counted against the accounts still present rather than by subtracting attempts from a total, so an account removed mid-request no longer hides a live account that never got a turn. (#236)

### Changed
- **Terminal routing diagnostics no longer degrade silently when account state is unreadable.** The strict-pool and exhaustion messages guarded their account lookup and fell back to an empty account list, which made every configured pool entry look like it matched no known account — turning a message that should explain an exhausted pool into one that blames the operator's configuration. The lookup is now unconditional. (#236)

## [6.14.1] - 2026-08-25

### Fixed
- **A rate-limited strict model pool answered `503` with no retry hint instead of `429`.** The pool wait-time lookup resolved its members by comparing configured pool entries against an account's raw account id, while routing resolves them through the member-scoped seat identity that `codex-pool` actually writes. For any pool whose accounts have a resolvable member id the two never matched, so the lookup saw an empty pool, reported no wait at all, and the request failed with a `503` telling the operator to check `codex-health` rather than a `429` carrying `Try again in <time>` — costing clients both the retry-after signal and the correct status class for backoff. Pools configured with legacy workspace-wide entries were unaffected, which is why it went unnoticed. (#235)
- **Pool-exhaustion diagnostics could describe the wrong accounts, or a previous request.** The counts behind these messages were keyed on rotation index, which is reassigned when an account is removed mid-request, so a count recorded before a removal referred to a different account afterwards. Pool size was read off the number of configured entries, which is a different quantity again: one legacy workspace-wide entry can resolve to several Business seats, and two entries can resolve to one seat. The strict-pool message now reports configured entries and resolved accounts separately, names entries that match no known account instead of folding them into an "unavailable" total, and distinguishes accounts that were never attempted from ones that were tried and failed. The general exhaustion message no longer inherits an earlier request's "model not supported" verdict — that state is plugin-scoped, so a request that never reached an account could report a rejection on "0 of 0 attempted account(s)" — and it again states how many accounts are configured. (#234)

## [6.14.0] - 2026-08-21

### Added
- **Trusted OpenAI-compatible gateways for ChatGPT OAuth inference.** `OPENAI_BASE_URL` is now honored for ChatGPT OAuth requests, but only when `CODEX_AUTH_ALLOW_OPENAI_BASE_URL=1` explicitly opts in — a pre-existing `OPENAI_BASE_URL` set for an unrelated tool cannot silently capture ChatGPT OAuth credentials. The override is fail-closed: remote gateways require HTTPS; cleartext HTTP is accepted only for *literal* loopback addresses — any address in `127.0.0.0/8`, `::1`, and their IPv4-mapped spellings, which WHATWG serializes in hex (`::ffff:127.0.0.2` becomes `::ffff:7f00:2`) — and never for hostnames such as `localhost`, because a host file or resolver can point those at a remote peer and leak the access token in cleartext; embedded credentials, query strings and fragments are rejected; and redirects are not followed, so a `3xx` from the gateway yields a `502` naming the redirect origin rather than replaying the OAuth token to an endpoint the operator never configured. A rejected value fails the auth loader with a `[oc-codex-multi-auth]`-prefixed reason and an error toast instead of silently falling back to the default endpoint, and the value itself is never echoed — it can carry a token in its query string. A one-time warning records the gateway origin. (#232)

### Fixed
- **Two OpenCode processes sharing one account file could burn each other's refresh tokens.** OpenAI refresh tokens are single-use and rotate on exchange, so when two processes exchanged the same token one of them received `refresh_token_reused` and that account was dead until the user logged in again. Refreshes now run under a cross-process lease that serializes the exchange itself, with an authoritative reload before it and a durable commit after it. A process that finds a rotation another process already committed adopts it instead of spending a second token. The guarantee is same-host and local-filesystem: cross-host or network-filesystem coordination still needs an external coordinator, and a process killed between the provider accepting a token and the replacement being committed still requires reauthentication. (#233)
- **Unrelated storage writes no longer queue behind a network round trip.** The refresh lease is deliberately separate from the storage transaction lease, so `codex-note`, `codex-tag`, account enable/disable, rotation stamps and TUI quota writes never wait on a multi-second OAuth exchange. Holding one lease across both would have turned ordinary contention into user-visible `StorageTransactionContentionError` failures. The storage acquisition budget was also widened from roughly half a second to roughly five, and the lock directory is created up front — `proper-lockfile` creates its lockfile with a non-recursive `mkdir`, so the first mutation on a fresh per-project profile previously failed with a bare `ENOENT`. (#233)
- **A consumed refresh token could be written back over a newer one, in four separate paths.** The `codex-health` merge, the startup email-hydration merge, refresh-target resolution, and flagged-account cleanup each restored or misrouted a credential that another process had already rotated — every one of them costing the user a re-login. Credential writes are now gated on the `tokenRotatedAt` rotation stamp so a stale snapshot can never overwrite a newer commit; hydration updates are keyed by stable workspace identity rather than by the refresh token, which had let a sibling record in a *different* organization receive another workspace's access token; refresh-target resolution never widens a seat key to a workspace-level key and refuses an ambiguous `organizationId:` match rather than exchanging against another member's credentials; and flagged-account cleanup deletes only records it positively restored, instead of dropping one whose token a sibling had rotated in place. (#233)
- **A live OAuth access token was written to `flagged-accounts.json`.** Quarantined records are credential-light by design and `normalizeFlaggedStorage` discards those fields on read, so the token was persisted only to be thrown away — while sitting on disk in the meantime. The flagged refresh path no longer writes it. The rotation stamp *is* now persisted there, so rotation ordering survives a round trip through that file. (#233)
- **A lost refresh lease no longer lets the exchange proceed.** If the lease heartbeat is starved past its stale window another process can reclaim it, and continuing would put two processes on the same single-use token. The lease is now asserted valid immediately before the token is spent, and the resulting error is classified retryable so the caller retries with a fresh lease. (#233)

### Internal
- The refresh lease and the storage transaction lease take their locks on *distinct* target paths. `proper-lockfile` keys its in-process registry by the target path rather than by `lockfilePath`, so nesting two leases on one target made the inner release delete the outer's registry entry; the outer release then failed with `ENOTACQUIRED` and leaked its lockfile until it went stale, stalling every other process on the host for the full stale window. (#233)
- `persistRefreshResult` was removed. Its concurrent-rotation guard is subsumed by the coordinator, which owns the reload, exchange and commit, and the function was reachable only from its own test. (#233)
- `test/index.test.ts` stubs the refresh lease. `getStoragePath()` is mocked there to a path that does not exist, so acquiring a real cross-process lease created a directory outside the test sandbox on every run. (#233)

## [6.13.0] - 2026-08-18

### Added
- **Business workspace seats are now first-class identities.** Every OAuth access token issued for a ChatGPT Business workspace carries a per-member `chatgpt_account_user_id` alongside the workspace-wide `chatgpt_account_id`. That member id is now extracted, persisted as `accountUserId`, and participates in account identity, deduplication, model-pool routing, quota accounting and diagnostics. Records written by earlier releases are backfilled from their stored access token wherever it still decodes; a record whose token has expired or is opaque keeps no member id and behaves exactly as it did before. (#230, #231)
- **`codex-doctor` and `codex-health` report colliding Business credentials.** A new `business-member-credential-conflict` finding, and a `businessMemberConflictSlots` field in `codex-health --json`, flag account slots whose tokens resolve to the same member of the same workspace — records that cannot consume separate quotas and must be re-authenticated independently. Distinct workspace variants of a single OAuth grant, separated by `organizationId`, are legitimate and are not reported. (#231)

### Fixed
- **Logging in as a second member of a Business workspace overwrote the first member's credential instead of adding a separate account.** Every affected record ended up carrying the last logged-in user's email, access token and refresh token, so one seat was billed for the whole workspace and the displaced member's single-use refresh token was lost. Business members share one `chatgpt_account_id`, and account identity keyed on that value alone, so every member of a workspace resolved to the same stored record — the collision was silent because the shared id is a legitimate value, not a missing one. Identity now keys on the workspace *and* the token's `chatgpt_account_user_id`, so each seat occupies its own slot, keeps its own refresh token, and is metered against its own quota. Reported by @proamo, who traced it to the host auth fallback; fixed by @lubshad. (#230, #231)
- **A model pool could not target an individual Business seat.** `codex-pool` stored the workspace-wide account id, which matches every member of that workspace, so a pool the operator scoped to one seat silently routed to all of them. Pool entries are now member-scoped `seat:` keys. Legacy workspace-wide entries deliberately keep matching every seat in their workspace, and are migrated to seat keys on the next `codex-pool add`/`remove` — except while project-scoped account storage is active, since `modelAccountPools` lives in the global config and expanding it against one project's visible seats would rewrite routing that other projects depend on. (#231)
- **A per-account circuit breaker could be inherited by an unrelated account.** The breaker key embedded the positional account index, which `removeAccount` reassigns to survivors. Unlike the health, token and rate-limit trackers — all explicitly remapped after a removal — the breaker map is not, so whichever account shifted into a removed slot inherited that slot's OPEN breaker and was short-circuited out of rotation until the breaker half-opened. The key is now derived from the account's stable workspace identity, which no removal can change. (#231)
- **Three advisories reached consumers through the production dependency tree**, and `npm run audit:ci` failed. Two were `hono` advisories (ReDoS in the CORS middleware, plus the same advisory reached transitively). `@openauthjs/openauth` was in the production tree for exactly one function — `generatePKCE`, called once from `createAuthorizationFlow` — and declared `hono` as a peer dependency, which was the only reason `hono` was a direct dependency and an override at all; nothing imports it. PKCE generation now lives in `lib/auth/auth.ts` with the wire format preserved exactly: 64 random bytes base64url-encoded to an 86-character verifier (RFC 7636 allows 43-128), challenge = `base64url(SHA-256(ASCII(verifier)))`, both encoders unpadded. The upstream helper also returned `method: "S256"`, which nothing read — the authorize request already hardcodes `code_challenge_method=S256`. Removing the package takes 11 packages out of the tree; the gate now reports 0. (#229)

### Internal
Review follow-ups on the seat-identity work, each a correctness defect in the new code rather than a change of intent (#231):
- The bare `accountUserId:` identity key is ranked **below** `organizationId:` and `accountId:`. One OAuth grant can back several workspace variants that all carry the same member id, and `findAccountIndexByIdentityKeys` returns the first key that matches, so at rank 2 the member key could resolve a single-use refresh-token write onto another workspace's record and leave that workspace holding a consumed token — a permanent auth failure.
- A memberless legacy record is merged into its workspace's seat record when that workspace has exactly one seat. Because `toAccountIdentityKey` now returns a `seat:` key, a legacy twin whose access token no longer decodes kept the older `organizationId:` key and stopped deduplicating against its own newer entry, surviving as a live rotation slot with a dead refresh token. With two or more seats the record is left alone: there is no way to tell which member it belongs to, and a wrong merge is worse than a duplicate.
- accountId-only fallback matching is retained when the fallback token carries a member id. The candidate set already excludes every record with a *different* member id, so matching on accountId cannot bind two seats together; refusing to match at all stranded records that predate member ids and pushed a duplicate slot for a credential that should have been hydrated in place.
- `accountUserId` is guarded the way `accountId` already was, in both `updateFromAuth` and the Codex CLI cache hydration. A manually- or org-pinned record must not be re-identified by a token minted for a different workspace, which would move its pool key, usage dedupe key and workspace identity key while the accountId pin appeared to hold. The CLI cache is keyed by *email*, so one person's personal account and their Business seat both resolve there.
- `getModelPoolAccountKey` falls back to the bearer token for the member id, matching every other member-id read in the codebase. Without the fallback, a record that bypassed the normalize backfill produced the bare workspace key, which then matched every seat in that workspace instead of the one the operator selected.
- The usage-quota dedupe key retains `organizationId`. Replacing workspace identity with seat identity collapsed one member's two workspaces into a single quota row, contradicting both the rule that key had always documented and the per-workspace binding added in #227; the seat id now disambiguates members *within* a workspace rather than replacing it. The test that pinned the collapse was inverted, with the genuine split and collapse cases pinned alongside it.
- `findConflictingBusinessMemberCredentials` no longer requires the grouped records to carry differing emails. #230 reports that every affected record ends up with the *last* login's email, so the differing-email gate stayed silent on exactly the corruption the scan exists to surface; distinct workspace variants, separated by `organizationId`, remain excluded.
- `updateModelAccountPool` reports the account ids that were actually on disk. `previousAccountIds` may be expanded from legacy workspace keys purely to compute the next set, which made `codex-pool` print a "previous" count, and emit a `previousConfiguredCount`, that the config file never contained.
- `accountUserId` is declared on `AccountMetadataV3Schema` and `AccountMetadataV1Schema`. Both interfaces persist it but zod strips undeclared keys, so any loader, import validator or migration routed through those schemas would have silently erased every seat identity and collapsed Business members back to the pre-fix behaviour.
- The test suite must be run against a built tree. `test/standalone-cli.test.ts` exercises the packaged CLI and requires `dist/`, so its 12 cases fail in a clean checkout until `npm run build` has run.

### Notes
- Model pools are **not** rewritten on upgrade. A legacy workspace-wide pool entry keeps matching every seat in its workspace until the next `codex-pool add`/`remove` migrates it, and that migration is skipped entirely while project-scoped account storage is active.
- Records already corrupted by #230 share one credential across several slots. They are reported by `codex-doctor` and `codex-health` but are deliberately **not** auto-collapsed: merging stored account records risks discarding a single-use refresh token, which would permanently break the account — the same reasoning applied to the duplicate rows left in place by #227. Remove the affected slots and re-login each member separately.

## [6.12.1] - 2026-08-12

### Fixed
- **A pool mutation that had already been written to disk could be reported as a fatal lock error.** `updateModelAccountPool` classified only lock *acquisition* failures, so the `release()` in its `finally` block could still reject and replace the mutation's return value — proper-lockfile rejects with `ERELEASED` when the lock was compromised mid-mutation, with `ENOTACQUIRED` when the entry was dropped, and `removeLock` propagates any non-`ENOENT` error straight from `rmdir`, which on Windows means a lock directory held open by an antivirus scanner or the search indexer surfaces as `EPERM`/`EBUSY`. The change landed, the tool said it had not. Release failures are now downgraded to a warning: the config is already durable at that point, and a leftover lock directory is reclaimed by `stale` within ten seconds. Reported by @AceRothstein71. (#224, #225)
- **A lock going stale mid-mutation killed the plugin process.** `lock()` was called without an `onCompromised` handler, so proper-lockfile's default `(err) => { throw err }` fired from inside an fs callback. Nothing in this process installs an `uncaughtException` handler, so a blocked event loop or another process reclaiming the entry took the whole plugin down instead of failing one call — the "afterwards it completely stalls the sub tasks" half of the report. The mutation is already in flight and cannot be rolled back, so a compromised lock is now recorded and the subsequent `ERELEASED` tolerated. (#224, #225)
- **Windows lock contention was not recognised as contention at all.** `ELOCKED` was the sole classifier, but proper-lockfile forwards raw fs errors from the lock directory's `mkdir`/`stat`/`rmdir` into its retry loop, so the error that finally escapes is not always `ELOCKED`. On Windows a lock directory held open by another process surfaces as `EPERM`/`EBUSY` rather than `EEXIST` — the same class `renameWithWindowsRetry` already tolerates one layer down — so the retry-guidance path was skipped entirely and users saw a hard error. Now classified with the existing `isWindowsLockError` predicate, guarded to win32 so a POSIX `EPERM` stays fatal. (#224, #228)
- **Concurrent `codex-pool` callers each paid the full retry budget, one after another.** Every mutation serializes behind an in-process queue, and each queued caller independently waited out roughly three seconds of retries against *the same* foreign holder — ten parallel calls blocked for ten times the budget and then all failed anyway. Once one call establishes that the lock is held externally, callers arriving within the next second use a short probe budget and degrade immediately; any successful acquisition restores the full budget, so an isolated collision still gets the patient path. (#224, #228)
- **The lock-contention response broke callers harder than the error it replaced.** The degraded JSON dropped `pool`, `dryRun`, `restartRequired`, `previousConfiguredCount` and `previousPoolMode`, so a consumer reading `pool.accounts` got a `TypeError` where it had previously seen a plain lock error. Nothing is mutated on that path, so the response now reports the pool still on disk, in the same shape as a successful mutation. It also emitted `error: "config_locked"` while the class was `ConfigLockContentionError` and the code `CODEX_CONFIG_LOCK_CONTENTION` — three spellings of one condition, none of which could be traced from tool output to the codebase or the logs. The wire format now carries `CODEX_CONFIG_LOCK_CONTENTION`. (#228)
- **Lock contention was modelled as a configuration error.** `ConfigLockContentionError` extended `ConfigError`, whose documented meaning is non-retryable bad user configuration — missing TTY, malformed CLI input, bad format flags. Any handler catching `ConfigError` to advise "fix your configuration" and stop retrying would have given exactly the wrong advice for a condition that resolves on its own. It now sits with the transient family and carries `retryable: true`. (#228)
- **The multi-worktree collision warning never actually throttled.** The throttle keyed on the foreign process's `pid` and `startedAt`, so a peer that restarted — or a series of short-lived sessions — minted a fresh identity on every probe and the log spam the throttle exists to suppress continued unabated. Those dead identities also evicted live ones from the bounded map, which could stop a genuinely recurring collision from ever being deduped. Now keyed on storage path and host. Separately, the check recorded the warning as delivered *before* the caller emitted it, so a logger that threw silently suppressed the next sixty seconds of collisions; the check and the record are now separate, with the record after the emit. (#228)
- **One ChatGPT login holding two workspace subscriptions collapsed onto a single quota pool.** With one email or Apple ID on, say, Team and Plus, `codex-limits` reported the same plan and percentage for every entry, `codex-switch` kept draining the same pool, and logging in under the other workspace appeared to overwrite every entry. The OAuth flow requests `id_token_add_organizations=true`, so the id_token lists every organization the login belongs to, and account selection persisted one entry per organization — but all of those entries shared the login's single OAuth token. The Codex backend meters quota by the `chatgpt-account-id` header and ignores organization ids, so an entry whose id was an organization id did not fail loudly; it silently fell back to the token's default subscription. Each workspace subscription is a distinct ChatGPT account with its own `chatgpt_account_id` claim, so separate tokens are what produce separate quotas. One login now persists exactly one account, bound to the token-scoped account id and labelled with the workspace that was selected; a second `opencode auth login` under the other workspace appends a separate account with its own token, while re-login under the same workspace still updates in place. Entries persisted by an earlier release keep their stored organization id but are now routed through the token's account id, so they reach a real pool instead of being silently mis-billed. Reported by @JackTheCoconut, who identified the root cause empirically against `/backend-api/wham/usage`. (#226, #227)

### Internal
- Duplicate account rows written by the previous one-entry-per-organization behaviour are deliberately left in place rather than auto-collapsed: merging stored account records risks discarding a single-use refresh token, which would permanently break the account. `docs/troubleshooting.md` documents the fresh-login path to a clean pool. (#227)
- Regression coverage for every fix above is pinned against the pre-fix build rather than merely asserting the fixed behaviour: each fix was reverted in isolation and the corresponding test confirmed to fail. Three tests that shipped with the original lock work did not discriminate — one passed unchanged against `main`, one asserted a hardcoded forward-slash path and failed on every Windows run, and the contention suite mocked `proper-lockfile` entirely, so nothing verified the single assumption the whole degrade path rests on. A real, unmocked foreign lock that outlasts the retry budget now covers it. (#228)
- The four tests that asserted one account entry per organization encoded the behaviour #226 corrects, so they were rewritten to the new contract rather than deleted, and the `persistAccountPool` deduplication they incidentally covered is now pinned directly. (#227)

## [6.12.0](https://github.com/ndycode/oc-codex-multi-auth/compare/v6.11.4...v6.12.0) (2026-08-08)


### Added

* add strict model account pool routing ([#222](https://github.com/ndycode/oc-codex-multi-auth/issues/222)) ([dcc1e59](https://github.com/ndycode/oc-codex-multi-auth/commit/dcc1e5979eea0b737e2b66ae4da182ac97507f0e))


### Fixed

* **release:** preserve unprefixed release tags ([3c5f71d](https://github.com/ndycode/oc-codex-multi-auth/commit/3c5f71d0a1b44ad28490b6519777ae5b21ee9627))

## [6.11.4] - 2026-08-04

### Fixed
- **An account with no weekly quota left was tried again on every prompt.** The request failed, the plugin rotated away, and the cycle repeated on the next prompt — the account was never remembered as spent. Two independent defects on the same path produced it. First, nothing consumed the quota headers the backend puts on *every* response: `x-codex-secondary-used-percent: 100` and its reset time were parsed only for the TUI status line, so the rotation layer could rediscover exhaustion only by failing another request, however recently the server had reported it. Second, when a `429` did arrive, `parseRetryAfterMs` collapsed the primary (5h) and secondary (weekly) reset-at headers with `Math.min`; the 5h reset is always the sooner one, so the persisted block expired with the wrong window and the spent account walked straight back into rotation. A body-supplied `retry-after` was worse still, being capped at five minutes. A shared parser for the `x-codex-{primary,secondary}-*` headers now backs both the request path and the TUI cache, so the two cannot drift on what "exhausted" means, and it accepts the `-reset-after-seconds` and ISO-8601 `-reset-at` forms the request path previously ignored. A window reporting `used-percent >= 100` now outranks every other signal, uncapped, and when several windows are spent the *latest* reset wins rather than the soonest. The block is applied on every response, success or failure, so an account that reports 0% left leaves rotation before the next prompt instead of after another failed request. Windows the plan has switched off (`window-minutes: 0`, which still report a used percent) are excluded, so they cannot block an account that has quota. Reported by @Grelo4ka. (#218, #219)
- **A short rate limit could shorten a week-long quota block.** The new block preserved the longer reset only within its own method, while `markRateLimitedWithReason` still assigned the same `rateLimitResetTimes` keys unconditionally — so a concurrent in-flight request landing an ordinary `429` with a 30-second retry-after overwrote a weekly block and made the account selectable again almost immediately, reproducing the original bug through a second door. Every writer now goes through one helper that keeps whichever block runs longer. A zero-length retry keeps its existing meaning of "the window has elapsed" and clears the keys explicitly; the previous code wrote `nowMs()` and let `clearExpiredRateLimits` drop it, which a monotonic write would otherwise defeat. Nothing in the request path passes zero — every server-derived delay is at least 1ms. (#219)
- **An ordinary throttle ignored two of the three reset formats.** When no window reported exhaustion, the fallback read only numeric `x-codex-*-reset-at` values, so a `429` carrying just `-reset-after-seconds` or an ISO stamp produced no candidate at all and fell back to the 60-second default — retrying before the reset the backend had actually given. It now reads the windows through the shared parser, skipping plan-disabled windows, and keeps `x-ratelimit-reset` as its own candidate. (#219)
- **A second opencode process could erase a weekly quota block.** `saveToDisk` blind-overwrote `rateLimitResetTimes` from the saving process's snapshot; rate-limit state was deliberately last-writer-wins, which is fine for a 5h window both processes rediscover within minutes and not fine for a block worth days. A process holding a stale snapshot saved over the block another had just recorded, and the exhausted account returned to rotation on the next reload. Saves now merge the on-disk resets, keeping the longer block per quota key, inside the storage transaction that already adopts newer credentials — running before it, because for records without workspace ids the refresh token participates in the identity key and adopting a rotated token first would change which disk record an account matches. Only blocks still in the future are adopted, so an expired entry another process has not pruned cannot be resurrected. Live in-memory state is deliberately untouched: unlike a consumed refresh token, a missing block is self-correcting, because the next response re-applies it from the quota headers. `codex-doctor --fix` is unaffected — it persists through its own transaction, so an explicit repair still clears blocks. (#219)

### Internal
- Regression coverage for every fix above is pinned against the pre-fix build rather than merely asserting the fixed behavior: each new assertion was run against the preceding commit and confirmed to fail there. The proactive gate is additionally covered end-to-end through the request path, which is where a wiring defect would hide — the first attempt at that test passed against a fully mocked `AccountManager` that had no `markQuotaExhausted` at all, with the resulting `TypeError` swallowed by the surrounding bookkeeping guard.
- A known limitation of the cross-process merge is pinned rather than papered over. A record carrying neither `organizationId` nor `accountId` is identified by its refresh token, so once another process rotates that token the two records share no identifier and the merge cannot match them. Verified empirically: the merge no-ops and the on-disk block is dropped — never mis-assigned to a different account — which is also why a positional fallback would be worse, since account order is not stable across processes. The same identity miss makes `adoptNewerDiskCredentials` overwrite a newly rotated single-use refresh token, which is the higher-severity failure that method exists to prevent; it is pre-existing, tracked separately, and asserted in the same test so both expectations flip together when storage carries a rotation-invariant account id. (#221)
- `ci.yml` gained a `workflow_dispatch` trigger, so the full gate can be started on demand from the Actions tab instead of by pushing a throwaway commit. The existing concurrency block needed no change: `cancel-in-progress` evaluates `github.event_name == 'pull_request'`, which is false for a manual run. (#220)

## [6.11.3] - 2026-08-02

### Fixed
- **A successful `opencode auth login` could add an account that was already disabled**, annotated `Re-auth required for missing OAuth scope(s): openid, profile, email, offline_access.` All four required scopes reported missing at once is the signature of scope metadata being *absent*, not denied — `getMissingRequiredOAuthScopes(undefined)` returns the entire required set. `initializeFromStorage` enforced the requirement asymmetrically: the stored-account path guarded on whether a scope had actually been recorded, but the two `authFallback` paths did not, so a scope-less host credential was read as "nothing was granted" and the account was pushed with `enabled: false`. A scope-less credential is normal rather than suspicious — `refreshAccessToken` deliberately omits `scope` when the token response does, because callers resolve it as `result.scope ?? existing.oauthScope`, and the host OpenAI backfill wrote its `auth.json` entry without one; either is enough to reach the fallback path with no scope. Enforcement now fires only when the granted scope is genuinely known, and the stored pool scope and the matching host credential are weighed together, since they describe one grant and a partial value on either side alone must not strand an account the other already vouches for. An explicit partial grant still disables and still annotates, unchanged. Accounts wrongly disabled by 6.11.2 are re-enabled and their generated note stripped, in memory and flushed to disk so the TUI, the CLI, and every other direct storage reader stop reporting stale state — re-login alone could not clear it, because the disabled state was persisted. An account disabled by hand, carrying no generated note, is left disabled. `scope` is also normalized at every boundary where it enters the system: a blank value previously survived `json.scope ?? SCOPE` and then overwrote known-good metadata through the `?? existing.oauthScope` chains, and the host backfill now carries the pool's scope across so a restored credential is not scope-less on the next load. Reported by @Grelo4ka. (#213, #214)
- **A record could carry two contradictory re-auth notes, the stale one first.** Note de-duplication matched on an exact sentence, so a record whose missing-scope set had changed since the note was written kept both — the 6.11.2 population claims all four scopes are missing, so the moment a real but partial scope became known the sets differed and both sentences stuck, telling the user to re-authenticate for scopes that were not in fact missing. The note is now replaced rather than appended to, preserving any operator-authored text ahead of it. (#215)
- **One transient storage read failure disabled the plugin until OpenCode was restarted.** `loader()` assigns its account-manager promise to the module-level cache *before* awaiting it, and nothing cleared that cache when the load rejected — `invalidateAccountManagerCache()` only runs on explicit account mutations. A rejected promise therefore stayed parked in the cache and every later request re-awaited the same rejection, so the failure outlived its own cause: a momentary Windows file lock or a partially-written save during a concurrent write was enough to break every subsequent request indefinitely. This repo already treats Windows lock contention as expected — `lib/storage.ts` retries renames for exactly that reason — so the trigger was realistic rather than theoretical. The cached promise is now evicted on rejection, guarded by identity so a concurrent reload's newer promise is not discarded. The failing call still rejects; only the next one gets a fresh attempt. (#216)

### Internal
- Regression coverage for the scope paths is pinned against the pre-fix build rather than merely asserting the fixed behavior. An initial integration test seeded the pool *with* a scope and asserted the account stayed enabled — which passed against the broken code too, since that path resolved the stored scope, found it complete, and left the account alone. The account in the report is *added*, which places it in the host-fallback branch, reached only when the credential matches nothing in the pool; the suite now drives that branch, and 6 of its 11 cases fail against the previous release while the other 5 are deliberate controls that must pass on both sides. (#214)
- `eslint.config.js` ignored `dist/` but not `coverage/`, so `eslint . --max-warnings=0` — what the pre-commit hook runs — failed on vitest's generated HTML report and its vendored JavaScript after any `npm run test:coverage`. `coverage/` is gitignored, so this was purely a lint-configuration gap. (#216)

## [6.11.2] - 2026-07-31

### Fixed
- **`warm` still failed every account with `HTTP 400`, and the cause was never the model.** The warm ping sent its JSON body without a `content-type` header, so `fetch` applied its default for a string body — `text/plain;charset=UTF-8` — and the backend rejected the request with `{"detail":"Unsupported content type"}` before it ever read the model. This was invisible on the live request path, which wraps OpenCode's own `RequestInit` and therefore inherits a content type; `warmAccountWindow` is the only caller that builds its headers from nothing and sends a body, so it was the only one affected. The header is now set explicitly, matching `codex-reset.ts`, the one other bodied POST built on `createCodexHeaders`. Verified against the live API: the identical request body returns `400 {"detail":"Unsupported content type"}` without the header and `200` with it, on an account fully entitled to `gpt-5.5` — confirming this was never account-, plan-, or entitlement-specific. Reported by @Grelo4ka. (#210)
- **A warm `400` that was not an entitlement error was reported as a model problem.** The `400` branch classified every response as `unsupported-model`, so a transport-level failure entered the entitlement fallback path and surfaced as though the account lacked the model. It now gates on `getUnsupportedCodexModelInfo`, the same predicate `resolveUnsupportedCodexFallbackModel` already applies internally, so entitlement `400`s keep the 6.11.1 fallback behavior unchanged and everything else fails immediately carrying its real upstream message. (#210)

### Internal
- Warm request tests now pin the outgoing content type by materializing a real `Request` from the captured init. Asserting on the header object alone could not catch the defect, because the `text/plain` default is applied by `fetch` at send time rather than by the header builder — the suite passed against a mock while the shipped request was rejected. The new assertion fails against 6.11.1 with `expected 'text/plain;charset=UTF-8' to be 'application/json'`. The 6.11.1 note attributing #210 to the retired `gpt-5.4` entry point was corrected in-code; that change was still worth keeping on its own merits, but it was not what #210 was.

## [6.11.1] - 2026-07-30

### Fixed
- **`warm` failed every account with `HTTP 400`**, from two independent causes. The warm ping was pinned to `gpt-5.4`, an id no longer present in the installer's shipped model catalog and listed in the installer's stale managed keys, so it is actively removed from user config — accounts without that entitlement were being pinged with a model they could not use. The entry point is now `gpt-5.5`, the generally-available anchor that every GPT-5.6 preview tier already degrades toward in the shared fallback chain. Separately, `warmAccountWindow` classified only `429` and dead-ended every other status, so an entitlement `400` could not recover the way live chat traffic does: a `model_not_supported_with_chatgpt_account` response now walks the shared unsupported-model chain (`gpt-5.5` → `gpt-5.4` → `gpt-5.4-mini` → `gpt-5.4-nano`), bounded by an attempt budget derived from the chain itself rather than hardcoded, since `warm` fans out across accounts concurrently. Because the warm body is built outside the request transformer, it now asks the transformer's canonical clamp what `"none"` resolves to on the target model instead of keeping a private copy of that rule — a fallback hop onto a model that rejects `"none"` would otherwise be a fresh `400`. Warm failures now report the sanitized upstream response body instead of a bare status code. Reported by @Grelo4ka. (#210)
- **`limits` printed the account list and no limits at all.** The command computed rate-limit state into its payload but the printer never rendered that field, so its output was byte-identical to `list`. Rendering it alone would not have been sufficient: the persisted `rateLimitResetTimes` stays empty until an account has already been rate-limited, and it holds reset timestamps rather than the weekly and 5-hour usage the command advertises. `limits` now reads the model-independent `/wham/usage` endpoint through the same compiled runtime the in-conversation `codex-limits` tool uses, with matching workspace deduplication, window titles, and summaries, and reports per-account failures inline with a non-zero exit. This makes `limits` a network call that can refresh a token where it was previously a purely local read; `rateLimitResetTimes` is retained in the `--json` payload for existing consumers, and `--tag` now gates which accounts are contacted rather than only which are displayed, so an untagged account is neither billed a usage fetch nor has its credentials refreshed. Reported by @Grelo4ka. (#209)

### Security
- **Per-account `limits` errors are redacted before output.** The error path formatted messages with a helper that performs no redaction, and `ensureCodexUsageAccessToken` can surface a raw OAuth refresh response body — truncation alone does not protect bearer, JWT, API-key, or refresh-token material from stdout, `--json` output, terminal history, or CI logs. Messages now pass through the logger's token patterns.

### Internal
- CI runs `npm run build` before `npm test`. `dist/` is gitignored and the standalone CLI tests load the compiled warm/limits runtime out of it, so the previous step order could not have passed on a clean checkout; removing `dist/` fails 12 of the 14 standalone tests, confirming the ordering was load-bearing rather than cosmetic.

## [6.11.0] - 2026-07-28

### Added
- Added a cache-only `update` command and provider-preserving `install --plugin-only` mode. Updating no longer requires invoking the provider/model installer, and manual update notifications now recommend the config-safe command. Contributed by @lubshad. (#207)

### Changed
- **Default install now manages only the OpenCode/TUI plugin entries and preserves `provider.openai`**; model catalogs require explicit `--modern`, `--full`, or `--legacy`. Installer writes and backups are skipped when merged configuration is semantically unchanged, plugin-only mode rejects non-object JSON roots, dry-run diffs report changed paths without values, and managed cache cleanup covers bare and `@latest` layouts with retries for transient Windows cache locks. Note that the `--variant` reasoning presets and `gpt-5.5-fast` are defined only by the shipped catalogs, so a flagless install leaves model definitions entirely to OpenCode — install with `--modern` if you want them. Contributed by @lubshad. (#207)

### Fixed
- **Terminal quota checks no longer send a synthetic model request.** Checking quotas from the account menu previously POSTed a "quota ping" completion to `/codex/responses`, walking a list of candidate models until one was accepted, purely to scrape `x-codex-*` rate-limit headers off the response. It now reads the model-independent `/wham/usage` endpoint directly and formats the shared usage windows, plan type, credits, code-review limit, and any additional limits. Free-plan accounts are handled without selecting a model at all. Deactivated-workspace and invalidated-token responses are still normalized to the canonical errors that flag an account for `codex-doctor --fix`, and the sanitized `codex-limits` error path is unchanged. Contributed by @lubshad. (#208)
- Corrected the install documentation for the new plugin-only default: the getting-started quickstart now leads with `--modern` so the `--variant` presets it demonstrates actually exist, and `config/README.md`, `CONFIG_FIELDS.md`, `troubleshooting.md`, and the `ARCHITECTURE.md` CLI diagram no longer attribute the base OAuth catalog to a flagless install or imply `update` accepts `--no-cache-clear`.

### Security
- **Cleared every outstanding dependency advisory; `npm run audit:ci` now reports 0 vulnerabilities.** `hono` moved to 4.12.32, resolving a `hono/jsx` cross-request context disclosure, a server-side XSS via the `cx()` escaping bypass, and a header de-duplication defect — this also cleared the advisory inherited by `@openauthjs/openauth`. `seroval`/`seroval-plugins` moved to 1.5.6, resolving a critical `fromJSON()` promise-resolver type confusion that could invoke attacker-controlled methods during deserialization (CVSS 9.8) reached through `solid-js`. `brace-expansion` and `postcss` were also pinned to patched releases.

## [6.10.1] - 2026-07-23

### Fixed
- **Account verification consumed single-use refresh tokens without persisting the rotation**, so `codex-health`, `codex-doctor --fix`, and `codex-refresh` bricked the accounts they checked: verifying an account exchanges its refresh token, which OpenAI rotates and invalidates on use, but health and doctor treated the check as read-only and never saved the new credential. The consumed token stayed on disk and the next load returned `refresh_token_reused` for every verified account until re-login. All three tools now persist the rotated credential in a storage transaction before reporting, through a shared refresh/persist path that skips intentionally-disabled accounts without touching their token, propagates a rotated token shared by workspace-sibling records, and reconciles concurrent storage changes by stable account identity (organizationId → accountId → refreshToken) rather than list position. `codex-doctor --fix` reloads diagnostics after applying fixes so the reported health can never contradict the live verification result, and marks refresh-verification failures as blocked with a re-login next action. (#205)
- **The cached account-manager reload leaked a shutdown handler on every `codex-health`/`codex-refresh` call and could overwrite freshly rotated tokens.** It now flushes the outgoing manager's pending debounced save and disposes its shutdown handler before installing the reloaded instance — mirroring `invalidateAccountManagerCache` — and is error-guarded so a reload failure degrades gracefully instead of crashing an already-successful response. The `account.select` event handler reuses the same safe reload. A duplicate `refresh-verification-failed` finding in `codex-doctor` output was also removed. (#205)
- **The OAuth callback success page was broken by the strict callback Content-Security-Policy**: it depended on inline scripts, external Google Fonts, and inline styles the CSP blocked, so it rendered as an unstyled white page exposing raw unicode escape sequences. It is now a compact static page whose only stylesheet is bound to a per-request CSP nonce, with the policy tightened to `default-src 'none'; script-src 'none'; frame-ancestors 'none'; base-uri 'none'; form-action 'none'` and `Cache-Control: no-store` / `Referrer-Policy: no-referrer` added to the response. No external font or script is loaded. (#206)

## [6.10.0] - 2026-07-20

### Added
- **`accountToasts` — opt out of the account-selection toast**: a new boolean config field (default `true`) with env override `CODEX_AUTH_ACCOUNT_TOASTS` gates only the informational `Using <account> (N/N)` toast the plugin renders when it selects or rotates to an account. Because OpenCode draws that toast over the output rather than reserving layout space, during a large diff it could cover several lines until it faded, and there was previously no way to disable it — `CODEX_AUTH_TOAST_DURATION_MS` has a 1000 ms floor and the debounce only suppresses repeats. Setting `accountToasts: false` (or `CODEX_AUTH_ACCOUNT_TOASTS=0`) hides just that informational toast while every warning and error toast — rate-limit switches, expired-auth recovery, unsupported-model and retry notices — stays visible. Resolution follows the standard env-over-config precedence (`"1"` enables, `"0"` disables), and like the other plugin settings it lives in `openai-codex-auth-config.json`, which the installer never rewrites, so the opt-out persists across upgrades. Reported by @aic0d3r. (#203)

## [6.9.1] - 2026-07-18

### Fixed
- **`gpt-5.6-sol` still rejected through the plugin after the 6.8.2 identity fix** (`model_not_supported_with_chatgpt_account` on every pooled account while terra/luna pass, and sol works in the Codex TUI and in plain opencode on the same accounts): the remaining difference was *who the plugin claims to be*, not the request version or payload. The upstream model catalog gates sol, terra, and luna identically (`minimal_client_version: 0.144.0`, `use_responses_lite: true`), so no version- or shape-level cause can produce a sol-only failure; and plain opencode's native ChatGPT-Codex path does not imitate the Codex CLI at all — it sends `originator: opencode` with an `opencode/<version> (<platform> <release>; <arch>)` `User-Agent` to the same `/backend-api/codex/responses` endpoint. The backend evaluates sol entitlement per originator, and for some account cohorts the `codex_cli_rs` claim from a non-Codex client fails that check while the host identity passes. The GPT-5.6 (responses-lite) tiers therefore now present the host (opencode) identity by default — the identity affected accounts are proven to pass sol with — while every other model keeps the Codex CLI identity from 6.8.2. Verified live on a sol-entitled account: both identities return 200 there, so accounts where `codex_cli_rs` already works are unaffected. `CODEX_AUTH_CLIENT_IDENTITY=codex|opencode` (alias `host`) forces one identity for all models. (#196, #201)
- The advertised opencode version self-syncs with the real host build: when the host runtime injects its own `opencode/<version>` `User-Agent` on the incoming request, that version is reused in the emitted identity instead of a baked-in constant; `CODEX_AUTH_HOST_VERSION` overrides both. (#201)
- `CODEX_AUTH_CLIENT_VERSION` and `CODEX_AUTH_HOST_VERSION` values are sanitized to safe product-token characters (whitespace and junk stripped, empty results fall back to the default), so a badly quoted environment value can no longer split the `User-Agent` product token and silently break the version the backend parses. (#201)

## [6.9.0] - 2026-07-17

### Added
- **Model-specific account pools**: a new `modelAccountPools` config field maps an effective model ID to a preferred set of accounts, so a model can be routed through the accounts entitled to it (e.g. pin `gpt-5.6-sol` to the accounts inside the Sol preview) instead of burning rotation attempts on accounts that will reject it. All three rotation strategies (`sticky`, `round-robin`, `hybrid`) restrict selection to healthy, selectable accounts in the preferred pool while one is available; existing quota, cooldown, and token-health rules still apply within the pool. If every preferred account is unavailable — disabled, unknown in this project, cooling down, or rate-limited — selection falls back transparently to the healthy general pool rather than failing the request. Model keys match case-insensitively against the effective model after request-model normalization; unmapped models and empty lists use the general pool directly. Pool references are stable account IDs, not indexes, so adding, removing, or reordering accounts never silently changes a model's routing. Contributed by @lubshad. (#200)
- **`codex-pool` tool** (the 24th `codex-*` tool): inspects and mutates those mappings with ordinary 1-based account numbers (`status`, `set`, `add`, `remove`, `clear`, plus `dryRun=true` previews) while resolving and persisting only stable IDs. Config writes are atomic and serialized — an in-process promise queue plus a `proper-lockfile` cross-process file lock (new runtime dependency) — preserve every unrelated raw config key, and refuse to replace malformed JSON or an invalid existing pool rather than clobbering it. JSON output redacts stable account IDs unless `includeSensitive=true`. Because the plugin config is global while account storage is per-project by default, references that don't resolve in the current project are reported but never automatically pruned — they may be valid elsewhere. Mutations require an OpenCode restart to take effect. (#200)
- Routing diagnostics (`codex-status`, `codex-dashboard`, `codex-metrics` text and TUI views) now report `accountPoolMode` — `general`, `preferred`, or `general-fallback` — and `configuredAccountPoolSize`, so a fallback out of a configured pool is visible instead of silent. (#200)

## [6.8.2] - 2026-07-16

### Fixed
- **`gpt-5.6-sol` rejected through the plugin while working in the Codex CLI/TUI for the same account**: two request-identity mismatches versus upstream Codex could make the backend evaluate a sol request against the wrong client or workspace context and return `model_not_supported_with_chatgpt_account` for an entitled account. First, the plugin declared `originator: codex_cli_rs` but sent the host runtime's `User-Agent`, while the backend reads the client version from the UA product token and the model catalog gates the 5.6 tiers on `minimal_client_version: 0.144.0`; requests now carry a Codex CLI `User-Agent` (`codex_cli_rs/<version> (<os>; <arch>)`), with `CODEX_AUTH_DISABLE_CODEX_USER_AGENT=1` to opt out and `CODEX_AUTH_CLIENT_VERSION` to override the advertised version. Second, the plugin pinned `openai-organization` on every request for accounts whose token carries an organization claim — a header upstream Codex never sends on ChatGPT-Codex requests (workspace routing is carried entirely by `chatgpt-account-id`), and one that can shift the backend's entitlement evaluation to a workspace outside the narrow sol preview while the broader terra/luna preview still passes. The header is no longer sent by default; multi-org setups that relied on it can restore it with `CODEX_AUTH_SEND_ORGANIZATION_HEADER=1`. Follow-up to the #196 auto-fallback fix in 6.8.1, prompted by the report that sol works in the Codex TUI and in opencode without the plugin but not through it; needs verification by an affected preview account. (#196)

## [6.8.1] - 2026-07-15

### Fixed
- `gpt-5.6-sol` (and the other 5.6 tiers) no longer hard-fails with `model not supported` when the account is outside the GPT-5.6 preview. 6.7.0 documented that an account without access "degrades `gpt-5.6-sol` → `gpt-5.6-terra` → `gpt-5.6-luna` → `gpt-5.5` through the unsupported-model fallback chain", but the chain was only traversed under `unsupportedCodexPolicy: "fallback"`: the default-selector auto-fallback allowlist listed only `gpt-5.5` and `gpt-5-codex`, so under the default `strict` policy a Sol request burned through every pooled account and returned an entitlement error. The three 5.6 tiers are now on the same auto-fallback path as `gpt-5.5`/`gpt-5-codex`, so the documented degradation works out of the box; opt out with `CODEX_AUTH_DISABLE_GPT56_AUTO_FALLBACK=1`. Bare `gpt-5.6` is also canonicalized to `gpt-5.6-sol` inside the fallback resolver, matching the request path, so custom chains keyed as `gpt-5.6` resolve correctly. (#196)
- **Multi-process refresh-token clobber**: a process persisting its in-memory account pool blind-overwrote the accounts file, including a refresh token another process had rotated after this process loaded its snapshot. Refresh tokens are single-use, so the clobbered token was dead on arrival — the next refresh with it failed and the auth-failure path eventually removed a still-valid workspace. Accounts now carry a persisted `tokenRotatedAt` stamp (written on rotation and propagated to token-sharing siblings), and every save runs as a read-modify-write transaction under the storage lock that adopts newer on-disk credentials into both the persisted payload and live memory. Files from older builds have no stamp and keep the previous behavior.
- **Refresh queue burned consumed tokens after settlement**: in-flight deduplication protected concurrent callers, but a caller that captured the pre-rotation token just before a rotation and refreshed after it settled re-consumed the single-use token and took a spurious 401. Settled rotations are now remembered for the queue's 30s entry TTL and served to late callers.
- **Mutating tools clobbered concurrent rotation state**: `codex-switch`, `codex-remove`, `codex-label`, and `codex-refresh` loaded the accounts file and saved a mutated snapshot as two independent lock acquisitions, silently overwriting rate-limit/cooldown/active-index state persisted in between. They now mutate and persist inside a single storage transaction against a freshly re-read snapshot (`codex-refresh` applies only the refreshed credential fields after its unlocked network calls).
- **`codex-keychain` migrate/rollback TOCTOU**: neither ran under the storage lock its docstring claimed; rollback's existence check and rename could silently overwrite a rotation save landing in between. Both now run as one critical section, and the keychain entry is deleted only after the rollback rename succeeds.
- **Reasoning effort leaked onto fallback models**: the unsupported-model fallback carried the original model's `reasoning.effort` onto the target, so a `gpt-5.6-sol-max` request degrading to `gpt-5.5` sent `max` to a model that rejects it, turning the graceful degrade into a hard 400. Effort is re-clamped per fallback hop through the transformer's own family rules.
- **Truncated SSE streams misreported as success**: a non-streaming response whose SSE stream ended without any terminal event was returned as the raw SSE text at the original 2xx status — the rotation loop recorded an account success for a failed turn and the client got an unparseable body. Such streams now surface as a 502 `incomplete_stream` error; bodies with no SSE framing still pass through as plain JSON.
- **Uncapped `retry-after` headers**: the body `retry_after_ms`/`retry_after` fields were capped at 5 minutes but the equivalent headers were not, so a bogus header (e.g. `retry-after: 86400`) benched a healthy account for hours, persisted across processes. Header values now get the same cap; quota reset-at headers remain uncapped since those windows legitimately reset hours out.
- **TUI status line trusted idle-stale quota snapshots**: the 5-minute refresh returned any fingerprint-matching shared snapshot as current with no age check, so once the file existed the `/wham/usage` fetch never ran again and an hours-old percentage (with a reset time already in the past) rendered as fresh. Snapshots older than one refresh interval now trigger a live re-fetch and render as stale only as a fallback.
- **`codex-reset` idempotency key regenerated per invocation**: the documented double-spend protection was inert because each attempt sent a fresh random `redeem_request_id`. The key is now derived deterministically from the credit id, so a retry of the same credit is recognizable to the backend; a failed consume POST also reports the redemption outcome as unknown (`redeemed: null`) instead of `false`, since the request may have reached the backend.
- **Proactive refresh skipped tokenless accounts**: the missing-access-token check was unreachable when no expiry was recorded, so such an account only recovered through the reactive path.

## [6.8.0] - 2026-07-14

### Added
- `codex-reset` tool: view banked Codex rate-limit reset credits and redeem one to clear the current usage windows. OpenAI grants eligible plans a small number of reset credits, but exposes redemption only in the Codex desktop app, the IDE extensions, and the Codex CLI `/usage` screen — so users of this plugin, Linux users in particular, had no way to spend a credit they already own without switching tools. The tool wraps the same two endpoints those clients use (`GET /wham/rate-limit-reset-credits`, `POST /wham/rate-limit-reset-credits/consume`), which authenticate exactly like the existing `/wham/usage` call and therefore reuse its credentials, timeout, and error-body sanitization. Redeeming is irreversible and spends a finite credit, so it is never implicit: `action="consume"` only issues the POST when `confirm=true`, and otherwise renders the same preview `dryRun` does. Each redemption carries a fresh `redeem_request_id` so a retry cannot spend two credits, a credit id that is not currently available is refused rather than posted, and once the POST returns, a failure of the follow-up usage read is surfaced as `usageError` alongside `redeemed: true` rather than reporting a spent credit as unredeemed. The listing path is verified against the live backend; the redeem path is covered by tests against a mocked `fetch`. (#193, #195)

### Fixed
- A rate-limit window the server reports as disabled is no longer rendered as a full quota. OpenAI encodes a switched-off window as `window-minutes: 0` / `limit_window_seconds: 0` with `used-percent: 0` rather than omitting it, and both quota paths retained that window because `used-percent` was numeric — surfacing a phantom `quota 100%` segment in the TUI status line next to the real weekly window (`7d 77% · quota 100%`). A window is now rejected on its *explicit* zero length; a window whose length header is *absent* is merely unknown and is still shown under the generic `quota` label. Two sibling defects of the same cause are fixed alongside the reported one: the `/wham/usage` path rounded a zero-second window up to one minute via `Math.max(1, …)`, surfacing a disabled window as a real `1m` limit, and `codex-limits` printed both windows unconditionally, so it showed the same phantom row. Snapshots already written by an older build are filtered on read, so a poisoned `oc-codex-multi-auth-tui-quota.json` heals without the user deleting it. Reported by @aic0d3r, correlated with OpenAI temporarily disabling the 5-hour Codex limit for some paid plans. (#194, #195)

## [6.7.1] - 2026-07-10

### Fixed
- GPT-5.6 requests no longer fail with HTTP 400. The backend rejects any request carrying the `x-openai-internal-codex-responses-lite` header that does not also set `reasoning.context = "all_turns"`, so every `gpt-5.6-sol` / `gpt-5.6-terra` / `gpt-5.6-luna` turn in 6.7.0 failed with `unsupported_value` on `reasoning.context`. Because that error is not `model_not_supported_with_chatgpt_account`, the `sol → terra → luna → gpt-5.5` degradation never triggered and every turn hard-failed. This matches upstream `codex-rs/core/src/client.rs` (`build_reasoning`), where `context` is set to `AllTurns` exactly when `use_responses_lite` is true and omitted otherwise. The field is written inside the responses-lite reshape, which is applied to a `structuredClone` for lite models only, so the canonical body and the 5.6 → 5.5 fallback remain free of `context`. Reported and fixed by @UnknOownU, verified against the live Codex backend. (#191, #192)

## [6.7.0] - 2026-07-10

### Added
- GPT-5.6 support: `gpt-5.6-sol`, `gpt-5.6-terra`, and `gpt-5.6-luna`, plus bare `gpt-5.6` as an alias for the Sol flagship tier. Reasoning-effort support follows the Codex model catalog (`codex-rs/models-manager/models.json`) rather than the launch coverage: Sol and Terra expose `low`/`medium`/`high`/`xhigh`/`max`/`ultra`, Luna stops at `max`, and no tier accepts `none` or `minimal` (both floor to `low`). Requesting `max` or `ultra` on a pre-5.6 model steps down to `xhigh`, then to `high` where `xhigh` is unsupported. `ultra` is accepted as an alias but never reaches the backend — Codex treats it as a client-side tier and rewrites it to `max` before sending (`codex-rs/core/src/client.rs`, `reasoning_effort_for_request`), and the subagent orchestration that distinguishes it lives in the Codex client, not the request body. It is excluded from `ReasoningConfig["effort"]` so the invariant is enforced at compile time. Each tier gets its own model family, keeping per-family rotation and rate-limit state isolated. (#189)
- 5.6 is opt-in: the legacy `gpt-5` alias and the plugin default still resolve to `gpt-5.5` / `gpt-5.4`. Because GPT-5.6 shipped as a limited preview, an account without access degrades `gpt-5.6-sol` → `gpt-5.6-terra` → `gpt-5.6-luna` → `gpt-5.5` through the unsupported-model fallback chain instead of failing every request. (#189)

### Fixed
- GPT-5.6 models are now served over the **responses-lite** request path. Their catalog entry sets `use_responses_lite: true` and `tool_mode: "code_mode_only"`, and Codex sends those models a materially different body: tool definitions move into `input` as a leading `additional_tools` developer item, the base instructions follow as a developer message, top-level `instructions` becomes `""` and `tools` is omitted, `parallel_tool_calls` is forced off, image `detail` fields are stripped, and an `x-openai-internal-codex-responses-lite: true` header is sent. Sending the classic shape to a `code_mode_only` model hands it tools in a field it does not read. The lite shape is applied at serialization, per request attempt, against the model actually being sent — never to the canonical transformed body — so a `gpt-5.6-sol` request that falls back to `gpt-5.5` is re-serialized in the classic shape and keeps its tools rather than stranding them in an `additional_tools` item. (#189)
- System instructions now come from the Codex model catalog instead of the legacy `*_prompt.md` files, for every model the catalog covers (`gpt-5.2`, `gpt-5.4`, `gpt-5.4-mini`, `gpt-5.5`, and the three 5.6 tiers). Modern Codex carries a full `base_instructions` string per model and sends that; the plugin was sending `gpt_5_2_prompt.md` — which opens *"You are GPT-5.2 running in the Codex CLI"* — to `gpt-5.2`, `gpt-5.4`, `gpt-5.4-mini`, and `gpt-5.5`, so those models received the wrong system prompt and a false identity. Models absent from the catalog (`gpt-5-codex`, `gpt-5.1*`, `gpt-5.2-codex`, `gpt-5.4-nano`, `gpt-5.4-pro`) keep their prompt file, and a catalog miss falls back to the family prompt file. **This changes the system prompt for existing `gpt-5.2` / `gpt-5.4` / `gpt-5.4-mini` / `gpt-5.5` users.** (#190)
- Catalog instructions cache per model id rather than per family. `gpt-5.5` and `gpt-5.4` share the `gpt-5.4` family but carry different catalog text, so a family-keyed cache let one serve the other's prompt. Cache keys are additionally namespaced (`catalog:` / `family:`) because slug-space and family-space overlap: `gpt-5.4-nano` has no catalog entry but belongs to the `gpt-5.4` family, which is itself a catalog slug — without namespacing the two shared a `memoryCache`/`refreshPromises` key and served each other's instructions inside the 15-minute TTL, reachable through `prewarmCodexInstructions`. Disk paths gained a `catalog-` prefix, which also stops a pre-upgrade prompt-file cache from being read as catalog content, so no migration step is needed. (#190)
- `models.json` (~300KB) is fetched once per release tag and shared across models. `fetchCatalogText` memoizes the result *and* shares the in-flight promise, so the concurrent fan-out in `prewarmCodexInstructions` collapses to a single download instead of one per catalog model. (#190)
- `minimal` reasoning effort no longer reaches the backend for GPT-5.6. It was clamped only inside the Codex branch, which keys off the model name containing `codex` — 5.6 slugs do not, so `gpt-5.6-sol` at `minimal` sent an effort no 5.6 tier accepts. It now floors to `low`, matching the existing `none` → `low` rule. (#189)
- Consolidated four duplicated reasoning-effort suffix regexes into a single helper. `gpt-5.1-codex-max` is a model id that ends in `-max`, not a `max`-effort variant of `gpt-5.1-codex`; the new `max` suffix is guarded by a negative lookbehind scoped to that branch alone, so `gpt-5-codex-low` and `gpt-5.1-codex-max-xhigh` still parse correctly. (#189)

## [6.6.0] - 2026-07-09

### Fixed
- The plugin no longer calls `process.exit()` from its `SIGINT`/`SIGTERM` handler while running inside the opencode host process. Because the handler hard-exited after cleanup, it won the race against opencode's own asynchronous shutdown, so pressing Ctrl+C exited without opencode printing the session id. Process termination is now owned explicitly rather than inferred from the signal: it defaults to off, so the plugin runs its cleanup and leaves termination to the host, and only an entrypoint that *is* the process opts in. The standalone `warm` CLI — the one `bin` path that installs the handler, because refreshing a token persists credentials under the storage lock — opts in via `setShutdownOwnsProcess(true)` and now exits `130`/`143` (`128 + signo`) on a signal instead of reporting `0`, which masked an interrupt as success. The debounced-save flush is still awaited on shutdown in both modes, so the no-lost-rotations guarantee from #110 holds. (#187)
- `runCleanup()` no longer drops work when a drain overlaps. It emptied the cleanup queue *before* awaiting it, so a `beforeExit` firing during an in-flight signal drain returned immediately against an already-empty queue rather than awaiting the real cleanup. Concurrent callers now share the in-flight promise, which is cleared once settled so sequential calls still re-drain — `AccountManager` re-registers its flush handler after an external `runCleanup()`, and that contract is preserved. (#187)

### Added
- `setShutdownOwnsProcess(boolean)` is exported from `lib/shutdown.ts` (and the `lib/index.ts` barrel) so a standalone entrypoint can claim ownership of process termination. The flag is read at signal time, not captured when the handlers are installed, so an entrypoint may opt in after the first `registerCleanup()`. (#187)

## [6.5.0] - 2026-06-30

### Added
- `oc-codex-multi-auth warm` standalone CLI command runs the account warm-up directly — in plain Node via the package `bin`, with no agent/model in the loop and therefore no token cost. It opens every enabled account's rolling usage window (one minimal `POST /codex/responses` each), skips disabled accounts, classifies a quota/usage-limit `429` as a distinct failure rather than "warmed", supports `--json`, and exits non-zero if any account failed. This addresses the request to run the warm-up as a direct command instead of an agent-invoked tool; the in-conversation `codex-warm` tool remains for users who want it mid-session. (#182)

## [6.4.1] - 2026-06-30

### Fixed
- Local token-bucket depletion no longer leaks into persisted, cross-process state. 6.4.0 made a depleted account rotate by writing a short synthetic window into `rateLimitResetTimes` — but that field is saved to the shared accounts file and reloaded by every process, so one process exhausting its own in-memory proactive limiter could spuriously mark a server-healthy account as rate-limited in OTHER concurrent processes (the multi-process/PID-offset deployment this tool targets). Account selection (`sticky`, `hybrid`, `round-robin`) and `getMinWaitTimeForFamily` are now token-bucket-aware directly: a locally-depleted account is skipped in-memory with no persisted state, and an all-depleted pool waits for token refill instead of returning a spurious 503. The local skip also no longer records a server-429-style health penalty, so a busy-but-healthy account is not deprioritized in `hybrid` scoring. (#183)
- `codex-warm` no longer reports a quota-exhausted account as "warmed". A `429` is now classified by reason: a `quota`/`usage_limit` 429 (the window is already spent) is surfaced as a distinct failure, while a transient `tokens`/`concurrent` 429 (window active) still counts as warmed. (#182)

## [6.4.0] - 2026-06-30

### Added
- `rotationStrategy` config (env `CODEX_AUTH_ROTATION_STRATEGY`) selects the account load-balancing algorithm: `hybrid` (default, unchanged — stick to the current account while healthy, else score-select the next), `sticky` (drain-first — stay on one account until it is rate-limited/cooling down, then move to the lowest-indexed available account so load concentrates and the other accounts keep their quota windows in reserve), or `round-robin` (advance through accounts in order). Sticky directly addresses the "all accounts share an initiation time and hit weekly-quota cooldown together" problem under round-robin. (#183)
- `codex-warm` tool primes every enabled account's usage window by sending one minimal billable request (`POST /codex/responses`, the same shape the live request path uses for its quota probe) to each, so the rolling ~5h quota windows start at session start instead of only when rotation eventually lands on each account. A read-only `GET /wham/usage` only reports server-side windows and does not open one, so warming must send a real inference request; the ping is deliberately tiny (reasoning effort `none`, verbosity `low`, no stored conversation) to keep the quota cost negligible. Disabled accounts are skipped; per-account failures are reported without aborting the batch. Complements `codex-switch index=N`, which already switches the active account on demand. (#182)

### Fixed
- An account whose **local** client-side token bucket (the proactive rate limiter) is depleted is now given a short, auto-expiring rate-limit window so account selection rotates off it. Previously the request loop drained the bucket and skipped the account, but the drain-first `sticky` strategy (and the `hybrid` fast-path) re-selected the same depleted account on the next traversal iteration — the `attempted`-set guard then terminated the loop and returned a spurious 503 while other accounts still had quota. The window also feeds `getMinWaitTimeForFamily`, so an all-depleted pool waits for token refill instead of failing fast. (#183)
- `codex-doctor --fix` now clears stale account-health state on accounts whose token refresh succeeds during the repair: an `auth-failure`/`network-error` cooldown and any `rateLimitResetTimes` markers are removed once the refresh proves the credential is alive. Previously `--fix` refreshed the token and tried to switch to the healthiest account, but left the stale cooldown/rate-limit state in place, so no account was eligible and the dead routing persisted — the only recovery was hand-editing `oc-codex-multi-auth-accounts.json`. The stale TUI quota cache is also cleared so diagnostics no longer reference an account index/count that no longer matches the pool. (fixes #171)
- `codex-doctor` now surfaces a finding when a disabled `accountIdSource: "token"` entry shadows an enabled, org-backed account that shares its email (a leftover a fresh re-login can mint instead of updating the org account). It is flagged with a `codex-remove` hint rather than auto-removed, because the only link between the two records is email and email-only merges must not collapse distinct multi-org accounts (#64). (#171)
- `codex-doctor --fix` no longer fails silently when a stored credential is genuinely dead: a failed token refresh now reports `N account(s) need re-login` and points the user at `opencode auth login`, instead of leaving an all-dark pool unrepaired with no surfaced cause. (#171)
- `codex-health` now surfaces the same recovery diagnostics as `codex-doctor` (read-only): it flags accounts blocked only by a stale cooldown/rate-limit (pointing at `codex-doctor --fix`) and disabled token-source duplicates (pointing at `codex-remove`), and includes `staleRecoverableSlots` / `disabledDuplicateSlots` in JSON output. This addresses the part of the issue that named `codex-health` explicitly. (#171)
- A disabled `accountIdSource: "token"` duplicate (a re-login artifact) merging into the real org-source account by email no longer disables the canonical account. Storage dedup now lets the org account's own `enabled` state govern the merge, so a single-account pool can no longer end up dark and unrecoverable; fail-closed is preserved for genuinely user-disabled accounts. (#171)
- Storage dedup now compares account emails case-insensitively, matching the `codex-doctor`/`codex-health` duplicate detectors. Previously `User@Example.com` (org) and `user@example.com` (token re-login) escaped dedup yet were still flagged as removable, so the two layers disagreed on identity. (#171)
- `codex-doctor` and `codex-health` now surface a disabled account that holds a fresh login credential — the fingerprint of a recent re-login that landed on a deliberately-disabled slot — so the user is told to re-enable it if intended instead of getting no signal at all. (#171)
- Caller-cancellation during a retry/backoff wait now surfaces as a proper `AbortError` carrying the caller's `signal.reason`, instead of an opaque `new Error("Aborted")` that dropped the cause. This aligns the retry-wait path with the fetch path and the `isAbortError` convention in `lib/codex-usage.ts`, improving diagnosability of the `Error: Aborted` symptom. (#176)
- Fixed a flaky email-masking property test (#163) that intermittently failed CI: the assertion used a fragile `masked.includes(local)` substring check that false-positived when the local part repeats in the preserved domain (`abc@abc.com`) or contains the mask character itself (`a.*@a.aa` → `a.***`). It now asserts the exact masking contract (masked local = first ≤2 chars + `***`), with deterministic regression cases. No production code change.

### Security
- Bumped `hono` to 4.12.26, resolving a high-severity Windows `serve-static` path traversal via encoded backslash (`%5C`) and four moderate advisories (GHSA-88fw-hqm2-52qc, GHSA-j6c9-x7qj-28xf, GHSA-rv63-4mwf-qqc2, GHSA-wgpf-jwqj-8h8p, GHSA-wwfh-h76j-fc44). This also clears the transitive `@openauthjs/openauth` advisory inherited via hono.
- Overrode `vite` to ^7.3.5, resolving a high-severity `server.fs.deny` bypass on Windows alternate paths and a moderate advisory (GHSA-fx2h-pf6j-xcff, GHSA-v6wh-96g9-6wx3) in the dev/test toolchain.
- Overrode `@babel/core` to ^7.29.6 (transitive via `@opentui/solid`), resolving a low-severity arbitrary file read via `sourceMappingURL` (GHSA-4x5r-pxfx-6jf8) without a major version bump.
- Added a `brace-expansion@>=5.0.0 <5.0.6` override to ^5.0.6, resolving a moderate ReDoS-class advisory in the 5.x line. `npm audit` now reports 0 vulnerabilities.

## [6.3.3] - 2026-06-17

### Fixed
- A stored OAuth account whose access token is invalidated server-side returns HTTP 401 (`Your authentication token has been invalidated. Please try signing in again.`), but the request pipeline had no 401 handler, so persisted family routing kept pinning every request to the dead account slot. A request-path 401 is now treated as an account-health failure: the consumed token is refunded, the auth-failure counter is incremented, the refresh-token group is cooled down (or removed past `MAX_AUTH_FAILURES_BEFORE_REMOVAL`), and the request rotates to the next healthy account. The counter is cleared on a successful request so a recovered account does not accumulate stale failures. (#172, fixes #171)
- `codex-health`/`codex-doctor` now flag `token-invalid` on an invalidated-token error (including a generic `401 Unauthorized` body), so `codex-doctor --fix` repairs the active routing without manual `activeIndex` JSON edits. (#172)

## [6.3.2] - 2026-06-10

### Fixed
- `gpt-5.3-codex-spark`, `gpt-5.3-codex`, and `gpt-5.2-codex` are no longer collapsed to `gpt-5-codex` before sending requests. Accounts where only the versioned model is available (not the base `gpt-5-codex`) no longer receive `model_not_supported_with_chatgpt_account` errors. (#170, fixes #169)
- Added `gpt-5.4-fast` and `gpt-5.4-mini-fast` as explicit model map entries so OpenCode fast-variant selectors resolve correctly.
- Reasoning effort `-none` suffix is intentionally absent for the three Codex families above; `getReasoningConfig()` coerces any `none` request to `low` for these models as before.

## [6.1.8] - 2026-04-29

### Fixed
- Local `npm link` installs now run the CLI wrapper correctly by resolving symlinked bin paths before direct-execution detection.
- Current audit validation follow-ups are resolved, including refreshed docs parity coverage.
- Request filtering now defaults missing or null `function_call.arguments` values to `{}` before forwarding.

## [6.1.7] - 2026-04-25

### Added
- OpenCode TUI prompt status plugin that shows the active Codex quota during sessions, including real response-header quota updates, account-aware display, color thresholds, and a quota details command.
- Daily npm update detection now clears the OpenCode-managed plugin cache on exit when a newer package version is available, so restarting OpenCode installs the latest plugin automatically.

### Changed
- The installer now manages OpenCode `tui.json` alongside the main plugin config so the TUI status module is available from the published package.
- TUI startup keeps the home prompt clean and only shows quota status inside active sessions.
- Added an `autoUpdate` config option and `CODEX_AUTH_AUTO_UPDATE=0` environment override for users who prefer manual update prompts.

### Fixed
- Quota status cache writes no longer block the request response path and coalesce rapid duplicate writes.
- Account switching clears stale TUI quota state so the next session reflects the selected account.
- Multi-account quota status now follows the actual account used by the latest request, including non-`codex` model families, so real response-header quota snapshots are not filtered out as stale.

## [6.1.6] - 2026-04-24

### Added
- OpenCode TUI prompt status plugin that shows the active Codex quota during sessions, including real response-header quota updates, account-aware display, color thresholds, and a quota details command.

### Changed
- The installer now manages OpenCode `tui.json` alongside the main plugin config so the TUI status module is available from the published package.
- TUI startup keeps the home prompt clean and only shows quota status inside active sessions.

### Fixed
- Quota status cache writes no longer block the request response path and coalesce rapid duplicate writes.
- Account switching clears stale TUI quota state so the next session reflects the selected account.
- Multi-account quota status now follows the actual account used by the latest request, including non-`codex` model families, so real response-header quota snapshots are not filtered out as stale.

## [6.1.5] - 2026-04-24

### Changed
- Default installer mode now writes the compact OAuth model catalog so OpenCode's model picker shows base models only; reasoning depth is selected through the variant picker.
- Added `--full` installer mode for users who still want explicit selector IDs such as `gpt-5.5-medium` and `gpt-5.5-fast-medium` installed into the model picker.
- Compact/default installs now prune explicit preset IDs and stale base model IDs from earlier catalogs so rerunning the installer actually cleans up the model picker.

## [6.1.4] - 2026-04-24

### Fixed
- Ship the `gpt-5.5-fast` modern config entry and explicit `gpt-5.5-fast-{none,low,medium,high,xhigh}` legacy selectors so OpenCode resolves `openai/gpt-5.5-fast-medium` before plugin routing.
- Clear OpenCode's newer package cache layout at `~/.cache/opencode/packages/{oc-codex-multi-auth,oc-chatgpt-multi-auth}@latest` during installer cache refresh.
- Normalize stale managed file-path and `file:///.../node_modules/...` plugin entries back to the official `oc-codex-multi-auth` package name when the installer runs.

## [6.1.3] - 2026-04-24

### Added
- Explicit `gpt-5.5-fast` / `gpt-5.5-fast-{none,low,medium,high,xhigh}` entries in the model map, normalizing to `gpt-5.5`. Without the explicit map entry, picking OpenCode's built-in `GPT-5.5 Fast` catalog item fell through the regex fallback with no per-model config lookup, which contributed to the `All N account(s) failed (server errors or auth issues)` symptom.
- Scoped auto-fallback for GPT-5.5: when the backend returns `model_not_supported_with_chatgpt_account` for `gpt-5.5`, the plugin now routes the retry to `gpt-5.4` automatically, even without `unsupportedCodexPolicy: "fallback"` or `CODEX_AUTH_UNSUPPORTED_MODEL_POLICY=fallback`. Opt out with `CODEX_AUTH_DISABLE_GPT55_AUTO_FALLBACK=1`. Legacy family fallback behavior is unchanged.

### Removed
- **GPT-5.5 Pro** model map entries (`gpt-5.5-pro`, `gpt-5.5-pro-{medium,high,xhigh}`, `gpt-5.5-pro-20260423*`), config template entries in `config/opencode-modern.json` and `config/opencode-legacy.json`, the `GPT_55_PRO_MODEL_ID` constant, the `gpt-5.5-pro -> gpt-5.5` fallback chain edge, and the related request-transformer / prompt-family branches. Per OpenAI's 2026-04-23 launch, GPT-5.5 Pro ships to ChatGPT only, not Codex; routing `gpt-5.5-pro*` through the Codex OAuth pipeline was producing `model_not_supported_with_chatgpt_account` on every pooled account. Any user-typed `gpt-5.5-pro*` still canonicalizes to `gpt-5.5` so the scoped auto-fallback chain can rescue it.

### Fixed
- The terminal aggregator message in `index.ts` no longer misreports across-the-pool entitlement 400s as `server errors or auth issues`. When `lastErrorCategory === "unsupported-model"` at exhaustion, the response now names the model and points to the fallback env var.
- Pre-existing `lib/request/fetch-helpers.ts` typecheck regression from the 6.1.2 release: `shouldRefreshToken(auth: Auth, ...)` referenced an `Auth` type that had been removed from the SDK import. Re-imported `Auth` from `@opencode-ai/sdk`.

## [6.1.2] - 2026-04-24

### Added
- GPT-5.5 2026-04-23 release presets in the shipped OpenCode config templates.

### Changed
- Activate GPT-5.5 2026-04-23 across runtime model routing and align the runtime model mapping with the new release family.

### Fixed
- Handle GPT-5.5 gating by falling back cleanly when the requested release is unavailable upstream.

## [6.1.1] - 2026-04-22

### Fixed
- Retry structured `service_unavailable_error` / `server_is_overloaded` payloads as server faults even on non-5xx responses, while preserving overload `retry_after` backoff when the account pool is exhausted.
- Retry live upstream `server_error` payloads that arrive on non-5xx responses instead of falling straight through as unrecoverable failures.
- Stabilize merged retry regression coverage so the overload and live `server_error` fetch-loop cases do not leak module state between tests.

## [6.1.0] - 2026-04-17

### Added
- `codex-keychain` opt-in OS-keychain credential backend via `CODEX_KEYCHAIN=1` (macOS Keychain / Windows Credential Manager / Linux libsecret) (#132, #133, #134)
- `codex-diag` redacted diagnostics snapshot tool for bug reports (#126)
- `codex-diff` redacted config/account comparator (#129)
- `NO_COLOR` and `FORCE_COLOR` environment-variable support in UI rendering (#126)
- Multi-worktree collision detection with non-blocking warning (#130)
- Circuit-breaker half-open gate wired into request pipeline (#123)
- 20-scenario chaos fault-injection test suite (#128)
- Contract tests pinning OpenAI OAuth, Codex chat, and Codex SSE response shapes (#131)
- Dependabot, OpenSSF Scorecard, commit-msg hook, and release-please automation (#125, #127)
- CI matrix: Node 18/20/22 on Ubuntu + Node 20 on Windows (#111)
- Typed error hierarchy (BaseError + domain classes) in `lib/errors.ts` (#120)

### Changed
- Refactor: `index.ts` reduced from 5975 to 3425 lines; all 18 tools extracted to `lib/tools/*` (#115, #121)
- Refactor: `lib/storage.ts` split from 1419 to 79 lines across 12 submodules under `lib/storage/` (#116)
- Refactor: `AccountManager` split into 4 domain services (state, persistence, rotation, recovery) (#122)
- Refactor: `lib/recovery.ts` consolidated to barrel pattern (#117)
- Refactor: renamed `lib/runtime-contracts.ts` into `lib/oauth-constants.ts` + `lib/error-sentinels.ts` (#118)
- Refactor: Zod-validate remaining process boundaries (#119)
- Removed dead modules `lib/auth-rate-limit.ts` and `lib/audit.ts` (854 lines total) (#109)

### Fixed
- **CRITICAL**: Serialize `incrementAuthFailures` via per-refresh-token promise chain to prevent lost auth-failure counts across shared refresh tokens (#108)
- Destructive defaults: `importAccounts` defaults to timestamped backup; `exportAccounts` defaults to `force: false`; `codex-remove` tool requires explicit `confirm: true` (#108)
- Shutdown SIGINT/SIGTERM now awaits debounced `flushPendingSave`, preventing lost rotations (#110)
- `schemaVersion > 3` now throws `StorageError(UNSUPPORTED_SCHEMA_VERSION)` instead of silently nulling data (#110)
- V2 storage files are detected and either migrated or rejected explicitly (no more silent drop) (#113)
- Credential merge: `||` â†’ `??` prevents empty-string tokens resurrecting stale older values (#112)
- `REDIRECT_URI` uses `127.0.0.1` literal for RFC 8252 compliance (#112)
- Codex-CLI cross-process JSON now Zod-validated before merging (#112)
- Logger `TOKEN_PATTERNS` extended to cover OpenAI opaque refresh/access/id tokens (#112, #126)
- Installer `scripts/install-oc-codex-multi-auth-core.js` deep-merges `provider.openai` instead of clobbering user customizations; added `--dry-run` (#114)
- F1 keychain post-merge: partial-migration staleness + `clearAccounts` ordering + rollback silent-clobber + lexicographic-sort bug (#133, #134)

### Documentation
- Full-repository audit delivered in `docs/audits/` (#107)
- README: added CI, Node, Scorecard, npm, license badges; new `Credential Storage` section (#124, #132)
- CONTRIBUTING: local development, contract-fixture update, real-keychain testing sections (#124, #131, #132)
- SECURITY: backend threat-model update (#132)
- ARCHITECTURE.md refreshed to reflect v6 module layout (#124)
- CHANGELOG: restructured to Keep-a-Changelog v1.1.0 (#124)

### Internal
- Per-file coverage floor (70%) for `lib/**` and `index.ts` in `vitest.config.ts` (#125)
- Test count: 2088 â†’ 2234 (+146 regression + chaos + contract tests)

## [6.0.0] - 2026-04-06

### Added

- **beginner operations toolkit**: added `codex-help`, `codex-setup` (with `wizard` mode + fallback), `codex-doctor` (`fix` mode), and `codex-next` for guided onboarding and recovery.
- **account metadata commands**: added `codex-tag` and `codex-note`, plus `codex-list` tag filtering.
- **interactive account pickers**: `codex-switch`, `codex-label`, and `codex-remove` now support optional index with interactive selection in compatible terminals.
- **backup/import safety controls**: `codex-export` now supports auto timestamped backup paths; `codex-import` adds `dryRun` preview and automatic pre-import backup on apply.
- **beginner safe mode config**: new `beginnerSafeMode` config key and `CODEX_AUTH_BEGINNER_SAFE_MODE` env override for conservative retry behavior.
- **startup preflight summary**: one-time startup health summary with recommended next action.
- **breaking rebrand migration**: current runtime storage now uses package-aligned files (`oc-codex-multi-auth-accounts.json`, `oc-codex-multi-auth-flagged-accounts.json`) with automatic migration from legacy package-era and pre-package storage names on first load.

### Changed

- **account storage schema**: V3 account metadata now includes optional `accountTags` and `accountNote`.
- **docs refresh for operational flows**: README + docs portal/development guides updated to reflect beginner commands, safe mode, interactive picker behavior, and backup/import safeguards.
- **repository presentation refresh**: rewrote the README as a landing page, added a public FAQ and code of conduct, refreshed package metadata, and removed stale CI/test claims from public docs surfaces.
- **test matrix expansion**: coverage now includes beginner UI helpers, safe-fix diagnostics edge cases, tag/note command behavior, and timestamped backup/import preview utilities.
- **package line renamed**: the supported package, repo, plugin entry, installer surface, and docs now use `oc-codex-multi-auth` instead of `oc-chatgpt-multi-auth`.
- **codex-first auth wording**: OAuth options, installer guidance, and onboarding docs now describe the Codex-first flow directly instead of the older MULTI-branded labels.

### Fixed

- **non-interactive command guidance**: optional-index commands provide explicit usage guidance when interactive menus are unavailable.
- **doctor safe-fix edge path**: `codex-doctor fix` now reports a clear non-crashing message when no eligible account is available for auto-switch.
- **first-time import flow**: `codex-import` no longer fails with `No accounts to export` when storage is empty; pre-import backup is skipped cleanly in zero-account setups.
- **installer cache hygiene**: the installer now removes both the old and new package names from OpenCode cache metadata so cutover installs do not stay pinned to stale artifacts.

## [5.4.8] - 2026-03-24

### Added

- **json codex-ops automation surfaces**: read-only Codex ops now support `format="json"` and expose routing visibility across status, metrics, dashboard, and doctor flows.
- **device-code login flow**: added a first-party ChatGPT device-code auth path for SSH, WSL, and other headless environments.

### Changed

- **login finalization parity**: regular OAuth, manual fallback, and device-code flows now share the same account-selection and persistence helpers.
- **runtime contract parity hardening**: centralized timeout, deactivated-workspace, and OAuth callback constants with dedicated runtime/doc parity coverage.
- **dependency audit cleanup**: refreshed the shipped dependency tree with updated `hono` and pinned audit overrides for deterministic audit resolution.

### Fixed

- **storage import contract drift**: preview and apply import flows now share one analysis path, keeping deduplication and count reporting aligned while preserving redacted backup failure reporting.
- **deactivated workspace rotation**: grouped refresh-token variants are removed together, traversal restarts onto healthy accounts, and the zero-removal fallback cools down the affected account safely.

## [5.4.3] - 2026-03-06

### Added

- **gpt-5.4 snapshot alias normalization**: added support for `gpt-5.4-2026-03-05*` and `gpt-5.4-pro-2026-03-05*` model IDs (including effort suffix variants).

### Changed

- **legacy GPT-5 alias target updated**: `gpt-5`, `gpt-5-mini`, and `gpt-5-nano` now normalize to `gpt-5.4` as the default general family.
- **gpt-5.4-pro family isolation**: prompt-family detection now keeps `gpt-5.4-pro` separate from `gpt-5.4` for independent prompt/cache handling while preserving fallback policy behavior (`gpt-5.4-pro -> gpt-5.4`).
- **OpenCode 5.4 template limits updated**: shipped OpenCode config templates now set `gpt-5.4*` context to `1,000,000` (output remains `128,000`) and docs now include optional `model_context_window` / `model_auto_compact_token_limit` tuning guidance.

### Fixed

- **5.4.3 regression/test coverage alignment**: expanded and corrected normalization, family-routing, and prompt-mapping tests for snapshot aliases, pro-family separation, and legacy alias behavior.

## [5.4.2] - 2026-03-05

### Added

- **gpt-5.4 + gpt-5.4-pro runtime support**: added model-map normalization and request-transform coverage for `gpt-5.4` (general) and optional `gpt-5.4-pro`.
- **gpt-5.4-pro fallback edge**: default unsupported-model fallback chain now includes `gpt-5.4-pro -> gpt-5.4` when fallback policy is enabled.

### Changed

- **template defaults updated to gpt-5.4**: modern + legacy config templates now use `gpt-5.4` variants as the default general-purpose family.
- **docs refresh for 5.4 rollout**: README, getting-started, configuration, troubleshooting, docs index, and config docs now reflect `gpt-5.4` defaults and optional `gpt-5.4-pro` usage.
- **test matrix expanded for 5.4**: unit, integration, and property tests now explicitly cover `gpt-5.4` and `gpt-5.4-pro` normalization/reasoning/fallback paths.

### Fixed

- **quota probe model order**: quota snapshot probing now includes `gpt-5.4` first before legacy Codex probe models.

## [5.4.0] - 2026-02-28

### Changed

- **organization/account identity matching hardening**: org-scoped matching and collision pruning now enforce accountId-aware compatibility to preserve distinct same-org workspace identities.
- **id-token organization binding source strictness**: id-token candidate org binding now prioritizes `idToken['https://api.openai.com/auth'].organizations[0].id`.

### Fixed

- **organization-scoped account preservation**: account restoration now preserves organization/workspace identity across token refresh and flagged-account recovery paths.
- **no-org duplicate collapse alignment**: fallback no-org duplicates now collapse consistently across storage, authorize, and prune operations.
- **active-index remap stability**: index remapping during collision pruning/dedupe maintains stable active-index selection after account deduplication.

## [5.3.0] - 2026-02-22

### Added

- **workspace-aware account persistence**: oauth workspace candidates are preserved as distinct account entries to keep per-workspace routing stable across multi-account sessions.

### Fixed

- **organization identity reconciliation**: account restoration now preserves organization/workspace identity across token refresh and flagged-account recovery paths.
- **verify-flagged restore identity loss**: flagged-account restore no longer drops `organizationId` when an `accountId` already exists.

### Changed

- **documentation alignment with current runtime structure**: refreshed README and docs portal/architecture guides to reflect native-vs-legacy request transforms, workspace-aware identity behavior, and current preset/test counts.

## [5.2.3] - 2026-02-21

### Fixed

- **tool-call compatibility with current OpenCode runtime**: default request handling now preserves native OpenCode payload/tool definitions, avoiding bridge-side alias rewrites that could trigger invalid tool-call schemas.
- **bridge/tool-name drift failures**: Codex bridge instructions now anchor on the runtime-provided tool manifest and explicitly avoid translating/inventing tool names.

### Changed

- **request transform mode control**: added `requestTransformMode` (`native` default, `legacy` opt-in) plus `CODEX_AUTH_REQUEST_TRANSFORM_MODE=legacy` for compatibility fallback.
- **legacy codex-mode scope**: Codex compatibility rewrites and bridge prompt shaping are now legacy-mode behavior; native mode keeps host request shape unchanged.

## [5.2.1] - 2026-02-20

### Fixed

- **tool mapping conflicts in codex bridge/remap prompts**: removed contradictory guidance that treated `patch` as forbidden and aligned instructions so `apply_patch` intent maps to `patch` (preferred) or `edit` for targeted replacements.
- **OpenCode codex prompt source brittleness**: prompt fetch now retries across multiple upstream source URLs instead of relying on a single path that could return 404.

### Changed

- **prompt fetch configurability**: added `OPENCODE_CODEX_PROMPT_URL` override support and source-aware cache metadata so ETag conditional requests stay bound to the same source.
- **regression coverage + docs wording**: updated prompt assertions/tests for the new `patch`+`edit` policy and refreshed architecture documentation text to match.

## [5.2.0] - 2026-02-13

### Added

- **gpt-5.3-codex-spark normalization + routing**: added internal model mapping/family support for `gpt-5.3-codex-spark` and Spark reasoning variants.
- **generic unsupported-model fallback engine**: entitlement rejections now support configurable per-model fallback chains via `fallbackOnUnsupportedCodexModel` and `unsupportedCodexFallbackChain`.

### Changed

- **unsupported-model policy defaults**: introduced `unsupportedCodexPolicy` (`strict`/`fallback`) with strict mode as default; legacy `fallbackOnUnsupportedCodexModel` now maps to policy behavior.
- **entitlement handling flow**: on unsupported-model errors, plugin now tries remaining accounts/workspaces before model fallback, improving Spark entitlement discovery across multi-account setups.
- **fast-session reasoning summary**: fast mode now uses `reasoning.summary = "auto"` (invalid/legacy summary values sanitize to `auto`).
- **legacy fallback compatibility**: `fallbackToGpt52OnUnsupportedGpt53` / `CODEX_AUTH_FALLBACK_GPT53_TO_GPT52` now act as a legacy edge toggle inside the generic fallback flow.
- **documentation refresh**: README, configuration, getting-started, troubleshooting, and config template docs now describe strict/fallback controls, Spark entitlement gating, and optional manual Spark template additions.

## [5.1.1] - 2026-02-08

### Fixed

- **provider-prefixed model config resolution**: `openai/<model>` ids now correctly resolve to their base model config instead of falling back to global defaults.
- **codex variant option merging**: variant suffixes like `-xhigh` now apply `models.<base>.variants.<variant>` options during request transformation.

## [5.1.0] - 2026-02-08

### Changed

- **workspace candidate selection hardened**: OAuth workspace auto-selection now prefers org defaults, id-token-selected workspace IDs, and non-personal org candidates before falling back to token-derived personal IDs.

### Fixed

- **business workspace routing**: explicit org/manual workspace bindings are now preserved at request time and no longer overwritten by token `chatgpt_account_id` values.
- **gpt-5.3-codex on Business accounts**: fixed a dual-workspace path where requests could be routed to personal/free workspace IDs and fail with unsupported-model errors.

## [5.0.0] - 2026-02-08

### Changed (BREAKING)

- **auth login interaction redesigned**: `opencode auth login` now defaults to the Codex-style dashboard flow (actions/accounts/danger zone) instead of the legacy add/fresh-only prompt.
- **styled codex tool output default**: `codex-list`, `codex-status`, `codex-health`, `codex-switch`, `codex-remove`, `codex-refresh`, `codex-export`, and `codex-import` now default to the new Codex TUI formatting; scripts parsing legacy plain output should update or set `codexTuiV2: false`.

### Added

- **codex tui runtime controls**: new config + env options for UI behavior: `codexTuiV2`, `codexTuiColorProfile`, `codexTuiGlyphMode`, `CODEX_TUI_V2`, `CODEX_TUI_COLOR_PROFILE`, and `CODEX_TUI_GLYPHS`.
- **full account dashboard actions**: interactive login now supports add/check/deep-check/verify-flagged/start-fresh, plus account-level actions (enable/disable, refresh, delete).
- **dedicated flagged storage**: introduced `openai-codex-flagged-accounts.json` with automatic migration from legacy `openai-codex-blocked-accounts.json`.
- **ui architecture + coverage**: added shared terminal UI runtime/theme/format modules and parity documentation (`TUI_PARITY_CHECKLIST.md`) with focused tests.

### Fixed

- **disabled account safety**: disabled accounts are now excluded from active/current selection and rotation paths.
- **enabled-flag migration**: `enabled` account state now survives v1->v3 storage migration and persists reliably across save/load cycles.

## [4.14.2] - 2026-02-08

### Changed

- **gpt-5.3 fallback default**: fallback from `gpt-5.3-codex` to `gpt-5.2-codex` on ChatGPT entitlement rejection is now enabled by default for all users.
- **strict-mode opt-out**: strict behavior is now opt-out via `fallbackToGpt52OnUnsupportedGpt53: false` or `CODEX_AUTH_FALLBACK_GPT53_TO_GPT52=0`.

### Fixed

- **unsupported-model handling**: normalized the upstream 400 (`"not supported when using Codex with a ChatGPT account"`) to a clear entitlement-style error instead of generic bad-request handling.

## [4.14.1] - 2026-02-07

### Added

- **fast session mode**: optional low-latency tuning (`fastSession`) with `hybrid`/`always` strategies and configurable history window (`fastSessionMaxInputItems`).

### Changed

- **prompt caching**: codex + opencode bridge prompts now use stale-while-revalidate + in-memory caching; startup prewarms instruction caches to reduce first-turn latency.
- **request parsing**: fetch pipeline now normalizes `Request` inputs and supports non-string bodies (Uint8Array/ArrayBuffer/Blob) without failing request transformations.

### Fixed

- **trivial-turn overhead**: in fast session mode, trivial one-liners can omit tool definitions and compact instructions to reduce roundtrip time.

## [4.14.0] - 2026-02-05

### Added

- **gpt-5.3-codex model support**: added end-to-end normalization and routing for `gpt-5.3-codex` with `low`, `medium`, `high`, and `xhigh` variants.
- **new codex family key**: account rotation/storage now tracks `gpt-5.3-codex` independently in `activeIndexByFamily`.

### Changed

- **reasoning defaults**: `gpt-5.3-codex` now defaults to `xhigh` effort (matching the current codex-family behavior), and `none`/`minimal` are normalized to supported codex levels.
- **prompt fetch/cache mapping**: prompt family detection now …92 tokens truncated…atency counters for the current plugin process.
- **401 diagnostics payload**: normalized 401 errors now include `diagnostics` (for example `requestId`, `cfRay`, `correlationId`, `threadId`) to speed up debugging.
- **stream watchdog controls**: new `fetchTimeoutMs` and `streamStallTimeoutMs` config options (and env overrides) for upstream timeout tuning.

### Changed

- **request correlation**: each upstream fetch now sets a correlation id, reuses `CODEX_THREAD_ID`/`prompt_cache_key` when available, and clears scope after each request.
- **plan-mode tool gating**: `request_user_input` is automatically stripped from tool definitions when collaboration mode is Default (kept in Plan mode).
- **safety prompt hardening**: bridge/remap prompts now explicitly block destructive git commands unless the user asks for them.
- **gpt-5.2-codex default effort**: default reasoning now prefers `xhigh` when no explicit effort/variant is provided.
- **gitignore hygiene**: local planning/release scratch artifacts are now ignored to keep working trees clean.

### Fixed

- **non-stream SSE hangs**: non-streaming SSE parsing now aborts stalled reads instead of waiting indefinitely.

## [4.12.5] - 2026-02-04

### Changed

- **per-project storage location**: project-scoped account files now live under `~/.opencode/projects/<project-key>/openai-codex-accounts.json` instead of writing into `<project>/.opencode/`.

### Added

- **legacy migration**: when the new project-scoped path is empty, the plugin now auto-migrates legacy `<project>/.opencode/openai-codex-accounts.json` data on first load.

## [4.12.4] - 2026-02-03

### Added

- **Empty response retry** - Automatically retries when the API returns empty/malformed responses. Configurable via `emptyResponseMaxRetries` (default: 2) and `emptyResponseRetryDelayMs` (default: 1000ms)
- **PID offset for parallel agents** - When multiple OpenCode instances run in parallel, each process now gets a deterministic offset for account selection, reducing contention. Enable with `pidOffsetEnabled: true`

### Changed

```json
{
  "emptyResponseMaxRetries": 2,
  "emptyResponseRetryDelayMs": 1000,
  "pidOffsetEnabled": false
}
```

- Environment variables:
- `CODEX_AUTH_EMPTY_RESPONSE_MAX_RETRIES`
- `CODEX_AUTH_EMPTY_RESPONSE_RETRY_DELAY_MS`
- `CODEX_AUTH_PID_OFFSET_ENABLED`

- **Test coverage** - 1516 tests across 49 files (up from 1498)

### Fixed

- **PID offset formula** - Fixed bug where all accounts received the same offset (now uses `account.index * 0.131 + pidBonus` for unique distribution)
- **Empty response detection** - Hardened `isEmptyResponse()` to correctly identify empty choice objects (`[{}]`) and whitespace-only content as empty
- **Test mocks** - Fixed `index.test.ts` mocks for `createLogger` and new config getters (55 tests were failing)

### Notes
- npm publish status: not published on npm (tag/release only).

## [4.12.3] - 2026-02-03

### Changed

- **Test coverage** - Up to 89% coverage (1498 tests)
- **Code quality** - Various improvements from audit

### Fixed

- **Account persistence fix** - Accounts were being saved to the wrong location when `perProjectAccounts` was enabled (default). The issue was that `setStoragePath()` only ran in the loader, but authorize runs before that. So accounts got written to the global path, then the loader looked in the per-project path and found nothing. Both OAuth methods (browser and manual URL paste) now init storage path before saving. (#19)

## [4.12.2] - 2026-01-30

### Fixed

- **TUI crash on workspace prompt** - Removed redundant workspace selection prompt (auto-selects default now). Added `isNonInteractiveMode()` to detect TUI/Desktop environments. (#17)
- **Web UI validation error** - Added validate function to manual OAuth flow for proper error messages instead of `[object Object]`.

## [4.12.1] - 2026-01-30

### Changed

- **Audit logging** - Rotating file audit log with structured entries
- **Auth rate limiting** - Token bucket rate limiting (5 req/min/account) 
- **Proactive token refresh** - Refreshes tokens 5 minutes before expiry
- **Zod schemas** - Runtime validation as single source of truth

- ### Stats
- **Tests**: 580 Ã¢â€ â€™ 631 (+51)
- All passing on Windows with `--pool=forks`

### Fixed

- **Business plan workspace fix** - Fixed the "usage not included" errors some Business plan users were hitting. Turns out we were sending a stale stored accountId instead of pulling the fresh one from the token - problematic when you've got multiple workspaces. (#17, h/t @alanzchen for the detailed trace)
- **Persistence errors actually visible now** - Storage failures used to fail silently unless you had debug mode on. Now you get a proper error toast with actionable hints (antivirus exclusions on Windows, chmod suggestions on Unix). (#19)
- **Atomic writes for account storage** - Switched to temp file + rename to avoid corrupted state if a write gets interrupted mid-flight.
- **Fixed a reader lock leak** - The SSE response handler wasn't releasing its lock in the finally block. Small thing but could cause issues over time.
- **Debug logging for rotation** - Added some visibility into which account gets picked and why during rotation.

## [4.12.0] - 2026-01-30

### Changed (BREAKING)

- **tool rename**: all `openai-accounts-*` tools renamed to shorter `codex-*` prefix:
  - `openai-accounts` â†’ `codex-list`
  - `openai-accounts-switch` â†’ `codex-switch`
  - `openai-accounts-status` â†’ `codex-status`
  - `openai-accounts-health` â†’ `codex-health`
  - `openai-accounts-refresh` â†’ `codex-refresh`
  - `openai-accounts-remove` â†’ `codex-remove`

### Added

- **codex-export**: export all accounts to a portable JSON file for backup or migration
- **codex-import**: import accounts from a JSON file, merges with existing accounts (skips duplicates)

## [4.11.2] - 2026-01-30

### Fixed

- **windows account persistence**: fixed silent failure when saving accounts on Windows. errors are now logged at WARN level with storage path in message, and a toast notification appears if persistence fails.

## [4.11.1] - 2026-01-29

### Changed

- This plugin provides 6 built-in tools for managing your OpenAI accounts. Just ask the agent or type the tool name directly.

- | Tool | What It Does | Example Prompt |
- |------|--------------|----------------|
- | `openai-accounts` | List all accounts | "list my accounts" |
- | `openai-accounts-switch` | Switch active account | "switch to account 2" |
- | `openai-accounts-status` | Show rate limits & health | "show account status" |
- | `openai-accounts-health` | Validate tokens (read-only) | "check account health" |
- | `openai-accounts-refresh` | Refresh & save tokens | "refresh my tokens" |
- | `openai-accounts-remove` | Remove an account | "remove account 3" |

### Fixed

- **Zod validation error** - Fixed crash when calling `openai-accounts-status` with no accounts configured

## [4.11.0] - 2026-01-29

### Added

- **Subdirectory detection** - Per-project accounts now work from subdirectories. The plugin walks up the directory tree to find the project root (identified by `.git`, `package.json`, `pyproject.toml`, etc.)
- **Live countdown timer** - Rate limit waits now show a live countdown that updates every 5 seconds: `Waiting for rate limit reset (2m 35s remaining)`
- **Auto-remove on auth failure** - Accounts are automatically removed after 3 consecutive auth failures, with a notification explaining what happened. No more manual cleanup of dead accounts.
- **openai-accounts-refresh tool** - Manually refresh all OAuth tokens to verify they're still valid

## [4.10.0] - 2026-01-29

### Added
- **per-project accounts**: each project gets its own account storage now. no more conflicts when working across different repos with different chatgpt accounts. auto-detects project directories (looks for .git, package.json, etc). falls back to global storage if you're not in a project folder.
- **configurable toast duration**: rate limit notifications stick around longer now (5s default). set `toastDurationMs` in config if you want them longer/shorter.
- **account removal tool**: new `openai-accounts-remove` tool to delete accounts by index. finally.
- **token masking in logs**: all tokens, api keys, and bearer headers are now masked in debug logs. no more accidentally leaking creds.

### Changed
- **account limit bumped to 20**: was 10, now 20. add more accounts if you need them.
- **per-project accounts default on**: `perProjectAccounts` defaults to `true` now. disable with `perProjectAccounts: false` in config if you want the old global behavior.

### Fixed
- **token refresh race condition**: added `tokenRotationMap` to prevent concurrent refresh requests from stepping on each other.
- **rate limit retry jitter**: 20% jitter on retry delays to prevent thundering herd.
- **apply_patch infinite loop**: removed apply_patch references from codex bridge that caused loops in some edge cases.

### Notes
new options in `~/.opencode/openai-codex-auth-config.json`:
```json
{
  "perProjectAccounts": true,
  "toastDurationMs": 5000
}
```

env vars:
- `CODEX_AUTH_PER_PROJECT_ACCOUNTS=1` - enable per-project accounts
- `CODEX_AUTH_TOAST_DURATION_MS=8000` - set toast duration in ms

## [4.9.7] - 2026-01-29

### Fixed
- business/team workspace selection: detect multiple workspace account IDs from oauth tokens and prompt for the correct one.
- prevent refresh/hydration from overwriting selected workspace ids (org/manual choices remain stable).
- persist workspace labels and sources for clearer account listings.

### Added
- `CODEX_AUTH_ACCOUNT_ID` override to force a specific workspace id (non-interactive login).
- troubleshooting guidance for "usage not included in your plan".

## [4.9.6] - 2026-01-27

### Changed

- **tui auth gating**: non-tty/ui auth attempts now return a clear instruction to run `opencode auth login` in a terminal shell.
- **error-mapping simplification**: consolidated entitlement/rate-limit mapping in fetch helpers for a single handling path.

## [4.9.5] - 2026-01-28

### Changed

- When your ChatGPT subscription didn't include Codex access, the plugin kept rotating through all accounts and retrying forever because it thought it was a temporary rate limit.

- You get an immediate, clear error: "This model is not included in your ChatGPT subscription."

### Fixed

- **Account error handling** - Fixes infinite retry loop when account doesn't have access to Codex models. `usage_not_included` errors now return 403 Forbidden instead of being treated as rate limits. Clear error message explaining the subscription issue. Prevents pointless account rotation for non-recoverable errors. (#16, thanks @rainmeter33-jpg!)

## [4.9.4] - 2026-01-27

### Added

- **TUI auth flow disabled** - We now strictly enforce using `opencode auth login` in the terminal for authentication. The UI-based 'Connect' flow is disabled with a clear message to prevent issues with non-interactive environments.

### Changed

- **Strict tool schema validation** - Added filtering of required fields, flattening enums for compatibility with strict models like Claude/Gemini

### Fixed

- **Manual login fixed** - Parsing of OAuth URLs with fragments (`#code=`) is fixed
- **Account switching** - Manual selection is now strictly prioritized over rotation logic
- **apply_patch enabled** - The bridge prompt now allows the `apply_patch` tool

## [4.9.3] - 2026-01-27

### Changed

- **Strict schema validation** - Ported robust tool cleaning logic from `antigravity-auth`. Automatically normalizes tool definitions to prevent errors with strict models (like Claude or Gemini):
  - Filters out `required` fields that are not defined in `properties`
  - Flattens `anyOf` schemas with `const` values into standard `enum` arrays
  - Converts nullable array types into single types with a description note
  - Injects placeholder properties for empty object parameters
- **Enabled apply_patch** - Updated the Codex bridge prompt to allow the `apply_patch` tool

### Fixed

- **Manual login fixed** - The plugin now correctly parses OAuth redirect URLs that use fragments (e.g., `#code=...`). Previously, it only looked for query parameters, which caused manual copy-paste logins to fail with a redirection error.
- **Account switching logic** - Changed account selection logic to strictly respect your manual choice. Before this fix, the hybrid rotation algorithm would sometimes override your selection based on account health or token scores.
- **TUI integration** - Implemented the missing event handler for the TUI. When you click an account in the interface, it now triggers the `openai.account.select` event, saves the new active index to disk, and shows a confirmation toast.
- **Removed API key option** - Removed the 'API Key' authentication method from the list because this plugin is designed for OAuth only.

## [4.9.2] - 2026-01-27

### Fixed

- **Auth prompts moved to TUI** - Avoids readline input conflicts
- **Error payload normalization** - Improves rate-limit handling and rotation

### Notes
- npm publish status: not published on npm (tag/release only).

## [4.9.1] - 2026-01-26

### Changed

- When `opencode auth login` called the authorize function, `inputs` was `undefined`. The code had a conditional check that only entered the multi-account while loop if `inputs` existed with keys. This caused only single-account flow to run.

### Fixed

- **Multi-account flow always runs** - authorize() now always uses multi-account flow regardless of inputs parameter. (#12)

- Removed the conditional check so multi-account flow always runs, allowing users to add multiple ChatGPT accounts.

## [4.9.0] - 2026-01-26

**breaking: package renamed from `opencode-openai-codex-auth-multi` to `oc-chatgpt-multi-auth`**

### Changed
- **package renamed** to bypass opencode's plugin blocking. opencode skips any plugin with `opencode-openai-codex-auth` in the name. the new name `oc-chatgpt-multi-auth` works correctly.
- updated all documentation, configs, and references to use new package name.
- added `multiAccount` flag check in loader to coexist with opencode's built-in auth.

### Fixed
- removed debug console.log statements from loader.
- plugin now properly detects when it should handle auth vs deferring to built-in.

### Notes
update your `~/.config/opencode/opencode.json`:
```json
{
  "plugin": ["oc-chatgpt-multi-auth@latest"]
}
```

## Legacy 4.8.2 (Package-Only) - 2026-01-25

### Changed
- fix node esm plugin load by importing tool from `@opencode-ai/plugin/tool` and ensuring runtime dependency is installed.
- correct package metadata (repository links, update-check package name) and add troubleshooting guidance for plugin install/load.

### Notes
- npm package line: published under `opencode-openai-codex-auth-multi` (legacy package), not `oc-chatgpt-multi-auth`.

## [4.7.0] - 2026-01-25

**feature release**: full session recovery system ported from opencode-antigravity-auth.

### Added
- **session recovery system**: automatic recovery from common api errors that would previously crash sessions:
  - `tool_result_missing`: handles interrupted tool executions (esc during tool run)
  - `thinking_block_order`: fixes corrupted thinking blocks in message history
  - `thinking_disabled_violation`: strips thinking blocks when switching to non-thinking models
- **new recovery module** (`lib/recovery/`):
  - `types.ts` - type definitions for stored messages, parts, and recovery
  - `constants.ts` - storage paths (xdg-compliant) and type sets
  - `storage.ts` - filesystem operations for reading/writing opencode session data
  - `index.ts` - module re-exports
- **main recovery logic** (`lib/recovery.ts`):
  - `detectErrorType()` - identifies recoverable error patterns from api responses
  - `isRecoverableError()` - quick check for recovery eligibility
  - `createSessionRecoveryHook()` - creates hook for session-level error recovery
  - toast notifications during recovery attempts
- **new configuration options**:
  - `sessionRecovery` (default: `true`) - enable/disable session recovery
  - `autoResume` (default: `true`) - auto-resume session after thinking block recovery
  - environment variables: `CODEX_AUTH_SESSION_RECOVERY`, `CODEX_AUTH_AUTO_RESUME`
- **26 new unit tests** for recovery system

### Changed
- **account label format**: changed from `Account N (email)` to `N. email` for cleaner display
- **error response handling**: `handleErrorResponse()` now returns `errorBody` for recovery detection
- enhanced error logging with recoverable error detection in fetch flow

### Notes
- npm package line: published under `opencode-openai-codex-auth-multi` (legacy package), not `oc-chatgpt-multi-auth`.

## [4.6.0] - 2026-01-25

**feature release**: context overflow handling and missing tool result injection.

### Added
- **context overflow handler**: gracefully handles "prompt too long" / context length exceeded errors:
  - returns synthetic sse response with helpful instructions instead of raw 400 error
  - suggests `/compact`, `/clear`, or `/undo` commands to reduce context size
  - prevents opencode session from getting locked on context overflow
  - new module: `lib/context-overflow.ts`
- **missing tool result injection**: automatically handles cancelled tool calls (esc mid-execution):
  - detects orphaned `function_call` items (calls without matching outputs)
  - injects synthetic output: `"Operation cancelled by user"`
  - prevents "missing tool_result" api errors when user cancels mid-tool
  - new function: `injectMissingToolOutputs()` in `lib/request/helpers/input-utils.ts`
- **34 new unit tests** for context overflow and tool injection

### Notes
- npm package line: published under `opencode-openai-codex-auth-multi` (legacy package), not `oc-chatgpt-multi-auth`.

## [4.5.0] - 2026-01-24

### Added
- **strict tool validation**: automatically cleans tool schemas for compatibility with strict models (claude, gemini)
- **auto-update notifications**: get notified when a new version is available
- **22 model presets**: full variant system with reasoning levels (none/low/medium/high/xhigh)

### Changed
- health-aware account rotation with automatic failover
- hybrid selection prefers healthy accounts with available tokens

### Notes
- npm package line: published under `opencode-openai-codex-auth-multi` (legacy package), not `oc-chatgpt-multi-auth`.

## Legacy 4.4.0 (Package-Only) - 2026-01-23

### Added
- **health scoring**: tracks success/failure per account
- **token bucket**: prevents hitting rate limits
- **always retries** when all accounts are rate-limited (waits for reset)

### Notes
new retry options:
- `retryAllAccountsRateLimited` (default: `true`)
- `retryAllAccountsMaxWaitMs` (default: `0` = unlimited)
- `retryAllAccountsMaxRetries` (default: `Infinity`)

### Notes
- npm publish status: not published on npm (tag/release only).

## [4.3.1] - 2026-01-23

### Added

- **openai-accounts-status --json** - Scriptable status output with email/ID labels

### Changed

- **Account labels** - Now prefer email and show ID suffix when available; list/status outputs are columnized for readability
- **Email normalization** - Stored account emails are trimmed/lowercased when present

- @opencode-ai plugin/sdk 1.1.34
- hono 4.11.5
- vitest 4.0.18
- @types/node 25.0.10
- @typescript-eslint 8.53.1

- @andremxmx for reporting the multi-account ID issue (#4)

### Notes
- npm package line: published under `opencode-openai-codex-auth-multi` (legacy package), not `oc-chatgpt-multi-auth`.
