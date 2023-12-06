import { useThemeContext } from "@contexts/ContextProvider";
import * as dataSource from "@data/schedule-data";
import * as dataSourceAr from "@data/schedule-data-arabic";
import { extend } from "@syncfusion/ej2-base";
import { Day, DragAndDrop, Inject, Month, Resize, ResourceDirective, ResourcesDirective, ScheduleComponent, TimelineViews, ViewDirective, ViewsDirective, WorkWeek } from "@syncfusion/ej2-react-schedule";
import { useMediaQuery } from "@uidotdev/usehooks";

const GroupEditing = () => {
	// convert json to java script object

	const data = extend([], dataSource.resourceConferenceData, null, true);
	const dataAr = extend([], dataSourceAr.resourceConferenceData, null, true);
	const { language } = useThemeContext();
	const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
	const resourceData = [
		{ Text: language.language === "ar" ? "ماركو" : "Marko", Id: 1, Color: "#edaf94" },
		{ Text: language.language === "ar" ? "روبرت" : "Robert", Id: 2, Color: "#6ab284" },
		{ Text: language.language === "ar" ? "لاري" : "Lari", Id: 3, Color: "#fff09d" },
	];
	const employeeDesignation = [{ Text: language.language === "ar" ? "مندوب مبيعات" : "Sales Representative" }, { Text: language.language === "ar" ? "نائب الرئيس ، المبيعات" : "Vice President, Sales" }, { Text: language.language === "ar" ? "منسق المبيعات داخلي" : "Inside Sales Coordinator" }];
	const minValidation = (args) => {
		return args["value"].length >= 5;
	};
	const fields = {
		id: "Id",
		subject: {
			title: language.language === "ar" ? "اسم المؤتمر" : "Conference Name",
			name: "Subject",
			validation: { required: true },
		},
		location: {
			title: language.language === "ar" ? "موقع الحدث" : "Event Location",
			name: "Location",
		},
		description: {
			title: language.language === "ar" ? "ملخص" : "Summary",
			name: "Description",
			validation: {
				minLength: [minValidation, "Need atleast 5 letters to be entered"],
			},
		},
		startTime: {
			title: language.language === "ar" ? "من" : "From",
			name: "StartTime",
		},
		endTime: {
			title: language.language === "ar" ? "إلى" : "To",
			name: "EndTime",
		},
		isAllDay: {
			title: language.language === "ar" ? "هل طوال اليوم ؟" : "is All Day",
			name: "IsAllDay",
		},
		startTimezone: {
			title: language.language === "ar" ? "بداية المنطقة الزمنية" : "Start Timezone",
			name: "StartTimezone",
		},
		endTimezone: {
			title: language.language === "ar" ? "نهاية المنطقة الزمنية" : "End Timezone",
			name: "EndTimezone",
		},
	};

	const getEmployeeName = (value) => {
		return value.resourceData ? value.resourceData[value.resource.textField] : value.resourceName;
	};
	const getEmployeeId = (value) => {
		return value.resourceData ? value.resourceData[value.resource.idField] : value.resourceData.Id;
	};

	const getEmployeeImage = (value) => {
		const id = getEmployeeId(value);
		switch (id) {
			case 1: {
				return "one";
			}
			case 2: {
				return "two";
			}
			case 3: {
				return "three";
			}
			default: {
				return null;
			}
		}
	};
	const getEmployeeDesignation = (value) => {
		let id = getEmployeeId(value);
		return employeeDesignation[id - 1].Text;
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
		<ScheduleComponent
			cssClass="group-editing"
			width="100%"
			height="100%"
			enableAdaptiveUI={isSmallDevice}
			selectedDate={new Date(2021, 5, 5)}
			enablePersistence
			currentView="WorkWeek"
			resourceHeaderTemplate={resourceHeaderTemplate}
			eventSettings={{
				dataSource: language.language === "ar" ? dataAr : data,
				fields: fields,
			}}
			group={{ allowGroupEdit: true, resources: ["Conferences"] }}
		>
			<ResourcesDirective>
				<ResourceDirective field="ConferenceId" title="Attendees" name="Conferences" allowMultiple={true} dataSource={resourceData} textField="Text" idField="Id" colorField="Color" />
			</ResourcesDirective>
			<ViewsDirective>
				<ViewDirective option="Day" allowVirtualScrolling={true} />
				<ViewDirective option="WorkWeek" allowVirtualScrolling={true} />
				<ViewDirective option="Month" eventTemplate={monthEventTemplate} />
				<ViewDirective option="TimelineWeek" />
			</ViewsDirective>
			<Inject services={[Day, WorkWeek, Month, TimelineViews, Resize, DragAndDrop]} />
		</ScheduleComponent>
	);
};
export default GroupEditing;
