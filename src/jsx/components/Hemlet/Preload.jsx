import { Helmet } from "react-helmet-async";
import { useTheme } from "@mui/joy/styles";

export default function Preload() {
	const theme = useTheme();
	const isDark = theme.palette.mode === "dark";
	const preloadGifDark = "src/assets/gifs/giphy-downsized.gif";
	const preloadGifLight = "src/assets/gifs/looking-water.gif";
	return (
		<Helmet>
			<link rel="preload" href={isDark ? preloadGifDark : preloadGifLight} as="image" />
		</Helmet>
	);
}
