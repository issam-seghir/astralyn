import { useThemeContext } from "@contexts/ContextProvider";
import Seo from "@jsx/components/Hemlet/Seo";
import { ConnectorEditing, DiagramComponent, DiagramContextMenu, DiagramTools, Inject, PortConstraints, PortVisibility, PrintAndExport, SnapConstraints, Snapping, UndoRedo } from "@syncfusion/ej2-react-diagrams";
import * as React from "react";

let shape = [
	{ shapeName: "BasicShape", shapeId: "Basic" },
	{ shapeName: "FlowShape", shapeId: "Flow" },
	{ shapeName: "Connector", shapeId: "Segment" },
	{ shapeName: "Path", shapeId: "Path" },
	{ shapeName: "Image", shapeId: "Image" },
	{ shapeName: "SVG", shapeId: "SVG" },
	{ shapeName: "Text", shapeId: "Text" },
];
let basic = ["Rectangle", "Ellipse", "Hexagon", "Parallelogram", "Triangle", "Plus", "Star", "Pentagon", "Heptagon", "Octagon", "Trapezoid", "Decagon", "RightTriangle", "Cylinder", "Diamond"];
let flow = ["Process", "Decision", "Document", "PreDefinedProcess", "Terminator", "PaperTap", "DirectData", "SequentialData"];
let connector = ["Straight", "Orthogonal"];
let node;
let diagramInstance;
let interval;
interval = [1, 9, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75];
let gridlines = {
	lineColor: "var(--joy-palette-primary-200",
	lineIntervals: interval,
};
let snapSettings = {
	snapObjectDistance: 5,
	constraints: SnapConstraints.SnapToObject | SnapConstraints.SnapToLines | SnapConstraints.ShowLines,
	horizontalGridlines: gridlines,
	verticalGridlines: gridlines,
};
const SAMPLE_CSS = `.image-pattern-style {
        background-color: var(--joy-palette-primary-softBg);
        background-size: contain;
        background-repeat: no-repeat;
        height: 45px;
        width: calc((100% - 12px) / 3);
        cursor: pointer;
        border: 1px solid var(--joy-palette-primary-softColor);
		border-radius: .5rem;
        background-position: center;
        float: left;
		margin-bottom:1rem;
		transition: all 0.5s ease;
    }

    .image-pattern-style:hover {
        border-color: var(--joy-palette-primary-400);
    }

    .row {
        margin-left: 0px;
        margin-right: 0px;
    }

    .row-header {
        font-size: var(--text-xl3);
        font-weight: 500;
    }

    .e-checkbox-wrapper .e-label {
    	font-size: var(--text-xl3);

    }

    .property-panel-header {
        font-size: var(--text-xl4);

        padding-top: 15px;
        padding-bottom: 5px
    }

    .e-selected-style {
        border-color: var(--joy-palette-primary-600);
		opacity:0.8;
    }

    .control-section {
        padding-top: 0px;
        padding-bottom: 0px;
        padding-right: 0px;
    }

    .container-fluid {
        padding-left: 0px;
    }

    .diagram-control-pane .col-xs-6 {
        padding-left: 0px;
        padding-right: 0px;
    }`;
function DrawingTools() {
	React.useEffect(() => {
		rendereComplete();
	}, []);

		const { language } = useThemeContext();
		const isArabic = language.language === "ar";
		const title = isArabic ? "أسترالين | تطبيق الرسم التخطيطي" : "Astralyn | Drawer App";
		const description = isArabic ? "يوفر تطبيق رسم تخطيطي منطقة رسم حيث يمكنك رسم أي أشكال وموصلات لرسم مخطط تفاعلي" : "The drawer app provides a drawing area where you can draw any shapes, connectors to draw an interactive diagram";
		const name = isArabic ? "أسترالين" : "Astralyn";
		const type = "website";
	function rendereComplete() {
		SetShape("Rectangle");
		diagramInstance.tool = DiagramTools.ContinuousDraw;
		diagramInstance.dataBind();
		//Click Event used to decide the drawing object.
		document.querySelector("#appearance").addEventListener("click", (args) => {
			let target = args.target;
			let selectedElement = document.querySelectorAll(".e-selected-style");
			if (selectedElement.length > 0 && target.id !== "" && target.id !== "checked") {
				selectedElement[0].classList.remove("e-selected-style");
			}
			if (!target.classList.contains("e-selected-style")) {
				target.classList.add("e-selected-style");
			}
			if (target.className === "image-pattern-style e-selected-style") {
				switch (target.id) {
					case "shape1": {
						SetShape("Rectangle");
						break;
					}
					case "shape2": {
						SetShape("Ellipse");
						break;
					}
					case "shape3": {
						SetShape("Hexagon");
						break;
					}
					case "shape4": {
						SetShape("Pentagon");
						break;
					}
					case "shape5": {
						SetShape("Polygon");
						break;
					}
					case "straight": {
						setdrawobject(null, { type: "Straight" });
						break;
					}
					case "ortho": {
						setdrawobject(null, { type: "Orthogonal" });
						break;
					}
					case "cubic": {
						setdrawobject(null, { type: "Bezier" });
						break;
					}
					case "freehand": {
						setdrawobject(null, { type: "Freehand" });
						break;
					}
					case "path": {
						getPathShape();
						target.classList.add("e-selected-style");
						break;
					}
					case "image": {
						getImageNode();
						break;
					}
					case "svg": {
						getSVGNode();
						break;
					}
					case "text": {
						getTextNode();
						break;
					}
					default: {
						if (selectedElement.length > 0 && target.id !== "" && target.id !== "checked") {
							selectedElement[0].classList.remove("e-selected-style");
						}
					}
				}
			}
		});
	}

	//Enable drawing object.
	function setdrawobject(node, connector) {
		diagramInstance.drawingObject = connector == null ? node : connector;
		diagramInstance.dataBind();
	}
	//Enable drawing Tool.
	function enableTool() {
		diagramInstance.dataBind();
	}
	//Set the Shape of the drawing Object.
	function SetShape(obj) {
		let drawingshape;
		drawingshape = { type: "Basic", shape: obj };
		node = {
			shape: drawingshape,
		};
		diagramInstance.drawingObject = node;
		enableTool();
	}
	//Set TextNode Shape.
	function getTextNode() {
		let drawingshape;
		drawingshape = { type: "Text" };
		node = {
			shape: drawingshape,
		};
		setdrawobject(node, null);
	}
	//Set SVG Node
	function getSVGNode() {
		// tslint:disable-next-line:max-line-length
		let drawingshape;
		drawingshape = {
			type: "Native",
			content: getPath(),
		};
		node = {
			shape: drawingshape,
		};
		setdrawobject(node, null);
	}
	function getPath() {
		return (
			'<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="350.000000pt" ' +
			'height="229.000000pt" viewBox="0 0 350.000000 229.000000" ' +
			'preserveAspectRatio="xMidYMid meet"> <metadata>' +
			" Created by potrace 1.11, written by Peter Selinger 2001-2013" +
			' </metadata> <g transform="translate(0.000000,229.000000) scale(0.100000,-0.100000)"' +
			' fill="#de6ca9" stroke="none"><path d="M0 1145 l0 -1145 1750 0 1750 0 0 1145 0 1145' +
			" -1750 0 -1750 0 0 -1145z m1434 186 c19 -8 26 -18 26 -37 0 -24 -3 -26" +
			" -27 -19 -16 3 -58 9 -94 12 -63 5 -67 4 -88 -23 -23 -29 -21 -60 6 -81 8" +
			" -6 47 -19 86 -29 55 -13 80 -25 106 -51 31 -31 33 -37 29 -88 -8 -94 -69" +
			" -133 -193 -122 -90 7 -115 20 -115 58 0 26 3 30 18 24 91 -38 168 -41 204" +
			" -8 23 21 23 75 1 96 -10 8 -49 23 -88 33 -88 22 -135 63 -135 118 0 92 67 140" +
			" 181 131 31 -2 68 -9 83 -14z m854 -6 c38 -15 42 -21 42 -51 l0 -33 -47 25" +
			" c-41 22 -58 25 -115 22 -58 -3 -72 -8 -97 -32 -79 -75 -59 -259 32 -297 35" +
			" -15 106 -18 150 -6 26 7 27 10 27 67 l0 60 -50 0 c-47 0 -50 2 -50 25 0 25" +
			" 1 25 80 25 l81 0 -3 -97 -3 -98 -40 -20 c-22 -10 -65 -21 -95 -23 -153 -11" +
			" -242 74 -243 230 0 145 93 235 233 224 30 -2 74 -12 98 -21z m-638 -169 l67" +
			" -178 40 103 c22 57 53 139 69 182 28 75 29 77 62 77 19 0 32 -4 30 -9 -1 -5" +
			" -39 -104 -83 -220 l-80 -211 -37 0 c-35 0 -37 2 -56 53 -11 28 -48 124 -81 " +
			'211 -34 87 -61 163 -61 168 0 5 14 8 32 6 31 -3 32 -5 98 -182z" />' +
			"</g> </svg>"
		);
	}
	function getImageNode() {
		let drawingshape;
		drawingshape = { type: "Image", source: "https://i.imgur.com/k6moQPO.png" };
		node = {
			shape: drawingshape,
		};
		setdrawobject(node, null);
	}
	function getPathShape() {
		// tslint:disable-next-line:max-line-length
		let drawingshape;
		drawingshape = {
			type: "Path",
			data: "M540.3643,137.9336L546.7973,159.7016L570.3633,159.7296L550.7723,171.9366L558.9053,194.9966L540.3643,179.4996L521.8223,194.9966L529.9553,171.9366L510.3633,159.7296L533.9313,159.7016L540.3643,137.9336z",
		};
		node = {
			shape: drawingshape,
		};
		setdrawobject(node, null);
	}
	function getPorts(obj) {
		return [createPort("port1", { x: 0, y: 0.5 }), createPort("port2", { x: 0.5, y: 1 }), createPort("port3", { x: 1, y: 0.5 }), createPort("port4", { x: 0.5, y: 0 })];
	}
	function getPathPorts(obj) {
		return [createPort("port1", { x: 0.5, y: 0 }), createPort("port2", { x: 0, y: 0.39 }), createPort("port3", { x: 1, y: 0.39 }), createPort("port4", { x: 0.2, y: 1 }), createPort("port5", { x: 0.8, y: 1 })];
	}
	function getHexagonPorts(obj) {
		return [
			createPort("port1", { x: 0, y: 0.5 }),
			createPort("port2", { x: 0.5, y: 0 }),
			createPort("port3", { x: 0.3, y: 0 }),
			createPort("port4", { x: 0.7, y: 0 }),
			createPort("port5", { x: 1, y: 0.5 }),
			createPort("port6", { x: 0.5, y: 1 }),
			createPort("port7", { x: 0.3, y: 1 }),
			createPort("port8", { x: 0.7, y: 1 }),
		];
	}
	function getPentagonPorts(obj) {
		return [createPort("port1", { x: 0.5, y: 0 }), createPort("port2", { x: 0, y: 0.4 }), createPort("port3", { x: 1, y: 0.4 }), createPort("port4", { x: 0.2, y: 1 }), createPort("port5", { x: 0.85, y: 1 })];
	}
	function createPort(id, offset) {
		return {
			id: id,
			shape: "Square",
			offset: offset,
			constraints: PortConstraints.Draw,
			visibility: PortVisibility.Hover,
		};
	}

	return (
		<div className="control-pane diagram-control-pane" style={{ zIndex: 1, position: "relative" }}>
			<style>{SAMPLE_CSS}</style>
			<Seo title={title} description={description} name={name} type={type} />
			<div className="col-lg-8 control-section">
				<div className="content-wrapper" style={{ width: "100%" }}>
					<DiagramComponent
						id="diagram"
						ref={(diagram) => (diagramInstance = diagram)}
						width={"100%"}
						height={"540px"}
						enablePersistence
						snapSettings={snapSettings}
						rulerSettings={{ showRulers: true }}
						//Sets the default values of a node
						getNodeDefaults={(node) => {
							let obj = node;
							let basicShape = node.shape;
							node.style.fill = "var(--joy-palette-primary-softBg";
							node.style.strokeColor = "var(--joy-palette-primary-softColor";
							switch (basicShape.shape) {
								case "Rectangle":
								case "Ellipse": {
									obj.ports = getPorts(node);

									break;
								}
								case "Hexagon": {
									obj.ports = getHexagonPorts(node);

									break;
								}
								case "Pentagon": {
									obj.ports = getPentagonPorts(node);

									break;
								}
								default: {
									if (basicShape.type === "Path") {
										obj.ports = getPathPorts(node);
									}
								}
							}
						}}
						scrollSettings={{
							canAutoScroll: true,
							// Sets the scroll limit
							scrollLimit: "Infinity",
						}}
						contextMenuSettings={{ show: true }}
					/>
					<Inject services={[UndoRedo, Snapping, ConnectorEditing, PrintAndExport, DiagramContextMenu]} />
				</div>
			</div>

			<div className="col-lg-4  property-section">
				<div className="property-panel-header">{language.language === "ar" ? "الخواص" : "Properties"} </div>
				<div className="row property-panel-content" id="appearance">
					<div className="row row-header" style={{ paddingTop: "10px" }}>
						{language.language === "ar" ? "أشكال" : "Shapes"}
					</div>
					<div className="row" style={{ paddingTop: "8px" }}>
						<div
							title="Retangle"
							className="image-pattern-style e-selected-style"
							id="shape1"
							style={{
								backgroundImage: "url('https://ej2.syncfusion.com/react/demos/src/diagram/Images/drawingTool/basicshape/DrawingTool_1.png')",
								marginRight: "3px",
							}}
						/>
						<div
							title="Ellipse"
							className="image-pattern-style"
							id="shape2"
							style={{
								backgroundImage: "url('https://ej2.syncfusion.com/react/demos/src/diagram/Images/drawingTool/basicshape/DrawingTool_2.png')",
								margin: "0px 3px",
							}}
						/>
						<div
							title="Hexagon"
							className="image-pattern-style"
							id="shape3"
							style={{
								backgroundImage: "url('https://ej2.syncfusion.com/react/demos/src/diagram/Images/drawingTool/basicshape/DrawingTool_3.png')",
							}}
						/>
					</div>
					<div className="row" style={{ paddingTop: "8px" }}>
						<div
							title="Pentagon"
							className="image-pattern-style"
							id="shape4"
							style={{
								backgroundImage: "url('https://ej2.syncfusion.com/react/demos/src/diagram/Images/drawingTool/basicshape/DrawingTool_4.png')",
								marginRight: "3px",
							}}
						/>
						<div
							title="Polygon"
							className="image-pattern-style"
							id="shape5"
							style={{
								backgroundImage: "url('https://ej2.syncfusion.com/react/demos/src/diagram/Images/drawingTool/basicshape/DrawingTool_5.png')",
								margin: "0px 3px",
							}}
						/>
						<div
							title="Path"
							className="image-pattern-style"
							id="path"
							style={{
								backgroundImage: "url('https://ej2.syncfusion.com/react/demos/src/diagram/Images/drawingTool/DrawingTool_6.png')",
							}}
						/>
					</div>
					<div className="row" style={{ paddingTop: "8px" }}>
						<div
							title="Image"
							className="image-pattern-style"
							id="image"
							style={{
								backgroundImage: "url('https://i.imgur.com/k6moQPO.png')",
								marginRight: "3px",
							}}
						/>
						<div
							title="SVG"
							className="image-pattern-style"
							id="svg"
							style={{
								backgroundImage: "url('https://ej2.syncfusion.com/react/demos/src/diagram/Images/drawingTool/DrawingTool_8.png')",
								marginRight: "3px",
							}}
						/>
						<div
							title="Text"
							className="image-pattern-style"
							id="text"
							style={{
								backgroundImage: "url('https://ej2.syncfusion.com/react/demos/src/diagram/Images/drawingTool/DrawingTool_9.png')",
								marginRight: "3px",
							}}
						/>
					</div>
					<div className="row row-header" style={{ paddingTop: "10px" }}>
						{language.language === "ar" ? "موصلات" : "Connector"}
					</div>
					<div className="row" style={{ paddingTop: "8px" }}>
						<div
							className="image-pattern-style"
							id="straight"
							style={{
								backgroundImage: "url('https://ej2.syncfusion.com/react/demos/src/diagram/Images/drawingTool/connector/Connectors_1.png')",
								marginRight: "3px",
							}}
						/>
						<div
							className="image-pattern-style"
							id="ortho"
							style={{
								backgroundImage: "url('https://ej2.syncfusion.com/react/demos/src/diagram/Images/drawingTool/connector/Connectors_2.png')",
								margin: "0px 3px",
							}}
						/>
						<div
							className="image-pattern-style"
							id="cubic"
							style={{
								backgroundImage: "url('https://ej2.syncfusion.com/react/demos/src/diagram/Images/drawingTool/connector/Connectors_3.png')",
							}}
						/>
					</div>
					<div className="row" style={{ paddingTop: "8px" }}>
						<div
							className="image-pattern-style"
							id="freehand"
							style={{
								backgroundImage: "url('https://ej2.syncfusion.com/react/demos/src/diagram/Images/connector/freehand.png')",
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
export default DrawingTools;
