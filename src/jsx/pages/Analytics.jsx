import StockChart from "@components/StockChart";
import { Box, Button, Card, CardContent, CardCover, Divider, IconButton, List, ListItem, Chip, Sheet } from "@mui/joy";
import ScatterChart from "@components/ScatterChart";
import PolarRadarChart from "@components/PolarRadarChart";

function Analytics() {
	return (
		<Sheet variant="outlined" color="primary" sx={{ borderRadius: "1rem" }}>
			<CardCover sx={{ backdropFilter: "blur(16px) saturate(180%)", borderRadius:"1rem", overflow:"hidden" }}>
				<svg viewBox="0 0 800 800" opacity="0.92" preserveAspectRatio="xMidYMid slice">
					<defs>
						<filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
							<feGaussianBlur stdDeviation="130" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur>
						</filter>
					</defs>
					<g filter="url(#bbblurry-filter)">
						<ellipse rx="232.5" ry="125" cx="709.9019508561539" cy="34.70028654567864" fill="var(--joy-palette-background-cardSvg)"></ellipse>
						<ellipse rx="232.5" ry="125" cx="73.33563288344146" cy="662.326581865081" fill="var(--joy-palette-background-cardSvg)"></ellipse>
					</g>
				</svg>
			</CardCover>
			<StockChart />
			<Box display={"flex"} justifyContent={"space-evenly"} flexWrap={{ xs: "wrap" }}>
				<ScatterChart />
				<PolarRadarChart />
			</Box>
		</Sheet>
	);
}

export default Analytics;
