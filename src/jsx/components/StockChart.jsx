import { useThemeContext } from "@contexts/ContextProvider";
import { chartData } from "@data/indicator-data";
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
import { useMediaQuery } from "@uidotdev/usehooks";

const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }
    .charts {
        align :center
    }`;
const Default = () => {
	const { language } = useThemeContext();
	const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const periodselector = [
		{ text: language.language == "ar" ? "1ش" : "1M", interval: 1, intervalType: "Months" },
		{ text: language.language == "ar" ? "3ش" : "3M", interval: 3, intervalType: "Months", selected: isSmallDevice },
		{ text: language.language == "ar" ? "6ش" : "6M", interval: 6, intervalType: "Months" },
		{ text: "YTD", selected: !isSmallDevice },
		{ text: language.language == "ar" ? "1سنة" : "1Y", interval: 1, intervalType: "Years" },
		{ text: language.language == "ar" ? "2سنة" : "2Y", interval: 2, intervalType: "Years" },
		{ text: language.language == "ar" ? "الكل" : "All" },
  ];
	const tooltipRender = (args) => {
		if (args.text.split("<br/>")[4]) {
			let target = Number.parseInt(args.text.split("<br/>")[4].split("<b>")[1].split("</b>")[0]);
			let value = (target / 100_000_000).toFixed(1) + "B";
			args.text = args.text.replace(args.text.split("<br/>")[4].split("<b>")[1].split("</b>")[0], value);
		}
	};
	return (
		<div className="control-pane-scc" style={{ height: "100%", width: "100%" }}>
			<style>{SAMPLE_CSS}</style>
			<StockChartComponent
				id="stockchartdefault"
				primaryXAxis={{
					valueType: "DateTime",
					majorGridLines: { width: 0 },
					majorTickLines: { color: "var(--joy-palette-primary-400" },
					crosshairTooltip: { enable: true },
					labelStyle: { color: "var(--joy-palette-primary-softColor" },
				}}
				primaryYAxis={{
					labelFormat: "n0",
					lineStyle: { width: 0 },
					rangePadding: "None",
					majorTickLines: { height: 0 },
					majorGridLines: { color: "var(--joy-palette-primary-400" },
					labelStyle: { color: "var(--joy-palette-primary-softColor" },
				}}
				periods={periodselector}
				height={"100%"}
				width="100%"
				chartArea={{ border: { width: 0 }, background: "transparent" }}
				tooltip={{ enable: true, shared: true }}
				tooltipRender={tooltipRender}
				crosshair={{ enable: true }}
				title={language.language == "ar" ? "سعر السهم AAPL" : "AAPL Stock Price"}
				titleStyle={{ background: "transparent", size: "1rem", fontWeight: "bold", color: "var(--joy-palette-primary-softColor", position: "Top" }}
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
					<StockChartSeriesDirective dataSource={chartData} xName="x" type="Candle" animation={{ enable: true }} fill="var(--joy-palette-primary-softBg)" bearFillColor="var(--joy-palette-primary-300)" bullFillColor="var(--joy-palette-primary-500)" />
				</StockChartSeriesCollectionDirective>
			</StockChartComponent>
		</div>
	);
};
export default Default;
