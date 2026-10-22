# Dependency upgrade campaign — 2026-10-22

Baseline on `main` (84cbba3), Node 24.21.0, pnpm 10.33.0:

- `pnpm audit`: 41 advisories (1 low, 15 moderate, 25 high), all transitive except `vite`.
- typecheck: SKIPPED (JS project). test: SKIPPED (no test script).
- lint: PASS, 0 errors — 861 eslint warnings, 170 stylelint warnings.
- build: PASS.

Clusters: framework, build, syncfusion, lint, styles, maps (then transitive security overrides on main).

## Status log
