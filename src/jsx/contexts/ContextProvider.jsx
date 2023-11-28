/* eslint-disable unicorn/consistent-function-scoping */
import { defaultTheme, greenEmeraldTheme, pinkFuchsiaTheme } from "@components/Theme";
import { enableRtl, setCulture, setCurrencyCode } from "@syncfusion/ej2-base";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

const ThemeContext = createContext();

export const ContextProvider = ({ children }) => {
	const [showSettings, setShowSettings] = useState(false);
	const [selectedTheme, setSelectedTheme] = useState(() => {
		// Get Theme from local storage, defaulting to 'default' if not present
		return localStorage.getItem("selectedTheme") || "default";
	});
	const [theme, setTheme] = useState(defaultTheme);
	const [progress, setProgress] = useState(0);
	const [loading, setLoading] = useState(true);

	const chartInstance = useRef();
	const languageConfigs = {
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

	const [language, setLanguage] = useState(() => {
		const storedLanguage = localStorage.getItem("language") || "en";
		const storedConfig = JSON.parse(localStorage.getItem("languageConfig")) || languageConfigs[storedLanguage];

		return {
			language: storedLanguage,
			languageConfig: storedConfig,
		};
	});

	const changeLanguage = useCallback(
		(selectedLanguage) => {
			const newConfig = languageConfigs[selectedLanguage];
			console.log("new config :", newConfig);
			if (newConfig) {
				localStorage.setItem("language", selectedLanguage);
				localStorage.setItem("languageConfig", JSON.stringify(newConfig));

				setLanguage({
					language: selectedLanguage,
					languageConfig: newConfig,
				});
			}
		},
		[languageConfigs, setLanguage]
	);

	// function changeLanguage(selectedLanguage) {
	// 	const newConfig = languageConfigs[selectedLanguage];
	// 	console.log("new config :", newConfig);
	// 	if (newConfig) {
	// 		localStorage.setItem("language", selectedLanguage);
	// 		localStorage.setItem("languageConfig", JSON.stringify(newConfig));

	// 		setLanguage({
	// 			language: selectedLanguage,
	// 			languageConfig: newConfig,
	// 		});
	// 	}
	// }

	// function printChart() {
	// 	chartInstance.current.print();
	// }
	const printChart = useCallback(() => {
		chartInstance.current.print();
	}, [chartInstance]);

	useEffect(() => {
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
			showSettings,
			setShowSettings,
			progress,
			setProgress,
			loading,
			setLoading,
			chartInstance,
			printChart,
			language,
			changeLanguage,
		}),
		[theme, selectedTheme, setSelectedTheme, showSettings, setShowSettings, progress, setProgress, loading, setLoading, chartInstance, printChart, language, changeLanguage] // Add all dependencies here
	);

	return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useThemeContext = () => useContext(ThemeContext);
