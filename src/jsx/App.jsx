/* eslint-disable unicorn/prefer-number-properties */
import { useThemeContext } from "@contexts/ContextProvider";
import Sidebar from "@jsx/components/layout/SideBare";
import { CardCover } from "@mui/joy";
import Box from "@mui/joy/Box";
import GlobalStyles from "@mui/joy/GlobalStyles";
import Sheet from "@mui/joy/Sheet";
import { CssVarsProvider } from "@mui/joy/styles";
import Loading from "@pages/Loading";
import LoadingPage from "@pages/LoadingPage";
import { HelmetProvider } from "react-helmet-async";
import { Outlet } from "react-router-dom";

import Header from "@jsx/components/layout/Header";
import SettingsButton from "@jsx/components/ui/SettingsButton";

import { initSyncfusionLocalization } from "@data/localization/syncfusion-localization";
import Seo from "@jsx/components/Hemlet/Seo";
import Preload from "@jsx/components/Hemlet/Preload";
import { Suspense, useEffect } from "react";


function App() {
	const { theme, loading, language, status } = useThemeContext();
	const isArabic = language.language === "ar";
	const title = isArabic ? "أسترالين" : "Astralyn";
	const description = isArabic ? "صفحة الصفحة الرئيسية للتجارة الإلكترونية تقدم إحصائيات حول العملاء والمنتجات والمبيعات والأرباح والميزانية والنفقات." : "The e-commerce home page provides stats on customers, products, sales, earnings, budget, and expenses.";
	const name = isArabic ? "أسترالين" : "Astralyn";
	const type = "website";

	useEffect(() => {
		initSyncfusionLocalization();
	}, []);

	return (
		<CssVarsProvider theme={theme} defaultMode="system">
			<HelmetProvider>
				<GlobalStyles
					styles={{
						"svg.icon": {
							color: "var(--Icon-color)",
							margin: "var(--Icon-margin)",
							fontSize: "var(--Icon-fontSize, 20px)",
							width: "0.75em",
							height: "0.75em",
						},
						"html:lang(ar)": {
							"--joy-fontFamily-body": "'Cairo', sans-serif",
							"--joy-fontFamily-display": "'Cairo', sans-serif",
						},
					}}
				/>
				{/* Hemlet : Dynamic HTML header  */}
				<Seo title={title} description={description} name={name} type={type} />
				<Preload/>
				
				{loading ? (
					<Loading />
				) : (
					<Sheet
						variant="plain"
						className={status.bgBlurAll ? "bg-rainbow-blur" : ""}
						position="relative"
						sx={{
							display: "flex",
							flexDirection: { xs: "column", md: "row" },
							height: "100dvh",
							alignItems: "stretch",
						}}
					>
						<SettingsButton />
						<Sidebar />
						<Header />
						{/* main content */}
						<Box sx={{ flex: 1, p: { xs: 2, md: 4 }, overflow: "auto", height: "100dvh", position: "relative" }}>
							{/* svg background */}
							<CardCover>
								<svg viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice">
									<defs>
										<linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ffflurry-grad" gradientTransform="rotate(270)">
											<stop id="stop-1" stopColor="var(--joy-palette-primary-softColor)" stopOpacity="1" offset="0%"></stop>
											<stop id="stop-2" stopColor="var(--joy-palette-primary-softBg)" stopOpacity="1" offset="45%"></stop>
											<stop id="stop-3" stopColor="var(--joy-palette-background-card)" stopOpacity="1" offset="100%"></stop>
										</linearGradient>
									</defs>
									<rect width="100%" height="100%" fill="transparent"></rect>
									<g fill="url(#ffflurry-grad)">
										<rect width="494" height="3" x="187" y="63.5" rx="1.5" transform="rotate(45, 434, 65)" opacity="0.64"></rect>
										<rect width="92" height="3" x="160" y="566.5" rx="1.5" transform="rotate(45, 206, 568)" opacity="0.80"></rect>
										<rect width="468" height="3" x="208" y="365.5" rx="1.5" transform="rotate(45, 442, 367)" opacity="0.43"></rect>
										<rect width="272" height="3" x="-72" y="538.5" rx="1.5" transform="rotate(45, 64, 540)" opacity="0.97"></rect>
										<rect width="109" height="3" x="87.5" y="34.5" rx="1.5" transform="rotate(45, 142, 36)" opacity="0.49"></rect>
										<rect width="68" height="3" x="263" y="29.5" rx="1.5" transform="rotate(45, 297, 31)" opacity="0.92"></rect>
										<rect width="391" height="3" x="-131.5" y="623.5" rx="1.5" transform="rotate(45, 64, 625)" opacity="0.16"></rect>
										<rect width="368" height="3" x="-150" y="367.5" rx="1.5" transform="rotate(45, 34, 369)" opacity="0.26"></rect>
										<rect width="836" height="3" x="308" y="69.5" rx="1.5" transform="rotate(45, 726, 71)" opacity="0.21"></rect>
										<rect width="391" height="3" x="445.5" y="726.5" rx="1.5" transform="rotate(45, 641, 728)" opacity="0.64"></rect>
										<rect width="537" height="3" x="37.5" y="106.5" rx="1.5" transform="rotate(45, 306, 108)" opacity="0.27"></rect>
										<rect width="305" height="3" x="299.5" y="226.5" rx="1.5" transform="rotate(45, 452, 228)" opacity="0.42"></rect>
										<rect width="448" height="3" x="256" y="466.5" rx="1.5" transform="rotate(45, 480, 468)" opacity="0.99"></rect>
										<rect width="561" height="3" x="112.5" y="476.5" rx="1.5" transform="rotate(45, 393, 478)" opacity="0.52"></rect>
										<rect width="41" height="3" x="495.5" y="655.5" rx="1.5" transform="rotate(45, 516, 657)" opacity="0.43"></rect>
										<rect width="329" height="3" x="497.5" y="460.5" rx="1.5" transform="rotate(45, 662, 462)" opacity="0.96"></rect>
										<rect width="673" height="3" x="-12.5" y="710.5" rx="1.5" transform="rotate(45, 324, 712)" opacity="0.35"></rect>
										<rect width="402" height="3" x="237" y="695.5" rx="1.5" transform="rotate(45, 438, 697)" opacity="0.89"></rect>
										<rect width="442" height="3" x="-152" y="731.5" rx="1.5" transform="rotate(45, 69, 733)" opacity="0.46"></rect>
										<rect width="396" height="3" x="38" y="461.5" rx="1.5" transform="rotate(45, 236, 463)" opacity="0.61"></rect>
										<rect width="86" height="3" x="715" y="676.5" rx="1.5" transform="rotate(45, 758, 678)" opacity="0.16"></rect>
										<rect width="828" height="3" x="-67" y="315.5" rx="1.5" transform="rotate(45, 347, 317)" opacity="0.40"></rect>
										<rect width="208" height="3" x="-58" y="460.5" rx="1.5" transform="rotate(45, 46, 462)" opacity="0.90"></rect>
										<rect width="513" height="3" x="-17.5" y="211.5" rx="1.5" transform="rotate(45, 239, 213)" opacity="0.38"></rect>
										<rect width="598" height="3" x="-91" y="83.5" rx="1.5" transform="rotate(45, 208, 85)" opacity="0.82"></rect>
										<rect width="119" height="3" x="140.5" y="749.5" rx="1.5" transform="rotate(45, 200, 751)" opacity="0.95"></rect>
										<rect width="309" height="3" x="-11.5" y="466.5" rx="1.5" transform="rotate(45, 143, 468)" opacity="0.09"></rect>
										<rect width="452" height="3" x="-117" y="353.5" rx="1.5" transform="rotate(45, 109, 355)" opacity="0.47"></rect>
										<rect width="106" height="3" x="374" y="623.5" rx="1.5" transform="rotate(45, 427, 625)" opacity="0.51"></rect>
										<rect width="431" height="3" x="141.5" y="178.5" rx="1.5" transform="rotate(45, 357, 180)" opacity="0.64"></rect>
										<rect width="286" height="3" x="377" y="546.5" rx="1.5" transform="rotate(45, 520, 548)" opacity="0.21"></rect>
										<rect width="626" height="3" x="-268" y="165.5" rx="1.5" transform="rotate(45, 45, 167)" opacity="0.50"></rect>
										<rect width="396" height="3" x="-58" y="257.5" rx="1.5" transform="rotate(45, 140, 259)" opacity="0.08"></rect>
										<rect width="438" height="3" x="365" y="620.5" rx="1.5" transform="rotate(45, 584, 622)" opacity="0.92"></rect>
										<rect width="478" height="3" x="367" y="194.5" rx="1.5" transform="rotate(45, 606, 196)" opacity="0.18"></rect>
										<rect width="150" height="3" x="239" y="562.5" rx="1.5" transform="rotate(45, 314, 564)" opacity="0.95"></rect>
										<rect width="352" height="3" x="378" y="301.5" rx="1.5" transform="rotate(45, 554, 303)" opacity="0.53"></rect>
										<rect width="233" height="3" x="432.5" y="138.5" rx="1.5" transform="rotate(45, 549, 140)" opacity="0.50"></rect>
										<rect width="102" height="3" x="503" y="748.5" rx="1.5" transform="rotate(45, 554, 750)" opacity="0.94"></rect>
										<rect width="90" height="3" x="270" y="443.5" rx="1.5" transform="rotate(45, 315, 445)" opacity="0.92"></rect>
										<rect width="46" height="3" x="31" y="22.5" rx="1.5" transform="rotate(45, 54, 24)" opacity="0.18"></rect>
										<rect width="324" height="3" x="570" y="758.5" rx="1.5" transform="rotate(45, 732, 760)" opacity="0.58"></rect>
										<rect width="190" height="3" x="584" y="270.5" rx="1.5" transform="rotate(45, 679, 272)" opacity="0.81"></rect>
										<rect width="451" height="3" x="20.5" y="335.5" rx="1.5" transform="rotate(45, 246, 337)" opacity="0.88"></rect>
										<rect width="170" height="3" x="325" y="563.5" rx="1.5" transform="rotate(45, 410, 565)" opacity="0.70"></rect>
										<rect width="105" height="3" x="504.5" y="419.5" rx="1.5" transform="rotate(45, 557, 421)" opacity="0.99"></rect>
										<rect width="730" height="3" x="384" y="485.5" rx="1.5" transform="rotate(45, 749, 487)" opacity="0.76"></rect>
										<rect width="313" height="3" x="385.5" y="64.5" rx="1.5" transform="rotate(45, 542, 66)" opacity="0.81"></rect>
										<rect width="173" height="3" x="-45.5" y="77.5" rx="1.5" transform="rotate(45, 41, 79)" opacity="0.98"></rect>
										<rect width="590" height="3" x="328" y="532.5" rx="1.5" transform="rotate(45, 623, 534)" opacity="0.11"></rect>
										<rect width="503" height="3" x="-120.5" y="139.5" rx="1.5" transform="rotate(45, 131, 141)" opacity="0.17"></rect>
										<rect width="120" height="3" x="608" y="629.5" rx="1.5" transform="rotate(45, 668, 631)" opacity="0.87"></rect>
										<rect width="600" height="3" x="-128" y="395.5" rx="1.5" transform="rotate(45, 172, 397)" opacity="0.67"></rect>
										<rect width="381" height="3" x="529.5" y="352.5" rx="1.5" transform="rotate(45, 720, 354)" opacity="0.28"></rect>
										<rect width="562" height="3" x="467" y="579.5" rx="1.5" transform="rotate(45, 748, 581)" opacity="0.92"></rect>
										<rect width="333" height="3" x="444.5" y="34.5" rx="1.5" transform="rotate(45, 611, 36)" opacity="0.12"></rect>
										<rect width="376" height="3" x="559" y="197.5" rx="1.5" transform="rotate(45, 747, 199)" opacity="0.39"></rect>
										<rect width="66" height="3" x="114" y="540.5" rx="1.5" transform="rotate(45, 147, 542)" opacity="0.62"></rect>
										<rect width="419" height="3" x="12.5" y="647.5" rx="1.5" transform="rotate(45, 222, 649)" opacity="0.44"></rect>
										<rect width="276" height="3" x="-96" y="263.5" rx="1.5" transform="rotate(45, 42, 265)" opacity="0.84"></rect>
										<rect width="193" height="3" x="332.5" y="765.5" rx="1.5" transform="rotate(45, 429, 767)" opacity="0.33"></rect>
										<rect width="82" height="3" x="601" y="374.5" rx="1.5" transform="rotate(45, 642, 376)" opacity="0.50"></rect>
										<rect width="119" height="3" x="714.5" y="366.5" rx="1.5" transform="rotate(45, 774, 368)" opacity="0.77"></rect>
									</g>
								</svg>
							</CardCover>
							<Suspense fallback={<LoadingPage />}>
								<Outlet />
							</Suspense>
						</Box>
					</Sheet>
				)}
			</HelmetProvider>
		</CssVarsProvider>
	);
}
export default App;
