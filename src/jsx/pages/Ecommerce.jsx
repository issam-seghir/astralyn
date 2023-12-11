import { useThemeContext } from "@contexts/ContextProvider";
import BarColumnChart from "@jsx/components/charts/BarColumnChart";
import DashedLineChart from "@jsx/components/charts/DashedLineChart";
import FinancialHeloChart from "@jsx/components/charts/FinancialHeloChart";
import { Box, Button, Card, CardActions, CardContent, CardCover, Chip, Divider, Sheet, Snackbar } from "@mui/joy";
import Typography from "@mui/joy/Typography";
import { useTheme } from "@mui/joy/styles";
import { useEffect, useRef, useState } from "react";
import { BsClipboardData } from "react-icons/bs";
import { FaUserGroup } from "react-icons/fa6";
import { LuBox } from "react-icons/lu";
import { TbMobiledata } from "react-icons/tb";
import CardItem from "@components/ui/CardItem";

const Ecommerce = () => {
	const { printLineChart, prinBarChartChart, language } = useThemeContext();
	const isArabic = language.language === "ar";
	const theme = useTheme();
	const isDarkMode = theme.palette.mode === "dark";
	const cardRef = useRef(null);
	const [open, setOpen] = useState(false);

	// first card mouse gradient blur animation
	function mouseMoveEvent(e) {
		const { x, y } = cardRef.current.getBoundingClientRect();
		cardRef.current.style.setProperty("--x", e.clientX - x);
		cardRef.current.style.setProperty("--y", e.clientY - y);
	}
	useEffect(() => {
		const cardElement = cardRef.current;
		if (cardElement) {
			cardElement.addEventListener("mousemove", mouseMoveEvent);
		}

		return () => {
			if (cardElement) {
				cardElement.removeEventListener("mousemove", mouseMoveEvent);
			}
		};
	}, []);

	return (
		<Box sx={{ my: 12, display: "flex", flexDirection: "column", gap: 4 }}>
			<Card
				ref={cardRef}
				variant="outlined"
				color="primary"
				orientation="vertical"
				size="lg"
				sx={{
					flexBasis: { xs: "100%", lg: "20rem" },
					alignItems: "center",
					position: "relative",
					overflow: "hidden",
					...(isDarkMode && {
						"&:before": {
							content: "''",
							position: "absolute",
							top: "calc(var(--y, 0) * 1px - 50px)",
							left: "calc(var(--x, 0) * 1px - 50px)",
							width: "100px",
							height: "100px",
							background: "radial-gradient(var(--joy-palette-primary-softColor), #3984ff00 80%)",
							opacity: 0,
							transition: "opacity 0.2s",
						},
						"&:hover:before": {
							opacity: 0.4,
						},
					}),
				}}
			>
				<CardCover sx={{ backdropFilter: "blur(16px) saturate(108%)" }}>
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
				<CardContent sx={{ alignItems: "center", justifyContent: "center", gap: 3 }}>
					<Typography level="h1" fontSize={"xl7"} letterSpacing={isArabic ? "" : { md: 17, xs: 8 }} sx={{ animation: "glow 1s ease-in-out infinite alternate" }}>
						{isArabic ? "الأربـــاح" : "Earnings"}
					</Typography>
					<Typography level="h2">{isArabic ? "دج 63,448.78" : "$63,448.78"}</Typography>
				</CardContent>
				<Button onClick={() => setOpen(true)} size="lg" color="primary" variant="solid" sx={{ paddingInline: "3rem" }}>
					{isArabic ? "تحميل" : "Download"}
				</Button>
				<Snackbar
					variant="solid"
					color="primary"
					open={open}
					size={"sm"}
					onClose={() => setOpen(false)}
					anchorOrigin={{ vertical: "top", horizontal: isArabic ? "left" : "right" }}
					endDecorator={
						<Button onClick={() => setOpen(false)} size="sm" variant="soft" sx={{ borderRadius: "sm" }}>
							{isArabic ? "إلغــاء " : "Dismiss"}
						</Button>
					}
				>
					<Typography level="title-md" color="commun.white">
						{isArabic ? "أنت شخص رائــع 🚀🥳" : "You are awesome 🚀🥳"}
					</Typography>
				</Snackbar>
			</Card>
			<Box variant="soft" component="ul" sx={{ display: "flex", flexWrap: { xs: "wrap", xl: "nowrap" }, gap: 2, "--Icon-fontSize": "4.5rem", containerType: "inline-size" }}>
				<CardItem icon={<FaUserGroup className="icon" />} value={"45,120"} percent={"-4%"} label={isArabic ? "العملاء" : "Customers"} />
				<CardItem icon={<LuBox className="icon" />} value={"7,500"} percent={"+23%"} label={isArabic ? "المنتجات" : "Products"} />
				<CardItem icon={<BsClipboardData className="icon" />} value={"950,210"} percent={"+38%"} label={isArabic ? "المبيعات" : "Sales"} />
				<CardItem icon={<TbMobiledata className="icon" />} value={"39,352"} percent={"-2%"} label={isArabic ? "الحسم" : "Refunds"} />
			</Box>
			{/* bar / line charts  */}
			<Sheet variant="outlined" color="primary" component="ul" sx={{ p: 1, borderRadius: "md" }}>
				<Box display={"flex"} gap={2} flexWrap={{ xs: "wrap" }}>
					<Card component="li" color="primary" orientation="vertical" size="lg" variant="soft" sx={{ flex: { lg: 1, xs: "100%" }, gap: "2.5rem", alignItems: "center" }}>
						<CardCover sx={{ backdropFilter: "blur(16px) saturate(108%)" }}>
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
						<CardContent sx={{ width: 1, alignItems: "flex-start", gap: 3 }}>
							<Typography alignSelf={"center"} level="h3">
								{isArabic ? "تحديثات الإيرادات" : "Revenue updates"}
							</Typography>
							<CardContent>
								<Typography
									sx={{ alignItems: "flex-end", justifyContent: "center" }}
									level="h3"
									endDecorator={
										<Chip dir="ltr" variant="soft" color="success" size="sm">
											14%
										</Chip>
									}
								>
									{isArabic ? "دج 530,448.78" : "$530,448.78"}
								</Typography>
								<Typography level="title-md">{isArabic ? "الميزانـية" : "Budget"}</Typography>
							</CardContent>
							<CardContent>
								<Typography
									sx={{ alignItems: "flex-end", justifyContent: "center" }}
									level="h3"
									endDecorator={
										<Chip dir="ltr" variant="soft" color="danger" size="sm">
											-7%
										</Chip>
									}
								>
									{isArabic ? "دج 260,000.00" : "$260,000.00"}
								</Typography>
								<Typography level="title-md">{isArabic ? "الإنفاق" : "Expense"}</Typography>
							</CardContent>
						</CardContent>
						<DashedLineChart />
						<CardActions sx={{ p: 0, alignSelf: { xs: "stretch", lg: "center" } }}>
							<Button onClick={printLineChart} size="lg" color="primary" variant="solid" sx={{ paddingInline: "3rem" }}>
								{isArabic ? "تحميل التقرير" : "Download Report"}
							</Button>
						</CardActions>
					</Card>
					<Divider orientation="vertical" />
					<Card component="li" color="primary" orientation="vertical" size="lg" variant="soft" sx={{ flex: { lg: 1, xs: "100%", gap: "2.5rem", alignItems: "center" } }}>
						<CardCover sx={{ backdropFilter: "blur(16px) saturate(108%)" }}>
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
						<CardContent sx={{ width: 1, alignItems: "flex-start", gap: 3 }}>
							<Typography alignSelf={"center"} level="h3">
								{isArabic ? "تحديثات الصادرات" : "Outcome updates"}
							</Typography>
							<CardContent>
								<Typography
									sx={{ alignItems: "flex-end", justifyContent: "center" }}
									level="h3"
									endDecorator={
										<Chip dir="ltr" variant="soft" color="success" size="sm">
											55%
										</Chip>
									}
								>
									{isArabic ? "دج 1230,00.78" : "$1230,00.78"}
								</Typography>
								<Typography level="title-md">{isArabic ? "داخلية" : "Internal"}</Typography>
							</CardContent>
							<CardContent>
								<Typography
									sx={{ alignItems: "flex-end", justifyContent: "center" }}
									level="h3"
									endDecorator={
										<Chip dir="ltr" variant="soft" color="danger" size="sm">
											-2%
										</Chip>
									}
								>
									{isArabic ? "دج 770,992.00" : "$770,992.00"}
								</Typography>
								<Typography level="title-md">{isArabic ? "خارجية" : "External"}</Typography>
							</CardContent>
						</CardContent>
						<BarColumnChart />
						<CardActions sx={{ p: 0, alignSelf: { xs: "stretch", lg: "center" } }}>
							<Button onClick={prinBarChartChart} size="lg" color="primary" variant="solid" sx={{ paddingInline: "3rem" }}>
								{isArabic ? "تحميل التقرير" : "Download Report"}
							</Button>
						</CardActions>
					</Card>
				</Box>
			</Sheet>
			{/* stock financial chart  */}
			<Sheet variant="outlined" color="primary" sx={{ borderRadius: "md", height: { xs: "300px", sm: "auto" } }}>
				<CardCover sx={{ borderRadius: "md", backdropFilter: "blur(16px) saturate(108%)" }}>
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
				<FinancialHeloChart />
			</Sheet>
		</Box>
	);
};

export default Ecommerce;
