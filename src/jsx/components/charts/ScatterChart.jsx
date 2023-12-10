import { useThemeContext } from "@contexts/ContextProvider";
import { scatterData } from "@data/scatterChart-data";
import Box from "@mui/joy/Box";
import { Category, ChartComponent, Highlight, Inject, Legend, ScatterSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from "@syncfusion/ej2-react-charts";

const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }`;

const Scatter = () => {
	const { language } = useThemeContext();
	const isArabic = language.language === "ar";
	const onChartLoad = (args) => {
		let chart = document.querySelector("#charts");
		chart.setAttribute("title", "");
	};

	return (
		<Box className="control-paneb" sx={{ flex: { lg: 1, xs: "100%" }, alignItems: "center" }}>
			<style>{SAMPLE_CSS}</style>
			<div className="control-sectionb">
				<ChartComponent
					id="chartsb"
					style={{ textAlign: "center" }}
					primaryXAxis={{
						minimum: 40,
						maximum: 56,
						majorGridLines: { width: 0 },
						majorTickLines: { color: "var(--joy-palette-primary-400" },
						labelStyle: { color: "var(--joy-palette-primary-softColor" },
						edgeLabelPlacement: "Shift",
						title: isArabic ? "اتساع الكتف (سم)" : "Shoulder Breadth (cm)",
						titleStyle: { background: "transparent", color: "var(--joy-palette-primary-softColor)" },
					}}
					primaryYAxis={{
						majorTickLines: { width: 0 },
						labelStyle: { color: "var(--joy-palette-primary-softColor" },
						majorGridLines: { color: "var(--joy-palette-primary-200" },
						minimum: 70,
						maximum: 140,
						interval: 10,
						lineStyle: { width: 0 },
						title: isArabic ? "محيط صدر التمثال (سم)" : "Bust Chest Circumference (cm)",
						titleStyle: { background: "transparent", color: "var(--joy-palette-primary-softColor)" },
						rangePadding: "None",
					}}
					loaded={onChartLoad.bind(this)}
					legendSettings={{
						visible: true,
						enableHighlight: true,
						textStyle: { background: "transparent", color: "var(--joy-palette-primary-softColor)" },
					}}
					tooltip={{ enable: true }}
					chartArea={{ border: { width: 0 } }}
				>
					<Inject services={[ScatterSeries, Legend, Tooltip, Category, Highlight]} />
					<SeriesCollectionDirective>
						<SeriesDirective dataSource={scatterData.getCluster1Value} width={2} xName="Breadth" yName="Circumference" name={language.language == "ar" ? "18-20 سنة" : "18-20 Years"} type="Scatter" marker={{ visible: false, width: 10, height: 10, shape: "Circle" }} />
						<SeriesDirective dataSource={scatterData.getCluster2Value} xName="Breadth" yName="Circumference" name={isArabic ? "21-25 سنة" : "21-25 Years"} type="Scatter" marker={{ visible: false, width: 10, height: 10, shape: "Circle" }} />
						<SeriesDirective dataSource={scatterData.getCluster3Value} xName="Breadth" yName="Circumference" name={isArabic ? "26-30 سنة" : "26-30 Years"} type="Scatter" marker={{ visible: false, width: 10, height: 10, shape: "Circle" }} />
						<SeriesDirective dataSource={scatterData.getCluster4Value} xName="Breadth" yName="Circumference" name={isArabic ? "31-35 سنة" : "31-35 years"} type="Scatter" marker={{ visible: false, width: 10, height: 10, shape: "Circle" }} />
						<SeriesDirective dataSource={scatterData.getCluster5Value} xName="Breadth" yName="Circumference" name={isArabic ? "36+ سنة" : "36+ Years"} type="Scatter" marker={{ visible: false, width: 10, height: 10, shape: "Circle" }} />
					</SeriesCollectionDirective>
				</ChartComponent>
			</div>
		</Box>
	);
};
export default Scatter;
