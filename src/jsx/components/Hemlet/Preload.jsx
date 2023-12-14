import { Helmet } from "react-helmet-async";
import { useTheme } from "@mui/joy/styles";

export default function Preload() {
	const theme = useTheme();
	const isDark = theme.palette.mode === "dark";
	// Define paths based on environment
	const preloadGifDark = import.meta.env.DEV ? "src/assets/gifs/giphy-downsized.gif" : "giphy-downsized.gif"; // Adjust the paths accordingly for production

	const preloadGifLight = import.meta.env.DEV ? "src/assets/gifs/looking-water.gif" : "looking-water.gif"; // Adjust the paths accordingly for production

	return (
		<Helmet>
			<link rel="preload" href={isDark ? preloadGifDark : preloadGifLight} as="image" />
		</Helmet>
	);
}
