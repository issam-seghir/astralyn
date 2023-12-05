/* eslint-disable unicorn/prefer-number-properties */
import Sidebar from "@components/SideBare";
import { useThemeContext } from "@contexts/ContextProvider";
import { CardCover } from "@mui/joy";
import Box from "@mui/joy/Box";
import GlobalStyles from "@mui/joy/GlobalStyles";
import Sheet from "@mui/joy/Sheet";
import { CssVarsProvider } from "@mui/joy/styles";
import Loading from "@pages/Loading";
import { Outlet } from "react-router-dom";

import SettingsButton from "@components/SettingsButton";
import { L10n, loadCldr } from "@syncfusion/ej2-base";
import * as arGregorianCalander from "cldr-data/main/ar-DZ/ca-gregorian.json";
import * as arCharactersData from "cldr-data/main/ar-DZ/characters.json";
import * as arCurrenciesData from "cldr-data/main/ar-DZ/currencies.json";
import * as arDateFieldsData from "cldr-data/main/ar-DZ/dateFields.json";
import * as arDelimitersData from "cldr-data/main/ar-DZ/delimiters.json";
import * as arLanguagesData from "cldr-data/main/ar-DZ/languages.json";
import * as arLayoutData from "cldr-data/main/ar-DZ/layout.json";
import * as arLocaleDisplayNamesData from "cldr-data/main/ar-DZ/localeDisplayNames.json";
import * as arMeasurementSystemNamesData from "cldr-data/main/ar-DZ/measurementSystemNames.json";
import * as arNumberData from "cldr-data/main/ar-DZ/numbers.json";
import * as arPosixData from "cldr-data/main/ar-DZ/posix.json";
import * as arTerritoriesData from "cldr-data/main/ar-DZ/territories.json";
import * as arTimeZoneData from "cldr-data/main/ar-DZ/timeZoneNames.json";
import * as arUnitsData from "cldr-data/main/ar-DZ/units.json";
import * as suppNumberingSystems from "cldr-data/supplemental/numberingSystems.json";

loadCldr(arNumberData, arTimeZoneData, arGregorianCalander, arCurrenciesData, arCharactersData, arDateFieldsData, arDelimitersData, arLanguagesData, arLayoutData, arLocaleDisplayNamesData, arMeasurementSystemNamesData, arPosixData, arTerritoriesData, arUnitsData, suppNumberingSystems);

L10n.load({
	"ar-DZ": {
		grid: {
			EmptyDataSourceError: "يجب أن يكون مصدر البيانات فارغة في التحميل الأولي منذ يتم إنشاء الأعمدة من مصدر البيانات في أوتوجينيراتد عمود الشبكة",
			EmptyRecord: "لا توجد سجلات لعرضها",
			True: "صحيح",
			False: "خطأ",
			InvalidFilterMessage: "بيانات فلترة غير صالحة",
			GroupDropArea: "اسحب رأس العمود هنا لتجميع الأعمدة",
			UnGroup: "انقر هنا لإلغاء التجميع",
			GroupDisable: "تم تعطيل التجميع لهذا العمود",
			FilterbarTitle: "خلية شريط الفلترة",
			Add: "إضافة",
			Edit: "تعديل",
			Cancel: "إلغاء",
			Update: "تحديث",
			Delete: "حذف",
			Print: "طباعة",
			Pdfexport: "تصدير كملف PDF",
			Excelexport: "تصدير كملف Excel",
			Wordexport: "تصدير كملف Word",
			Csvexport: "تصدير كملف CSV",
			Search: "بحث",
			Columnchooser: "الأعمدة",
			Save: "حفظ",
			Item: "عنصر",
			Items: "عناصر",
			EditOperationAlert: "لم يتم تحديد أي سجلات لعملية التعديل",
			DeleteOperationAlert: "لم يتم تحديد أي سجلات لعملية الحذف",
			SaveButton: "حفظ",
			OKButton: "موافق",
			CancelButton: "إلغاء",
			EditFormTitle: "تفاصيل الـ ",
			AddFormTitle: "	إضافة سجل جديد",
			BatchSaveConfirm: "هل أنت متأكد أنك تريد حفظ التغييرات؟",
			BatchSaveLostChanges: "ستفقد التغييرات غير المحفوظة. هل أنت متأكد أنك تريد المتابعة؟",
			ConfirmDelete: "هل أنت متأكد أنك تريد حذف السجل؟",
			CancelEdit: "هل أنت متأكد أنك تريد إلغاء التغييرات؟",
			ChooseColumns: "إختيار العمود",
			SearchColumns: "أعمدة البحث",
			Matchs: "لم يتم العثور على تطابق",
			FilterButton: "فلترة",
			ClearButton: "مسح",
			Clear: "مسح",
			Like: "مثل",
			StartsWith: "يبدأ بـ",
			NotStartsWith: "لا يبدأ بـ",
			EndsWith: "ينتهي بـ",
			NotEndsWith: "لا ينتهي بـ",
			Contains: "يحتوي على",
			NotContains: "لا يحتوي على",
			Equal: "يساوي",
			NotEqual: "لا يساوي",
			LessThan: "أقل من",
			LessThanOrEqual: "أقل من أو يساوي",
			GreaterThan: "أكبر من",
			GreaterThanOrEqual: "أكبر من أو يساوي",
			ChooseDate: "اختر تاريخًا",
			EnterValue: "أدخل القيمة",
			Copy: "نسخ",
			Group: "تجميع حسب هذا العمود",
			Ungroup: "إلغاء التجميع حسب هذا العمود",
			autoFitAll: "تناسب تلقائي لجميع الأعمدة",
			autoFit: "تناسب تلقائي لهذا العمود",
			Export: "تصدير",
			FirstPage: "الصفحة الأولى",
			LastPage: "الصفحة الأخيرة",
			PreviousPage: "الصفحة السابقة",
			NextPage: "الصفحة التالية",
			Sort: "ترتيب",
			SortAscending: "ترتيب تصاعدي",
			SortDescending: "ترتيب تنازلي",
			EditRecord: "تعديل السجل",
			DeleteRecord: "حذف السجل",
			FilterMenu: "فلترة قائمة ال",
			SelectAll: "تحديد الكل",
			Blanks: "خانات فارغة",
			FilterTrue: "صحيح",
			FilterFalse: "خطأ",
			NoResult: "لا توجد نتائج مطابقة",
			ClearFilter: "مسح الفلترة",
			NumberFilter: "فلترة الأرقام",
			TextFilter: "فلترة النصوص",
			DateFilter: "فلترة التواريخ",
			MatchCase: "مطابقة الحالة",
			Between: "بين",
			CustomFilter: "فلترة مخصصة",
			CustomFilterPlaceHolder: "أدخل القيمة",
			CustomFilterDatePlaceHolder: "اختر تاريخًا",
			AND: "و",
			OR: "أو",
			ShowRowsWhere: "عرض الصفوف حيث",
		},
		treegrid: {
			EmptyRecord: "لا توجد سجلات لعرضها",
			True: "صحيح",
			False: "خطأ",
			ExpandAll: "توسيع الكل",
			CollapseAll: "طي الكل",
			RowOutdent: "Oudent",
			RowIndent: "Indent",
			InvalidFilterMessage: "بيانات فلترة غير صالحة",
			FilterbarTitle: "\\s خلية شريط الفلترة",
			Add: "إضافة",
			Edit: "تعديل",
			Cancel: "إلغاء",
			Update: "تحديث",
			Delete: "حذف",
			Print: "طباعة",
			Pdfexport: "تصدير كملف PDF",
			Excelexport: "تصدير كملف Excel",
			Wordexport: "تصدير كملف Word",
			Csvexport: "تصدير كملف CSV",
			Search: "بحث",
			Save: "حفظ",
			EditOperationAlert: "لم يتم تحديد أي سجلات لعملية التعديل",
			DeleteOperationAlert: "لم يتم تحديد أي سجلات لعملية الحذف",
			SaveButton: "حفظ",
			OKButton: "موافق",
			CancelButton: "إلغاء",
			EditFormTitle: "تفاصيل الـ ",
			AddFormTitle: "	إضافة سجل جديد",
			ConfirmDelete: "هل أنت متأكد أنك تريد حذف السجل؟",
			SearchColumns: "أعمدة البحث",
			Matchs: "لم يتم العثور على تطابق",
			FilterButton: "فلترة",
			ClearButton: "مسح",
			StartsWith: "يبدأ بـ",
			NotStartsWith: "لا يبدأ بـ",
			EndsWith: "ينتهي بـ",
			NotEndsWith: "لا ينتهي بـ",
			Contains: "يحتوي على",
			NotContains: "لا يحتوي على",
			Equal: "يساوي",
			NotEqual: "لا يساوي",
			LessThan: "أقل من",
			LessThanOrEqual: "أقل من أو يساوي",
			GreaterThan: "أكبر من",
			GreaterThanOrEqual: "أكبر من أو يساوي",
			FilterMenu: "فلترة قائمة ال",
			EnterValue: "أدخل القيمة",
			ChooseDate: "اختر تاريخًا",
			autoFitAll: "تناسب تلقائي لجميع الأعمدة",
			autoFit: "تناسب تلقائي لهذا العمود",
			Export: "تصدير",
			FirstPage: "الصفحة الأولى",
			LastPage: "الصفحة الأخيرة",
			PreviousPage: "الصفحة السابقة",
			NextPage: "الصفحة التالية",
			Sort: "ترتيب",
			SortAscending: "ترتيب تصاعدي",
			SortDescending: "ترتيب تنازلي",
			EditRecord: "تعديل السجل",
			DeleteRecord: "حذف السجل",
			SelectAll: "تحديد الكل",
			Blanks: "خانات فارغة",
			FilterTrue: "صحيح",
			FilterFalse: "خطأ",
			NoResult: "لا توجد نتائج مطابقة",
			ClearFilter: "مسح الفلترة",
			NumberFilter: "فلترة الأرقام",
			TextFilter: "فلترة النصوص",
			DateFilter: "فلترة التواريخ",
			MatchCase: "مطابقة الحالة",
			Between: "بين",
			CustomFilter: "فلترة مخصصة",
			CustomFilterPlaceHolder: "أدخل القيمة",
			CustomFilterDatePlaceHolder: "اختر تاريخًا",
			AND: "و",
			OR: "أو",
			ShowRowsWhere: "عرض الصفوف حيث",
			Above: "أعلى",
			Below: "أقل",
			AddRow: "أضف صف",
		},
		pager: {
			currentPageInfo: "{0} من {1} صفحة",
			firstPageTooltip: "انتقل إلى الصفحة الأولى",
			lastPageTooltip: "انتقل إلى الصفحة الأخيرة",
			nextPageTooltip: "انتقل إلى الصفحة التالية",
			nextPagerTooltip: "انتقل إلى عناصر بيجر التالية",
			previousPageTooltip: "انتقل إلى الصفحة السابقة",
			previousPagerTooltip: "للذهاب إلى عناصر بيجر السابقة",
			pagerDropDown: "عناصر لكل صفحة",
			pagerAllDropDown: "عناصر",
			All: "الجميع",
			totalItemsInfo: "({0} العناصر)",
			totalItemInfo: "({0} العنصر)",
		},
		schedule: {
			day: "اليوم",
			week: "الأسبوع",
			workWeek: "أسبوع العمل",
			month: "الشهر",
			agenda: "جدول أعمال",
			weekAgenda: "جدول الأسبوع",
			workWeekAgenda: "جدول أسبوع العمل",
			monthAgenda: "جدول الشهر",
			today: "اليوم",
			noEvents: "لا توجد أحداث",
			emptyContainer: "لا توجد أحداث مجدولة في هذا اليوم.",
			allDay: "طوال اليوم",
			start: "البداية",
			end: "النهاية",
			more: "المزيد",
			close: "إغلاق",
			cancel: "إلغاء",
			noTitle: "(بدون عنوان)",
			delete: "حذف",
			deleteEvent: "حذف الحدث",
			deleteMultipleEvent: "حذف الأحداث المتعددة",
			selectedItems: "العناصر المحددة",
			deleteSeries: "حذف السلسلة",
			edit: "تحرير",
			editSeries: "تحرير السلسلة",
			editEvent: "تحرير الحدث",
			createEvent: "إنشاء",
			subject: "الموضوع",
			addTitle: "إضافة عنوان",
			moreDetails: "المزيد من التفاصيل",
			save: "حفظ",
			editContent: "هل تريد تحرير هذا الحدث فقط أو السلسلة بأكملها؟",
			deleteRecurrenceContent: "هل تريد حذف هذا الحدث فقط أو السلسلة بأكملها؟",
			deleteContent: "هل أنت متأكد أنك تريد حذف هذا الحدث؟",
			deleteMultipleContent: "هل أنت متأكد أنك تريد حذف الأحداث المحددة؟",
			newEvent: "حدث جديد",
			title: "العنوان",
			location: "الموقع",
			description: "الوصف",
			timezone: "المنطقة الزمنية",
			startTimezone: "بداية المنطقة الزمنية",
			endTimezone: "نهاية المنطقة الزمنية",
			repeat: "تكرار",
			saveButton: "حفظ",
			cancelButton: "إلغاء",
			deleteButton: "حذف",
			recurrence: "تكرار",
			wrongPattern: "نمط التكرار غير صالح.",
			seriesChangeAlert: "سيتم إلغاء التغييرات التي تم إجراؤها على الحالات الخاصة بسلسلة الحدث، وستتطابق هذه الأحداث مع السلسلة مرة أخرى.",
			createError: "يجب أن يكون مدة الحدث أقصر من تكرار حدوثه. قصر المدة أو غير نمط التكرار في محرر الحدث المتكرر.",
			recurrenceDateValidation: "بعض الأشهر تحتوي على أيام أقل من التاريخ المحدد. في هذه الأشهر، سيكون الحدث في آخر يوم من الشهر.",
			sameDayAlert: "لا يمكن حدوث حدثين متكررين في نفس اليوم.",
			editRecurrence: "تحرير التكرار",
			repeats: "يكرر",
			alert: "تنبيه",
			startEndError: "تاريخ النهاية المحدد يحدث قبل تاريخ البداية.",
			invalidDateError: "قيمة التاريخ المدخلة غير صالحة.",
			ok: "موافق",
			occurrence: "حدوث",
			series: "سلسلة",
			previous: "السابق",
			next: "التالي",
			timelineDay: "جدول زمني - اليوم",
			timelineWeek: "جدول زمني - الأسبوع",
			timelineWorkWeek: "جدول زمني - أسبوع العمل",
			timelineMonth: "جدول زمني - الشهر",
			expandAllDaySection: "توسيع",
			collapseAllDaySection: "طي",
		},
		recurrenceeditor: {
			none: "لا شيء",
			daily: "يوميًا",
			weekly: "أسبوعيًا",
			monthly: "شهريًا",
			month: "شهر",
			yearly: "سنويًا",
			never: "أبدًا",
			until: "حتى",
			count: "العدد",
			first: "الأول",
			second: "الثاني",
			third: "الثالث",
			fourth: "الرابع",
			last: "الأخير",
			repeat: "كرر",
			repeatEvery: "كرر كل",
			on: "كرر في",
			end: "النهاية",
			onDay: "اليوم",
			days: "أيام",
			weeks: "أسابيع",
			months: "أشهر",
			years: "سنوات",
			every: "كل",
			summaryTimes: "مرات",
			summaryOn: "في",
			summaryUntil: "حتى",
			summaryRepeat: "يكرر",
			summaryDay: "أيام",
			summaryWeek: "أسابيع",
			summaryMonth: "أشهر",
			summaryYear: "سنوات",
		},
		kanban: {
			items: "العناصر",
			min: "أقل حد",
			max: "أقصى حد",
			cardsSelected: "تم تحديد البطاقات",
			addTitle: "إضافة بطاقة جديدة",
			editTitle: "تحرير تفاصيل البطاقة",
			deleteTitle: "حذف البطاقة",
			deleteContent: "هل أنت متأكد أنك تريد حذف هذه البطاقة؟",
			save: "حفظ",
			delete: "حذف",
			cancel: "إلغاء",
			yes: "نعم",
			no: "لا",
			close: "أغلق",
			noCard: "لا توجد بطاقات لعرضها",
			unassigned: "غير معين",
		},
		richtexteditor: {
			alignments: "المحاذاة",
			justifyLeft: "محاذاة لليسار",
			justifyCenter: "محاذاة في الوسط",
			justifyRight: "محاذاة لليمين",
			justifyFull: "محاذاة بالكامل",
			fontName: "اسم الخط",
			fontSize: "حجم الخط",
			fontColor: "لون الخط",
			backgroundColor: "لون الخلفية",
			bold: "عريض",
			italic: "مائل",
			underline: "تحت الخط",
			strikethrough: "مشطوب",
			clearFormat: "مسح التنسيق",
			clearAll: "مسح الكل",
			cut: "قص",
			copy: "نسخ",
			paste: "لصق",
			unorderedList: "قائمة نقطية",
			orderedList: "قائمة مرقمة",
			indent: "زيادة المسافة البادئة",
			outdent: "تقليل المسافة البادئة",
			undo: "تراجع",
			redo: "إعادة",
			superscript: "حرف فوقي",
			subscript: "حرف تحتي",
			createLink: "إدراج رابط",
			openLink: "فتح الرابط",
			editLink: "تحرير الرابط",
			removeLink: "إزالة الرابط",
			image: "إدراج صورة",
			replace: "استبدال",
			align: "محاذاة",
			caption: "تسمية الصورة",
			remove: "إزالة",
			insertLink: "إدراج رابط",
			display: "عرض",
			altText: "نص بديل",
			dimension: "تغيير الحجم",
			fullscreen: "تكبير",
			maximize: "تكبير",
			minimize: "تصغير",
			lowerCase: "حروف صغيرة",
			upperCase: "حروف كبيرة",
			print: "طباعة",
			formats: "التنسيقات",
			sourcecode: "عرض الشفرة",
			preview: "معاينة",
			viewside: "جانب العرض",
			insertCode: "إدراج الكود",
			linkText: "نص العرض",
			linkTooltipLabel: "عنوان",
			linkWebUrl: "العنوان الإلكتروني",
			linkTitle: "أدخل العنوان",
			linkurl: "http://example.com",
			linkOpenInNewWindow: "فتح الرابط في نافذة جديدة",
			linkHeader: "إدراج رابط",
			dialogInsert: "إدراج",
			dialogCancel: "إلغاء",
			dialogUpdate: "تحديث",
			imageHeader: "إدراج صورة",
			imageLinkHeader: "يمكنك أيضًا توفير رابط من الويب",
			mdimageLink: "يرجى توفير رابط URL لصورتك",
			imageUploadMessage: "اسحب الصورة هنا أو تصفح للرفع",
			imageDeviceUploadMessage: "انقر هنا للرفع",
			imageAlternateText: "نص بديل",
			alternateHeader: "نص بديل",
			browse: "تصفح",
			imageUrl: "http://example.com/image.png",
			imageCaption: "تسمية",
			imageSizeHeader: "حجم الصورة",
			imageHeight: "الارتفاع",
			imageWidth: "العرض",
			textPlaceholder: "أدخل النص",
			inserttablebtn: "إدراج جدول",
			tabledialogHeader: "إدراج جدول",
			tableWidth: "العرض",
			cellpadding: "مسافة داخلية للخلية",
			cellspacing: "مسافة بين الخلايا",
			columns: "عدد الأعمدة",
			rows: "عدد الصفوف",
			tableRows: "صفوف الجدول",
			tableColumns: "أعمدة الجدول",
			tableCellHorizontalAlign: "محاذاة أفقية للخلية",
			tableCellVerticalAlign: "محاذاة عمودية للخلية",
			createTable: "إنشاء جدول",
			removeTable: "إزالة الجدول",
			tableHeader: "رأس الجدول",
			tableRemove: "إزالة الجدول",
			tableCellBackground: "خلفية الخلية",
			tableEditProperties: "تحرير خصائص الجدول",
			styles: "الأنماط",
			insertColumnLeft: "إدراج العمود على اليسار",
			insertColumnRight: "إدراج العمود على اليمين",
			deleteColumn: "حذف العمود",
			insertRowBefore: "إدراج الصف قبله",
			insertRowAfter: "إدراج الصف بعده",
			deleteRow: "حذف الصف",
			tableEditHeader: "تحرير الجدول",
			TableHeadingText: "عنوان",
			TableColText: "عمود",
			imageInsertLinkHeader: "إدراج رابط",
			editImageHeader: "تحرير الصورة",
			alignmentsDropDownLeft: "محاذاة لليسار",
			alignmentsDropDownCenter: "محاذاة في الوسط",
			alignmentsDropDownRight: "محاذاة لليمين",
			alignmentsDropDownJustify: "محاذاة بالكامل",
			imageDisplayDropDownInline: "مضمن",
			imageDisplayDropDownBreak: "فاصل",
			tableInsertRowDropDownBefore: "إدراج صف قبل",
			tableInsertRowDropDownAfter: "إدراج صف بعد",
			tableInsertRowDropDownDelete: "حذف الصف",
			tableInsertColumnDropDownLeft: "إدراج عمود على اليسار",
			tableInsertColumnDropDownRight: "إدراج عمود على اليمين",
			tableInsertColumnDropDownDelete: "حذف العمود",
			tableVerticalAlignDropDownTop: "محاذاة أعلى",
			tableVerticalAlignDropDownMiddle: "محاذاة وسط",
			tableVerticalAlignDropDownBottom: "محاذاة أسفل",
			tableStylesDropDownDashedBorder: "حدود متقطعة",
			tableStylesDropDownAlternateRows: "صفوف بديلة",
			pasteFormat: "لصق التنسيق",
			pasteFormatContent: "اختر إجراء التنسيق",
			plainText: "نص عادي",
			cleanFormat: "تنظيف",
			keepFormat: "الاحتفاظ بالتنسيق",
			pasteDialogOk: "موافق",
			pasteDialogCancel: "إلغاء",
			fileManager: "مدير الملفات",
			fileDialogHeader: "مستعرض الملفات",
			formatsDropDownParagraph: "فقرة",
			formatsDropDownCode: "كود",
			formatsDropDownQuotation: "اقتباس",
			formatsDropDownHeading1: "عنوان 1",
			formatsDropDownHeading2: "عنوان 2",
			formatsDropDownHeading3: "عنوان 3",
			formatsDropDownHeading4: "عنوان 4",
			fontNameSegoeUI: "Segoe UI",
			fontNameArial: "Arial",
			fontNameGeorgia: "Georgia",
			fontNameImpact: "Impact",
			fontNameTahoma: "Tahoma",
			fontNameTimesNewRoman: "Times New Roman",
			fontNameVerdana: "Verdana",
			numberFormatListNumber: "رقم",
			numberFormatListLowerAlpha: "حرف صغير",
			numberFormatListUpperAlpha: "حرف كبير",
			numberFormatListLowerRoman: "روماني صغير",
			numberFormatListUpperRoman: "روماني كبير",
			numberFormatListLowerGreek: "يوناني صغير",
			bulletFormatListDisc: "دائرة",
			bulletFormatListCircle: "دائرة صغيرة",
			bulletFormatListSquare: "مربع",
			numberFormatListNone: "بلا",
			bulletFormatListNone: "بلا",
			formatPainter: "رسام التنسيق",
			emojiPicker: "اختيار الرموز التعبيرية",
			embeddedCode: "كود مضمن",
			pasteEmbeddedCodeHere: "الصق الكود المضمن هنا",
			emojiPickerTypeToFind: "اكتب للبحث",
			emojiPickerNoResultFound: "لم يتم العثور على نتائج",
			emojiPickerTrySomethingElse: "جرب شيئًا آخر",
		},
		chart: {
			ZoomIn: "تكبير",
			ZoomOut: "تصغير",
			Zoom: "زوم",
			Pan: "مقلاة",
			Reset: "إعادة تعيين",
		},
		pivotview: {
			grandTotal: "المجموع الكلى",
			total: "المجموع",
			value: "القيمة",
			noValue: "لا قيمة لها",
			row: "صف",
			column: "العمود",
			collapse: "تضييق",
			expand: "توسيع",
			rowAxisPrompt: "قم بإسقاط الصف هنا",
			columnAxisPrompt: "قم بإسقاط العمود هنا",
			valueAxisPrompt: "قم بإسقاط القيمة هنا",
			filterAxisPrompt: "قم بإسقاط الفلترة هنا",
			filter: "فلترة",
			filtered: "مُفلتر",
			filters: "فلترات",
			sort: "ترتيب",
			rows: "صفوف",
			columns: "أعمدة",
			values: "قِيم",
			close: "أغلق",
			cancel: "ألغي",
			delete: "إحذف",
			calculatedField: "الحقل المحسوب",
			createCalculatedField: "إنشاء حقل محسوب",
			fieldName: "أدخل اسم الحقل",
			error: "خطأ",
			invalidFormula: "صيغة غير صالحة",
			dropText: "مثال: ('Sum(Order_Count)' + 'Sum(In_Stock)') * 250",
			dropTextMobile: "أضف الحقول وقم بتحرير الصيغة هنا",
			dropAction: "لا يمكن وضع الحقل المحسوب في أي منطقة أخرى باستثناء محور القيمة.",
			alert: "إنذار",
			warning: "تحذير",
			ok: "موافق",
			search: "بحث",
			drag: "سحب",
			remove: "إزالة",
			sum: "مجموع",
			average: "متوسط",
			count: "تعداد",
			min: "min",
			max: "max",
			allFields: "جميع الحقول",
			formula: "صيغة",
			addToRow: "أضف إلى الصف",
			addToColumn: "أضف إلى العمود",
			addToValue: "أضف إلى القيمة",
			addToFilter: "أضف إلى فلترة",
			emptyData: "لا يوجد سجلات لعرضها",
			fieldExist: "يوجد حقل بهذا الاسم بالفعل. الرجاء إدخال اسم مختلف.",
			confirmText: "يوجد بالفعل حقل حساب بهذا الاسم. هل تريد استبدالها؟",
			noMatches: "لا يوجد تطابق",
			format: "ملخصات القيم بواسطة",
			edit: "تعديل",
			clear: "إزالة",
			formulaField: "قم بسحب وإسقاط الحقول إلى الصيغة",
			dragField: "اسحب الحقل إلى الصيغة",
		},
		pivotfieldlist: {
			staticFieldList: "قائمة الحقول المحورية",
			fieldList: "قائمة الحقول",
			dropRowPrompt: "أسقط الصف هنا",
			dropColPrompt: "أسقط العمود هنا",
			dropValPrompt: "أسقط القيمة هنا",
			dropFilterPrompt: "أسقط الفلتر هنا",
			addPrompt: "اضافة حقل هنا",
			adaptiveFieldHeader: "اختر الحقل",
			centerHeader: "اسحب الحقول بين المحاور ادناه:",
			add: "اضافة",
			drag: "اسحب",
			filter: "فلترة",
			filters: "فلترات",
			rows: "الصفوف",
			columns: "الاعمدة",
			values: "قِيم",
			close: "أغلق",
			cancel: "ألغي",
			delete: "إحذف",
			alert: "إنذار",
			warning: "تحذير",
			ok: "موافق",
			calculatedField: "الحقل المحسوب",
			createCalculatedField: "إنشاء حقل محسوب",
			fieldName: "أدخل اسم الحقل",
			search: "إبحث",
			invalidFormula: "صيغة غير صالحة",
			dropText: "مثال: ('Sum(Order_Count)' + 'Sum(In_Stock)') * 250",
			dropTextMobile: "أضف الحقول وقم بتحرير الصيغة هنا",
			dropAction: "لا يمكن وضع الحقل المحسوب في أي منطقة أخرى باستثناء محور القيمة.",
			error: "خطأ",
			allFields: "جميع الحقول",
			sum: "مجموع",
			average: "متوسط",
			count: "تعداد",
			min: "min",
			max: "max",
			formula: "صيغة",
			fieldExist: "يوجد حقل بهذا الاسم بالفعل. الرجاء إدخال اسم مختلف.",
			confirmText: "يوجد بالفعل حقل حساب بهذا الاسم. هل تريد استبدالها؟",
			noMatches: "لا يوجد تطابق",
			format: "ملخصات القيم بواسطة",
			edit: "تعديل",
			clear: "إزالة",
			formulaField: "قم بسحب وإسقاط الحقول إلى الصيغة",
			dragField: "اسحب الحقل إلى الصيغة",
		},
	},
});
function App() {
	const { setShowSettings, showSettings, theme, loading, language } = useThemeContext();
	return (
		<CssVarsProvider theme={theme} defaultMode="system">
			{/* style for icons library's */}
			<GlobalStyles
				styles={{
					"svg.icon": {
						color: "var(--Icon-color)",
						margin: "var(--Icon-margin)",
						fontSize: "var(--Icon-fontSize, 20px)",
						width: "0.75em",
						height: "0.75em",
					},
					"html:lang(ar)": {
						"--joy-fontFamily-body": "'Cairo', sans-serif",
						"--joy-fontFamily-display": "'Cairo', sans-serif",
					},
				}}
			/>

			{loading ? (
				<Loading />
			) : (
				<Sheet variant="plain" id="sheetBg">
					<CardCover id="sheetBg__stars">
						<svg viewBox="0 0 800 800">
							<defs>
								<linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ffflurry-grad" gradientTransform="rotate(270)">
									<stop id="stop-1" stopColor="var(--joy-palette-primary-softColor)" stopOpacity="1" offset="0%"></stop>
									<stop id="stop-2" stopColor="var(--joy-palette-primary-softBg)" stopOpacity="1" offset="45%"></stop>
									<stop id="stop-3" stopColor="var(--joy-palette-background-card)" stopOpacity="1" offset="100%"></stop>
								</linearGradient>
							</defs>
							<rect width="100%" height="100%" fill="transparent"></rect>
							<g fill="url(#ffflurry-grad)">
								<rect width="494" height="3" x="187" y="63.5" rx="1.5" transform="rotate(45, 434, 65)" opacity="0.64"></rect>
								<rect width="92" height="3" x="160" y="566.5" rx="1.5" transform="rotate(45, 206, 568)" opacity="0.80"></rect>
								<rect width="468" height="3" x="208" y="365.5" rx="1.5" transform="rotate(45, 442, 367)" opacity="0.43"></rect>
								<rect width="272" height="3" x="-72" y="538.5" rx="1.5" transform="rotate(45, 64, 540)" opacity="0.97"></rect>
								<rect width="109" height="3" x="87.5" y="34.5" rx="1.5" transform="rotate(45, 142, 36)" opacity="0.49"></rect>
								<rect width="68" height="3" x="263" y="29.5" rx="1.5" transform="rotate(45, 297, 31)" opacity="0.92"></rect>
								<rect width="391" height="3" x="-131.5" y="623.5" rx="1.5" transform="rotate(45, 64, 625)" opacity="0.16"></rect>
								<rect width="368" height="3" x="-150" y="367.5" rx="1.5" transform="rotate(45, 34, 369)" opacity="0.26"></rect>
								<rect width="836" height="3" x="308" y="69.5" rx="1.5" transform="rotate(45, 726, 71)" opacity="0.21"></rect>
								<rect width="391" height="3" x="445.5" y="726.5" rx="1.5" transform="rotate(45, 641, 728)" opacity="0.64"></rect>
								<rect width="537" height="3" x="37.5" y="106.5" rx="1.5" transform="rotate(45, 306, 108)" opacity="0.27"></rect>
								<rect width="305" height="3" x="299.5" y="226.5" rx="1.5" transform="rotate(45, 452, 228)" opacity="0.42"></rect>
								<rect width="448" height="3" x="256" y="466.5" rx="1.5" transform="rotate(45, 480, 468)" opacity="0.99"></rect>
								<rect width="561" height="3" x="112.5" y="476.5" rx="1.5" transform="rotate(45, 393, 478)" opacity="0.52"></rect>
								<rect width="41" height="3" x="495.5" y="655.5" rx="1.5" transform="rotate(45, 516, 657)" opacity="0.43"></rect>
								<rect width="329" height="3" x="497.5" y="460.5" rx="1.5" transform="rotate(45, 662, 462)" opacity="0.96"></rect>
								<rect width="673" height="3" x="-12.5" y="710.5" rx="1.5" transform="rotate(45, 324, 712)" opacity="0.35"></rect>
								<rect width="402" height="3" x="237" y="695.5" rx="1.5" transform="rotate(45, 438, 697)" opacity="0.89"></rect>
								<rect width="442" height="3" x="-152" y="731.5" rx="1.5" transform="rotate(45, 69, 733)" opacity="0.46"></rect>
								<rect width="396" height="3" x="38" y="461.5" rx="1.5" transform="rotate(45, 236, 463)" opacity="0.61"></rect>
								<rect width="86" height="3" x="715" y="676.5" rx="1.5" transform="rotate(45, 758, 678)" opacity="0.16"></rect>
								<rect width="828" height="3" x="-67" y="315.5" rx="1.5" transform="rotate(45, 347, 317)" opacity="0.40"></rect>
								<rect width="208" height="3" x="-58" y="460.5" rx="1.5" transform="rotate(45, 46, 462)" opacity="0.90"></rect>
								<rect width="513" height="3" x="-17.5" y="211.5" rx="1.5" transform="rotate(45, 239, 213)" opacity="0.38"></rect>
								<rect width="598" height="3" x="-91" y="83.5" rx="1.5" transform="rotate(45, 208, 85)" opacity="0.82"></rect>
								<rect width="119" height="3" x="140.5" y="749.5" rx="1.5" transform="rotate(45, 200, 751)" opacity="0.95"></rect>
								<rect width="309" height="3" x="-11.5" y="466.5" rx="1.5" transform="rotate(45, 143, 468)" opacity="0.09"></rect>
								<rect width="452" height="3" x="-117" y="353.5" rx="1.5" transform="rotate(45, 109, 355)" opacity="0.47"></rect>
								<rect width="106" height="3" x="374" y="623.5" rx="1.5" transform="rotate(45, 427, 625)" opacity="0.51"></rect>
								<rect width="431" height="3" x="141.5" y="178.5" rx="1.5" transform="rotate(45, 357, 180)" opacity="0.64"></rect>
								<rect width="286" height="3" x="377" y="546.5" rx="1.5" transform="rotate(45, 520, 548)" opacity="0.21"></rect>
								<rect width="626" height="3" x="-268" y="165.5" rx="1.5" transform="rotate(45, 45, 167)" opacity="0.50"></rect>
								<rect width="396" height="3" x="-58" y="257.5" rx="1.5" transform="rotate(45, 140, 259)" opacity="0.08"></rect>
								<rect width="438" height="3" x="365" y="620.5" rx="1.5" transform="rotate(45, 584, 622)" opacity="0.92"></rect>
								<rect width="478" height="3" x="367" y="194.5" rx="1.5" transform="rotate(45, 606, 196)" opacity="0.18"></rect>
								<rect width="150" height="3" x="239" y="562.5" rx="1.5" transform="rotate(45, 314, 564)" opacity="0.95"></rect>
								<rect width="352" height="3" x="378" y="301.5" rx="1.5" transform="rotate(45, 554, 303)" opacity="0.53"></rect>
								<rect width="233" height="3" x="432.5" y="138.5" rx="1.5" transform="rotate(45, 549, 140)" opacity="0.50"></rect>
								<rect width="102" height="3" x="503" y="748.5" rx="1.5" transform="rotate(45, 554, 750)" opacity="0.94"></rect>
								<rect width="90" height="3" x="270" y="443.5" rx="1.5" transform="rotate(45, 315, 445)" opacity="0.92"></rect>
								<rect width="46" height="3" x="31" y="22.5" rx="1.5" transform="rotate(45, 54, 24)" opacity="0.18"></rect>
								<rect width="324" height="3" x="570" y="758.5" rx="1.5" transform="rotate(45, 732, 760)" opacity="0.58"></rect>
								<rect width="190" height="3" x="584" y="270.5" rx="1.5" transform="rotate(45, 679, 272)" opacity="0.81"></rect>
								<rect width="451" height="3" x="20.5" y="335.5" rx="1.5" transform="rotate(45, 246, 337)" opacity="0.88"></rect>
								<rect width="170" height="3" x="325" y="563.5" rx="1.5" transform="rotate(45, 410, 565)" opacity="0.70"></rect>
								<rect width="105" height="3" x="504.5" y="419.5" rx="1.5" transform="rotate(45, 557, 421)" opacity="0.99"></rect>
								<rect width="730" height="3" x="384" y="485.5" rx="1.5" transform="rotate(45, 749, 487)" opacity="0.76"></rect>
								<rect width="313" height="3" x="385.5" y="64.5" rx="1.5" transform="rotate(45, 542, 66)" opacity="0.81"></rect>
								<rect width="173" height="3" x="-45.5" y="77.5" rx="1.5" transform="rotate(45, 41, 79)" opacity="0.98"></rect>
								<rect width="590" height="3" x="328" y="532.5" rx="1.5" transform="rotate(45, 623, 534)" opacity="0.11"></rect>
								<rect width="503" height="3" x="-120.5" y="139.5" rx="1.5" transform="rotate(45, 131, 141)" opacity="0.17"></rect>
								<rect width="120" height="3" x="608" y="629.5" rx="1.5" transform="rotate(45, 668, 631)" opacity="0.87"></rect>
								<rect width="600" height="3" x="-128" y="395.5" rx="1.5" transform="rotate(45, 172, 397)" opacity="0.67"></rect>
								<rect width="381" height="3" x="529.5" y="352.5" rx="1.5" transform="rotate(45, 720, 354)" opacity="0.28"></rect>
								<rect width="562" height="3" x="467" y="579.5" rx="1.5" transform="rotate(45, 748, 581)" opacity="0.92"></rect>
								<rect width="333" height="3" x="444.5" y="34.5" rx="1.5" transform="rotate(45, 611, 36)" opacity="0.12"></rect>
								<rect width="376" height="3" x="559" y="197.5" rx="1.5" transform="rotate(45, 747, 199)" opacity="0.39"></rect>
								<rect width="66" height="3" x="114" y="540.5" rx="1.5" transform="rotate(45, 147, 542)" opacity="0.62"></rect>
								<rect width="419" height="3" x="12.5" y="647.5" rx="1.5" transform="rotate(45, 222, 649)" opacity="0.44"></rect>
								<rect width="276" height="3" x="-96" y="263.5" rx="1.5" transform="rotate(45, 42, 265)" opacity="0.84"></rect>
								<rect width="193" height="3" x="332.5" y="765.5" rx="1.5" transform="rotate(45, 429, 767)" opacity="0.33"></rect>
								<rect width="82" height="3" x="601" y="374.5" rx="1.5" transform="rotate(45, 642, 376)" opacity="0.50"></rect>
								<rect width="119" height="3" x="714.5" y="366.5" rx="1.5" transform="rotate(45, 774, 368)" opacity="0.77"></rect>
							</g>
						</svg>
					</CardCover>
					{/* <CardCover id="sheetBg__stars">
						<img src="../../assets/images/dddepth-1.jpg" alt="" />
					</CardCover> */}
					<Box
						position={"relative"}
						sx={{
							display: "flex",
							height: " calc(100dvh - var(--variant-borderWidth) *2 )",
							alignItems: "stretch",
						}}
					>
						<SettingsButton />
						<Sidebar />
						{/* main content */}
						<Box sx={{ flex: 1, p: { xs: 2, md: 4 }, overflow: "auto" }}>
							<Outlet />
						</Box>
					</Box>
				</Sheet>
			)}
		</CssVarsProvider>
	);
}

{
	/* <Header toggleSideBar={toggleSideBar} />
	<SideBare show={show} toggleSideBar={toggleSideBar} /> */
}

export default App;
