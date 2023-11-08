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
	const [currentColor, setCurrentColor] = useState("#03C9D7");
	const [currentMode, setCurrentMode] = useState("Light");
	const [themeSettings, setThemeSettings] = useState(false);
	const [activeMenu, setActiveMenu] = useState(true);
	const [isClicked, setIsClicked] = useState(initialState);

	const setMode = (e) => {
		setCurrentMode(e.target.value);
		localStorage.setItem("themeMode", e.target.value);
	};

	const setColor = (color) => {
		setCurrentColor(color);
		localStorage.setItem("colorMode", color);
	};

	const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

	return (
		// eslint-disable-next-line react/jsx-no-constructed-context-values
		<ThemeContext.Provider value={{ currentColor, currentMode, activeMenu, screenSize, setScreenSize, handleClick, isClicked, initialState, setIsClicked, setActiveMenu, setCurrentColor, setCurrentMode, setMode, setColor, themeSettings, setThemeSettings }}>{children}</ThemeContext.Provider>
	);
};

export const useThemeContext = () => useContext(ThemeContext);
