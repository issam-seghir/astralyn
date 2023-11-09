import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const initialState = {
	chat: false,
	cart: false,
	userProfile: false,
	notification: false,
};

export const ContextProvider = ({ children }) => {
	const [screenSize, setScreenSize] = useState();
	const [selectedTheme, setSelectedTheme] = useState(null);
	const [themeSettings, setThemeSettings] = useState(false);
	const [activeMenu, setActiveMenu] = useState(true);
	const [isClicked, setIsClicked] = useState(initialState);

	const setMode = (e) => {
		// setCurrentMode(e.target.value);
		localStorage.setItem("themeMode", e.target.value);
	};

	const setColor = (color) => {
		// setCurrentColor(color);
		localStorage.setItem("colorMode", color);
	};

	const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

	return (
		// eslint-disable-next-line react/jsx-no-constructed-context-values
		<ThemeContext.Provider
			value={{
				selectedTheme,
				setSelectedTheme,
				activeMenu,
				screenSize,
				setScreenSize,
				handleClick,
				isClicked,
				initialState,
				setIsClicked,
				setActiveMenu,
				setMode,
				setColor,
				themeSettings,
				setThemeSettings,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};

export const useThemeContext = () => useContext(ThemeContext);
