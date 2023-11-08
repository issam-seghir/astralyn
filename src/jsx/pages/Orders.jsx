import React from "react";
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from "@syncfusion/ej2-react-grids";
import Box from "@mui/joy/Box";

import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";

const Orders = () => {
	const editing = { allowDeleting: true, allowEditing: true };
	return (
		<Box sx={{p:2,borderRadius:"1.5rem"}}>
			{/* <Header category="Page" title="Orders" /> */}
			<div className=" mb-10">
				<p className="text-lg text-gray-400">Page</p>
				<p className="text-3xl font-extrabold tracking-tight text-slate-900">Orders</p>
			</div>
			<GridComponent id="gridcomp" dataSource={ordersData} allowPaging allowSorting allowExcelExport allowPdfExport contextMenuItems={contextMenuItems} editSettings={editing}>
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
