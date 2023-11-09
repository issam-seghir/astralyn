import LinearProgress from "@mui/joy/LinearProgress";
import Typography from "@mui/joy/Typography";
import { useState } from "react";

const [progress, setProgress] = useState(0);
const Loading = () => {
	return (
		<div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
			<LinearProgress determinate value={progress} thickness={32} size="md" variant="soft" color="primary" value={37}>
				<Typography level="body-xs" fontWeight="xl" textColor="common.white" sx={{ mixBlendMode: "difference" }}>
					LOADING… {`${Math.round(progress)}%`}
				</Typography>
			</LinearProgress>
		</div>
	);
};

export default Loading;
