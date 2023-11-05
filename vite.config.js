import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { ViteAliases } from "vite-aliases";
import svgr from "vite-plugin-svgr";
// import path from "path";
export default defineConfig(({ command, mode, ssrBuild }) => ({
	base: "/React-Project/",
	// Getting rid of hashes in generated filenames
	filenameHashing: false,
	build: {
		// cssMinify: false, // disable CSS minify only
		// minify: false, // disable CSS/JS minify only
		// change output location
		rollupOptions: {
			output: {
				manualChunks: undefined,
				assetFileNames: "assets/[name].[ext]", // Output assets (e.g., images, SVGs) to the assets folder
				entryFileNames: "assets/[name].js", // Output entry files (e.g., JavaScript) to the root directory
				chunkFileNames: "assets/[name].[ext]", // Output dynamic imports (chunks) to the assets folder
			},
		},
	},

	server: {
		// open the server with google chrome browser
		open: (process.env.BROWSER = "E:\\Apps\\scoop\\apps\\googlechrome-dev\\current\\chrome.exe"),
	},
	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
		// ! dont forget to import path
		/* 		alias: [
			// { find: "@scss", replacement: path.resolve(__dirname, "src/scss") },
			// { find: "@", replacement: path.resolve(__dirname, "./src") },
			// "~gerillass": path.resolve(__dirname, "node_modules/gerillass/scss/gerillass.scss"),
		], */
	},
	plugins: [
		[react()],
		ViteAliases({
			dir: "src",
			prefix: "@",
			deep: true,
			depth: 2,
			adjustDuplicates: true,
			dts: false,
			useConfig: true,
			/**
			 * Disables any terminal output
			 */
			silent: false,
		}),
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
