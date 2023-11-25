/* eslint-disable unicorn/prefer-number-properties */
import SettingsBar from "@components/SettingsBar";
import Sidebar from "@components/SideBare";
import { useThemeContext } from "@contexts/ContextProvider";
import Box from "@mui/joy/Box";
import GlobalStyles from "@mui/joy/GlobalStyles";
import IconButton from "@mui/joy/IconButton";
import Sheet from "@mui/joy/Sheet";
import Tooltip from "@mui/joy/Tooltip";
import { CssVarsProvider } from "@mui/joy/styles";
import Loading from "@pages/Loading";
import { motion } from "framer-motion";
import { FiSettings } from "react-icons/fi";
import { Outlet } from "react-router-dom";

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

function App() {
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
		},
	});

	const { showSettings, setShowSettings, theme, loading } = useThemeContext();
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
				}}
			/>

			{loading ? (
				<Loading />
			) : (
				<Sheet variant="plain">
					<Box position={"relative"} sx={{ display: "flex", height: " calc(100dvh - var(--variant-borderWidth) *2 )", alignItems: "stretch" }}>
						<Tooltip title="setting" size="md" variant="solid" color="primary" placement="top" arrow>
							<IconButton component={motion.button} whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} variant="soft" color="primary" size="lg" sx={{ zIndex: 2, borderRadius: "50%", p: ".5em", position: "absolute", right: 4, bottom: 4 }} onClick={() => setShowSettings(!showSettings)}>
								<motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }}>
									<FiSettings className="icon" />
								</motion.div>
							</IconButton>
						</Tooltip>
						<SettingsBar />
						<Sidebar />
						{/* main content */}
						<Box sx={{ flex: 1, p: 4, overflow: "auto" }}>
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
