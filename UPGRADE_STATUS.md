# Dependency upgrade campaign — 2026-10-22

Baseline on `main` (84cbba3), Node 24.21.0, pnpm 10.33.0:

- `pnpm audit`: 41 advisories (1 low, 15 moderate, 25 high), all transitive except `vite`.
- typecheck: SKIPPED (JS project). test: SKIPPED (no test script).
- lint: PASS, 0 errors — 861 eslint warnings, 170 stylelint warnings.
- build: PASS.

Clusters: framework, build, syncfusion, lint, styles, maps (then transitive security overrides on main).

## Status log
- **build** 14:38 — install: PASS — pnpm install in wt-astralyn-build (vite 8.2.1, plugin-react 6.0.5, svgr 5.2.0)
- **lint** 14:38 — install: PASS — frozen-lockfile install in wt-astralyn-lint (base 5bf7842)
- **styles** 14:38 — install (base): PASS — pnpm install in wt-astralyn-styles, gerillass 1.3.2 / sass 1.102.0 / postcss-preset-env 11.4.0
- **maps** 14:38 — install (baseline, frozen lockfile): PASS — worktree wt-astralyn-maps on upgrade/maps @ 5bf7842, leaflet-geosearch 4.4.0 installed
- **framework** 14:39 — install (baseline, worktree): PASS — pnpm install OK on 5bf7842; react 19.2.8, react-router 8.3.0, marked 18.0.10
- **syncfusion** 14:39 — install (baseline, worktree): PASS — pnpm install on main 5bf7842 lockfile
- **styles** 14:42 — verify (base 5bf7842): PASS — lint 861 js / 170 style warnings (= baseline), build PASS, no Sass deprecation warnings; baseline CSS saved (index 4,597.07 kB, Map 20.44 kB); note scripts/verify.sh is mode 100644, run via `bash scripts/verify.sh`
- **build** 14:42 — verify (vite 8.3.5 + plugin-react 6.1.2): PASS — install/lint/build PASS; js warnings 861 (=baseline), style 170 (=baseline)
- **build** 14:42 — commit 88a591b: PASS — vite ^8.3.5, @vitejs/plugin-react ^6.1.2 (package.json + pnpm-lock.yaml)
- **framework** 14:42 — verify (react 19.3.1, @types 19.3.0, react-router 8.5.0, marked 18.1.1): PASS — lint 861 js / 170 style warnings (= baseline), build PASS; only peer warnings are pre-existing eslint/stylelint ones
- **framework** 14:42 — commit e76e112: PASS — package.json + pnpm-lock.yaml on upgrade/framework
- **maps** 14:43 — pnpm add leaflet-geosearch@^5.1.0: PASS — 4.4.0 → 5.1.0; lockfile also moves optional @googlemaps/js-api-loader 1.16.10 → 2.1.3 and adds @types/google.maps 3.66.7 (new direct dep of v5)
- **maps** 14:43 — verify (deps bumped, no code change): PASS — lint js 861/861, style 170/170 warnings; build PASS, geosearch CSS present in dist/Map.*.css
- **maps** 14:43 — commit deps: PASS — c66824a "Upgrade leaflet-geosearch to 5.1.0" (package.json + pnpm-lock.yaml)
- **syncfusion** 14:43 — verify (baseline, Syncfusion 34.2.x): PASS — lint 0 errors, 861 js / 170 style warnings; build PASS
- **framework** 14:44 — final verify on e76e112: PASS — install/lint/build PASS, warnings 861/170 unchanged; all cluster packages upgraded, nothing held back
- **lint** 14:44 — verify (baseline in worktree): PASS — 861 eslint / 170 stylelint warnings, 0 errors, build PASS
- **lint** 14:44 — verify (eslint 10.13.0 + jsonc/sonarjs/html/security/react-refresh/globals minors): PASS — 859 eslint (−2, sonarjs/no-nested-functions 2→0) / 170 stylelint, 0 errors, build PASS
- **lint** 14:44 — commit 2c2f4ce: PASS — eslint + minor plugin bumps
- **maps** 14:45 — final: PASS — leaflet-geosearch 5.1.0 on upgrade/maps @ c66824a; Map.jsx usage (OpenStreetMapProvider(), GeoSearchControl({provider, style:"bar"}), CSS import, SCSS overrides) checked against v5 source, no code change needed; warnings unchanged (861/170). Note: v5.0.0/5.1.0 were both published today (SLSA provenance via GitHub Actions); scripts/verify.sh is mode 100644 in git, run with `bash`
- **styles** 14:45 — verify (sass 1.106.1 + postcss-preset-env 11.6.1): PASS — lint 861/170 (= baseline), build PASS, compiled CSS byte-identical to base (same hashes), no new Sass deprecations
- **styles** 14:45 — commit 7c9f62d: PASS — sass 1.102.0→1.106.1, postcss-preset-env 11.4.0→11.6.1
- **coordinator** 15:46 — merge framework: PASS — merged upgrade/framework into main (b761410), verify PASS, warnings 861/170 unchanged
- **coordinator** 15:46 — maps: HELD BACK — upgrade/maps passes verify but is not merged (see note below)

### Why we are staying on leaflet-geosearch 4.4.0 (for now)
Verify passes on `upgrade/maps` (c66824a) and no code changes were needed, but the release is too fresh to ship:
`npm view leaflet-geosearch time` → 4.4.0 2026-03-17, **5.0.0 2026-10-22T12:44Z, 5.1.0 2026-10-22T13:29Z** (checked 13:45Z, ~17 min after publish).
Two majors within 45 minutes after 7 months of silence, zero field time, and the search control can't be exercised in a browser here (no tests, no dev server).
Provenance is present (SLSA v1, maintainer smeijer), so this is a soak-period hold, not a red flag. Re-check in ~2 weeks: `git merge upgrade/maps`, then a manual search on the Map page.
- **build** 14:46 — verify (rollupOptions→rolldownOptions): PASS — dist byte-identical (77 files sha256); js warnings 861, style 170 (=baseline)
- **build** 14:47 — commit 67636d2: PASS — vite.config.js build.rollupOptions → build.rolldownOptions (deprecated alias, output identical)
- **build** 14:47 — final: PASS — vite 8.2.1→8.3.5, @vitejs/plugin-react 6.0.5→6.1.2, svgr 5.2.0 kept (peer vite >=3); audit 41→35, 0 vite advisories; commits 88a591b, 67636d2 on upgrade/build
- **syncfusion** 14:47 — pnpm add 12 @syncfusion/* @^35: PASS — all ej2-* resolve to one 35.1.37–35.1.41 set, 0 v34 left; umbrella @syncfusion/ej2 now pulls ej2-collaborator(-server) → ~80 new server-side transitives (express 5, ioredis 6, @microsoft/signalr), none in the client bundle
- **syncfusion** 14:47 — verify (deps bumped, no code change): PASS — lint js 861/861, style 170/170; build PASS; dist total +2.7% (CSS +6.3%)
- **lint** 14:47 — verify (unicorn 78.0.0, config unchanged): FAIL — 175 new errors: prefer-literal-ascii 162 (v77), no-leading-empty-lines 6 (v77), no-immediate-mutation 6 (widened v78), no-asterisk-prefix-in-documentation-comments 1 (v77); configuring next
- **syncfusion** 14:47 — commit deps: PASS — 44ab233 "Upgrade Syncfusion packages to 35.1.x" (package.json + pnpm-lock.yaml)
- **lint** 14:48 — verify (unicorn 78.0.0 + config): PASS — 0 errors; eslint 859 → 1028 warnings (+162 prefer-literal-ascii, +6 no-immediate-mutation, +1 no-asterisk-prefix; no-leading-empty-lines off), stylelint 170, build PASS
- **lint** 14:48 — commit b4e7964: PASS — unicorn 78 + 4 rule severities in eslint.config.js
- **coordinator** 14:49 — merge build: PASS — merged upgrade/build (1366b13; lockfile conflict resolved by regenerating), verify PASS, audit 41 → 35
- **lint** 14:50 — verify (stylelint 17.16.0): PASS — 0 errors; stylelint 170 warnings (unchanged, identical per-rule), eslint 1028, build PASS; config-* peers all accept ^17 (stylelint-order 6.0.4 peer warning is pre-existing/transitive)
- **lint** 14:50 — commit 7e28230: PASS — stylelint 17.16.0
- **lint** 14:50 — final: PASS — branch upgrade/lint at 7e28230 (2c2f4ce, b4e7964, 7e28230); all 9 packages at latest, nothing held back; lint 0 errors, eslint 861→1028 warnings, stylelint 170→170, build PASS
- **styles** 14:51 — verify (gerillass 3.0.0, first try, uncommitted): FAIL — build: [sass] expected "." in gerillass/scss/internal/_image-value.scss:52; Vite 8.2.1 rebaseUrls rewrites the string literal "url(\"#{$text}\")" in the package source (Vite bug triggered by gerillass 3); working on a fix
- **styles** 14:51 — verify (sass 1.106.1→1.106.0 per 24h soak rule): PASS — lint 861/170 (= baseline), build PASS, CSS byte-identical to base; 1.106.1 fixes a 1.106.0 crash on [attr=""] (reproduced), src/scss has none, so 1.106.0 chosen over 1.105.2
- **styles** 14:51 — commit a143857: PASS — sass specifier ~1.106.0, lockfile resolves 1.106.0
- **coordinator** 14:51 — merge lint: PASS — merged upgrade/lint (e2d87ca), verify PASS, eslint warnings 1028 (+167 from new unicorn rules set to warn), audit 35
- **syncfusion** 14:53 — API/breaking-change review: PASS — v35 notes list only "styles no longer in component packages" (app imports umbrella @syncfusion/ej2/material3-dark.css, still shipped); 209 named imports resolve; no public prop/event/default removed; loadCldr/L10n/setCulture unchanged; no code changes needed
- **syncfusion** 14:53 — final verify @44ab233: PASS — lint js 861/861, style 170/170; build PASS; dist JS+CSS 15.58 MB → 16.01 MB (+2.7%)
- **syncfusion** 14:53 — RUNTIME RISK (license): v35 validator requires key upper-version ≥ 35; a key generated for v34 shows "key and package versions do not match" banner — owner must generate a v35 key (free Community License) and update VITE_SYNCFUSION_LICENSE_KEY; existing key not decoded (permission denied)
- **coordinator** 14:54 — syncfusion: HELD BACK — upgrade/syncfusion (44ab233) passes verify but is not merged (see note below)

### Why we are staying on Syncfusion 34.2.x (for now)
Verify passes on `upgrade/syncfusion` with no code changes, but merging it would ship a visible regression we can't fix from here:
- **License key:** v35's validator (`@syncfusion/ej2-base/src/validate-lic.js`) hard-codes `version = '35'` and rejects keys for older majors, showing a "The included Syncfusion® key and package versions do not match" banner. The app registers `VITE_SYNCFUSION_LICENSE_KEY` (src/jsx/main.jsx:30), fed in CI from the `SYNCFUSION_LICENSE_KEY` repo secret (.github/workflows/static.yml:22). A v35 key must be generated by the owner first (free Community License).
- **Install surface:** `@syncfusion/ej2` 35 now depends on `ej2-collaborator` / `ej2-collaborator-server` (~80 server packages: express 5, ioredis, @microsoft/signalr); lockfile +1416/−647 lines; `pnpm audit` on the branch rises 41 → 42. None of it reaches the bundle — the app uses `@syncfusion/ej2` only for `material3-dark.css`.
To land it: generate a v35 key, update `.env` and the repo secret, merge `upgrade/syncfusion`, check no banner appears. Consider replacing `@syncfusion/ej2` with the per-theme styles package to drop the server deps.
- **styles** 14:54 — verify (gerillass 3.0.0 via @use/@forward "pkg:gerillass" + NodePackageImporter in vite.config.js): PASS — lint 861/170 (= baseline), build PASS, CSS byte-identical to base, 0 build deprecation warnings (unsilenced import deprecations 86→0)
- **styles** 14:54 — commit 4fb1ccd: PASS — gerillass 1.3.2→3.0.0 + SCSS module migration; js-yaml@3 and sprintf-js advisories gone (audit 41→39; remaining js-yaml@4.3.1 is via stylelint>cosmiconfig, not this cluster)
- **styles** 14:54 — final: PASS — branch upgrade/styles at 4fb1ccd (7c9f62d, a143857, 4fb1ccd); sass 1.106.0 (~1.106.0, soak rule), postcss-preset-env 11.6.1, gerillass 3.0.0; compiled CSS byte-identical to base; lint 861/170 unchanged; nothing held back
- **coordinator** 14:56 — merge styles: PASS — merged upgrade/styles (c0e1f45), sass pinned exactly 1.106.0, verify PASS, CSS byte-identical, audit 33
- **coordinator** 14:58 — security overrides: PASS — 9 scoped pnpm overrides, audit 33 → 1 (braces, no fix published), verify PASS, CSS identical

## Result

Final verify on `main`: install PASS · typecheck SKIPPED · lint PASS (0 errors; 1028 eslint / 170 stylelint warnings) · test SKIPPED · build PASS.
`pnpm audit`: **41 → 1** (25 high, 15 moderate, 1 low → 1 high).

### Upgraded
| Package | Old | New |
|---|---|---|
| react, react-dom | 19.2.8 | 19.3.1 |
| @types/react / @types/react-dom | 19.2.18 / 19.2.4 | 19.3.0 / 19.3.0 |
| react-router | 8.3.0 | 8.5.0 |
| marked | 18.0.10 | 18.1.1 |
| vite | 8.2.1 | 8.3.5 |
| @vitejs/plugin-react | 6.0.5 | 6.1.2 |
| eslint | 10.8.1 | 10.13.0 |
| eslint-plugin-unicorn | 73.0.0 | 78.0.0 |
| eslint-plugin-html / -jsonc / -security / -sonarjs / -react-refresh | 8.1.4 / 3.4.1 / 4.0.1 / 4.2.0 / 0.5.4 | 8.2.1 / 3.4.2 / 4.2.0 / 4.2.2 / 0.5.7 |
| globals | 17.11.0 | 17.13.0 |
| stylelint | 17.14.1 | 17.16.0 |
| sass | 1.102.0 | 1.106.0 (exact pin) |
| postcss-preset-env | 11.4.0 | 11.6.1 |
| gerillass | 1.3.2 | 3.0.0 |

Code/config changes: `build.rollupOptions` → `rolldownOptions`; gerillass loaded via `@use "pkg:gerillass"` + Sass `NodePackageImporter`; new unicorn 77/78 recommended rules set to warn/off in eslint.config.js.
Transitive fixes via scoped `pnpm.overrides`: axios, follow-redirects, brace-expansion (1/2/5), fast-uri, js-yaml 4, postcss-selector-parser, source-map-js.

### Held back
- **leaflet-geosearch 4.4.0** — 5.x published today; soak first. Ready on `upgrade/maps`.
- **Syncfusion 34.2.x** — needs a v35 license key first. Ready on `upgrade/syncfusion`.
- **sass 1.106.1** — under 24h old; pinned at 1.106.0, unpin later.
- **braces 3.0.3** (GHSA-vfj7-8cjw-p6xm) — no patched release exists; dev-only via stylelint → micromatch.

### Not verified (no tests, no dev server)
Runtime click-through: route navigation, Editor markdown preview, HMR in `pnpm dev`.

## End-to-end check (2026-10-22, Playwright against the owner's dev server on :5174)

All passed on `main` (a1eaeb2):
- All 11 routes render with no uncaught errors or failed requests; sidebar navigation is client-side (no reloads).
- Orders grid sort (asc/desc) and paging; Editor live markdown preview (headings, lists, GFM table, autolink, fenced code); English ⇄ Arabic switch (RTL, localized grid/pager/titles); map search (OSM suggestions, zoom + marker); React Fast Refresh (edit applied in place, no reload; edit reverted).
- Production builds of 84cbba3 (pre-campaign) and main, compared page by page: identical console output and DOM counts on all 11 routes.

Pre-existing issues found (same on 84cbba3, not caused by this campaign):
- **Syncfusion license banner on every page.** `.env` holds a key from Dec 2023 (v23-era); 84cbba3 moved Syncfusion v23 → v34, so the live site already shows "key and package versions do not match". **Correction to the hold-back note above:** merging v35 would not introduce the banner — a new key is needed either way. Generate a v35 key and merge `upgrade/syncfusion` in the same step.
- Visit Analytics → leave → switch language: 6 TypeErrors from the unmounted StockChart's RangeNavigator (`cartesianChartRefresh` / `setAttribute` of null).
- Orders: `showDeleteConfirmDialog` / `showConfirmDialog` passed to a DOM element; Orders/Employees grids: editing enabled without a primary-key column; Tracker: `Highlight` chart module not injected.
