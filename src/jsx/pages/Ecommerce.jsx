// import { Button, LineChart, Pie, SparkLine, Stacked } from "../components";
import { useThemeContext } from "@contexts/ContextProvider";
import { Box, Button, Card, CardActions, CardContent, CardCover, Chip, Divider, Sheet } from "@mui/joy";
import Typography from "@mui/joy/Typography";
import { BsCurrencyDollar,BsClipboardData } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { FaChartPie, FaShoppingCart, FaUserTie } from "react-icons/fa";
import { FaCalendarDays, FaMapLocationDot, FaUserGroup } from "react-icons/fa6";
import BarColumnChart from "@components/BarColumnChart";
import DashedLineChart from "@components/DashedLineChart";
import FinancialHeloChart from "@components/FinancialHeloChart";
import { useRef } from "react";
import { LuBox } from "react-icons/lu";
import { TbMobiledata } from "react-icons/tb";

const Ecommerce = () => {
	const { printChart, language } = useThemeContext();
	const isArabic = language.language === "ar" ? true : false;
	return (
		<Box sx={{ my: 12, display: "flex", flexDirection: "column", gap: 4 }}>
			<Card variant="outlined" color="primary" orientation="vertical" size="lg" sx={{ flexBasis: { xs: "100%", lg: "20rem" }, alignItems: "flex-start" }}>
				<CardContent sx={{ mb: 4 }}>
					<Typography level="title-md">{isArabic ? "الأرباح" : "Earnings"}</Typography>
					<Typography level="h3">{isArabic ? "دج 63,448.78" : "$63,448.78"}</Typography>
				</CardContent>
				<Button size="lg" color="primary" variant="solid">
					{isArabic ? "تحميل" : "Download"}
				</Button>
			</Card>
			<Box variant="soft" component="ul" sx={{ display: "flex", flexWrap: { xs: "wrap", xl: "nowrap" }, gap: 2, "--Icon-fontSize": "4.5rem" }}>
				<Card component="li" color="neutral" orientation="vertical" size="lg" variant="soft" sx={{ flex: "30%", alignItems: "flex-start" }}>
					<CardContent>
						<Sheet sx={{ gap: 2, borderRadius: "50%", width: "fit-content", p: 3, mb: 2 }} variant="soft" color="primary">
							<FaUserGroup className="icon" />
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
								45,120
							</Typography>
							<Typography level="title-md">{isArabic ? "العملاء" : "Customers"}</Typography>
						</CardContent>
					</CardContent>
				</Card>
				<Card component="li" color="neutral" orientation="vertical" size="lg" variant="soft" sx={{ flex: "30%", alignItems: "flex-start" }}>
					<CardContent>
						<Sheet sx={{ gap: 2, borderRadius: "50%", width: "fit-content", p: 3, mb: 2 }} variant="soft" color="primary">
							<LuBox className="icon" />
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
								7,500
							</Typography>
							<Typography level="title-md">{isArabic ? "المنتجات" : "Products"}</Typography>
						</CardContent>
					</CardContent>
				</Card>
				<Card component="li" color="neutral" orientation="vertical" size="lg" variant="soft" sx={{ flex: "30%", alignItems: "flex-start" }}>
					<CardContent>
						<Sheet sx={{ gap: 2, borderRadius: "50%", width: "fit-content", p: 3, mb: 2 }} variant="soft" color="primary">
							<BsClipboardData className="icon" />
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
								950,210
							</Typography>
							<Typography level="title-md">{isArabic ? "المبيعات" : "Sales"}</Typography>
						</CardContent>
					</CardContent>
				</Card>
				<Card component="li" color="neutral" orientation="vertical" size="lg" variant="soft" sx={{ flex: "30%", alignItems: "flex-start" }}>
					<CardContent>
						<Sheet sx={{ gap: 2, borderRadius: "50%", width: "fit-content", p: 2, mb: 2 }} variant="soft" color="primary">
							<TbMobiledata />
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
								39,352
							</Typography>
							<Typography level="title-md">{isArabic ? "الحسم" : "Refunds"}</Typography>
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
						<DashedLineChart />
						<CardActions sx={{ alignSelf: { xs: "stretch", lg: "center" } }}>
							<Button onClick={printChart}>Download Report</Button>
						</CardActions>
					</Card>
					<Divider orientation="vertical" />
					<Card color="neutral" size="lg" variant="soft" sx={{ flex: { lg: 1, xs: "100%" } }}>
						<Typography>
							<Typography level="body-md" startDecorator={<GoDotFill />}>
								Expense
							</Typography>
							<Typography level="body-md" startDecorator={<GoDotFill />}>
								Budget
							</Typography>
						</Typography>
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
