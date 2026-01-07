import million from "million/compiler";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
// import path from "path";
export default defineConfig(({ command, mode, ssrBuild }) => ({
	base: "/astralyn/",
	// Getting rid of hashes in generated filenames
	filenameHashing: true,
	build: {
		// cssMinify: false, // disable CSS minify only
		// minify: false, // disable CSS/JS minify only
		// change output location
		rollupOptions: {
			output: {
				// manualChunks: undefined,
				// assetFileNames: "assets/[name].[ext]", // Output assets (e.g., images, SVGs) to the assets folder
				// entryFileNames: "assets/[name].js", // Output entry files (e.g., JavaScript) to the root directory
				// chunkFileNames: "assets/[name].[ext]", // Output dynamic imports (chunks) to the assets folder
				// Exclude all GIF files from being hashed
				assetFileNames: (assetInfo) => {
					if (assetInfo.name.endsWith(".gif")) {
						return "[name].[ext]";
					}
					return `[name].[hash].[ext]`;
				},
			},
		},
	},

	server: {
		// open the server with google chrome browser
		// open: (process.env.BROWSER = "E:\\Apps\\scoop\\apps\\googlechrome-dev\\current\\chrome.exe"),
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
			"~gerillass": resolve(__dirname, "node_modules/gerillass/scss/gerillass.scss"),
		},
	},
	// resolve: {
	// 	extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
	// 	// ! dont forget to import path
	// 	/* 		alias: [
	// 		// { find: "@scss", replacement: path.resolve(__dirname, "src/scss") },
	// 		// { find: "@", replacement: path.resolve(__dirname, "./src") },
	// 		// "~gerillass": path.resolve(__dirname, "node_modules/gerillass/scss/gerillass.scss"),
	// 	], */
	// },
	plugins: [
		million.vite({ auto: true }),
		[react()],
		svgr({
			// svgr options: https://react-svgr.com/docs/options/
			svgrOptions: {
				// ...
			},
			// A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should include.
			include: "**/*.svg",
		}),
	],
}));
