import react from "@vitejs/plugin-react";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
	base: "/astralyn/",
	build: {
		rolldownOptions: {
			output: {
				assetFileNames: (assetInfo) => {
					if (assetInfo.names?.some((name) => name.endsWith(".gif")) || assetInfo.name?.endsWith(".gif")) {
						return "[name][extname]";
					}
					return `[name].[hash][extname]`;
				},
			},
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				loadPaths: [resolve(__dirname, "node_modules")],
				silenceDeprecations: ["import", "if-function", "global-builtin"],
			},
		},
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "src"),
			"@scss": resolve(__dirname, "src/scss"),
			"@jsx": resolve(__dirname, "src/jsx"),
			"@contexts": resolve(__dirname, "src/jsx/contexts"),
			"@pages": resolve(__dirname, "src/jsx/pages"),
			"@components": resolve(__dirname, "src/jsx/components"),
			"@data": resolve(__dirname, "src/jsx/data"),
			"@utils": resolve(__dirname, "src/jsx/utils"),
			"@assets": resolve(__dirname, "src/assets"),
			"~gerillass": resolve(__dirname, "node_modules/gerillass/scss/_gerillass.scss"),
		},
	},
	plugins: [
		react(),
		svgr({
			include: "**/*.svg",
		}),
	],
});
