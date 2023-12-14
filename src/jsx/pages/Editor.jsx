import { useThemeContext } from "@contexts/ContextProvider";
import Seo from "@jsx/components/Hemlet/Seo";
import { value } from "@jsx/data/editor/editor-data";
import { Browser } from "@syncfusion/ej2-base";
import { PaneDirective, PanesDirective, SplitterComponent } from "@syncfusion/ej2-react-layouts";
import { Count, HtmlEditor, Image, Inject, Link, MarkdownEditor, QuickToolbar, RichTextEditorComponent, Table, Toolbar, ToolbarType } from "@syncfusion/ej2-react-richtexteditor";
import { useMediaQuery } from "@uidotdev/usehooks";
import * as Marked from "marked";
import { useId } from "react";

function Preview() {
	const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
	const { language } = useThemeContext();
	const isArabic = language.language === "ar";
	const title = isArabic ? "أسترالين | محرر الماركداون" : "Astralyn | Markdown Editor";
	const description = isArabic ? "محرر Markdown مع معاينة ومعاينة للتغييرات وزر لتنسيق النص (نمط Markdown) مع زر للتصدير وميزة الحفظ على التخزين المحلي." : "A markdown editor with preview, resizable, and formatting buttons (Markdown style) with an export button and save-to-local-storage feature.";
	const name = isArabic ? "أسترالين" : "Astralyn";
	const type = "website";
	const id = useId();
	let rteObj;
	let splitterInstance;
	// Rich Text Editor items list
	const items = ["Bold", "Italic", "StrikeThrough", "|", "Formats", "OrderedList", "UnorderedList", "|", "CreateLink", "Image", "CreateTable", "InsertCode", "|", "Undo", "Redo", "|", "FullScreen", "Print"];
	let textArea;
	let srcArea;
	//Rich Text Editor ToolbarSettings
	const toolbarSettings = {
		items: items,
		type: ToolbarType.Expand,
		enableFloating: true,
	};

	// Set options
	Marked.use({
		gfm: true,
		breaks: true,
	});

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
					enablePersistence
					placeholder={language.language === "ar" ? "صورة" : "أكتب شيئًا ..."}
					toolbarSettings={toolbarSettings}
					height="inherit"
					saveInterval={1}
					showCharCount={true}
					created={onCreate.bind(this)}
					change={onChange.bind(this)}
					actionComplete={updateValue.bind(this)}
					value={value["en"]}
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
					<b> {language.language === "ar" ? "عرض الـ Markdown" : "Markdown Preview"} </b>
				</h6>
				<div className="splitter-default-content source-code pane2" style={{ padding: "20px" }}></div>
			</div>
		);
	}
	const panesEnglish = [<PaneDirective key={id} resizable={true} size="50%" min="40%" cssClass="pane1" content={content1.bind(this)}></PaneDirective>, <PaneDirective key={id} min="40%" cssClass="pane2" content={content2.bind(this)}></PaneDirective>];

	const panesArabic = [<PaneDirective key={id} min="40%" cssClass="pane2" content={content2.bind(this)}></PaneDirective>, <PaneDirective key={id} resizable={true} size="50%" min="40%" cssClass="pane1" content={content1.bind(this)}></PaneDirective>];

	return (
		<div className="control-pane" style={{ height: "100%" }}>
			<Seo title={title} description={description} name={name} type={type} />
			<div className="control-section onlineEditor" id="rtePreview">
				<div className="content-wrapper">
					<SplitterComponent orientation={isSmallDevice ? "Vertical" : "Horizontal"} ref={(splitter) => (splitterInstance = splitter)} height="450px" width="100%" resizing={onResizing.bind(this)} created={updateOrientation.bind(this)}>
						<PanesDirective>{language.language === "ar" ? panesArabic : panesEnglish}</PanesDirective>
					</SplitterComponent>
				</div>
			</div>
		</div>
	);
}
export default Preview;
