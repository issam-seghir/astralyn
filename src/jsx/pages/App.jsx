import SettingsBar from "@components/SettingsBar";
import Sidebar from "@components/SideBare";
import { useThemeContext } from "@contexts/ContextProvider";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Sheet from "@mui/joy/Sheet";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import Tooltip from "@mui/joy/Tooltip";
import { useEffect } from "react";
import { FiSettings } from "react-icons/fi";
import { Outlet } from "react-router-dom";

const MyTheme = extendTheme({
	colorSchemes: {
		typography: {
			fontFamily: {
				display: "Noto Sans", // applies to `h1`–`h4`
				body: "Noto Sans", // applies to `title-*` and `body-*`
			},
			h1: {
				// `--joy` is the default CSS variable prefix.
				// If you have a custom prefix, you have to use it instead.
				// For more details about the custom prefix, go to https://mui.com/joy-ui/customization/using-css-variables/#custom-prefix
				background: "linear-gradient(-30deg, var(--joy-palette-primary-700), var(--joy-palette-primary-400))",
				// `Webkit*` properties must come later.
				WebkitBackgroundClip: "text",
				WebkitTextFillColor: "transparent",
			},
			kbd: {
				background: "linear-gradient(to top, var(--joy-palette-background-level2), var(--joy-palette-background-surface))",
				border: "1px solid var(--joy-palette-neutral-outlinedBorder)",
				borderRadius: "var(--joy-radius-xs)",
				boxShadow: "var(--joy-shadow-sm)",
				padding: "0.125em 0.375em",
			},
		},
		light: {
			palette: {
				gradient: {
					primary: "linear-gradient(to top, var(--joy-palette-primary-main), #000)",
				},
				secondary: {
					50: "#fdf2f8",
					100: "#fce7f3",
					200: "#fbcfe8",
					300: "#f9a8d4",
					400: "#f472b6",
					500: "#ec4899",
					600: "#db2777",
					700: "#be185d",
					800: "#9d174d",
					900: "#831843",
					solidBg: "var(--joy-palette-secondary-400)",
					solidActiveBg: "var(--joy-palette-secondary-500)",
					outlinedBorder: "var(--joy-palette-secondary-500)",
					outlinedColor: "var(--joy-palette-secondary-700)",
					outlinedActiveBg: "var(--joy-palette-secondary-100)",
					softColor: "var(--joy-palette-secondary-800)",
					softBg: "var(--joy-palette-secondary-200)",
					softActiveBg: "var(--joy-palette-secondary-300)",
					plainColor: "var(--joy-palette-secondary-700)",
					plainActiveBg: "var(--joy-palette-secondary-100)",
				},
			},
		},
		dark: {
			palette: {
				secondary: {
					50: "#fdf2f8",
					100: "#fce7f3",
					200: "#fbcfe8",
					300: "#f9a8d4",
					400: "#f472b6",
					500: "#ec4899",
					600: "#db2777",
					700: "#be185d",
					800: "#9d174d",
					900: "#831843",
					solidBg: "var(--joy-palette-secondary-400)",
					solidActiveBg: "var(--joy-palette-secondary-500)",
					outlinedBorder: "var(--joy-palette-secondary-700)",
					outlinedColor: "var(--joy-palette-secondary-600)",
					outlinedActiveBg: "var(--joy-palette-secondary-900)",
					softColor: "var(--joy-palette-secondary-500)",
					softBg: "var(--joy-palette-secondary-900)",
					softActiveBg: "var(--joy-palette-secondary-800)",
					plainColor: "var(--joy-palette-secondary-500)",
					plainActiveBg: "var(--joy-palette-secondary-900)",
				},
			},
		},
	},
	components: {
		JoyStack: {
			defaultProps: {
				useFlexGap: true /* uses flexbox gap by default */,
			},
		},
		JoyListItemButton: {
			styleOverrides: {
				root: ({ theme, ownerState }) => ({
					color: "red",
					transition: "color .15s ease-in-out,transform .15s ease-in-out, background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
					boxShadow: theme.shadow.lg,
					"--joy-shadowChannel": theme.vars.palette.primary.mainChannel,
					"--joy-shadowRing": "inset 0 -3px 0 rgba(0 0 0 / 0.24)",
					"&:hover": {
						boxShadow: theme.shadow.lg,
						transform: "translateY(-3px)",
					},
					"&:active": {
						boxShadow: theme.shadow.md,
						transform: "translateY(0px)",
						"--joy-shadowRing": "0 0 #000",
					},
				}),
			},
		},
	},
});
function App() {
	const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useThemeContext();
	useEffect(() => {
		const currentThemeColor = localStorage.getItem("colorMode");
		const currentThemeMode = localStorage.getItem("themeMode");
		if (currentThemeColor && currentThemeMode) {
			setCurrentColor(currentThemeColor);
			setCurrentMode(currentThemeMode);
		}
	}, []);
	return (
		<CssVarsProvider theme={MyTheme}>
			<Sheet variant="plain">
				<Box position={"relative"} sx={{ display: "flex", height: " calc(100dvh - var(--variant-borderWidth) *2 )", alignItems: "stretch" }}>
					<Tooltip title="setting" size="md" variant="solid" placement="top" arrow>
						<IconButton color="success" size="lg" sx={{ zIndex: 2, borderRadius: "50%", p: ".5em", position: "absolute", right: 4, bottom: 4 }} onClick={() => setThemeSettings(!themeSettings)}>
							<FiSettings />
						</IconButton>
					</Tooltip>
					<SettingsBar />
					<Sidebar />
					{/* main content */}
					<Box sx={{ flex: 1 }}>
						<Outlet />
					</Box>
				</Box>
			</Sheet>
		</CssVarsProvider>
	);
}

{
	/* <Header toggleSideBar={toggleSideBar} />
	<SideBare show={show} toggleSideBar={toggleSideBar} /> */
}
{
	/* <MainContent /> */
}
export default App;
