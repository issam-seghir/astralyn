import LineChart from "@components/LineChart";
// import { ChartsHeader, LineChart } from "@components";
import FinancialHeloChart from "@components/FinancialHeloChart";
import { Box, Button, Card, CardContent, CardCover, Divider, IconButton, List, ListItem, Chip, Sheet } from "@mui/joy";
import DashedLineChart from "@components/DashedLineChart";

function Line() {
	return (
		<div style={{ width: "100%", height: "100svh" }}>
			<LineChart />
			<Sheet variant="soft" color="primary" sx={{ p: 1 }}>
				<FinancialHeloChart />
				<DashedLineChart />
			</Sheet>
		</div>
	);
}

export default Line;
