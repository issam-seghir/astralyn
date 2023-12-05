/**
 * Sample for Hilo Open Close Series
 */
import { chartValues } from "@data/financial-data";
import { Browser } from "@syncfusion/ej2-base";
import { Category, ChartComponent, Crosshair, DateTime, HiloOpenCloseSeries, Inject, Logarithmic, SeriesCollectionDirective, SeriesDirective, Tooltip, Zoom } from "@syncfusion/ej2-react-charts";
import { useThemeContext } from "@contexts/ContextProvider";

const SAMPLE_CSS = `
.control-fluid {
	padding: 0px !important;
}`;
const HiloOpenClose = () => {
	const { language } = useThemeContext();
	const isArabic = language.language === "ar";

	return (
		<div className="control-pane-fc">
			<style>{SAMPLE_CSS}</style>
			<ChartComponent
				id="control-pane-fc__control-section__chart"
				style={{ textAlign: "center" }}
				primaryXAxis={{
					valueType: "DateTime",
					crosshairTooltip: { enable: true },
					majorGridLines: { width: 0 },
					majorTickLines: { color: "var(--joy-palette-primary-400" },
					labelStyle: { size: ".8rem", fontWeight: "bold", color: "var(--joy-palette-primary-softColor)", fontFamily: "var(--joy-fontFamily-body)" },
				}}
				primaryYAxis={{
					title: isArabic ? "الثمن" : "Price",
					titleStyle: { border: { cornerRadius: 5, color: "var(--joy-palette-primary-800)", width: 1 }, background: "transparent", size: "1rem", fontWeight: "bold", color: "var(--joy-palette-primary-softColor", fontFamily: "var(--joy-fontFamily-body)", position: "Top" },
					rangePadding: "None",
					labelFormat: "n0",
					labelStyle: { size: "1rem", fontWeight: "bold", color: "var(--joy-palette-primary-softColor)", fontFamily: "var(--joy-fontFamily-body)" },
					lineStyle: { width: 0 },
					majorTickLines: { width: 0 },
					majorGridLines: { color: "var(--joy-palette-primary-300" },
				}}
				chartArea={{ border: { width: 0 } }}
				tooltip={{ enable: true, shared: true, header: "", format: "<b>Apple Inc.(AAPL)</b> <br> High : <b>${point.high}</b> <br> Low : <b>${point.low}</b> <br> Open : <b>${point.open}</b> <br> Close : <b>${point.close}</b>" }}
				width={Browser.isDevice ? "100%" : "75%"}
				legendSettings={{ visible: false }}
				crosshair={{ enable: true, lineType: "Vertical" }}
				title={isArabic ? "AAPL التاريخي" : "AAPL Historical"}
				titleStyle={{ border: { cornerRadius: 5, color: "var(--joy-palette-primary-800)", width: 1 }, background: "transparent", size: "1rem", fontWeight: "bold", color: "var(--joy-palette-primary-softColor", fontFamily: "var(--joy-fontFamily-body)", position: "Top" }}
			>
				<Inject services={[HiloOpenCloseSeries, Category, Tooltip, DateTime, Zoom, Logarithmic, Crosshair]} />
				<SeriesCollectionDirective>
					<SeriesDirective type="HiloOpenClose" dataSource={chartValues} animation={{ enable: true }} bearFillColor="#2ecd71" bullFillColor="#e74c3d" xName="period" low="low" high="high" open="open" close="close" name="Apple Inc" />
				</SeriesCollectionDirective>
			</ChartComponent>
		</div>
	);
};
export default HiloOpenClose;
