import { ColumnDirective, ColumnsDirective, Edit, Filter, GridComponent, Inject, Page, Selection, Sort, Toolbar } from "@syncfusion/ej2-react-grids";

// import { Header } from "../components";
import { customersData, customersGrid } from "../data/dummy";

const Customers = () => {
	const selectionsettings = { persistSelection: true };
	const toolbarOptions = ["Add", "Delete", "Edit"];
	const editing = { allowDeleting: true, allowEditing: true, allowAdding: true, mode: "Dialog" };

	return (
		<div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
			{/* <Header category="Page" title="Customers" /> */}
			<GridComponent
				dataSource={customersData}
				enableHover={false}
				allowPaging
				enableStickyHeader
				allowSorting
				pageSettings={{ pageCount: 5 }}
				selectionSettings={selectionsettings}
				toolbar={toolbarOptions}
				editSettings={editing}
				allowKeyboard
				allowFiltering={true}
				filterSettings={{ type: "Menu" }}
			>
				<ColumnsDirective>
					{/* eslint-disable-next-line react/jsx-props-no-spreading */}
					{customersGrid.map((item, index) => (
						<ColumnDirective key={index} {...item} />
					))}
				</ColumnsDirective>
				<Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
			</GridComponent>
		</div>
	);
};

export default Customers;
