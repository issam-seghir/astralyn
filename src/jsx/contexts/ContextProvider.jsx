/* eslint-disable unicorn/consistent-function-scoping */
import { defaultTheme, greenEmeraldTheme, pinkFuchsiaTheme } from "@components/Theme";
import { enableRtl, setCulture, setCurrencyCode } from "@syncfusion/ej2-base";
import { createContext, useContext, useEffect, useRef, useState } from "react";

const ThemeContext = createContext();

const initialState = {
	chat: false,
	cart: false,
	userProfile: false,
	notification: false,
};

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

	function changeLanguage(selectedLanguage) {
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
	}

	function printChart() {
		chartInstance.current.print();
	}

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

	return (
		// eslint-disable-next-line react/jsx-no-constructed-context-values
		<ThemeContext.Provider
			value={{
				theme,
				selectedTheme,
				setSelectedTheme,
				initialState,
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
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useThemeContext = () => useContext(ThemeContext);
