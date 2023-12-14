import { useThemeContext } from "@contexts/ContextProvider";
import Seo from "@jsx/components/Hemlet/Seo";
import { employeesData } from "@jsx/data/data-grid/employeesGrid-data";
import { ColumnChooser, ColumnDirective, ColumnsDirective, Edit, GridComponent, Inject, Page, Search, Sort, Toolbar } from "@syncfusion/ej2-react-grids";

import { useMediaQuery } from "@uidotdev/usehooks";

import { FaLocationDot } from "react-icons/fa6";

const Employees = () => {
	const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
	const toolbarOptions = ["Search"];
	const editing = { allowDeleting: true, allowEditing: true, mode: `${isSmallDevice ? "Dialog" : "Normal"}` };
	const { language } = useThemeContext();
	const isArabic = language.language === "ar";
	const title = isArabic ? "أسترالين | الموظفين" : "Astralyn | Employees";
	const description = isArabic ? "صفحة الموظفين تحتوي على جدول بيانات يعرض قائمة الموظفين مع تاريخ التعيين والتقارير." : "The employees page displays a data grid table listing employees with hire date and reporting.";
	const name = isArabic ? "أسترالين" : "Astralyn";
	const type = "website";
	const gridEmployeeProfile = (props) => {
		return (
			<div style={{ display: "flex", alignItems: "center", gap: "1rem", paddingInlineStart: 15 }}>
				<img style={{ width: "2.5rem", height: "2.5rem", borderRadius: "9999px" }} src={props.EmployeeImage} alt="employee" />
				<p>{props.Name}</p>
			</div>
		);
	};
	const gridEmployeeCountry = (props) => {
		return (
			<div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
				<FaLocationDot />
				<span>{props.Country}</span>
			</div>
		);
	};
	const employeesColumns = [
		{ headerText: isArabic ? "موظف" : "Employee", template: gridEmployeeProfile, textAlign: "Center", width: "150" },
		{ field: "Title", headerText: isArabic ? "المنصب" : "Designation", editType: "dropdownedit", textAlign: "Center", width: "170" },
		{ headerText: isArabic ? "دولة" : "Country", template: gridEmployeeCountry, textAlign: "Center", width: "120" },
		{ field: "HireDate", headerText: isArabic ? "موعد التوظيف" : "Hire Date", format: "dd/MM/yyyy", type: "date", editType: "datePickerEdit", textAlign: "Center", width: "135" },
		{ field: "ReportsTo", headerText: isArabic ? "تقارير لـ" : "Reports To", textAlign: "Center", editType: "dropdownedit", width: "120" },
		{ field: "EmployeeID", headerText: isArabic ? "معرف ID للموظف" : "Employee ID", textAlign: "Center", width: "125" },
	];

	return (
		<>
			<Seo title={title} description={description} name={name} type={type} />
			<GridComponent
				dataSource={employeesData[language.language]}
				width="auto"
				allowPaging
				allowKeyboard
				allowMultiSorting
				allowSorting
				enableStickyHeader={!isSmallDevice}
				enablePersistence
				enableAdaptiveUI={isSmallDevice}
				rowRenderingMode={isSmallDevice ? "Vertical" : "Horizontal"}
				loadingIndicator={{ indicatorType: "Shimmer" }}
				pageSettings={{ pageCount: 5 }}
				editSettings={editing}
				toolbar={toolbarOptions}
				showColumnChooser={true}
			>
				<ColumnsDirective>
					{employeesColumns.map((item, index) => (
						<ColumnDirective key={index} {...item} />
					))}
				</ColumnsDirective>
				<Inject services={[Search, Page, Sort, Edit, Toolbar, ColumnChooser]} />
			</GridComponent>
		</>
	);
};
export default Employees;
