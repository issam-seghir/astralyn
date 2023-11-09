import SettingsBar from "@components/SettingsBar";
import Sidebar from "@components/SideBare";
import { useThemeContext } from "@contexts/ContextProvider";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import { listItemButtonClasses } from "@mui/joy/ListItemButton";
import Sheet from "@mui/joy/Sheet";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import Tooltip from "@mui/joy/Tooltip";
import { useEffect } from "react";
import { FiSettings } from "react-icons/fi";
import { Outlet } from "react-router-dom";

const MyTheme = extendTheme({
	// Every Joy UI CSS variable is prefixed with joy by default.
	// cssVarPrefix: 'company',
	// or remove it :
	// cssVarPrefix: ''
	shadow: {
		// xs ... xl: "{CSS box-shadow}" defualt,
		// xxl: "",
	},
	typography: {
		fontFamily: {
			display: "Noto Sans,var(--joy-fontFamily-fallback)", // applies to `h1`–`h4`
			body: "Noto Sans,var(--joy-fontFamily-fallback)", // applies to `title-*` and `body-*`
		},
		h1: {
			background: "linear-gradient(-30deg, var(--joy-palette-primary-700), var(--joy-palette-primary-400))",
			WebkitBackgroundClip: "text",
			WebkitTextFillColor: "transparent",
		},
		h2: {
			background: "linear-gradient(-30deg, var(--joy-palette-primary-700), var(--joy-palette-primary-400))",
			WebkitBackgroundClip: "text",
			WebkitTextFillColor: "transparent",
		},
		h3: {
			background: "rgba(var(--joy-palette-primary-mainChannel) / 0.72)",
		},
		kbd: {
			background: "var(--joy-palette-gradient-primary)",
			border: "1px solid var(--joy-palette-neutral-outlinedBorder)",
			borderRadius: "var(--joy-radius-xs)",
			boxShadow: "var(--joy-shadow-sm)",
			padding: "0.125em 0.375em",
		},
		heroTitle: {
			fontSize: "42px",
			lineHeight: "52px",
		},
		greetingTitle: {
			fontSize: "32px",
			lineHeight: "40px",
		},
		pageTitle: {
			fontSize: "28px",
			lineHeight: "36px",
		},
	},
	colorSchemes: {
		light: {
			// This creates a 1px box-shadow.
			// Customizing the theme's shadow ring will affect all Joy UI components that consume the theme's shadows.
			// for only spicific component use :  boxShadow: theme.shadow.md,
			shadowRing: "0 0 0 1px rgba(0 0 0 / 0.1)",
			// box shadow color (must be on rgb !!)
			shadowChannel: "12 12 12",
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
		JoyTypography: {
			defaultProps: {
				level: "bodyText",
				// root component for every level
				levelMapping: {
					heroTitle: "h1", // <h1 level={"heroTitle"}>  text </h1>
					greetingTitle: "h1",
					pageTitle: "h2",
					kdb: "kdb",
					bodyText: "p",
					"body-lg": "span",
				},
			},
		},
		JoyListItemButton: {
			defaultProps: {
				variant: "outlined",
				color: "primary",
			},
			styleOverrides: {
				// `ownerState` contains the component props and internal state
				root: ({ theme, ownerState }) => ({
					transition: "color .15s ease-in-out,transform .15s ease-in-out, background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
					boxShadow: theme.shadow.lg,
					"--joy-shadowChannel": theme.vars.palette.primary.mainChannel,
					"--joy-shadowRing": "inset 0 -3px 0 rgba(0 0 0 / 0.24)",
					"&:hover": {
						boxShadow: theme.shadow.lg,
						// change opacity of primary color
						backgroundColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.1	)`,
						transform: "translateY(-3px)",
					},
					"&:active": {
						boxShadow: theme.shadow.md,
						transform: "translateY(0px)",
						"--joy-shadowRing": "0 0 #000",
					},
					...(ownerState.variant === "outlined" &&
						ownerState.color === "primary" && {
							borderStyle: "dashed",
						}),
					// Change styles based on state :
					// The available states are: active, checked, completed, disabled, error, expanded, focused, focusVisible, readOnly, required, selected
					[`&.${listItemButtonClasses.selected}`]: {
						color: "rgba(255 255 255 / 0.7)",
					},
					// add new color for the component
					...(ownerState.color === "special" && {
						color: theme.vars.palette.text.secondary,
						backgroundColor: theme.vars.palette.background.level1,
					}),
					// add new sizes for the component
					...(ownerState.size === "xs" && {
						"--Icon-fontSize": "1rem",
						"--Button-gap": "0.25rem",
						minHeight: "var(--Button-minHeight, 1.75rem)",
						fontSize: theme.vars.fontSize.xs,
						paddingBlock: "2px",
						paddingInline: "0.5rem",
					}),
					// add style based on the mode :  the result is `[data-joy-color-scheme="dark"] &`
					[theme.getColorSchemeSelector("light")]: {
						boxShadow: "none",
					},
				}),
			},
		},
		JoySheet: {
			styleOverrides: {
				root: ({ ownerState, theme }) => ({
					// add new variant to the component
					...(ownerState.variant === "glass" && {
						color: theme.vars.palette.text.primary,
						background: "rgba(255, 255, 255, 0.14)",
						backdropFilter: "blur(5px)",
						border: "1px solid rgba(255, 255, 255, 0.3)",
						boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
					}),
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
		<CssVarsProvider theme={MyTheme} defaultMode="system">
			<Sheet variant="plain">
				<Box position={"relative"} sx={{ display: "flex", height: " calc(100dvh - var(--variant-borderWidth) *2 )", alignItems: "stretch" }}>
					<Tooltip title="setting" size="md" varia	nt="solid" placement="top" arrow>
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
