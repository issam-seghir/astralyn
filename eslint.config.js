import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import prettier from "eslint-config-prettier";
import compat from "eslint-plugin-compat";
import html from "eslint-plugin-html";
import importPlugin from "eslint-plugin-import";
import jsonc from "eslint-plugin-jsonc";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import security from "eslint-plugin-security";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import sonarjs from "eslint-plugin-sonarjs";
import unicorn from "eslint-plugin-unicorn";
import globals from "globals";

const aliasMap = [
	["@", "./src"],
	["@assets", "./src/assets"],
	["@images", "./src/assets/images"],
	["@svg", "./src/assets/svg"],
	["@videos", "./src/assets/videos"],
	["@scss", "./src/scss"],
	["@abstracts", "./src/scss/abstracts"],
	["@base", "./src/scss/base"],
	["@scssComponents", "./src/scss/scssComponents"],
	["@utilities", "./src/scss/utilities"],
	["@jsx", "./src/jsx"],
	["@components", "./src/jsx/components"],
	["@contexts", "./src/jsx/contexts"],
	["@data", "./src/jsx/data"],
	["@utils", "./src/jsx/utils"],
	["@pages", "./src/jsx/pages"],
	["@routes", "./src/jsx/routes"],
];

export default defineConfig([
	globalIgnores(["**/node_modules/", "**/build/", "**/dist/", "**/.vscode/", "**/.idea/", "**/.git/", "**/coverage/", "**/.cache/", "**/__tests__/", "**/lighthouse_results/", "**/.unlighthouse/", "**/*.config.cjs", "**/*.config.mjs", "**/*.config.js", "**/*.config.ts", "**/*.test.js", "**/*.test.ts", "**/*.spec.js", "**/*.spec.ts"]),
	{
		files: ["**/*.{js,jsx,ts,tsx,html}"],
		extends: [
			js.configs.recommended,
			react.configs.flat.recommended,
			react.configs.flat["jsx-runtime"],
			reactHooks.configs.flat.recommended,
			jsxA11y.flatConfigs.recommended,
			importPlugin.flatConfigs.recommended,
			security.configs.recommended,
			unicorn.configs.recommended,
			sonarjs.configs.recommended,
			compat.configs["flat/recommended"],
			reactRefresh.configs.vite,
		],
		plugins: {
			html,
			"simple-import-sort": simpleImportSort,
		},
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			globals: {
				...globals.browser,
			},
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		settings: {
			"import/docstyle": ["jsdoc", "tomdoc"],
			polyfills: ["Promise", "WebAssembly.compile", "fetch", "Array.prototype.push"],
			react: { version: "19.2" },
			"import/resolver": {
				node: {
					extensions: [".js", ".jsx", ".json", ".vue", ".ts", ".tsx", ".d.ts"],
				},
				alias: {
					extensions: [".js", ".jsx", ".json", ".ts", ".tsx", ".d.ts"],
					map: aliasMap,
				},
			},
		},
		rules: {
			"react/prop-types": ["warn"],
			"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
			"react-hooks/static-components": "off",
			"react-hooks/use-memo": "off",
			"react-hooks/preserve-manual-memoization": "off",
			"react-hooks/incompatible-library": "off",
			"react-hooks/immutability": "off",
			"react-hooks/globals": "off",
			"react-hooks/refs": "off",
			"react-hooks/set-state-in-effect": "off",
			"react-hooks/error-boundaries": "off",
			"react-hooks/purity": "off",
			"react-hooks/set-state-in-render": "off",
			"react-hooks/unsupported-syntax": "off",
			"react-hooks/config": "off",
			"react-hooks/gating": "off",
			"simple-import-sort/imports": "off",
			"simple-import-sort/exports": "error",
			"no-unused-vars": ["warn", { vars: "all", args: "after-used", ignoreRestSiblings: false }],
			"import/first": "error",
			"import/newline-after-import": "error",
			"import/no-duplicates": "error",
			"import/no-empty-named-blocks": "warn",
			"sonarjs/no-duplicate-string": "warn",
			"sonarjs/cognitive-complexity": "warn",
			"unicorn/consistent-function-scoping": "warn",
			"unicorn/numeric-separators-style": "warn",
			"unicorn/prevent-abbreviations": "off",
			"unicorn/no-array-reduce": "off",
			"unicorn/no-array-for-each": "off",
			"unicorn/no-for-each": "off",
			"unicorn/filename-case": "off",
			"unicorn/no-null": "off",
			"unicorn/prefer-unicode-code-point-escapes": "off",
			"unicorn/no-zero-fractions": "off",
			"unicorn/name-replacements": "off",
			"unicorn/no-top-level-assignment-in-function": "off",
			"unicorn/default-export-style": "off",
			"unicorn/no-this-outside-of-class": "off",
			"unicorn/prefer-split-limit": "off",
			"unicorn/prefer-https": "off",
			"unicorn/consistent-boolean-name": "off",
			"unicorn/prefer-structured-clone": "off",
			"unicorn/no-computed-property-existence-check": "off",
			"unicorn/prefer-early-return": "off",
			"unicorn/prefer-spread": "off",
			"unicorn/prefer-await": "off",
			"unicorn/no-useless-template-literals": "off",
			"unicorn/no-top-level-side-effects": "off",
			"unicorn/no-invalid-remove-event-listener": "off",
			"unicorn/consistent-compound-words": "off",
			"unicorn/single-line-block-comment-style": "off",
			"unicorn/prefer-string-raw": "off",
			"unicorn/prefer-number-coercion": "off",
			"unicorn/prefer-logical-operator-over-ternary": "off",
			"unicorn/prefer-classlist-toggle": "off",
			"unicorn/no-useless-else": "off",
			"unicorn/no-unsafe-string-replacement": "off",
			// unicorn 77 added to recommended as error; flags \uXXXX escapes in Syncfusion sample data.
			"unicorn/prefer-literal-ascii": "warn",
			// unicorn 77 added to recommended as error; whitespace-only, Prettier owns formatting.
			"unicorn/no-leading-empty-lines": "off",
			// unicorn 77 enabled in recommended (was off) as error.
			"unicorn/no-asterisk-prefix-in-documentation-comments": "warn",
			// unicorn 78 widened it to flag a declaration followed by an assignment (#3851).
			"unicorn/no-immediate-mutation": "warn",
			"sonarjs/no-unused-vars": "warn",
			"sonarjs/no-dead-store": "warn",
			"sonarjs/no-nested-functions": "warn",
			"sonarjs/no-nested-conditional": "warn",
			"sonarjs/no-globals-shadowing": "warn",
			"sonarjs/unused-import": "warn",
			"sonarjs/no-clear-text-protocols": "warn",
			"sonarjs/no-all-duplicated-branches": "warn",
		},
	},
	jsonc.configs["flat/base"],
	prettier,
]);
