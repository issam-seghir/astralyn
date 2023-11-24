import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import { ColumnDirective, ColumnsDirective, ContextMenu, Edit, ExcelExport, Filter, GridComponent, Inject, Page, PdfExport, Resize, Sort, Toolbar } from "@syncfusion/ej2-react-grids";
import { useMediaQuery } from "@uidotdev/usehooks";
import { contextMenuItems, ordersData, ordersGrid } from "../data/dummy";

const Orders = () => {
	const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
	const toolbarOptions = ["Add", "Edit", "Delete", "Update", "Cancel", "Search"];
	return (
		<Box sx={{ p: 2, borderRadius: "5rem" }}>
			{/* <Header category="Page" title="Orders" /> */}
			<Box sx={{ mb: 10 }}>
				<Typography level="h1">Page</Typography>
				<Typography level="h2">Orders</Typography>
			</Box>
			<Box sx={{ borderRadius: "5rem"}}>
				<GridComponent
					cssClass="no-toolbar"
					id="gridcomp"
					dataSource={ordersData}
					allowPaging
					enableStickyHeader={isSmallDevice ? false : true}
					allowSorting
					allowExcelExport
					allowPdfExport
					contextMenuItems={isSmallDevice ? null : contextMenuItems}
					editSettings={{ allowDeleting: true, allowEditing: true, allowAdding: true, showDeleteConfirmDialog: true, mode: `${isSmallDevice ? "Dialog" : "Normal"}` }}
					allowKeyboard
					allowFiltering={true}
					filterSettings={{ type: "Excel" }}
					showFilterBarStatus
					showDeleteConfirmDialog
					showConfirmDialog={false}
					loadingIndicator={{ indicatorType: "Shimmer" }}
					allowMultiSorting
					enablePersistence
					enableAdaptiveUI={isSmallDevice ? true : false}
					rowRenderingMode={isSmallDevice ? "Vertical" : "Horizontal"}
					toolbar={isSmallDevice ? toolbarOptions : null}
				>
					<ColumnsDirective>
						{/* eslint-disable-next-line react/jsx-props-no-spreading */}
						{ordersGrid.map((item, index) => (
							<ColumnDirective key={index} {...item} />
						))}
					</ColumnsDirective>
					<Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport, Toolbar]} />
				</GridComponent>
			</Box>
		</Box>
	);
};
export default Orders;
