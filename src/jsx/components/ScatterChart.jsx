
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, ScatterSeries, Tooltip, Highlight } from "@syncfusion/ej2-react-charts";
import { Browser } from "@syncfusion/ej2-base";
import { scatterData } from "@data/scatterChart-data";

const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }`;
const Scatter = () => {
	const onChartLoad = (args) => {
		let chart = document.getElementById("charts");
		chart.setAttribute("title", "");
	};
	const load = (args) => {
		let selectedTheme = location.hash.split("/")[1];
		selectedTheme = selectedTheme ? selectedTheme : "Material";
		args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, "Contrast");
	};
	return (
		<div className="control-paneb">
			<style>{SAMPLE_CSS}</style>
			<div className="control-sectionb">
				<ChartComponent
					id="chartsb"
					style={{ textAlign: "center" }}
					primaryXAxis={{ minimum: 40, maximum: 56, majorGridLines: { width: 0 }, edgeLabelPlacement: "Shift", title: "Shoulder Breadth (cm)" }}
					primaryYAxis={{ majorTickLines: { width: 0 }, minimum: 70, maximum: 140, interval: 10, lineStyle: { width: 0 }, title: "Bust Chest Circumference (cm)", rangePadding: "None" }}
					load={load.bind(this)}
					loaded={onChartLoad.bind(this)}
					legendSettings={{ visible: true, enableHighlight: true }}
					tooltip={{ enable: true }}
					width={Browser.isDevice ? "100%" : "75%"}
					chartArea={{ border: { width: 0 } }}
				>
					<Inject services={[ScatterSeries, Legend, Tooltip, Category, Highlight]} />
					<SeriesCollectionDirective>
						<SeriesDirective dataSource={scatterData.getCluster1Value} width={2} xName="Breadth" yName="Circumference" name="18-20 Years" type="Scatter" marker={{ visible: false, width: 10, height: 10, shape: "Circle" }} />
						<SeriesDirective dataSource={scatterData.getCluster2Value} xName="Breadth" yName="Circumference" name="21-25 Years" type="Scatter" marker={{ visible: false, width: 10, height: 10, shape: "Circle" }} />
						<SeriesDirective dataSource={scatterData.getCluster3Value} xName="Breadth" yName="Circumference" name="26-30 Years" type="Scatter" marker={{ visible: false, width: 10, height: 10, shape: "Circle" }} />
						<SeriesDirective dataSource={scatterData.getCluster4Value} xName="Breadth" yName="Circumference" name="31-35 years" type="Scatter" marker={{ visible: false, width: 10, height: 10, shape: "Circle" }} />
						<SeriesDirective dataSource={scatterData.getCluster5Value} xName="Breadth" yName="Circumference" name="36+ Years" type="Scatter" marker={{ visible: false, width: 10, height: 10, shape: "Circle" }} />
					</SeriesCollectionDirective>
				</ChartComponent>
			</div>
		</div>
	);
};
export default Scatter;
