#!/usr/bin/env bash
# Verify the project: install → typecheck → lint → test → build.
# Prints a PASS / FAIL / SKIPPED line per stage and exits non-zero if any stage failed.
# Stages without a matching package.json script are SKIPPED, not failed.
# Lint fails only on errors; warning counts are compared to the baseline for information.
set -u

cd "$(dirname "$0")/.." || exit 1

# Warning counts on main before the upgrade campaign (2026-10-22).
BASELINE_JS_WARNINGS=861
BASELINE_STYLE_WARNINGS=170

LOG_DIR="${VERIFY_LOG_DIR:-node_modules/.verify}"
mkdir -p "$LOG_DIR"

declare -a NAMES=() RESULTS=() NOTES=()
record() { NAMES+=("$1"); RESULTS+=("$2"); NOTES+=("${3:-}"); }

has_script() {
	node -e 'process.exit(require("./package.json").scripts?.[process.argv[1]] ? 0 : 1)' "$1"
}

run_stage() { # name, log file, command...
	local name="$1" log="$2"
	shift 2
	echo "==> $name"
	if "$@" >"$log" 2>&1; then return 0; fi
	echo "    failed, last lines of $log:"
	tail -n 25 "$log" | sed 's/^/    /'
	return 1
}

# 1. install
if run_stage install "$LOG_DIR/install.log" pnpm install --frozen-lockfile; then
	record install PASS
else
	record install FAIL "lockfile out of sync or install error"
fi

# 2. typecheck
if has_script typecheck; then
	if run_stage typecheck "$LOG_DIR/typecheck.log" pnpm typecheck; then record typecheck PASS; else record typecheck FAIL; fi
else
	record typecheck SKIPPED "no typecheck script (JS project)"
fi

# 3. lint (eslint + stylelint, counted separately)
if has_script lint; then
	lint_status=PASS
	run_stage "lint:js" "$LOG_DIR/lint-js.log" pnpm lint:js || lint_status=FAIL
	run_stage "lint:style" "$LOG_DIR/lint-style.log" pnpm exec stylelint "src/**/*.{html,css,scss}" "*.html" || lint_status=FAIL
	js_warn=$(grep -oE '[0-9]+ warnings?\)' "$LOG_DIR/lint-js.log" | tail -1 | grep -oE '^[0-9]+')
	style_warn=$(grep -oE '[0-9]+ problems?' "$LOG_DIR/lint-style.log" | tail -1 | grep -oE '^[0-9]+')
	record lint "$lint_status" "js warnings ${js_warn:-0} (baseline $BASELINE_JS_WARNINGS), style warnings ${style_warn:-0} (baseline $BASELINE_STYLE_WARNINGS)"
else
	record lint SKIPPED "no lint script"
fi

# 4. test
if has_script test; then
	if run_stage test "$LOG_DIR/test.log" pnpm test; then record test PASS; else record test FAIL; fi
else
	record test SKIPPED "no test script"
fi

# 5. build
if has_script build; then
	if run_stage build "$LOG_DIR/build.log" pnpm build; then record build PASS; else record build FAIL; fi
else
	record build SKIPPED "no build script"
fi

echo
echo "verify summary ($(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo '?'))"
failed=0
for i in "${!NAMES[@]}"; do
	printf '  %-10s %-8s %s\n' "${NAMES[$i]}" "${RESULTS[$i]}" "${NOTES[$i]}"
	[ "${RESULTS[$i]}" = FAIL ] && failed=1
done
echo "  logs: $LOG_DIR"
if [ "$failed" -eq 0 ]; then echo "VERIFY: PASS"; else echo "VERIFY: FAIL"; fi
exit "$failed"
