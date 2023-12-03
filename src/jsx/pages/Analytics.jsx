import StockChart from "@components/StockChart";
import { Box, Button, Card, CardContent, CardCover, Divider, IconButton, List, ListItem, Chip, Sheet } from "@mui/joy";
import ScatterChart from "@components/ScatterChart";
import PolarRadarChart from "@components/PolarRadarChart";

function Analytics() {
	return (
		<Sheet variant="outlined" color="primary" sx={{ borderRadius: "1rem" }}>
			<StockChart />
			<Box display={"flex"} justifyContent={"space-evenly"} flexWrap={{ xs: "wrap" }}>
				<ScatterChart />
				<PolarRadarChart />
			</Box>
		</Sheet>
	);
}

export default Analytics;
