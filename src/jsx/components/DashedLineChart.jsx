/**
 * Sample for Line Series with dashed line
 */
import { Browser } from "@syncfusion/ej2-base";
import { AnnotationDirective, AnnotationsDirective, Category, ChartAnnotation, ChartComponent, Crosshair, Highlight, Inject, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from "@syncfusion/ej2-react-charts";
import { useState } from "react";

export let data1 = [
	{ x: "Jan", y: 50 },
	{ x: "Feb", y: 60 },
	{ x: "Mar", y: 75 },
	{ x: "Apr", y: 100 },
	{ x: "May", y: 90 },
	{ x: "Jun", y: 110 },
];
export let data2 = [
	{ x: "Jun", y: 110 },
	{ x: "Jul", y: 120 },
	{ x: "Aug", y: 130 },
	{ x: "Sep", y: 140 },
	{ x: "Oct", y: 150 },
	{ x: "Nov", y: 180 },
	{ x: "Dec", y: 170 },
];
const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }
    #control-pane-dl__control-section__chart_Series_1 {
        stroke-dasharray: 10px 10px;
        stroke-linejoin: round; stroke-linecap: round;
        -webkit-animation: dash 1s linear infinite;
        animation: dash 1s linear infinite;
    }

    #control-pane-dl__control-section__chart_Series_0_Point_3_Symbol {
        -webkit-animation: opac 1s ease-out infinite;
        animation: opac 1s ease-out infinite;
    }

    @-webkit-keyframes dash {
        100% {
            stroke-dashoffset: -20px;
        }
    }

    @keyframes dash {
        100% {
            stroke-dashoffset: -20px;
        }
    }

    @keyframes opac {
        0% {
            stroke-opacity: 1;
            stroke-width: 0px;
        }
        100% {
            stroke-opacity: 0;
            stroke-width: 10px;
        }
    }`;
const DashedLine = () => {
	const content=("<div>Actual</div>");
	const [content1, setContent1] = useState("<div>Forecast</div>");
	const onChartLoad = (args) => {
		let chart = document.querySelector("#control-pane-dl__control-section__chart");
		chart.setAttribute("title", "");
	};

	return (
		<div className="control-pane-dl" style={{ width: "100%" }}>
			<style>{SAMPLE_CSS}</style>
			<div className="control-pane-dl__control-section">
				<ChartComponent
					id="control-pane-dl__control-section__chart"
					style={{ textAlign: "center" }}
					primaryXAxis={{
						valueType: "Category",
						labelStyle: { size: "1rem", fontWeight: "bold", color: "var(--joy-palette-primary-700)", fontFamily: "var(--joy-fontFamily-body)" },
						majorGridLines: { width: 0 },
						interval: 1,
						labelIntersectAction: Browser.isDevice ? "None" : "Trim",
						labelRotation: Browser.isDevice ? -45 : 0,
						majorTickLines: { width: 0 },
						minorTickLines: { width: 0 },
					}}
					primaryYAxis={{
						labelFormat: "{value}k",
						labelStyle: { size: "1rem", fontWeight: "bold", color: "var(--joy-palette-primary-700)", fontFamily: "var(--joy-fontFamily-body)" },
						rangePadding: "None",
						edgeLabelPlacement: "None",
						plotOffset: 0,
						plotOffsetTop: 0,
						plotOffsetBottom: 0,
						lineStyle: { width: 0 },
						minimum: 0,
						maximum: 200,
						interval: 50,
						visible: true,
						enableTrim: false,
						isInversed: false,
						opposedPosition: false,
						majorTickLines: { width: 0 },
						majorGridLines: { width: 0 },
						minorGridLines: { width: 0 },
						minorTickLines: { width: 0 },
					}}
					tooltip={{ enable: true, shared: true, format: "${point.x} : <b>${point.y}</b>", header: "<b>Fruits Production</b>" }}
					legendSettings={{ enableHighlight: true }}
					crosshair={{ enable: false, line: { color: "rgba(204,214,235,0.25)", width: Browser.isDevice ? 50 : 20 }, lineType: "Vertical" }}
					chartArea={{ border: { cornerRadius: 5, width: 5, color: "var(--joy-palette-primary-700)" }, width: "80%", opacity: 0.5, background: "var(--joy-palette-primary-600)" }}
					width={"100%"}
					height={"250rem"}
					background={"var(--joy-palette-primary-100)"}
					border={{ cornerRadius: 5, color: "var(--joy-palette-primary-700)", width: 5 }}
					margin={{ left: 12, top: 12, right: 12, bottom: 12 }}
					title="Fruits Production Statistics"
					titleStyle={{ border: { cornerRadius: 5, color: "var(--joy-palette-primary-800)", width: 1 }, background: "transparent", size: "1rem", fontWeight: "bold", color: "var(--joy-palette-primary-700)", fontFamily: "var(--joy-fontFamily-body)", position: "Top" }}
					loaded={onChartLoad.bind(this)}
				>
					<Inject services={[LineSeries, Category, Tooltip, Crosshair, ChartAnnotation, Highlight]} />
					<AnnotationsDirective>
						<AnnotationDirective content={content} region="Series" x="15%" y="55%"></AnnotationDirective>
						<AnnotationDirective content={content1} region="Series" x="65%" y="30%"></AnnotationDirective>
					</AnnotationsDirective>
					<SeriesCollectionDirective>
						<SeriesDirective dataSource={data1} xName="x" yName="y" width={2} marker={{ visible: false, width: 7, height: 7 }} type="Line"></SeriesDirective>
						<SeriesDirective dataSource={data2} xName="x" yName="y" width={2} marker={{ visible: false, width: 7, height: 7, shape: "Diamond" }} dashArray="10" type="Line"></SeriesDirective>
					</SeriesCollectionDirective>
				</ChartComponent>
			</div>
		</div>
	);
};
export default DashedLine;
