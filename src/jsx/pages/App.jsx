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

import { L10n, enableRtl, loadCldr, setCulture, setCurrencyCode } from "@syncfusion/ej2-base";
import * as arGregorianCalander from "cldr-data/main/ar/ca-gregorian.json";
import * as arCharactersData from "cldr-data/main/ar/characters.json";
import * as arCurrenciesData from "cldr-data/main/ar/currencies.json";
import * as arDateFieldsData from "cldr-data/main/ar/dateFields.json";
import * as arDelimitersData from "cldr-data/main/ar/delimiters.json";
import * as arLanguagesData from "cldr-data/main/ar/languages.json";
import * as arLayoutData from "cldr-data/main/ar/layout.json";
import * as arLocaleDisplayNamesData from "cldr-data/main/ar/localeDisplayNames.json";
import * as arMeasurementSystemNamesData from "cldr-data/main/ar/measurementSystemNames.json";
import * as arNumberData from "cldr-data/main/ar/numbers.json";
import * as arPosixData from "cldr-data/main/ar/posix.json";
import * as arTerritoriesData from "cldr-data/main/ar/territories.json";
import * as arTimeZoneData from "cldr-data/main/ar/timeZoneNames.json";
import * as arUnitsData from "cldr-data/main/ar/units.json";
import * as suppNumberingSystems from "cldr-data/supplemental/numberingSystems.json";

loadCldr(arNumberData, arTimeZoneData, arGregorianCalander, arCurrenciesData, arCharactersData, arDateFieldsData, arDelimitersData, arLanguagesData, arLayoutData, arLocaleDisplayNamesData, arMeasurementSystemNamesData, arPosixData, arTerritoriesData, arUnitsData, suppNumberingSystems);

// Enables Right to left alignment for all components
enableRtl(true);
L10n.load({
	ar: {
		grid: {
			EmptyDataSourceError: "خطأ: مصدر البيانات فارغ",
			EmptyRecord: "لا توجد سجلات لعرضها",
			InvalidFilterMessage: "بيانات فلترة غير صالحة",
			GroupDropArea: "اسحب رأس العمود هنا لتجميع الأعمدة",
			UnGroup: "انقر هنا لإلغاء التجميع",
			GroupDisable: "تم تعطيل التجميع لهذا العمود",
			FilterbarTitle: "عنوان شريط الفلترة",
			Add: "إضافة",
			Edit: "تعديل",
			Cancel: "إلغاء",
			Update: "تحديث",
			Delete: "حذف",
			Print: "طباعة",
			Pdfexport: "تصدير كملف PDF",
			Excelexport: "تصدير كملف PDF",
			Items: "Artikel",
		},
		pager: {
			currentPageInfo: "{0} von {1} Seiten",
			firstPageTooltip: "Zur ersten Seite",
			lastPageTooltip: "Zur letzten Seite",
			nextPageTooltip: "Zur nächsten Seite",
			nextPagerTooltip: "Gehen Sie zu den nächsten Pager-Elementen",
			previousPageTooltip: "Zurück zur letzten Seit",
			previousPagerTooltip: "Gehen Sie zu vorherigen Pager-Elementen",
			totalItemsInfo: "({0} Beiträge)",
		},
	},
});
// L10n.load({
// 	ar: {
// 		Grid: {
// 			EmptyRecord: "لا يوجد تسجيل لعرضه",
// 			InvalidFilterMessage: "بيانات تصفية غير صالحة",
// 			UnGroup: "انقر هنا لإلغاء الجمع",
// 		},
// 	},
// });

setCulture("ar");
setCurrencyCode("SAR");

function App() {
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
