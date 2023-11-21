/**
 * Rich Text Editor markdown preview sample
 */
import { Browser } from "@syncfusion/ej2-base";
import { Image, Inject, Link, MarkdownEditor, QuickToolbar, RichTextEditorComponent, Table, Toolbar, HtmlEditor, Count, ToolbarType } from "@syncfusion/ej2-react-richtexteditor";
import { PaneDirective, PanesDirective, SplitterComponent } from "@syncfusion/ej2-react-layouts";
import * as Marked from "marked";

function Preview() {
	let rteObj;
	let splitterInstance;
	// set the value to Rich Text Editor
	const value = `In Rich Text Editor , you click the toolbar buttons to format the words and the changes are visible immediately.
  Markdown is not like that. When you format the word in Markdown format, you need to add Markdown syntax to the word to indicate which words
  and phrases should look different from each other

  Rich Text Editor supports markdown editing when the editorMode set as **markdown** and using both *keyboard interaction* and *toolbar action*, you can apply the formatting to text.

  We can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/).

  The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content`;
	// Rich Text Editor items list
	const items = ["Bold", "Italic", "StrikeThrough", "|", "Formats", "OrderedList", "UnorderedList", "|", "CreateLink", "Image", "CreateTable", "|", "Undo", "Redo"];
	let textArea;
	let srcArea;
	//Rich Text Editor ToolbarSettings
	const toolbarSettings = {
		items: items,
		type: ToolbarType.Expand,
		enableFloating: false,
	};
	function onCreate() {
		textArea = rteObj.contentModule.getEditPanel();
		srcArea = document.querySelector(".source-code");
		updateValue();
	}
	function onChange() {
		updateValue();
	}
	function onResizing() {
		rteObj.refreshUI();
	}
	function updateValue() {
		srcArea.innerHTML = Marked.marked(rteObj.contentModule.getEditPanel().value);
	}
	function updateOrientation() {
		if (Browser.isDevice) {
			splitterInstance.orientation = "Vertical";
			document.body.querySelector(".heading").style.width = "auto";
		}
	}
	function content1() {
		return (
			<div className="content">
				<RichTextEditorComponent
					id="defaultRTE"
					ref={(richtexteditor) => {
						rteObj = richtexteditor;
					}}
					editorMode="Markdown"
					toolbarSettings={toolbarSettings}
					height="447px"
					saveInterval={1}
					created={onCreate.bind(this)}
					change={onChange.bind(this)}
					actionComplete={updateValue.bind(this)}
					value={value}
				>
					<Inject services={[MarkdownEditor, Toolbar, Image, Link, HtmlEditor, QuickToolbar, Table, Count]} />
				</RichTextEditorComponent>
			</div>
		);
	}
	function content2() {
		return (
			<div className="heading right">
				<h6 className="title">
					<b>Markdown Preview</b>
				</h6>
				<div className="splitter-default-content source-code pane2" style={{ padding: "20px" }}></div>
			</div>
		);
	}
	return (
		<div className="control-pane">
			<div className="control-section onlineEditor" id="rtePreview">
				<div className="content-wrapper">
					content1()
					{/* <SplitterComponent ref={(splitter) => (splitterInstance = splitter)} height="450px" width="100%" resizing={onResizing.bind(this)} created={updateOrientation.bind(this)}>
						<PanesDirective>
							<PaneDirective resizable={true} size="50%" min="40%" cssClass="pane1" content={content1.bind(this)}></PaneDirective>
							<PaneDirective min="40%" cssClass="pane2" content={content2.bind(this)}></PaneDirective>
						</PanesDirective>
					</SplitterComponent> */}
				</div>
			</div>
		</div>
	);
}
export default Preview;
