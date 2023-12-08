// import { Button, LineChart, Pie, SparkLine, Stacked } from "../components";
import BarColumnChart from "@components/BarColumnChart";
import DashedLineChart from "@components/DashedLineChart";
import FinancialHeloChart from "@components/FinancialHeloChart";
import { useThemeContext } from "@contexts/ContextProvider";
import { Box, Button, Card, CardActions, CardContent, CardCover, Chip, Divider, Sheet,Skeleton } from "@mui/joy";
import Typography from "@mui/joy/Typography";
import { useEffect, useRef, Suspense } from "react";
import { BsClipboardData } from "react-icons/bs";
import { FaUserGroup } from "react-icons/fa6";
import { LuBox } from "react-icons/lu";
import { TbMobiledata } from "react-icons/tb";

const Ecommerce = () => {
	const { printLineChart, prinBarChartChart, language } = useThemeContext();
	const isArabic = language.language === "ar";
	// const cardRef = useRef(null);

	// function mouseMoveEvent(e) {
	// 	const { x, y } = cardRef.current.getBoundingClientRect();
	// 	cardRef.current.style.setProperty("--x", e.clientX - x);
	// 	cardRef.current.style.setProperty("--y", e.clientY - y);
	// }
	// useEffect(() => {
	// 	if (cardRef) {
	// 		cardRef.current.addEventListener("mousemove", mouseMoveEvent);
	// 	}
	// 	// don't forget to *remove* the eventListener
	// 	// when your component unmounts!
	// 	return () => cardRef.current.removeEventListener("mousemove", mouseMoveEvent);
	// }, [cardRef]);
	useEffect(() => {
		const tiltCards = document.querySelectorAll(".card");

		tiltCards.forEach((card) => {
			card.addEventListener("mousemove", (e) => {
				const rect = card.getBoundingClientRect();
				const posX = e.clientX - rect.left;
				const posY = e.clientY - rect.top;
				const cardWidth = rect.width;
				const cardHeight = rect.height;

				const tiltX = (cardWidth / 2 - posX) / 10;
				const tiltY = (cardHeight / 2 - posY) / 10;

				card.style.transform = `rotateY(${tiltX}deg) rotateX(${tiltY}deg)`;
			});

			card.addEventListener("mouseleave", () => {
				card.style.transform = "rotateY(0deg) rotateX(0deg)";
			});
		});

		return () => {
			tiltCards.forEach((card) => {
				card.removeEventListener("mousemove", () => {});
				card.removeEventListener("mouseleave", () => {});
			});
		};
	}, []);

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Box sx={{ my: 12, display: "flex", flexDirection: "column", gap: 4 }}>
				<Card
					// ref={cardRef}
					variant="outlined"
					color="primary"
					orientation="vertical"
					size="lg"
					sx={{
						flexBasis: { xs: "100%", lg: "20rem" },
						alignItems: "center",
						position: "relative",
						// "&::after": {
						// 	content: "''",
						// 	position: "absolute",
						// 	top: "calc(var(--y, 0) * 1px - 50px)",
						// 	left: "calc(var(--x, 0) * 1px - 50px)",
						// 	width: "200px",
						// 	height: "200px",
						// 	background: "radial-gradient(white, red 80%)",
						// 	opacity: 0,
						// 	zIndex:99,
						// 	transition: "opacity 0.2s",
						// },
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
					<Button size="lg" color="primary" variant="solid" sx={{ paddingInline: "3rem" }}>
						{isArabic ? "تحميل" : "Download"}
					</Button>
				</Card>
				<Box variant="soft" component="ul" sx={{ display: "flex", flexWrap: { xs: "wrap", xl: "nowrap" }, gap: 2, "--Icon-fontSize": "4.5rem", containerType: "inline-size" }}>
					<Card
						className={"card"}
						component="li"
						color="primary"
						orientation="vertical"
						size="lg"
						variant="outlined"
						sx={{
							transition: ".2s transform",
							flex: "30%",
							alignItems: "flex-start",

							"@container (max-width: 1230px)": {
								alignItems: "center",
							},
							"@media (max-width: 600px)": {
								flex: "45%",
							},
							"@media (max-width: 380px)": {
								flex: "90%",
							},
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
						<CardContent>
							<Sheet sx={{ gap: 2, borderRadius: "50%", width: "fit-content", p: 3, mb: 2, bgcolor: "var(--joy-palette-background-card)" }} variant="soft" color="primary">
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
					<Card
						className={"card"}
						component="li"
						color="primary"
						orientation="vertical"
						size="lg"
						variant="outlined"
						sx={{
							transition: ".2s transform",
							flex: "30%",
							alignItems: "flex-start",
							"@container (max-width: 1230px)": {
								alignItems: "center",
							},
							"@media (max-width: 600px)": {
								flex: "45%",
							},
							"@media (max-width: 380px)": {
								flex: "90%",
							},
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
						<CardContent>
							<Sheet sx={{ gap: 2, borderRadius: "50%", width: "fit-content", p: 3, mb: 2, bgcolor: "var(--joy-palette-background-card)" }} variant="soft" color="primary">
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
					<Card
						className={"card"}
						component="li"
						color="primary"
						orientation="vertical"
						size="lg"
						variant="outlined"
						sx={{
							transition: ".2s transform",
							flex: "30%",
							alignItems: "flex-start",
							"@container (max-width: 1230px)": {
								alignItems: "center",
							},
							"@media (max-width: 600px)": {
								flex: "45%",
							},
							"@media (max-width: 380px)": {
								flex: "90%",
							},
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
						<CardContent>
							<Sheet sx={{ gap: 2, borderRadius: "50%", width: "fit-content", p: 3, mb: 2, bgcolor: "var(--joy-palette-background-card)" }} variant="soft" color="primary">
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
					<Card
						className={"card"}
						component="li"
						color="primary"
						orientation="vertical"
						size="lg"
						variant="outlined"
						sx={{
							transition: ".2s transform",
							flex: "30%",
							alignItems: "flex-start",
							"@container (max-width: 1230px)": {
								alignItems: "center",
							},
							"@media (max-width: 600px)": {
								flex: "45%",
							},
							"@media (max-width: 380px)": {
								flex: "90%",
							},
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
						<CardContent>
							<Sheet sx={{ gap: 2, borderRadius: "50%", width: "fit-content", p: 3, mb: 2, bgcolor: "var(--joy-palette-background-card)" }} variant="soft" color="primary">
								<TbMobiledata className="icon" />
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
											<Chip variant="soft" color="success" size="sm">
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
											<Chip variant="soft" color="danger" size="sm">
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
							<CardCover sx={{ backdropFilter: "blur(16px) saturate(180%)" }}>
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
											<Chip variant="soft" color="success" size="sm">
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
											<Chip variant="soft" color="danger" size="sm">
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
				<Sheet variant="outlined" color="primary" sx={{ borderRadius: "md", height: { xs: "300px", sm: "auto" } }}>
					<CardCover sx={{ borderRadius: "md", backdropFilter: "blur(16px) saturate(180%)" }}>
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
		</Suspense>
	);
};

export default Ecommerce;
