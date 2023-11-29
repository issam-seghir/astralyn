import { Browser } from "@syncfusion/ej2-base";
import { AreaSeries, Category, ChartComponent, Highlight, Inject, Legend, PolarSeries, RadarSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from "@syncfusion/ej2-react-charts";
import { useRef, useState } from "react";

export let data1 = [
	{ x: "2000", y: 4 },
	{ x: "2001", y: 3 },
	{ x: "2002", y: 3.8 },
	{ x: "2003", y: 3.4 },
	{ x: "2004", y: 3.2 },
	{ x: "2005", y: 3.9 },
];
export let data2 = [
	{ x: "2000", y: 2.6 },
	{ x: "2001", y: 2.8 },
	{ x: "2002", y: 2.6 },
	{ x: "2003", y: 3 },
	{ x: "2004", y: 3.6 },
	{ x: "2005", y: 3 },
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
	let loaded;
	const onChartLoad = (args) => {
		document.querySelector("#charts").setAttribute("title", "");
	};
	const load = (args) => {
		let selectedTheme = location.hash.split("/")[1];
		selectedTheme = selectedTheme ? selectedTheme : "Material";
		args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, "Contrast");
	};
	const change = () => {
		setType(dropElement.current.value);
		chartInstance.current.refresh();
	};
	let droplist = [{ value: "Polar" }, { value: "Radar" }];
	return (
		<div className="control-pane">
			<style>{SAMPLE_CSS}</style>
			<div className="control-section row">
				<div className="col-md-8">
					<ChartComponent
						id="charts"
						ref={chartInstance}
						primaryXAxis={{ valueType: "Category", labelPlacement: "OnTicks", interval: 1, coefficient: Browser.isDevice ? 80 : 100 }}
						primaryYAxis={{ title: "Revenue in Millions", labelFormat: "{value}M" }}
						legendSettings={{ visible: true, enableHighlight: true }}
						tooltip={{ enable: true }}
						load={load.bind(this)}
						title="Average Sales Comparison"
						loaded={onChartLoad.bind(this)}
					>
						<Inject services={[AreaSeries, Legend, Category, PolarSeries, RadarSeries, Highlight, Tooltip]} />
						<SeriesCollectionDirective>
							<SeriesDirective dataSource={data1} xName="x" yName="y" name="Product A" width={2} opacity={0.5} type={type} drawType="Area" border={{ color: "transparent" }} />
							<SeriesDirective dataSource={data2} xName="x" yName="y" name="Product B" width={2} opacity={0.5} type={type} drawType="Area" border={{ color: "transparent" }} />
							<SeriesDirective dataSource={data3} xName="x" yName="y" name="Product C" width={2} opacity={0.5} type={type} drawType="Area" border={{ color: "transparent" }} />
						</SeriesCollectionDirective>
					</ChartComponent>
				</div>
			</div>
		</div>
	);
};
export default PolarArea;
