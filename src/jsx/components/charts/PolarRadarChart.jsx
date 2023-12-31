import { useThemeContext } from "@contexts/ContextProvider";
import Box from "@mui/joy/Box";
import { Browser } from "@syncfusion/ej2-base";
import { AreaSeries, Category, ChartComponent, Highlight, Inject, Legend, PolarSeries, RadarSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from "@syncfusion/ej2-react-charts";
import { useRef, useState } from "react";

export let data1 = [
	{ x: "2000", y: 4 },
	{ x: "2001", y: 5 },
	{ x: "2002", y: 3.8 },
	{ x: "2003", y: 3.4 },
	{ x: "2004", y: 3.2 },
	{ x: "2005", y: 4.9 },
];
export let data2 = [
	{ x: "2000", y: 2.6 },
	{ x: "2001", y: 3.8 },
	{ x: "2002", y: 2.6 },
	{ x: "2003", y: 4 },
	{ x: "2004", y: 4.6 },
	{ x: "2005", y: 4 },
];
export let data3 = [
	{ x: "2000", y: 2.8 },
	{ x: "2001", y: 2.5 },
	{ x: "2002", y: 2.8 },
	{ x: "2003", y: 3.2 },
	{ x: "2004", y: 2.9 },
	{ x: "2005", y: 2 },
];
const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }`;
const PolarArea = () => {
	const [type, setType] = useState("Polar");
	let chartInstance = useRef(null);
	let dropElement = useRef(null);
	const { language } = useThemeContext();
	const isArabic = language.language === "ar";
	let loaded;
	const onChartLoad = (args) => {
		document.querySelector("#charts").setAttribute("title", "");
	};
	const change = () => {
		setType(dropElement.current.value);
		chartInstance.current.refresh();
	};
	let droplist = [{ value: "Polar" }, { value: "Radar" }];
	return (
		<Box className="control-pane" sx={{ flex: { lg: 1, xs: "100%" }, alignItems: "center" }}>
			<style>{SAMPLE_CSS}</style>
			<ChartComponent
				id="charts"
				ref={chartInstance}
				primaryXAxis={{
					labelStyle: { color: "var(--joy-palette-primary-softColor" },
					valueType: "Category",
					labelPlacement: "OnTicks",
					interval: 1,
					coefficient: Browser.isDevice ? 80 : 100,
					titleStyle: { background: "transparent", color: "var(--joy-palette-primary-softColor)" },
				}}
				primaryYAxis={{
					title: isArabic ? "الإيرادات بالملايين" : "Revenue in Millions",
					labelFormat: "{value}M",
					labelStyle: { color: "var(--joy-palette-primary-300" },
					titleStyle: { background: "transparent", color: "var(--joy-palette-primary-100)" },
				}}
				legendSettings={{ visible: true, enableHighlight: true, textStyle: { background: "transparent", color: "var(--joy-palette-primary-softColor)" } }}
				tooltip={{ enable: true }}
				title={isArabic ? "متوسط مقارنة المبيعات" : "Average Sales Comparison"}
				titleStyle={{ color: "var(--joy-palette-primary-softColor)" }}
				loaded={onChartLoad.bind(this)}
			>
				<Inject services={[AreaSeries, Legend, Category, PolarSeries, RadarSeries, Highlight, Tooltip]} />
				<SeriesCollectionDirective>
					<SeriesDirective dataSource={data2} xName="x" yName="y" name={isArabic ? "المنتج ب " : "Product B"} fill={"#e46590"} width={2} opacity={0.5} type={type} drawType="Area" border={{ color: "transparent" }} />
					<SeriesDirective dataSource={data1} xName="x" yName="y" name={isArabic ? "المنتج أ " : "Product A"} fill={"#00bdae"} width={2} opacity={0.5} type={type} drawType="Area" border={{ color: "transparent" }} />
					<SeriesDirective dataSource={data3} xName="x" yName="y" name={isArabic ? "المنتج س " : "Product C"} fill={"#ec5883"} width={2} opacity={0.5} type={type} drawType="Area" border={{ color: "transparent" }} />
				</SeriesCollectionDirective>
			</ChartComponent>
		</Box>
	);
};
export default PolarArea;
