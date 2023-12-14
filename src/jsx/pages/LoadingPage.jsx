import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { useThemeContext } from "@contexts/ContextProvider";

function Loading() {
	const { language } = useThemeContext();
	// const level = language.language === "ar" ? "body-xl" : "body-xs";
	return (
		<Sheet sx={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100dvh" }}>
			<Typography level={"body-sm"} fontWeight="bold" color="primary" sx={{ p: "8px" }}>
				{language.language === "ar" ? "تحميل …" : "LOADING…"}
			</Typography>
		</Sheet>
	);
}

export default Loading;
