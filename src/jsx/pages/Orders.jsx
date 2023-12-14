/* eslint-disable react/prop-types */
import { useThemeContext } from "@contexts/ContextProvider";
import { ordersData } from "@data/data-grid/ordersGrid-data";
import Seo from "@jsx/components/Hemlet/Seo";
import { ColumnChooser, ColumnDirective, ColumnsDirective, ContextMenu, Edit, ExcelExport, Filter, GridComponent, Inject, Page, PdfExport, Resize, Sort, Toolbar } from "@syncfusion/ej2-react-grids";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useId } from "react";

const Orders = () => {
	const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
	const toolbarOptions = ["Add", "Edit", "Delete", "Update", "Cancel", "ColumnChooser", "Search"];
	const contextMenuItems = ["AutoFit", "AutoFitAll", "SortAscending", "SortDescending", "Copy", "Edit", "Delete", "Save", "Cancel", "PdfExport", "ExcelExport", "CsvExport", "FirstPage", "PrevPage", "LastPage", "NextPage"];
	const editSettings = { allowDeleting: true, allowEditing: true, allowAdding: true, showDeleteConfirmDialog: true, mode: `${isSmallDevice ? "Dialog" : "Normal"}` };
	const id = useId();
	const { language } = useThemeContext();
	const isArabic = language.language === "ar";
	const title = isArabic ? "أسترالين | الطلبات" : "Astralyn | Orders";
	const description = isArabic ? "صفحة الطلبات تحتوي على جدول بيانات يعرض طلبات المنتجات." : "The order page displays a data grid table of product orders.";
	const name = isArabic ? "أسترالين" : "Astralyn";
	const type = "website";
	const gridOrderImage = (props) => {
		return (
			<div>
				<img style={{ borderRadius: "0.5rem" }} src={props.ProductImage} alt="order-item" />
			</div>
		);
	};

	const gridOrderStatus = (props) => {
		return (
			<div>
				<button type="button" style={{ color: "white", minWidth: "4rem", background: props.StatusBg, paddingInline: "0.5em", paddingBlock: 2, borderRadius: "0.5rem" }}>
					{props.Status}
				</button>
			</div>
		);
	};

	return (
		<>
			<Seo title={title} description={description} name={name} type={type} />
			<GridComponent
				cssClass="no-toolbar"
				id="gridcomp"
				dataSource={ordersData[language.language]}
				allowPaging
				allowSorting
				allowExcelExport
				allowPdfExport
				allowKeyboard
				allowMultiSorting
				allowFiltering={true}
				enableStickyHeader={!isSmallDevice}
				enablePersistence
				enableAdaptiveUI={isSmallDevice}
				rowRenderingMode={isSmallDevice ? "Vertical" : "Horizontal"}
				contextMenuItems={isSmallDevice ? null : contextMenuItems}
				editSettings={editSettings}
				filterSettings={{ type: "Excel" }}
				showDeleteConfirmDialog
				showConfirmDialog={false}
				loadingIndicator={{ indicatorType: "Shimmer" }}
				toolbar={isSmallDevice ? toolbarOptions : null}
				showColumnChooser={true}
			>
				<ColumnsDirective>
					<ColumnDirective key={id} field="ProductImage" headerText={isArabic ? "صورة" : "Image"} template={gridOrderImage} textAlign="Center" width="120" />
					<ColumnDirective key={id} field="OrderItems" headerText={isArabic ? "عنصر" : "Item"} editType="dropdownedit" textAlign="Center" width="150" />
					<ColumnDirective key={id} field="CustomerName" headerText={isArabic ? "إسم الزبون" : "Customer Name"} textAlign="Center" width="150" />
					<ColumnDirective key={id} field="TotalAmount" headerText={isArabic ? "المبلغ الإجمالي" : "Total Amount"} format="C2" textAlign="Center" editType="numericedit" width="150" />
					<ColumnDirective key={id} field="Status" headerText={isArabic ? "حالة" : "Status"} template={gridOrderStatus} editType="dropdownedit" textAlign="Center" width="90" />
					<ColumnDirective key={id} field="OrderID" headerText={isArabic ? "ID الخاص بالطلب" : "Order ID"} textAlign="Center" width="150" />
					<ColumnDirective key={id} field="Location" headerText={isArabic ? "موقع" : "Location"} textAlign="Center" width="150" />
				</ColumnsDirective>
				<Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport, Toolbar, ColumnChooser]} />
			</GridComponent>
		</>
	);
};

export default Orders;
