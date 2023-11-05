import Header from "@components/Header";
import SideBare from "@components/SideBare";
import { useStateContext } from "@contexts/ContextProvider";
import Sheet from "@mui/joy/Sheet";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import { useEffect, useState } from "react";

const theme = extendTheme({
	components: {
		JoyStack: {
			defaultProps: {
				useFlexGap: true /* uses flexbox gap by default */,
			},
		},
	},
});
function App() {
	const [show, setShow] = useState(false);
	function toggleSideBar() {
		setShow((show) => !show);
	}

	const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();
	useEffect(() => {
		const currentThemeColor = localStorage.getItem("colorMode");
		const currentThemeMode = localStorage.getItem("themeMode");
		if (currentThemeColor && currentThemeMode) {
			setCurrentColor(currentThemeColor);
			setCurrentMode(currentThemeMode);
		}
	}, []);
	return (
		<CssVarsProvider theme={theme}>
			<Sheet sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, minHeight: "100dvh", backgroundColor: "whitesmoke", alignItems: "stretch" }}>
				<Header toggleSideBar={toggleSideBar} />
				<SideBare show={show} toggleSideBar={toggleSideBar} />
				{/* <MainContent /> */}
			</Sheet>
		</CssVarsProvider>
	);
}

export default App;
