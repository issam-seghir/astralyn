import { extend, isNullOrUndefined as isNOU } from "@syncfusion/ej2-base";
import { DataManager, Predicate, Query } from "@syncfusion/ej2-data";
import {
	AccumulationChartComponent,
	AccumulationDataLabel,
	AccumulationLegend,
	AccumulationSeriesCollectionDirective,
	AccumulationSeriesDirective,
	AccumulationTooltip,
	AnnotationDirective,
	AnnotationsDirective,
	AreaSeries,
	Category,
	ChartAnnotation,
	ChartComponent,
	ColumnSeries,
	DataLabel,
	DateTime,
	Inject,
	Legend,
	LineSeries,
	PieSeries,
	SeriesCollectionDirective,
	SeriesDirective,
	Tooltip,
} from "@syncfusion/ej2-react-charts";
import { DiagramComponent, NodeConstraints } from "@syncfusion/ej2-react-diagrams";
import { ColumnChooser, ColumnDirective, ColumnMenu, ColumnsDirective, DetailRow, Edit, GridComponent, Group, Page, RowDD, Selection, Sort, Toolbar } from "@syncfusion/ej2-react-grids";

import { useThemeContext } from "@contexts/ContextProvider";
import { useMediaQuery } from "@uidotdev/usehooks";

import { expenseData } from "@data/charts/diagram-data";
import Seo from "@jsx/components/Hemlet/Seo";
import { Box } from "@mui/joy";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";


let shape = { type: "HTML" };
let constraints = NodeConstraints.Default & ~NodeConstraints.Resize & ~NodeConstraints.Rotate;

let expenseDS;
let diagramInstance;
let lineChart;
let columnChart;
let pie;
let lGrid;
let predicateStart;
let predicateEnd;
let predicate;
let acclegendSettings = {
	visible: true,
	enableHighlight: true,
	textStyle: { background: "transparent", size: ".7rem", fontWeight: "bold", color: "var(--joy-palette-primary-900", fontFamily: "var(--joy-fontFamily-body)", position: "Top" },
};
let start = new Date("5/31/2017");
let end = new Date("11/30/2017");
let minDate = new Date(2017, 5, 1);
let maxDate = new Date(2017, 10, 30);
predicateStart = new Predicate("DateTime", "greaterthanorequal", start);
predicateEnd = new Predicate("DateTime", "lessthanorequal", end);
predicate = predicateStart.and(predicateEnd);

let ltooltip = {
	fill: "var(--joy-palette-primary-900)",
	enable: true,
	shared: true,
	format: "${series.name} : ${point.y}",
	header: "Month - ${point.x} ",
};
let lBorder = { width: 0.5, color: "var(--joy-palette-primary-800)" };
let lchartArea = {
	border: { width: 0 },
};
let lprimaryXAxis = {
	valueType: "DateTime",
	labelFormat: "MMM",
	majorGridLines: { width: 0 },
	intervalType: "Months",
};
let lprimaryYAxis = {
	maximum: 1800,
	interval: 300,
	labelFormat: "c0",
};
let lanimation = { enable: false };
let lmargin = { top: 90 };
let lineChartData;
let lmarker = {
	visible: true,
	width: 10,
	height: 10,
	fill: "var(--joy-palette-primary-softBg)",
	border: { width: 2, color: "var(--joy-palette-primary-softColor)" },
};
let dataSource = [];
let lineD = [];
let lineDS = [];
let tempData;
let legendData = [];
let tempLineDS = {};
let colIncomeDS = [];
let colExpenseDS = [];
let tempIncomeDS = {};
let tempExpenseDS = {};
let curDateTime;
let colChartIncomeData;
let colChartExpenseData;
let groupValue;
let pieLegendData = [];
let colorPalettes = ["#61EFCD", "#CDDE1F", "#FEC200", "#CA765A", "#2485FA", "#F57D7D", "#C152D2", "#8854D9", "#3D4EB8", "#00BCD7"];
let dataLabel = {
	name: "x",
	visible: true,
	position: "Outside",
	connectorStyle: { length: "10%" },
	font: { color: "var(--joy-palette-primary-900)", size: "14px" },
};
let pieRenderingData = [];
let accanimation = { enable: false };
let enableLegend = false;
let pieRenderData = [];
let primaryXAxis = {
	labelFormat: "MMM",
	valueType: "DateTime",
	intervalType: "Months",
	edgeLabelPlacement: "Shift",
};
let primaryYAxis = {
	minimum: 3000,
	maximum: 9000,
	labelFormat: "c0",
};
let legendSettings;
let margin;
let titleStyle;
let tooltip;
let animation;
let marker;
let cBorder;
let showWaitingPopup = false;
titleStyle = { textAlignment: "Near", fontWeight: "500", size: "16", color: "var(--joy-palette-primary-900)" };
legendSettings = {
	visible: true,
	enableHighlight: true,
	textStyle: { background: "transparent", size: "1rem", fontWeight: "bold", color: "var(--joy-palette-primary-900", fontFamily: "var(--joy-fontFamily-body)", position: "Top" },
};
tooltip = {
	fill: "var(--joy-palette-primary-900)",
	enable: true,
	shared: true,
	format: "${series.name} : ${point.y}",
	header: "Month - ${point.x} ",
};
marker = { visible: true, height: 10, width: 10 };
margin = { top: 90 };
cBorder = { width: 0.5, color: "var(--joy-palette-primary-softBg)" };
animation = { enable: false };
let expTotal = 0;
let category = [];
let hiGridData;
let initialRender = true;
let piedata;
function HtmlNode() {
	var template = diagramTemplate;
	let gtemplate = gridTemplate;
	let datachange = onDateRangeChange;
	const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
	const { language } = useThemeContext();
	const isArabic = language.language === "ar";
	const title = isArabic ? "أسترالين | المتعقب" : "Astralyn | Tracker";
	const description = isArabic ? "صفحة التتبع لتتبع المصاريف استنادًا إلى التاريخ مع منتقي التقويم لعرض 3 مخططات: شريطية / خطية / عادية ومخطط دائري" : "The tracker page tracks expenses based on date with a calendar picker to display 3 charts: bar/line/normal and a circular chart";
	const name = isArabic ? "أسترالين" : "Astralyn";
	const type = "website";
	let exp = language.language == "ar" ? expenseData["ar"] : expenseData["en"];
	const SAMPLE_CSS = `
#lchart_content_html_element,#colchart_content_html_element{
	top: 800px !important;
}
`;

	let nodes = [
		{
			id: "node",
			offsetX: 409,
			offsetY: -151,
			width: 250,
			height: 30,
			shape: shape,
			constraints: constraints,
		},
		{
			id: "lchart",
			offsetX: 276,
			offsetY: 550,
			width: 512,
			height: 408,
			shape: shape,
			constraints: constraints,
		},
		{
			id: "colchart",
			offsetX: -257,
			offsetY: 550,
			width: 512,
			height: 408,
			shape: shape,
			constraints: constraints,
		},
		{
			id: "pie",
			offsetX: 10,
			offsetY: 100,
			width: 1050,
			height: 450,
			shape: shape,
			constraints: constraints,
		},
		{
			id: "node5",
			offsetX: isArabic ? -200 : -434,
			offsetY: -157,
			width: 250,
			height: 30,
			style: { fill: "transparent", strokeColor: "transparent" },
			constraints: NodeConstraints.Default & ~NodeConstraints.Select,
			annotations: [
				{
					content: isArabic ? "متعقب النفقات" : "EXPENSE TRACKER",
					style: { fontSize: 30, color: "var(--joy-palette-primary-900)", bold: true },
				},
			],
		},
	];
	let datePresets = [
		{ label: language.language == "ar" ? "الشهر الماضي" : "Last Month", start: new Date("10/1/2017"), end: new Date("10/31/2017") },
		{ label: language.language == "ar" ? "الأشهر الثلاث الماضية" : "Last 3 Months", start: new Date("9/1/2017"), end: new Date("11/30/2017") },
		{ label: language.language == "ar" ? "كل الزمن" : "All Time", start: new Date("6/1/2017"), end: new Date("11/30/2017") },
	];
	let content1 = `<p style="font-size: 16px;font-weight: 400;font-weight: 400;letter-spacing: 0.02em;line-height: 16px;color: var(--joy-palette-primary-900) !important;">${language.language == "ar" ? "رصيد الحساب" : "Account - Balance"}</p>`;
	let content2 = `<p style="font-size: 16px;font-weight: 400;font-weight: 400;letter-spacing: 0.02em;line-height: 16px;color: var(--joy-palette-primary-900) !important;">${language.language == "ar" ? "الدخل - المصاريف" : "Income - Expense"}</p>`;
	function rendereComplete() {
		initialRenderr();
		onGridLoad();
		onChartLoaded();
		diagramInstance.fitToPage();
	}
	function gridTemplate(props) {
		return (
			<tr style={{ height: "30px" }}>
				<td>
					<div
						style={{
							height: "16px",
							width: "16px",
							marginInlineStart: "10px",
							borderTopLeftRadius: "16px",
							borderTopRightRadius: "16px",
							borderBottomLeftRadius: "16px",
							borderBottomRightRadius: "16px",
							background: props.color,
						}}
					/>
				</td>
				<td> {props.text} </td>
				<td> {props.y} </td>
				<td style={{ textAlign: "center" }}> {props.x} </td>
			</tr>
		);
	}
	function onDateRangeChange(args) {
		start = args.startDate;
		end = args.endDate;
		predicateStart = new Predicate("DateTime", "greaterthanorequal", args.startDate);
		predicateEnd = new Predicate("DateTime", "lessthanorequal", args.endDate);
		predicate = predicateStart.and(predicateEnd);
		getTotalExpense();
		updateChartData();
		refreshPieChart();
		setTimeout(() => {
			pie.refresh();
			lineChart.refresh();
			columnChart.refresh();
		}, 400);
		setTimeout(() => {
			createLegendData("pieUpdate");
		}, 1000);
	}
	function updateChartData() {
		new DataManager(exp).executeQuery(new Query().where(predicate.and("TransactionType", "equal", "Expense"))).then((e) => {
			colChartExpenseData = getColumnChartExpenseDS(e);
		});
		new DataManager(exp).executeQuery(new Query().where(predicate.and("TransactionType", "equal", "Income"))).then((e) => {
			colChartIncomeData = getColumnChartIncomeDS(e);
			lineChartData = getLineChartDS();
			lineChart.series[0].dataSource = lineChartData;
			columnChart.series[0].dataSource = colChartIncomeData;
			columnChart.series[1].dataSource = colChartExpenseData;
		});
	}
	/** Sets the pie chart's font size based on its size */
	function getFontSize(width) {
		if (width > 300) {
			return "13px";
		} else if (width > 250) {
			return "8px";
		} else {
			return "6px";
		}
	}
	function initialRenderr() {
		start = new Date("5/31/2017");
		end = new Date("11/30/2017");
		expenseDS = exp;
		predicateStart = new Predicate("DateTime", "greaterthanorequal", start);
		predicateEnd = new Predicate("DateTime", "lessthanorequal", end);
		predicate = predicateStart.and(predicateEnd);
		dataSource = exp;
		refreshPieChart();
		updateChartData();
		lineChart.refresh();
		columnChart.refresh();
		lGrid.refresh();
		pie.refresh();
	}
	function refreshPieChart() {
		getTotalExpense();
		createLegendData("pieUpdate");
		pie.series[0].dataSource = piedata;
	}
	function objectAssign(e) {
		let result = [];
		let obj;
		obj = extend(obj, e.result, {}, true);
		for (let data = 0; data < Object.keys(e.result).length; data++) {
			result.push(obj[data]);
		}
		return result;
	}
	function getColumnChartIncomeDS(e) {
		colIncomeDS = [];
		tempIncomeDS = [];
		let result = objectAssign(e);
		for (let cur of result) {
			if (cur.DateTime.getMonth() in tempIncomeDS) {
				curDateTime = tempIncomeDS[cur.DateTime.getMonth()];
				tempIncomeDS[cur.DateTime.getMonth()].Amount = Number.parseInt(curDateTime.Amount, 0) + Number.parseInt(cur.Amount, 0);
			} else {
				tempIncomeDS[cur.DateTime.getMonth()] = cur;
				tempIncomeDS[cur.DateTime.getMonth()].DateTime = new Date(new Date(tempIncomeDS[cur.DateTime.getMonth()].DateTime.setHours(0, 0, 0, 0)).setDate(1));
			}
		}
		for (let data in tempIncomeDS) {
			colIncomeDS.push(tempIncomeDS[data]);
		}
		return colIncomeDS;
	}
	function getColumnChartExpenseDS(e) {
		colExpenseDS = [];
		tempExpenseDS = [];
		let result = objectAssign(e);
		for (let cur of result) {
			if (cur.DateTime.getMonth() in tempExpenseDS) {
				curDateTime = tempExpenseDS[cur.DateTime.getMonth()];
				tempExpenseDS[cur.DateTime.getMonth()].Amount = Number.parseInt(curDateTime.Amount, 0) + Number.parseInt(cur.Amount, 0);
			} else {
				tempExpenseDS[cur.DateTime.getMonth()] = cur;
				tempExpenseDS[cur.DateTime.getMonth()].DateTime = new Date(new Date(tempExpenseDS[cur.DateTime.getMonth()].DateTime.setHours(0, 0, 0, 0)).setDate(1));
			}
		}
		for (let data in tempExpenseDS) {
			colExpenseDS.push(tempExpenseDS[data]);
		}
		return colExpenseDS;
	}
	function getLineChartDS() {
		lineD = [];
		lineDS = [];
		tempLineDS = [];
		let result = [];
		let obj;
		obj = extend(obj, colIncomeDS.concat(colExpenseDS), {}, true);
		for (let data = 0; data < Object.keys(colIncomeDS.concat(colExpenseDS)).length; data++) {
			result.push(obj[data]);
		}
		tempLineDS = result;
		for (let cur of tempLineDS) {
			if (cur.DateTime.getMonth() in lineD) {
				curDateTime = lineD[cur.DateTime.getMonth()];
				lineD[cur.DateTime.getMonth()].Amount = Math.abs(Number.parseInt(curDateTime.Amount, 0) - Number.parseInt(cur.Amount, 0));
			} else {
				lineD[cur.DateTime.getMonth()] = cur;
			}
		}
		for (let data = 0; data <= lineD.length; data++) {
			if (lineD[data]) {
				lineDS.push(lineD[data]);
			}
		}
		return lineDS;
	}
	function acconChartLoaded(args) {
		createLegendData("pie");
		enableLegend = true;
	}
	function createLegendData(initiate) {
		if (pie && pieRenderingData.length > 10) {
			pie.series[0].groupTo = groupValue.toString();
			pie.dataBind();
		}
		if (pie && (initiate === "pieUpdate" || pieLegendData.length === 0)) {
			pieLegendData = [];
			pieLegendData = pie.visibleSeries[0].points;
		}
		pieRenderData = [];
		for (let rowdata of pieLegendData) {
			if (rowdata.text.includes("Others")) {
				rowdata.x = ((rowdata.y / expTotal) * 100).toFixed(2).toString() + "%";
			}
			pieRenderData.push(rowdata);
		}
		if (pieLegendData.length > 0) {
			lGrid.dataSource = pieLegendData;
		}
	}
	function onTextRender(args) {
		if (pie) {
			args.series.dataLabel.font.size = getFontSize(pie.initialClipRect.width);
			pie.animateSeries = true;
		}
		if (args.text && args.text.includes("Others")) {
			args.text = "Others";
		}
	}
	function onAnimateCompleted(args) {
		let element = document.querySelector("#total-expense_datalabel_Series_0");
		if (!isNOU(element)) {
			element.style.visibility = "visible";
		}
	}
	function getTotalExpense() {
		tempData = dataSource;
		let renderingData = [];
		tempData.forEach((item) => {
			if (item.TransactionType === "Expense" && start.valueOf() <= item.DateTime.valueOf() && end.valueOf() >= item.DateTime.valueOf()) {
				expTotal += Number(item.Amount);
				legendData.push(item);
				if (!category.includes(item.Category)) {
					category.push(item.Category);
				}
			}
		});
		/* tslint:disable */
		category.forEach((str) => {
			let total = 0;
			legendData.forEach((item) => {
				if (str === item.Category) {
					total += Number(item.Amount);
				}
			});
			let percent = ((total / expTotal) * 100).toFixed(2) + "%";
			renderingData.push({ x: str, y: total, text: percent });
		});
		pieRenderingData = new DataManager(JSON.parse(JSON.stringify(renderingData))).executeLocal(new Query().sortByDesc("y"));
		if (pieRenderingData.length > 10) {
			let temp = new DataManager(JSON.parse(JSON.stringify(renderingData))).executeLocal(new Query().sortByDesc("y").range(0, 9))[8];
			groupValue = (temp.y - 1).toString();
			hiGridData = new DataManager(JSON.parse(JSON.stringify(renderingData))).executeLocal(new Query().sortByDesc("y").skip(9));
			piedata = new DataManager(JSON.parse(JSON.stringify(renderingData))).executeLocal(new Query().sortByDesc("y").range(0, 10));
		}
	}
	function onGridLoad() {
		createLegendData("pie");
		showWaitingPopup = true;
	}
	function onChartLoaded() {
		initialRender = initialRender ? false : false;
	}
	function onGridDataBound(args) {
		showWaitingPopup = false;
	}
	function diagramTemplate(props) {

		if (props.id === "node") {
			return (
				<div className="diagram_border_cus diagram_border_cal">
					<div id="element_calander">
						<DateRangePickerComponent enablePersistence id="daterangepicker" presets={datePresets} placeholder="Select a range" startDate={start} endDate={end} min={minDate} max={maxDate} change={datachange} />{" "}
					</div>
				</div>
			);
		}
		if (props.id === "lchart") {
			return (
				<div className="diagram_border_cus diagram_chart">
					<Box id="lineChart">
						<ChartComponent enablePersistence id="Linecharts" chartArea={lchartArea} ref={(lchart) => (lineChart = lchart)} primaryXAxis={lprimaryXAxis} primaryYAxis={lprimaryYAxis} legendSettings={legendSettings} margin={lmargin} useGroupingSeparator={true} tooltip={ltooltip}>
							<Inject services={[ColumnSeries, Category, ChartAnnotation, AreaSeries, Legend, Tooltip, DataLabel, LineSeries, DateTime]} />
							<AnnotationsDirective>
								<AnnotationDirective content={content1} region="Chart" coordinateUnits="Pixel" x="75px" y="9%"></AnnotationDirective>
							</AnnotationsDirective>
							<SeriesCollectionDirective>
								<SeriesDirective
									dataSource={lineChartData}
									fill="var(--joy-palette-primary-softBg)"
									animation={lanimation}
									marker={lmarker}
									border={lBorder}
									xName="DateTime"
									yName="Amount"
									width={2}
									name={isArabic ? "الكمية" : "Amount"}
									type="Area"
								></SeriesDirective>
							</SeriesCollectionDirective>
						</ChartComponent>
					</Box>
				</div>
			);
		}
		if (props.id === "colchart") {
			return (
				<div className="diagram_border_cus diagram_chart">
					{" "}
					<div id="barChart">
						<ChartComponent
							enablePersistence
							id="colcharts"
							ref={(cchart) => (columnChart = cchart)}
							primaryXAxis={primaryXAxis}
							primaryYAxis={primaryYAxis}
							margin={margin}
							useGroupingSeparator={true}
							legendSettings={legendSettings}
							titleStyle={titleStyle}
							loaded={onChartLoaded}
							tooltip={tooltip}
						>
							<Inject services={[ColumnSeries, Category, ChartAnnotation, AreaSeries, Legend, Tooltip, DataLabel, LineSeries, DateTime]} />
							<AnnotationsDirective>
								<AnnotationDirective content={content2} region="Chart" coordinateUnits="Pixel" x="75px" y="9%"></AnnotationDirective>
							</AnnotationsDirective>
							<SeriesCollectionDirective>
								<SeriesDirective
									dataSource={colChartIncomeData}
									animation={animation}
									legendShape="Circle"
									marker={marker}
									border={cBorder}
									xName="DateTime"
									yName="Amount"
									width={2}
									name={isArabic ? "الدخل" : "Income"}
									fill="var(--joy-palette-primary-500)"
									type="Column"
								></SeriesDirective>
								<SeriesDirective
									dataSource={colChartExpenseData}
									animation={animation}
									legendShape="Circle"
									marker={marker}
									border={cBorder}
									xName="DateTime"
									yName="Amount"
									width={2}
									name={isArabic ? "الإنفاق" : "Expense"}
									fill="var(--joy-palette-primary-800)"
									type="Column"
								></SeriesDirective>
							</SeriesCollectionDirective>
						</ChartComponent>{" "}
					</div>
				</div>
			);
		}
		if (props.id === "pie") {
			return (
				<Box id="diagram_control" className="diagram_border_cus" display={"flex"} alignItems={"center"}>
					<Box className="pane  pie-container" display={"flex"} alignItems={"center"} p={2} flexWrap={{ xs: "wrap" }}>
						<Box id="pieChart" sx={{ flex: { lg: 1, xs: "100%" }, height: "100%", overflow: "hidden" }}>
							<div className="pieChartHeader">
								<p className="chart-title">{language.language == "ar" ? "المصاريف الكلية" : "Total Expenses"}</p>
								<p id="rangeDate" className="chart-value">
									{language.language == "ar" ? "جانفي 1 - ديسمبر 1" : "Jun 1 - Dec 1"}
								</p>
							</div>
							<AccumulationChartComponent enablePersistence style={{ display: "block" }} ref={(pies) => (pie = pies)} id="pieChart" width="100%" height="350px" legendSettings={acclegendSettings} enableSmartLabels={true} textRender={onTextRender} animationComplete={onAnimateCompleted}>
								<Inject services={[PieSeries, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip]} />
								<AccumulationSeriesCollectionDirective>
									<AccumulationSeriesDirective
										xName="text"
										yName="y"
										startAngle={0}
										legendShape="Circle"
										endAngle={360}
										innerRadius="50%"
										radius="83%"
										groupTo={groupValue}
										palettes={colorPalettes}
										dataLabel={dataLabel}
										dataSource={pieRenderingData}
										animation={accanimation}
									></AccumulationSeriesDirective>
								</AccumulationSeriesCollectionDirective>
							</AccumulationChartComponent>
						</Box>
						<Box id="grid" sx={{ flex: { lg: 1, xs: "100%" }, height: "100%", overflow: "hidden", borderRadius: "1rem" }}>
							<GridComponent enablePersistence id="legend-grid" ref={(lGrids) => (lGrid = lGrids)} dataSource={pieRenderData} style={{ boxShadow: "none" }} rowTemplate={gtemplate} dataBound={onGridDataBound}>
								<Inject services={[Page, RowDD, Toolbar, ColumnChooser, DetailRow, ColumnMenu, Selection, Edit, Sort, Group]} />
								<ColumnsDirective>
									<ColumnDirective width="10%" textAlign="Center" />
									<ColumnDirective width="50%" />
									<ColumnDirective width="20%" />
									<ColumnDirective width="20%" />
								</ColumnsDirective>
							</GridComponent>
						</Box>
					</Box>
				</Box>
			);
		}
	}
	return (
		<div id="custom-diagram" className="control-section" style={{ height: "100dvh" }}>
			{isSmallDevice && <style>{SAMPLE_CSS}</style>}
			<Seo title={title} description={description} name={name} type={type} />
			<DiagramComponent
				enablePersistence
				id="diagram"
				ref={(diagram) => (diagramInstance = diagram)}
				width={"100%"}
				height={"100%"}
				backgroundColor="var(--joy-palette-primary-200)"
				nodes={nodes}
				created={(args) => {
					rendereComplete();
				}}
				nodeTemplate={template.bind(this)}
			/>
		</div>
	);
}
export default HtmlNode;
