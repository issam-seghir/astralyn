/**
 * Sample for Line Series with dashed line
 */
import { Button, Sheet } from "@mui/joy";
import { useTheme } from "@mui/joy/styles";
import { Browser } from "@syncfusion/ej2-base";
import { AnnotationDirective, AnnotationsDirective, Category, ChartAnnotation, ChartComponent, Crosshair, Highlight, Inject, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from "@syncfusion/ej2-react-charts";
import { useRef } from "react";
import { useThemeContext } from "@contexts/ContextProvider";

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
	const theme = useTheme(); // The runtime theme.
	const { chartInstance, language } = useThemeContext();
	const isArabic = language.language === "ar";
	const content = "<div>Actual</div>";
	const content1 = "<div>Forecast</div>";
	const onChartLoad = (args) => {
		let chart = document.querySelector("#control-pane-dl__control-section__chart");
		chart.setAttribute("title", "");
	};

	return (
		<div className="control-pane-dl" style={{ width: "100%" }}>
			<style>{SAMPLE_CSS}</style>
			<Sheet variant="plain" color="primary" sx={{ textAlign: "center", borderRadius: 9, height: { xs: "300px", sm: "auto" } }} className="control-pane-dl__control-section">
				<ChartComponent
					ref={chartInstance}
					id="control-pane-dl__control-section__chart"
					legendSettings={{ enableHighlight: true }}
					primaryXAxis={{
						valueType: "Category",
						labelStyle: { size: theme.vars.fontSize.lg, fontWeight: "bold", color: "var(--joy-palette-primary-softColor)", fontFamily: "var(--joy-fontFamily-body)" },
						// labelPlacement:"OnTicks",
						// edgeLabelPlacement:"shift",
						majorGridLines: { width: 0 },
						minimum: 0,
						maximum: 11,
						interval: 2,
						labelIntersectAction: Browser.isDevice ? "None" : "Trim",
						labelRotation: Browser.isDevice ? -45 : 0,
						majorTickLines: { width: 0 },
						minorTickLines: { width: 0 },
					}}
					primaryYAxis={{
						labelFormat: "{value}k",
						labelStyle: { size: theme.vars.fontSize.lg, fontWeight: "bold", color: "var(--joy-palette-primary-softColor)", fontFamily: "var(--joy-fontFamily-body)" },
						// labelPlacement:"OnTicks",
						// edgeLabelPlacement:"shift",
						rangePadding: "None",
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
					crosshair={{ enable: false, line: { color: "rgba(204,214,235,0.25)", width: Browser.isDevice ? 50 : 20 }, lineType: "Vertical" }}
					chartArea={{ border: { width: 5, color: "var(--joy-palette-primary-softColor)" }, opacity: 0.5, background: "var(--joy-palette-primary-softBg)" }}
					tooltip={{ enable: true, shared: true, format: "${point.x} : <b>${point.y}</b>", header: isArabic ? "<b>الإنتاج</b>" : "<b>Production</b>" }}
					height={"100%"}
					margin={{ left: 15, top: 12, right: 15, bottom: 12 }}
					title={isArabic ? "إحصائيات الإنتاج"  : "Production Statistics"}
					titleStyle={{ border: { cornerRadius: 5, color: "var(--joy-palette-primary-800)", width: 1 }, background: "transparent", size: "1rem", fontWeight: "bold", color: "var(--joy-palette-primary-softColor", fontFamily: "var(--joy-fontFamily-body)", position: "Top" }}
					loaded={onChartLoad.bind(this)}
				>
					<Inject services={[LineSeries, Category, Tooltip, Crosshair, ChartAnnotation, Highlight]} />
					<AnnotationsDirective>
						<AnnotationDirective content={content} region="Series" x="15%" y="55%"></AnnotationDirective>
						<AnnotationDirective content={content1} region="Series" x="65%" y="30%"></AnnotationDirective>
					</AnnotationsDirective>
					<SeriesCollectionDirective>
						<SeriesDirective dataSource={data1} xName="x" yName="y" width={2} marker={{ visible: false, width: 7, height: 7 }} type="Line" fill="var(--joy-palette-primary-softColor)"></SeriesDirective>
						<SeriesDirective dataSource={data2} xName="x" yName="y" width={2} marker={{ visible: false, width: 7, height: 7, shape: "Diamond" }} dashArray="10" type="Line" fill="var(--joy-palette-neutral-softColor)"></SeriesDirective>
					</SeriesCollectionDirective>
				</ChartComponent>
			</Sheet>
		</div>
	);
};
export default DashedLine;
