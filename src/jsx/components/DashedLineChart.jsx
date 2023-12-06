/**
 * Sample for Line Series with dashed line
 */
import { useThemeContext } from "@contexts/ContextProvider";
import { Sheet } from "@mui/joy";
import { useTheme } from "@mui/joy/styles";
import { Browser } from "@syncfusion/ej2-base";
import { AnnotationDirective, AnnotationsDirective, Category, ChartAnnotation, ChartComponent, Crosshair, Highlight, Inject, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from "@syncfusion/ej2-react-charts";
import { useMediaQuery } from "@uidotdev/usehooks";

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
	const theme = useTheme();
	const isSmallDevice = useMediaQuery("only screen and (max-width : 400px)");
	const { LineChartInstance, language } = useThemeContext();
	const isArabic = language.language === "ar";
	const content = isArabic ? "<div>الحالي</div>" : "<div>Actual</div>";
	const content1 = isArabic ? "<div>المتنبأ به</div>" : "<div>Expected</div>"; ;
	let data1 = [
		{ x: isArabic ? "جانفي" : "Jan", y: 50 },
		{ x: isArabic ? "فيفري" : "Feb", y: 60 },
		{ x: isArabic ? "مارس" : "Mar", y: 75 },
		{ x: isArabic ? "أفريل" : "Apr", y: 100 },
		{ x: isArabic ? "ماي" : "May", y: 90 },
		{ x: isArabic ? "جوان" : "Jun", y: 110 },
	];
	let data2 = [
		{ x: isArabic ? "جوان" : "Jun", y: 110 },
		{ x: isArabic ? "جويلية" : "Jul", y: 120 },
		{ x: isArabic ? "أوت" : "Aug", y: 130 },
		{ x: isArabic ? "سبتمبر" : "Sep", y: 140 },
		{ x: isArabic ? "أكتوبر" : "Oct", y: 150 },
		{ x: isArabic ? "نوفمبر" : "Nov", y: 180 },
		{ x: isArabic ? "ديسمبر" : "Dec", y: 170 },
	];
	const onChartLoad = (args) => {
		let chart = document.querySelector("#control-pane-dl__control-section__chart");
		chart.setAttribute("title", "");
	};

	return (
		<div className="control-pane-dl" style={{ width: "100%" }}>
			<style>{SAMPLE_CSS}</style>
			<Sheet variant="plain" color="primary" sx={{ textAlign: "center", borderRadius: 9, height: { xs: "300px", sm: "auto" } }} className="control-pane-dl__control-section">
				<ChartComponent
					ref={LineChartInstance}
					id="control-pane-dl__control-section__chart"
					legendSettings={{ enableHighlight: true }}
					primaryXAxis={{
						valueType: "Category",
						labelStyle: { size: theme.vars.fontSize.lg, fontWeight: "bold", color: "var(--joy-palette-primary-softColor)", fontFamily: "var(--joy-fontFamily-body)" },
						// labelPlacement:"OnTicks",
						// edgeLabelPlacement:"shift",
						majorGridLines: { width: 0 },
						minimum: 0,
						maximum: isSmallDevice ? 6 : 11,
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
					margin={{ left: isSmallDevice ? 25 : 15, top: 12, right: 15, bottom: 12 }}
					title={isArabic ? "إحصائيات الإنتاج" : "Production Statistics"}
					titleStyle={{ border: { cornerRadius: 5, color: "var(--joy-palette-primary-800)", width: 1 }, background: "transparent", size: "1rem", fontWeight: "bold", color: "var(--joy-palette-primary-softColor", fontFamily: "var(--joy-fontFamily-body)", position: "Top" }}
					loaded={onChartLoad.bind(this)}
				>
					<Inject services={[LineSeries, Category, Tooltip, Crosshair, ChartAnnotation, Highlight]} />
					<AnnotationsDirective>
						<AnnotationDirective content={content} region="Series" x={isArabic ? "55%" : "15%"} y={isArabic ? "15%" : "55%"}></AnnotationDirective>
						<AnnotationDirective content={content1} region="Series" x={isArabic ? "30%" : "65%"} y={isArabic ? "65%" : "30%"}></AnnotationDirective>
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
