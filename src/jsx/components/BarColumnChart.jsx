/**
 * Sample for Column series
 */
import { Sheet } from "@mui/joy";
import { Browser } from "@syncfusion/ej2-base";
import { Category, ChartComponent, ColumnSeries, DataLabel, Highlight, Inject, Legend, SeriesCollectionDirective, SeriesDirective, Tooltip } from "@syncfusion/ej2-react-charts";

export let data1 = [
	{ x: "GBR", y: 27, toolTipMappingName: "Great Britain" },
	{ x: "CHN", y: 26, toolTipMappingName: "China" },
	{ x: "AUS", y: 8, toolTipMappingName: "Australia" },
	{ x: "RUS", y: 19, toolTipMappingName: "Russia" },
	{ x: "GER", y: 17, toolTipMappingName: "Germany" },
	{ x: "UA", y: 2, toolTipMappingName: "Ukraine" },
	{ x: "ES", y: 7, toolTipMappingName: "Spain" },
	{ x: "UZB", y: 4, toolTipMappingName: "Uzbekistan" },
	{ x: "JPN", y: 12, toolTipMappingName: "Japan" },
	{ x: "NL", y: 8, toolTipMappingName: "NetherLand" },
	{ x: "USA", y: 46, toolTipMappingName: "United States" },
];
export let data2 = [
	{ x: "GBR", y: 23, toolTipMappingName: "Great Britain" },
	{ x: "CHN", y: 18, toolTipMappingName: "China" },
	{ x: "AUS", y: 11, toolTipMappingName: "Australia" },
	{ x: "RUS", y: 17, toolTipMappingName: "Russia" },
	{ x: "GER", y: 10, toolTipMappingName: "Germany" },
	{ x: "UA", y: 5, toolTipMappingName: "Ukraine" },
	{ x: "ES", y: 4, toolTipMappingName: "Spain" },
	{ x: "UZB", y: 2, toolTipMappingName: "Uzbekistan" },
	{ x: "JPN", y: 8, toolTipMappingName: "Japan" },
	{ x: "NL", y: 7, toolTipMappingName: "NetherLand" },
	{ x: "USA", y: 37, toolTipMappingName: "United States" },
];

const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }`;
const Column = () => {
	const loaded = (args) => {
		let chart = document.querySelector("#control-pane-bc__control-section__chart");
		chart.setAttribute("title", "");
	};

	return (
		<div className="control-pane-bc">
			<style>{SAMPLE_CSS}</style>
			<Sheet variant="plain" color="primary" sx={{ textAlign: "center", borderRadius: 9,height:{xs:"300px",md:"auto"} }} className="control-pane-bc__control-section">
				<ChartComponent
					id="control-pane-bc__control-section__chart"
					legendSettings={{
						enableHighlight: true,
						textStyle: { border: { cornerRadius: 5, color: "var(--joy-palette-primary-800)", width: 1 }, background: "transparent", size: "1rem", fontWeight: "bold", color: "var(--joy-palette-primary-softColor", fontFamily: "var(--joy-fontFamily-body)", position: "Top" },
					}}
					primaryXAxis={{
						labelStyle: { size: "1rem", fontWeight: "bold", color: "var(--joy-palette-primary-softColor)", fontFamily: "var(--joy-fontFamily-body)" },
						labelIntersectAction: Browser.isDevice ? "None" : "Trim",
						labelRotation: Browser.isDevice ? -45 : 0,
						valueType: "Category",
						interval: 1,
						majorGridLines: { width: 0 },
						majorTickLines: { width: 0 },
					}}
					primaryYAxis={{
						labelStyle: { size: "1rem", fontWeight: "bold", color: "var(--joy-palette-primary-softColor)", fontFamily: "var(--joy-fontFamily-body)" },
						title: "Medal Count",
						titleStyle: { border: { cornerRadius: 5, color: "var(--joy-palette-primary-800)", width: 1 }, background: "transparent", size: "1rem", fontWeight: "bold", color: "var(--joy-palette-primary-softColor", fontFamily: "var(--joy-fontFamily-body)", position: "Top" },
						majorTickLines: { width: 0 },
						lineStyle: { width: 0 },
						maximum: 50,
						interval: 10,
					}}
					margin={{ left: 10, top: 12, right: 30, bottom: 12 }}
					chartArea={{ border: { width: 5, color: "var(--joy-palette-primary-softColor)" }, opacity: 0.5, background: "var(--joy-palette-primary-softBg)" }}
					tooltip={{ enable: true, header: "<b>${point.tooltip}</b>", shared: true }}
					width={Browser.isDevice ? "100%" : "75%"}
					height={Browser.isDevice ? "100%" : "75%"}
					title="Olympic Medal Counts - RIO"
					titleStyle={{ border: { cornerRadius: 5, color: "var(--joy-palette-primary-800)", width: 1 }, background: "transparent", size: "1rem", fontWeight: "bold", color: "var(--joy-palette-primary-softColor", fontFamily: "var(--joy-fontFamily-body)", position: "Top" }}
					loaded={loaded.bind(this)}
				>
					<Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel, Highlight]} />
					<SeriesCollectionDirective>
						<SeriesDirective dataSource={data1} tooltipMappingName="toolTipMappingName" xName="x" columnSpacing={0.1} yName="y" name="Gold" type="Column" />
						<SeriesDirective dataSource={data2} tooltipMappingName="toolTipMappingName" xName="x" columnSpacing={0.1} yName="y" name="Silver" type="Column" />
					</SeriesCollectionDirective>
				</ChartComponent>
			</Sheet>
		</div>
	);
};
export default Column;
