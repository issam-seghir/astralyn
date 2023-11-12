/**
 * Sample for Stock Chart with Default
 */
import {
	AccumulationDistributionIndicator,
	AtrIndicator,
	BollingerBands,
	CandleSeries,
	Crosshair,
	DateTime,
	EmaIndicator,
	Export,
	HiloOpenCloseSeries,
	HiloSeries,
	Inject,
	LineSeries,
	MacdIndicator,
	MomentumIndicator,
	RangeAreaSeries,
	RangeTooltip,
	RsiIndicator,
	SmaIndicator,
	SplineSeries,
	StochasticIndicator,
	StockChartComponent,
	StockChartSeriesCollectionDirective,
	StockChartSeriesDirective,
	TmaIndicator,
	Tooltip,
	Trendlines,
} from "@syncfusion/ej2-react-charts";

import { chartData } from "@data/indicator-data";

const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }
    .charts {
        align :center
    }`;
const Default = () => {
	const load = (args) => {
		let selectedTheme = location.hash.split("/")[1];
		selectedTheme = selectedTheme ? selectedTheme : "Material";
		args.stockChart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, "Contrast");
	};
	const tooltipRender = (args) => {
		if (args.text.split("<br/>")[4]) {
			let target = Number.parseInt(args.text.split("<br/>")[4].split("<b>")[1].split("</b>")[0]);
			let value = (target / 100_000_000).toFixed(1) + "B";
			args.text = args.text.replace(args.text.split("<br/>")[4].split("<b>")[1].split("</b>")[0], value);
		}
	};
	return (
		<div className="control-pane">
			<style>{SAMPLE_CSS}</style>
			<div className="control-section">
				<StockChartComponent
					id="stockchartdefault"
					primaryXAxis={{ valueType: "DateTime", majorGridLines: { width: 0 }, majorTickLines: { color: "transparent" }, crosshairTooltip: { enable: true } }}
					primaryYAxis={{ labelFormat: "n0", lineStyle: { width: 0 }, rangePadding: "None", majorTickLines: { height: 0 } }}
					chartArea={{ border: { width: 0 } }}
					tooltip={{ enable: true, shared: true }}
					tooltipRender={tooltipRender}
					crosshair={{ enable: true }}
					load={load.bind(this)}
					title="AAPL Stock Price"
				>
					<Inject
						services={[
							DateTime,
							Tooltip,
							RangeTooltip,
							Crosshair,
							LineSeries,
							SplineSeries,
							CandleSeries,
							HiloOpenCloseSeries,
							HiloSeries,
							RangeAreaSeries,
							Trendlines,
							EmaIndicator,
							RsiIndicator,
							BollingerBands,
							TmaIndicator,
							MomentumIndicator,
							SmaIndicator,
							AtrIndicator,
							Export,
							AccumulationDistributionIndicator,
							MacdIndicator,
							StochasticIndicator,
						]}
					/>
					<StockChartSeriesCollectionDirective>
						<StockChartSeriesDirective dataSource={chartData} xName="x" type="Candle" animation={{ enable: true }} />
					</StockChartSeriesCollectionDirective>
				</StockChartComponent>
			</div>
		</div>
	);
};
export default Default;
