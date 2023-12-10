module.exports = {
	root: true,
	// Specify the environments where your code will run
	env: {
		browser: true,
		es2023: true,
	},
	// Extend configurations from various ESLint plugins
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
		"plugin:jsx-a11y/recommended",
		"plugin:import/recommended",
		"plugin:jsonc/base", // or use jsonc/recommended-with-(json/jsonc/json5/prettier )
		"plugin:security/recommended",
		"plugin:unicorn/recommended",
		"plugin:sonarjs/recommended",
		"plugin:compat/recommended", // see browse list in package.json
		"prettier", // Make sure this is the last,
	],
	plugins: ["html", "import", "simple-import-sort", "unicorn", "sonarjs", "react-refresh", "jsx-a11y"],
	// Configure settings for certain plugins
	settings: {
		"import/docstyle": ["jsdoc", "tomdoc"],
		// compat plugin : polyfills web api
		polyfills: [
			// Example of marking entire API and all methods and properties as polyfilled
			"Promise",
			// Example of marking specific method of an API as polyfilled
			"WebAssembly.compile",
			// Example of API with no property (i.e. a function)
			"fetch",
			// Example of instance method, must add `.prototype.`
			"Array.prototype.push",
		],
		react: { version: "18.2" },
		"import/resolver": {
			node: {
				extensions: [".js", ".jsx", ".json", ".vue", ".ts", ".tsx", ".d.ts"],
			},
			alias: {
				extensions: [".js", ".jsx", ".json", ".ts", ".tsx", ".d.ts"],
				map: [
					["@", "./src"],
					["@assets", "./src/assets"],
					["@images", "./src/assets/images"],
					["@svg", "./src/assets/svg"],
					["@videos", "./src/assets/videos"],
					["@scss", "./src/scss"],
					["@jsx", "./src/jsx"],
					["@components", "./src/jsx/components"],
					["@contexts", "./src/jsx/contexts"],
					["@data", "./src/jsx/data"],
					["@pages", "./src/jsx/pages"],
					["@routes", "./src/jsx/routes"],
					["@images", "./src/assets/images"],
					["@svg", "./src/assets/svg"],
				],
			},
		},
	},

	overrides: [
		{
			files: [".eslintrc.{js,cjs}"],
			env: {
				node: true,
			},
			parserOptions: {
				sourceType: "script",
			},
		},
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	ignorePatterns: ["**/node_modules/", "**/build/", "**/dist/", "**/.vscode/", "**/.idea/", "**/.git/", "**/coverage/", "**/.cache/", "**/__tests__/", "**/*.config.cjs", "**/*.config.mjs", "**/*.config.js", "**/*.config.ts", "**/*.test.js", "**/*.test.ts", "**/*.spec.js", "**/*.spec.ts"],
	rules: {
		// get ride of import/no-unresolved when using ?react for svgr (svg as component)
		// 'import/no-unresolved': ['error', { ignore: ['\\.svg\\?react$'] }],
		"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
		"react/prop-types": ["warn"],
		// Organize imports using simple-import-sort
		"simple-import-sort/imports": "off",
		"simple-import-sort/exports": "error",
		"no-unused-vars": ["warn", { vars: "all", args: "after-used", ignoreRestSiblings: false }],

		// Ensure imports are at the beginning of the file
		"import/first": "error",
		// Require a newline after import statements
		"import/newline-after-import": "error",
		// Prevent duplicate imports
		"import/no-duplicates": "error",
		// Allow empty named blocks in imports (with a warning)
		"import/no-empty-named-blocks": "warn",
		"sonarjs/no-duplicate-string": "warn",
		"sonarjs/cognitive-complexity": "warn",

		// Disable some unicorn plugin rules
		"unicorn/consistent-function-scoping": "warn",
		"unicorn/numeric-separators-style": "warn",
		"unicorn/prevent-abbreviations": "off",
		"unicorn/no-array-reduce": "off",
		"unicorn/no-array-for-each": "off",
		"unicorn/filename-case": ["off"],
		"unicorn/no-null": "off",
	},
};
