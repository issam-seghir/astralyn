/* eslint-disable unicorn/consistent-function-scoping */
import { defaultTheme, greenEmeraldTheme, pinkFuchsiaTheme } from "@jsx/data/themes/theme";
import { enableRtl, setCulture, setCurrencyCode } from "@syncfusion/ej2-base";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { usePreferredLanguage ,useLocalStorage} from "@uidotdev/usehooks";

const ThemeContext = createContext(null);

export const ContextProvider = ({ children }) => {
	const [selectedTheme, setSelectedTheme] = useState(() => {
		// Get Theme from local storage, defaulting to 'default' if not present
		return localStorage.getItem("selectedTheme") || "default";
	});
	const [theme, setTheme] = useState(defaultTheme);
	const [progress, setProgress] = useState(0);
	const [loading, setLoading] = useState(true);
	const [showSnackBar, setShowSnackBar] = useState(false);
	const [show, setSideBar] = useState(false);
	const [status, setStatus] = useLocalStorage("bgBlur", {
		bgBlurAll: false,
		bgBlurOnlyMainPage: false,
	});
	const LineChartInstance = useRef();
	const BarChartInstance = useRef();
	const languageConfigs = useMemo(() => {
		return {
			en: {
				rtl: false,
				culture: "en-US",
				currency: "USD",
			},
			ar: {
				rtl: true,
				culture: "ar-DZ",
				currency: "DZD",
			},
		};
	}, []); // Empty dependency array means it only runs once

	const allowedLanguages = ["ar", "en"];
	// like en , en-US , ar-DZ ....
	// store only : en , ar , ... ( with two letter)
	const userDefaultLanguage = usePreferredLanguage()?.split("-")[0];
	const isValidLanguage = (userDefaultLanguage && allowedLanguages.includes(userDefaultLanguage));
	const defaultLanguage = isValidLanguage  ? userDefaultLanguage : "en";

	const [language, setLanguage] = useState(() => {
		const storedLanguage = localStorage.getItem("language") || defaultLanguage;
		const storedConfig = JSON.parse(localStorage.getItem("languageConfig")) || languageConfigs[storedLanguage];

		return {
			language: storedLanguage,
			languageConfig: storedConfig,
		};
	});

	const changeLanguage = useCallback(
		(event, selectedLanguage) => {
			setShowSnackBar(!showSnackBar);
			const newConfig = languageConfigs[selectedLanguage];
			if (newConfig) {
				localStorage.setItem("language", selectedLanguage);
				localStorage.setItem("languageConfig", JSON.stringify(newConfig));

				setLanguage({
					language: selectedLanguage,
					languageConfig: newConfig,
				});
			}
		},
		[languageConfigs, showSnackBar]
	);

	const handleCheckboxbgBlurAll = useCallback(() => {
		setStatus((prevStatus) => ({
			...prevStatus,
			bgBlurAll: !prevStatus.bgBlurAll,
			bgBlurOnlyMainPage: false, // Reset the second checkbox when the first one changes
		}));
	}, [setStatus]);

	const handleCheckboxbgBlurOnlyMainPagee = useCallback(() => {
		setStatus((prevStatus) => ({
			...prevStatus,
			bgBlurOnlyMainPage: !prevStatus.bgBlurOnlyMainPage,
		}));
	}, [setStatus]);


	const printLineChart = useCallback(() => {
		LineChartInstance.current.print();
	}, [LineChartInstance]);
	const toggleSideBar = useCallback(() => {
		setSideBar((show) => !show);
	}, []);

	const prinBarChartChart = useCallback(() => {
		BarChartInstance.current.print();
	}, [BarChartInstance]);

	useEffect(() => {
		document.documentElement.lang = language.language;
		document.documentElement.dir = language.languageConfig["rtl"] ? "rtl" : "ltr";
		enableRtl(language.languageConfig["rtl"]);
		setCulture(language.languageConfig["culture"]);
		setCurrencyCode(language.languageConfig["currency"]);
	}, [language]);

	useEffect(() => {
		window.addEventListener("load", () => {
			setLoading(false); // Hide the loading screen when the page is fully loaded
		});
	});

	useEffect(() => {
		// Store the selected theme to local storage
		localStorage.setItem("selectedTheme", selectedTheme);
		document.documentElement.dataset.joyTheme = selectedTheme;

		// Set the theme
		switch (selectedTheme) {
			case "greenEmerald": {
				setTheme(greenEmeraldTheme);
				break;
			}
			case "pinkFuchsia": {
				setTheme(pinkFuchsiaTheme);
				break;
			}
			default: {
				setTheme(defaultTheme);
			}
		}
	}, [selectedTheme]);

	// Wrap the context value creation in useMemo
	const contextValue = useMemo(
		() => ({
			theme,
			selectedTheme,
			setSelectedTheme,
			progress,
			setProgress,
			loading,
			setLoading,
			showSnackBar,
			setShowSnackBar,
			show,
			handleCheckboxbgBlurOnlyMainPagee,
			handleCheckboxbgBlurAll,
			status,
			toggleSideBar,
			BarChartInstance,
			LineChartInstance,
			printLineChart,
			prinBarChartChart,
			language,
			changeLanguage,
		}),
		[
			theme,
			selectedTheme,
			setSelectedTheme,
			progress,
			setProgress,
			loading,
			setLoading,
			showSnackBar,
			setShowSnackBar,
			show,
			handleCheckboxbgBlurOnlyMainPagee,
			handleCheckboxbgBlurAll,
			status,
			toggleSideBar,
			BarChartInstance,
			LineChartInstance,
			printLineChart,
			prinBarChartChart,
			language,
			changeLanguage,
		] // Add all dependencies here
	);

	return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useThemeContext = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};
