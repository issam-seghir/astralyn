import LinearProgress from "@mui/joy/LinearProgress";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";

function Loading() {
	return (
		<Sheet sx={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100dvh" }}>
			<LinearProgress sx={{ maxWidth: "40rem", m: "0 auto", border: "1px solid " }} value={37} thickness={24} size="md" variant="soft" color="primary">
				<Typography level="body-xs" fontWeight="x" textColor="common.white" sx={{ mixBlendMode: "difference", p: "8px" }}>
					LOADING…
				</Typography>
			</LinearProgress>
		</Sheet>
	);
}

export default Loading;
