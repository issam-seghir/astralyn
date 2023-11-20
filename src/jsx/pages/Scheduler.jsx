import { Day, DragAndDrop, Inject, Month, Resize, ResourceDirective, ResourcesDirective, ScheduleComponent, TimelineViews, ViewDirective, ViewsDirective, WorkWeek } from "@syncfusion/ej2-react-schedule";

import { extend } from "@syncfusion/ej2-base";

import * as dataSource from "@data/schedule-data";
/**
 * schedule resources group-editing sample
 */
const GroupEditing = () => {
	const data = extend([], dataSource.resourceConferenceData, null, true);
	const resourceData = [
		{ Text: "Margaret", Id: 1, Color: "#edaf94" },
		{ Text: "Robert", Id: 2, Color: "#6ab284" },
		{ Text: "Laura", Id: 3, Color: "#fff09d" },
	];
	const getEmployeeName = (value) => {
		return value.resourceData ? value.resourceData[value.resource.textField] : value.resourceName;
	};
	const getEmployeeImage = (value) => {
		return getEmployeeName(value).replace(" ", "-").toLowerCase();
	};
	const getEmployeeDesignation = (value) => {
		let resourceName = getEmployeeName(value);
		return resourceName === "Margaret" ? "Sales Representative" : resourceName === "Robert" ? "Vice President, Sales" : "Inside Sales Coordinator";
	};
	const monthEventTemplate = (props) => {
		return <div className="subject">{props.Subject}</div>;
	};
	const resourceHeaderTemplate = (props) => {
		return (
			<div className="template-wrap">
				<div className={"resource-image " + getEmployeeImage(props)}></div>
				<div className="resource-details">
					<div className="resource-name">{getEmployeeName(props)}</div>
					<div className="resource-designation">{getEmployeeDesignation(props)}</div>
				</div>
			</div>
		);
	};
	return (
		<div className="schedule-control-section">
			<div className="col-lg-12 control-section">
				<div className="control-wrapper">
					<ScheduleComponent
						cssClass="group-editing"
						width="100%"
						height="100%"
						selectedDate={new Date(2021, 5, 5)}
						currentView="WorkWeek"
						resourceHeaderTemplate={resourceHeaderTemplate}
						eventSettings={{ dataSource: data, fields: { subject: { title: "Conference Name", name: "Subject" }, description: { title: "Summary", name: "Description" }, startTime: { title: "From", name: "StartTime" }, endTime: { title: "To", name: "EndTime" } } }}
						group={{ allowGroupEdit: true, resources: ["Conferences"] }}
					>
						<ResourcesDirective>
							<ResourceDirective field="ConferenceId" title="Attendees" name="Conferences" allowMultiple={true} dataSource={resourceData} textField="Text" idField="Id" colorField="Color" />
						</ResourcesDirective>
						<ViewsDirective>
							<ViewDirective option="Day" />
							<ViewDirective option="WorkWeek" />
							<ViewDirective option="Month" eventTemplate={monthEventTemplate} />
							<ViewDirective option="TimelineWeek" />
						</ViewsDirective>
						<Inject services={[Day, WorkWeek, Month, TimelineViews, Resize, DragAndDrop]} />
					</ScheduleComponent>
				</div>
			</div>
		</div>
	);
};
export default GroupEditing;
