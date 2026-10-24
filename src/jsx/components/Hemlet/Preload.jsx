import { useColorScheme } from "@mui/joy/styles";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Helmet } from "react-helmet-async";

export default function Preload() {
	const { mode, systemMode } = useColorScheme();
	const isDark = (mode === "system" ? systemMode : mode) === "dark";
	// The animated logo text (the only user of these GIFs) is turned off at this width in SideBare.jsx
	const isMobileDevice = useMediaQuery("only screen and (max-width : 470px)");

	if (isMobileDevice) {
		return null;
	}
	// Define paths based on environment
	const preloadGifDark = import.meta.env.DEV ? "src/assets/gifs/giphy-downsized.gif" : "giphy-downsized.gif"; // Adjust the paths accordingly for production

	const preloadGifLight = import.meta.env.DEV ? "src/assets/gifs/looking-water.gif" : "looking-water.gif"; // Adjust the paths accordingly for production

	return (
		<Helmet>
			<link rel="preload" href={isDark ? preloadGifDark : preloadGifLight} as="image" />
		</Helmet>
	);
}
