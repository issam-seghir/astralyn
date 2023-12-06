/**
 * Sample for Column series
 */
import { useThemeContext } from "@contexts/ContextProvider";
import { Sheet } from "@mui/joy";
import { Browser } from "@syncfusion/ej2-base";
import { Category, ChartComponent, ColumnSeries, DataLabel, Highlight, Inject, Legend, SeriesCollectionDirective, SeriesDirective, Tooltip } from "@syncfusion/ej2-react-charts";
import { useMediaQuery } from "@uidotdev/usehooks";


const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }`;

const Column = () => {
	const { BarChartInstance, language } = useThemeContext();
	const isSmallDevice = useMediaQuery("only screen and (max-width : 400px)");
	const isSmallDeviceII = useMediaQuery("only screen and (max-width : 600px)");

	const isArabic = language.language === "ar";
let data1 = [
	{ x: isArabic ? "بريطانيا" : "GBR", y: 27, toolTipMappingName: isArabic ? "بريطانيا" : "Great Britain" },
	{ x: isArabic ? "الصين" : "CHN", y: 26, toolTipMappingName: isArabic ? "الصين" : "China" },
	{ x: isArabic ? "أستراليا" : "AUS", y: 8, toolTipMappingName: isArabic ? "أستراليا" : "Australia" },
	{ x: isArabic ? "روسيا" : "RUS", y: 19, toolTipMappingName: isArabic ? "روسيا" : "Russia" },
	{ x: isArabic ? "ألمانيا" : "GER", y: 17, toolTipMappingName: isArabic ? "ألمانيا" : "Germany" },
	{ x: isArabic ? "اوكرانيا" : "UA", y: 2, toolTipMappingName: isArabic ? "أوكرانيا" : "Ukraine" },
	{ x: isArabic ? "إسبانيا" : "ES", y: 7, toolTipMappingName: isArabic ? "إسبانيا" : "Spain" },
	{ x: isArabic ? "اليابان" : "JPN", y: 12, toolTipMappingName: isArabic ? "اليابان" : "Japan" },
	{ x: isArabic ? "الجزائر" : "AL", y: 8, toolTipMappingName: isArabic ? "الجزائر" : "Algeria" },
	{ x: isArabic ? "و.م.أ" : "USA", y: 46, toolTipMappingName: isArabic ? "و.م.أ" : "United States" },
];
let data2 = [
	{ x: isArabic ? "بريطانيا" : "GBR", y: 23, toolTipMappingName: isArabic ? "بريطانيا" : "Great Britain" },
	{ x: isArabic ? "الصين" : "CHN", y: 18, toolTipMappingName: isArabic ? "الصين" : "China" },
	{ x: isArabic ? "أستراليا" : "AUS", y: 11, toolTipMappingName: isArabic ? "أستراليا" : "Australia" },
	{ x: isArabic ? "روسيا" : "RUS", y: 17, toolTipMappingName: isArabic ? "روسيا" : "Russia" },
	{ x: isArabic ? "ألمانيا" : "GER", y: 10, toolTipMappingName: isArabic ? "ألمانيا" : "Germany" },
	{ x: isArabic ? "أوكرانيا" : "UA", y: 5, toolTipMappingName: isArabic ? "أوكرانيا" : "Ukraine" },
	{ x: isArabic ? "إسبانيا" : "ES", y: 4, toolTipMappingName: isArabic ? "إسبانيا" : "Spain" },
	{ x: isArabic ? "اليابان" : "JPN", y: 8, toolTipMappingName: isArabic ? "اليابان" : "Japan" },
	{ x: isArabic ? "الجزائر" : "AL", y: 7, toolTipMappingName: isArabic ? "الجزائر" : "Algeria" },
	{ x: isArabic ? "و.م.أ" : "USA", y: 37, toolTipMappingName: isArabic ? "و.م.أ" : "United States" },
];

	const loaded = (args) => {
		let chart = document.querySelector("#control-pane-bc__control-section__chart");
		chart.setAttribute("title", "");
	};
	// fir legend Shape and SeriesDirective only
	const palette = ["var(--joy-palette-primary-300)", "var(--joy-palette-primary-500)"];
	return (
		<div className="control-pane-bc" style={{ width: "100%" }}>
			<style>{SAMPLE_CSS}</style>
			<Sheet variant="plain" color="primary" sx={{ textAlign: "center", borderRadius: 9, height: { xs: "300px", sm: "auto" } }} className="control-pane-bc__control-section">
				<ChartComponent
					ref={BarChartInstance}
					id="control-pane-bc__control-section__chart"
					palettes={palette}
					legendSettings={{
						enableHighlight: true,
						textStyle: { border: { cornerRadius: 5, color: "var(--joy-palette-primary-800)", width: 1 }, background: "transparent", size: "1rem", fontWeight: "bold", color: "var(--joy-palette-primary-softColor", fontFamily: "var(--joy-fontFamily-body)", position: "Top" },
					}}
					primaryXAxis={{
						labelStyle: { size: "1rem", fontWeight: "bold", color: "var(--joy-palette-primary-softColor)", fontFamily: "var(--joy-fontFamily-body)" },
						labelIntersectAction: Browser.isDevice ? "None" : "Trim",
						labelRotation:  -45 ,
						valueType: "Category",
						rangePadding: "Round",
						maximum: isSmallDevice ? 4 : null,
						interval: isSmallDeviceII ? 2 : 1,
						majorGridLines: { width: 0 },
						majorTickLines: { width: 0 },
					}}
					primaryYAxis={{
						labelStyle: { size: "1rem", fontWeight: "bold", color: "var(--joy-palette-primary-softColor)", fontFamily: "var(--joy-fontFamily-body)" },
						title: isArabic ? "عدد الميداليات" : "Medal Count",
						titleStyle: { border: { cornerRadius: 5, color: "var(--joy-palette-primary-800)", width: 1 }, background: "transparent", size: "1rem", fontWeight: "bold", color: "var(--joy-palette-primary-softColor", fontFamily: "var(--joy-fontFamily-body)", position: "Top" },
						majorTickLines: { width: 0 },
						lineStyle: { width: 0 },
						maximum: 50,
						interval: 10,
					}}
					margin={{ left: isSmallDevice ? 25 : 15, top: 12, right: 15, bottom: 12 }}
					chartArea={{ border: { width: 5, color: "var(--joy-palette-primary-softColor)" }, opacity: 0.5, background: "var(--joy-palette-primary-softBg)" }}
					tooltip={{ enable: true, header: "<b>${point.tooltip}</b>", shared: true }}
					title={isArabic ? "عدد الميداليات الأولمبية - RIO" : "Olympic Medal Counts - RIO"}
					titleStyle={{ border: { cornerRadius: 5, color: "var(--joy-palette-primary-800)", width: 1 }, background: "transparent", size: "1rem", fontWeight: "bold", color: "var(--joy-palette-primary-softColor", fontFamily: "var(--joy-fontFamily-body)", position: "Top" }}
					loaded={loaded.bind(this)}
				>
					<Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel, Highlight]} />
					<SeriesCollectionDirective>
						<SeriesDirective
							dataSource={data1}
							tooltipMappingName="toolTipMappingName"
							xName="x"
							columnSpacing={0.1}
							yName="y"
							name={isArabic ? "ذهبية" : "Gold"}
							type="Column"
							cornerRadius={{
								topLeft: 3,
								topRight: 3,
							}}
						/>
						<SeriesDirective
							dataSource={data2}
							tooltipMappingName="toolTipMappingName"
							xName="x"
							columnSpacing={0.1}
							yName="y"
							name={isArabic ? "فضية" : "Silver"}
							type="Column"
							cornerRadius={{
								topLeft: 3,
								topRight: 3,
							}}
						/>
					</SeriesCollectionDirective>
				</ChartComponent>
			</Sheet>
		</div>
	);
};
export default Column;
