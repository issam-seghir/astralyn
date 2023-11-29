import LineChart from "@components/LineChart";
// import { ChartsHeader, LineChart } from "@components";
import FinancialHeloChart from "@components/FinancialHeloChart";
import { Box, Button, Card, CardContent, CardCover, Divider, IconButton, List, ListItem, Chip, Sheet } from "@mui/joy";
import ScatterChart from "@components/ScatterChart";
import PolarRadarChart from "@components/PolarRadarChart";

function Line() {
	return (
		<Sheet variant="soft" color="primary" sx={{ p: 1 }}>
			<LineChart />
			<Box display={"flex"} justifyContent={"space-evenly"}>
				<ScatterChart />
				<PolarRadarChart />
			</Box>
		</Sheet>
	);
}

export default Line;
