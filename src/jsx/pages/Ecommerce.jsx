// import { Button, LineChart, Pie, SparkLine, Stacked } from "../components";
import { useThemeContext } from "@contexts/ContextProvider";
import { Box, Button, Card, CardContent, CardCover, Divider, IconButton, List, ListItem, Chip, Sheet } from "@mui/joy";
import Typography from "@mui/joy/Typography";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { IoIosMore } from "react-icons/io";

import { dropdownData, earningData, ecomPieChartData, medicalproBranding, recentTransactions, SparklineAreaData, weeklyStats, data1, data2, data3, data4, data5 } from "../data/dummy";
import product9 from "../data/product9.jpg";


const Ecommerce = () => {
	const { currentColor, currentMode } = useThemeContext();

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
				<Box display={"flex"}>
					<Typography level="h4" flex={1}>
						$63,448.78
					</Typography>
					<List orientation="horizontal" sx={{ flex: 0 }} size="sm">
						<ListItem>
							<Typography sx={{ alignItems: "center", justifyContent: "center" }} level="body-md" startDecorator={<GoDotFill />}>
								Expense
							</Typography>
							<Typography sx={{ alignItems: "center", justifyContent: "center" }} level="body-md" startDecorator={<GoDotFill />}>
								Budget
							</Typography>
						</ListItem>
					</List>
				</Box>
				<Box display={"flex"} gap={2}>
					<Card component="li" color="neutral" orientation="vertical" size="lg" variant="soft" sx={{ flex: 1, alignItems: "flex-start" }}>
						<CardContent>
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
					</Card>
					<Divider orientation="vertical" />
					<Card component="li" color="neutral" orientation="vertical" size="lg" variant="soft" sx={{ flex: 1, alignItems: "flex-start" }}>
						<CardCover>
							<img src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800" srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x" loading="lazy" alt="" />
						</CardCover>
						<CardContent>
							<Sheet sx={{ gap: 2, borderRadius: "50%", width: "fit-content", p: 2, mb: 2 }} variant="soft" color="primary">
								<BsCurrencyDollar />
							</Sheet>
							<CardContent>
								<Typography level="h3">$63,448.78</Typography>
								<Typography level="title-md">Earnings</Typography>
							</CardContent>
						</CardContent>
					</Card>
				</Box>
			</Sheet>
		</Box>
	);
};

export default Ecommerce;
