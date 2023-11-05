import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import HomeIcon from "@mui/icons-material/Home";
import Box from "@mui/joy/Box";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";

import OrderList from "./OrderList";
import OrderTable from "./OrderTable";

export default function MainContent() {
	return (
		<Sheet
			component="main"
			sx={{
				px: {
					xs: 2,
					md: 6,
				},
				pt: 3,
				pb: {
					xs: 2,
					sm: 2,
					md: 3,
				},
				flex: 1,
				display: "flex",
				flexDirection: "column",
				minWidth: 0,
				height: "100dvh",
				gap: 1,
			}}
		>
			<Breadcrumbs size="sm" separator="›" aria-label="breadcrumbs">
				<Link color="neutral" href="#" aria-label="Home">
					<HomeIcon />
				</Link>
				<Link underline="hover" color="neutral" href="#some-link" fontSize={12} fontWeight={500}>
					Dashboard
				</Link>
				<Typography color="primary" fontWeight={500} fontSize={12}>
					Orders
				</Typography>
			</Breadcrumbs>
			<Box py={2.5} display={"flex"} justifyContent={"space-between"}>
				<Typography level="h2">Orders</Typography>
				<Button color="primary" startDecorator={<DownloadRoundedIcon />} size="sm">
					Download PDF
				</Button>
			</Box>
			<OrderTable />
			<OrderList />
		</Sheet>
	);
}
