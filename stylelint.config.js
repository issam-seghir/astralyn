import { propertyGroups } from "stylelint-config-clean-order";

const propertiesOrder = propertyGroups.map((properties) => ({
	noEmptyLineBetween: true,
	emptyLineBefore: "never",
	properties,
}));

export default {
	extends: ["stylelint-config-standard-scss", "stylelint-config-html", "stylelint-config-clean-order"],
	plugins: ["stylelint-high-performance-animation"],
	overrides: [
		{
			files: ["*.scss", "**/*.scss", "*.sass", "**/*.sass"],
			customSyntax: "postcss-scss",
		},
		{
			files: ["*.html", "**/*.html"],
			customSyntax: "postcss-html",
		},
		{
			files: ["*.md", "**/*.md"],
			customSyntax: "postcss-markdown",
		},
	],
	ignoreFiles: ["**/node_modules/**", "**/dist/**", "**/_reset.scss", "**/index.html", "**/LICENSE"],
	rules: {
		"custom-property-pattern": null,
		"selector-class-pattern": null,
		"selector-id-pattern": null,
		"order/properties-order": [
			propertiesOrder,
			{
				severity: "warning",
				unspecified: "bottomAlphabetical",
			},
		],
		"plugin/no-low-performance-animation-properties": true,
	},
	defaultSeverity: "warning",
};
