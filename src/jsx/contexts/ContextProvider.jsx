/* eslint-disable unicorn/consistent-function-scoping */
import { defaultTheme, greenEmeraldTheme, pinkFuchsiaTheme } from "@components/Theme";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const initialState = {
	chat: false,
	cart: false,
	userProfile: false,
	notification: false,
};

export const ContextProvider = ({ children }) => {
	const [selectedTheme, setSelectedTheme] = useState(localStorage.getItem("selectedTheme") || "default");
	const [theme, setTheme] = useState(defaultTheme);
	const [showSettings, setShowSettings] = useState(false);

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

	// const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

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
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};

export const useThemeContext = () => useContext(ThemeContext);
