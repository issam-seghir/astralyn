import LinearProgress from "@mui/joy/LinearProgress";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { useThemeContext } from "@contexts/ContextProvider";

function Loading() {
	const { language } = useThemeContext();
	const font = language.language === "ar" ? "Cairo" : "Rubik";
	const level = language.language === "ar" ? "body-xl" : "body-xs"
	return (
		<Sheet sx={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100dvh", p: 8 }}>
			<LinearProgress sx={{ maxWidth: "30rem", m: "0 auto", border: "1px solid " }} value={37} thickness={24} size="md" variant="soft" color="primary">
				<Typography level={level} fontFamily={font} fontWeight="bold" textColor="common.white" sx={{ mixBlendMode: "difference", p: "8px" }}>
					{language.language === "ar" ? "تحميل …" : "LOADING…"}
				</Typography>
			</LinearProgress>
		</Sheet>
	);
}

export default Loading;
