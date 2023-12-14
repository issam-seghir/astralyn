import { useThemeContext } from "@contexts/ContextProvider";
import Seo from "@jsx/components/Hemlet/Seo";
import { customersData } from "@jsx/data/data-grid/customersGrid-data.js";
import { ColumnChooser, ColumnDirective, ColumnsDirective, Edit, Filter, GridComponent, Inject, Page, Selection, Sort, Toolbar } from "@syncfusion/ej2-react-grids";
import { useMediaQuery } from "@uidotdev/usehooks";

const Customers = () => {
	const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

	const selectionsettings = { persistSelection: true };
	const toolbarOptions = ["Add", "Delete", "Edit"];
	const editing = { allowDeleting: true, allowEditing: true, allowAdding: true, mode: "Dialog" };
	const { language } = useThemeContext();
	const isArabic = language.language === "ar";
	const title = isArabic ? "أسترالين | العملاء" : "Astralyn | Customers";
	const description = isArabic ? "صفحة العملاء تحتوي على جدول بيانات يعرض قائمة العملاء مع تفاصيل مشاريعهم وحالتها والميزانية والموقع." : "The customers page displays a data grid table listing customers with project details, status, budget, and location.";
	const name = isArabic ? "أسترالين" : "Astralyn";
	const type = "website";
	const customerGridImage = (props) => {
		return (
			<div className="image" style={{ display: "flex", gap: "1rem" }}>
				<img style={{ width: "2.5rem", height: "2.5rem", borderRadius: "9999px" }} src={props.CustomerImage} alt="employee" />
				<div>
					<p>{props.CustomerName}</p>
					<p>{props.CustomerEmail}</p>
				</div>
			</div>
		);
	};
	const customerGridStatus = (props) => {
		return (
			<div style={{ textTransform: "capitalize", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
				<p style={{ background: props.StatusBg, width: "0.75rem", height: "0.75rem", borderRadius: "9999px" }} />
				<p>{props.Status}</p>
			</div>
		);
	};

	const customersGrid = [
		{ type: "checkbox", width: "50" },
		{ headerText: isArabic ? "الإسم" : "Name", width: "150", template: customerGridImage, textAlign: "Center" },
		{ field: "ProjectName", headerText: isArabic ? "إسم المشروع" : "Project Name", width: "150", textAlign: "Center" },
		{ field: "Status", headerText: isArabic ? "الحالة" : "Status", width: "130", format: "yMd", textAlign: "Center", template: customerGridStatus },
		{
			field: "Weeks",
			headerText: isArabic ? "الأسابيع" : "Weeks",
			width: "100",
			format: "C2",
			textAlign: "Center",
		},
		{ field: "Budget", headerText: isArabic ? "ميزانية" : "Budget", width: "100", format: "C4", editType: "numericedit", type: "number", textAlign: "Center" },

		{ field: "Location", headerText: isArabic ? "الموقع" : "Location", width: "150", textAlign: "Center" },

		{ field: "CustomerID", headerText: isArabic ? "معرف ID الزبون" : "Customer ID", width: "120", textAlign: "Center", isPrimaryKey: true },
	];

	return (
		<>
			<Seo title={title} description={description} name={name} type={type} />
			<GridComponent
				dataSource={customersData[language.language]}
				enableHover={false}
				allowPaging
				allowSorting
				allowKeyboard
				allowMultiSorting
				allowFiltering={true}
				enableStickyHeader={!isSmallDevice}
				enablePersistence
				enableAdaptiveUI={isSmallDevice}
				rowRenderingMode={isSmallDevice ? "Vertical" : "Horizontal"}
				pageSettings={{ pageCount: 5 }}
				selectionSettings={selectionsettings}
				toolbar={toolbarOptions}
				showColumnChooser={true}
				loadingIndicator={{ indicatorType: "Shimmer" }}
				editSettings={editing}
				filterSettings={{ type: "Menu" }}
			>
				<ColumnsDirective>
					{customersGrid.map((item, index) => (
						<ColumnDirective key={index} {...item} />
					))}
				</ColumnsDirective>
				<Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter, Toolbar, ColumnChooser]} />
			</GridComponent>
		</>
	);
};

export default Customers;
