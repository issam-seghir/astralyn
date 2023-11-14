// import { Button, LineChart, Pie, SparkLine, Stacked } from "../components";
import { useThemeContext } from "@contexts/ContextProvider";
import { Box, Button, Card, CardActions, CardContent, CardCover, Chip, Divider, Sheet } from "@mui/joy";
import Typography from "@mui/joy/Typography";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";

import BarColumnChart from "@components/BarColumnChart";
import DashedLineChart from "@components/DashedLineChart";
import FinancialHeloChart from "@components/FinancialHeloChart";
import { useRef } from "react";

const Ecommerce = () => {
	const { currentColor, currentMode } = useThemeContext();
	const chartInstance = useRef();
function clickHandler() {
	console.log(chartInstance.current);
}
	return (
		<Box sx={{ my: 12, display: "flex", flexDirection: "column", gap: 4 }}>
			<Box variant="soft" component="ul" sx={{ display: "flex", flexWrap: { xs: "wrap", xl: "nowrap" }, gap: 2, "--Icon-fontSize": "4.5rem" }}>
				<Card variant="soft" color="neutral" orientation="vertical" size="lg" sx={{ flexBasis: { xs: "100%", lg: "20rem" }, alignItems: "flex-start" }}>
					<CardCover>
						<img src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800" srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x" loading="lazy" alt="" />
					</CardCover>
					<CardContent sx={{ mb: 4 }}>
						<Typography level="title-md">Earnings</Typography>
						<Typography level="h3">$63,448.78</Typography>
					</CardContent>
					<Button size="lg" color="primary" variant="soft">
						Download
					</Button>
				</Card>
				<Card component="li" color="neutral" orientation="vertical" size="lg" variant="soft" sx={{ flex: "30%", alignItems: "flex-start" }}>
					<CardCover>
						<img src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800" srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x" loading="lazy" alt="" />
					</CardCover>
					<CardContent>
						<Sheet sx={{ gap: 2, borderRadius: "50%", width: "fit-content", p: 2, mb: 2 }} variant="soft" color="primary">
							<BsCurrencyDollar />
						</Sheet>
						<CardContent>
							<Typography
								sx={{ alignItems: "flex-end" }}
								level="h3"
								endDecorator={
									<Typography level="title-sm" color="danger">
										-4%
									</Typography>
								}
							>
								$63,448.78
							</Typography>
							<Typography level="title-md">Earnings</Typography>
						</CardContent>
					</CardContent>
				</Card>
				<Card component="li" color="neutral" orientation="vertical" size="lg" variant="soft" sx={{ flex: "30%", alignItems: "flex-start" }}>
					<CardCover>
						<img src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800" srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x" loading="lazy" alt="" />
					</CardCover>
					<CardContent>
						<Sheet sx={{ gap: 2, borderRadius: "50%", width: "fit-content", p: 2, mb: 2 }} variant="soft" color="primary">
							<BsCurrencyDollar />
						</Sheet>
						<CardContent>
							<Typography
								sx={{ alignItems: "flex-end" }}
								level="h3"
								endDecorator={
									<Typography level="title-sm" color="success">
										+23%
									</Typography>
								}
							>
								$63,448.78
							</Typography>
							<Typography level="title-md">Earnings</Typography>
						</CardContent>
					</CardContent>
				</Card>
				<Card component="li" color="neutral" orientation="vertical" size="lg" variant="soft" sx={{ flex: "30%", alignItems: "flex-start" }}>
					<CardCover>
						<img src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800" srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x" loading="lazy" alt="" />
					</CardCover>
					<CardContent>
						<Sheet sx={{ gap: 2, borderRadius: "50%", width: "fit-content", p: 2, mb: 2 }} variant="soft" color="primary">
							<BsCurrencyDollar />
						</Sheet>
						<CardContent>
							<Typography
								sx={{ alignItems: "flex-end" }}
								level="h3"
								endDecorator={
									<Typography level="title-sm" color="success">
										+38%
									</Typography>
								}
							>
								$63,448.78
							</Typography>
							<Typography level="title-md">Earnings</Typography>
						</CardContent>
					</CardContent>
				</Card>
				<Card component="li" color="neutral" orientation="vertical" size="lg" variant="soft" sx={{ flex: "30%", alignItems: "flex-start" }}>
					<CardCover>
						<img src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800" srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x" loading="lazy" alt="" />
					</CardCover>
					<CardContent>
						<Sheet sx={{ gap: 2, borderRadius: "50%", width: "fit-content", p: 2, mb: 2 }} variant="soft" color="primary">
							<BsCurrencyDollar />
						</Sheet>
						<CardContent>
							<Typography
								sx={{ alignItems: "flex-end" }}
								level="h3"
								endDecorator={
									<Typography level="title-sm" color="danger">
										-2%
									</Typography>
								}
							>
								$63,448.78
							</Typography>
							<Typography level="title-md">Earnings</Typography>
						</CardContent>
					</CardContent>
				</Card>
			</Box>
			<Sheet variant="outlined" color="primary" component="ul" sx={{ p: 1 }}>
				<Box display={"flex"} p={2}></Box>
				<Box display={"flex"} gap={2} flexWrap={{ xs: "wrap" }}>
					<Card component="li" color="neutral" orientation="vertical" size="lg" variant="soft" sx={{ flex: { lg: 1, xs: "100%" }, alignItems: "center" }}>
						<Typography level="h4">Revenue updates</Typography>
						<CardContent sx={{ alignSelf: "flex-start", gap: 3 }}>
							<CardContent>
								<Typography
									sx={{ alignItems: "flex-end", justifyContent: "center" }}
									level="h3"
									endDecorator={
										<Chip variant="outlined" color="primary" size="sm">
											14%
										</Chip>
									}
								>
									$63,448.78
								</Typography>
								<Typography level="title-md">Budget</Typography>
							</CardContent>
							<CardContent>
								<Typography
									sx={{ alignItems: "flex-end", justifyContent: "center" }}
									level="h3"
									endDecorator={
										<Chip variant="outlined" color="danger" size="sm">
											-7%
										</Chip>
									}
								>
									$63,448.78
								</Typography>
								<Typography level="title-md">Expense</Typography>
							</CardContent>
						</CardContent>
						<DashedLineChart ref={chartInstance} />
						<CardActions sx={{ alignSelf: { xs: "stretch", lg: "center" } }}>
							<Button onClick={clickHandler.bind(this)}>Download Report</Button>
						</CardActions>
					</Card>
					<Divider orientation="vertical" />
					<Card color="neutral" orientation="vertical" size="lg" variant="soft" sx={{ flex: { lg: 1, xs: "100%" } }}>
						<CardContent orientation="horizontal">
							<Typography level="body-md" startDecorator={<GoDotFill />}>
								Expense
							</Typography>
							<Typography level="body-md" startDecorator={<GoDotFill />}>
								Budget
							</Typography>
						</CardContent>
						<BarColumnChart />
					</Card>
				</Box>
			</Sheet>
			<Sheet variant="soft" color="primary" sx={{ p: 1 }}>
				<FinancialHeloChart />
			</Sheet>
		</Box>
	);
};

export default Ecommerce;
