/**
 * Sample for Hilo Open Close Series
 */
import * as React from "react";
import { useEffect } from "react";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, HiloOpenCloseSeries, Category, Tooltip, DateTime, Zoom, Logarithmic, Crosshair } from "@syncfusion/ej2-react-charts";
import { chartValues } from "@data/financial-data";
import { Browser } from "@syncfusion/ej2-base";

export let zoomFactor;
export let zoomPosition;
const SAMPLE_CSS = `
    .control-fluid {
		padding: 0px !important;
    }`;
const HiloOpenClose = () => {
	const load = (args) => {
		args.chart.primaryXAxis.zoomFactor = zoomFactor;
		args.chart.primaryXAxis.zoomPosition = zoomPosition;
		let selectedTheme = location.hash.split("/")[1];
		selectedTheme = selectedTheme ? selectedTheme : "Material";
		args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, "Contrast");
	};
	return (
		<div className="control-pane-fc">
			<style>{SAMPLE_CSS}</style>
			<div className="control-pane-fc__control-section">
				<div className="control-pane-fc__control-section__row">
					<ChartComponent
						id="control-pane-fc__control-section__chart"
						load={load.bind(this)}
						style={{ textAlign: "center" }}
						primaryXAxis={{ valueType: "DateTime", crosshairTooltip: { enable: true }, majorGridLines: { width: 0 } }}
						primaryYAxis={{ title: "Price", rangePadding: "None", labelFormat: "n0", lineStyle: { width: 0 }, majorTickLines: { width: 0 } }}
						chartArea={{ border: { width: 0 } }}
						tooltip={{ enable: true, shared: true, header: "", format: "<b>Apple Inc.(AAPL)</b> <br> High : <b>${point.high}</b> <br> Low : <b>${point.low}</b> <br> Open : <b>${point.open}</b> <br> Close : <b>${point.close}</b>" }}
						width={Browser.isDevice ? "100%" : "75%"}
						legendSettings={{ visible: false }}
						crosshair={{ enable: true, lineType: "Vertical" }}
						title="AAPL Historical"
					>
						<Inject services={[HiloOpenCloseSeries, Category, Tooltip, DateTime, Zoom, Logarithmic, Crosshair]} />
						<SeriesCollectionDirective>
							<SeriesDirective type="HiloOpenClose" dataSource={chartValues} animation={{ enable: true }} bearFillColor="#2ecd71" bullFillColor="#e74c3d" xName="period" low="low" high="high" open="open" close="close" name="Apple Inc" />
						</SeriesCollectionDirective>
					</ChartComponent>
				</div>
			</div>
		</div>
	);
};
export default HiloOpenClose;
