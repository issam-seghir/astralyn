import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import { ColumnDirective, ColumnsDirective, ContextMenu, Edit, ExcelExport, Filter, GridComponent, Inject, Page, PdfExport, Resize, Sort } from "@syncfusion/ej2-react-grids";

import { contextMenuItems, ordersData, ordersGrid } from "../data/dummy";

const Orders = () => {
	return (
		<Box sx={{ p: 2, borderRadius: "5rem" }}>
			{/* <Header category="Page" title="Orders" /> */}
			<Box sx={{ mb: 10 }}>
				<Typography level="h1">Page</Typography>
				<Typography level="h2">Orders</Typography>
			</Box>
			<GridComponent
				id="gridcomp"
				dataSource={ordersData}
				allowPaging
				enableStickyHeader
				allowSorting
				allowExcelExport
				allowPdfExport
				contextMenuItems={contextMenuItems}
				editSettings={{ allowDeleting: true, allowEditing: true, allowAdding: true, showDeleteConfirmDialog: true, mode:"Batch"}}
				allowKeyboard
				allowFiltering={true}
				filterSettings={{ type: "Excel" }}
				showFilterBarStatus
				loadingIndicator={{ indicatorType: "Shimmer" }}
				allowMultiSorting
			>
				<ColumnsDirective>
					{/* eslint-disable-next-line react/jsx-props-no-spreading */}
					{ordersGrid.map((item, index) => (
						<ColumnDirective key={index} {...item} />
					))}
				</ColumnsDirective>
				<Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
			</GridComponent>
		</Box>
	);
};
export default Orders;
