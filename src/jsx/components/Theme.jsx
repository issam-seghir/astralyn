import { listItemButtonClasses } from "@mui/joy/ListItemButton";
import { extendTheme } from "@mui/joy/styles";

const defaultTheme = extendTheme({
	colorSchemes: {
		dark: {
			palette: {
				background: {
					surface: "linear-gradient(to right top, #0c131f, #0c1623, #0c1927, #0a1b2a, #081e2e)",
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
		JoySheet: {
			styleOverrides: {
				root: ({ theme }) => ({
					background: theme.vars.palette.background.surface,
				}),
			},
		},
		JoyListItemButton: {
			defaultProps: {
				color: "primary",
			},
			styleOverrides: {
				// `ownerState` contains the component props and internal state
				root: ({ theme, ownerState }) => ({
					transition: "color .15s ease-in-out,transform .15s ease-in-out, background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
					"--joy-shadowChannel": theme.vars.palette.primary.mainChannel,
					"--joy-shadowRing": "inset -1px -3px 3px rgb(0 0 0 / 29%)",
					"&:hover": {
						boxShadow: theme.shadow.sm,
						transform: "translateY(-3px)",
					},
					"&:active": {
						boxShadow: theme.shadow.sm,
						transform: "translateY(0px)",
						"--joy-shadowRing": "0 0 #000",
					},
					[`&.${listItemButtonClasses.selected}`]: {
						boxShadow: theme.shadow.sm,
					},
					// add style based on the mode :  the result is `[data-joy-color-scheme="dark"] &`
					[theme.getColorSchemeSelector("light")]: {
						boxShadow: "none",
					},
				}),
			},
		},
	},
});

const greenEmeraldTheme = extendTheme({
	colorSchemes: {
		light: {
			palette: {
				primary: {
					50: "#ecfdf5",
					100: "#d1fae5",
					200: "#a7f3d0",
					300: "#6ee7b7",
					400: "#34d399",
					500: "#10b981",
					600: "#059669",
					700: "#047857",
					800: "#065f46",
					900: "#064e3b",
				},
				neutral: {
					50: "#f8fafc",
					100: "#f1f5f9",
					200: "#e2e8f0",
					300: "#cbd5e1",
					400: "#94a3b8",
					500: "#64748b",
					600: "#475569",
					700: "#334155",
					800: "#1e293b",
					900: "#0f172a",
				},
			},
		},
		dark: {
			palette: {
				neutral: {
					50: "#f9fafb",
					100: "#f3f4f6",
					200: "#e5e7eb",
					300: "#d1d5db",
					400: "#9ca3af",
					500: "#6b7280",
					600: "#4b5563",
					700: "#374151",
					800: "#1f2937",
					900: "#111827",
				},
				primary: {
					50: "#ecfdf5",
					100: "#d1fae5",
					200: "#a7f3d0",
					300: "#6ee7b7",
					400: "#34d399",
					500: "#10b981",
					600: "#059669",
					700: "#047857",
					800: "#065f46",
					900: "#064e3b",
					solidColor: "var(--joy-palette-primary-50)",
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
			defaultProps: {
				color: "primary",
			},
			styleOverrides: {
				// `ownerState` contains the component props and internal state
				root: ({ theme, ownerState }) => ({
					transition: "color .15s ease-in-out,transform .15s ease-in-out, background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
					"--joy-shadowChannel": theme.vars.palette.primary.mainChannel,
					"--joy-shadowRing": "inset 0px -1px 1px rgb(0 0 0 / 5%)",
					"&:hover": {
						transform: "translateY(-3px)",
					},
					"&:active": {
						boxShadow: theme.shadow.sm,
						transform: "translateY(0px)",
					},
					[`&.${listItemButtonClasses.selected}`]: {
						boxShadow: theme.shadow.sm,
					},
					// add style based on the mode :  the result is `[data-joy-color-scheme="dark"] &`
					[theme.getColorSchemeSelector("light")]: {
						boxShadow: "none",
					},
				}),
			},
		},
	},
});

const pinkFuchsiaTheme = extendTheme({
	colorSchemes: {
		light: {
			palette: {
				primary: {
					50: "#fdf4ff",
					100: "#fae8ff",
					200: "#f5d0fe",
					300: "#f0abfc",
					400: "#e879f9",
					500: "#d946ef",
					600: "#c026d3",
					700: "#a21caf",
					800: "#86198f",
					900: "#701a75",
				},
				neutral: {
					50: "#faf5ff",
					100: "#f3e8ff",
					200: "#e9d5ff",
					300: "#d8b4fe",
					400: "#c084fc",
					500: "#a855f7",
					600: "#9333ea",
					700: "#7e22ce",
					800: "#6b21a8",
					900: "#581c87",
					softBg: "var(--joy-palette-primary-200)",
				},
				background: {
					surface: "var(--joy-palette-primary-100)",
					popup: "var(--joy-palette-primary-50)",
				},
			},
		},
		dark: {
			palette: {
				primary: {
					50: "#fdf4ff",
					100: "#fae8ff",
					200: "#f5d0fe",
					300: "#f0abfc",
					400: "#e879f9",
					500: "#d946ef",
					600: "#c026d3",
					700: "#a21caf",
					800: "#86198f",
					900: "#701a75",
				},
				neutral: {
					50: "#f9fafb",
					100: "#f3f4f6",
					200: "#e5e7eb",
					300: "#d1d5db",
					400: "#9ca3af",
					500: "#6b7280",
					600: "#4b5563",
					700: "#374151",
					800: "#1f2937",
					900: "#111827",
					solidBg: "var(--joy-palette-primary-500)",
					softBg: "var(--joy-palette-neutral-800)",
				},
				background: {
					surface: "linear-gradient(to right top, #29162a, #251227, #210e23, #1e0820, #1b011d)",
					// surface: `linear-gradient(90deg, var(--joy-palette-neutral-900) 0%, var(--joy-palette-neutral-700) 46%, var(--joy-palette-neutral-800) 79%)`,
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
		JoySheet: {
			styleOverrides: {
				root: ({ theme }) => ({
					background: theme.vars.palette.background.surface,
				}),
			},
		},
		JoyListItemButton: {
			defaultProps: {
				color: "primary",
			},
			styleOverrides: {
				// `ownerState` contains the component props and internal state
				root: ({ theme, ownerState }) => ({
					transition: "color .15s ease-in-out,transform .15s ease-in-out, background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
					"--joy-shadowChannel": theme.vars.palette.primary.mainChannel,
					"--joy-shadowRing": "inset -1px -3px 3px rgb(0 0 0 / 29%)",
					"&:hover": {
						boxShadow: theme.shadow.sm,
						transform: "translateY(-3px)",
					},
					"&:active": {
						boxShadow: theme.shadow.sm,
						transform: "translateY(0px)",
						"--joy-shadowRing": "0 0 #000",
					},
					[`&.${listItemButtonClasses.selected}`]: {
						boxShadow: theme.shadow.sm,
					},
					// add style based on the mode :  the result is `[data-joy-color-scheme="dark"] &`
					[theme.getColorSchemeSelector("light")]: {
						boxShadow: "none",
					},
				}),
			},
		},
	},
});

export { defaultTheme, greenEmeraldTheme, pinkFuchsiaTheme };

// const MyTheme = extendTheme({
// 	// Every Joy UI CSS variable is prefixed with joy by default.
// 	// cssVarPrefix: 'company',
// 	// or remove it :
// 	// cssVarPrefix: ''
// 	shadow: {
// 		// xs ... xl: "{CSS box-shadow}" defualt,
// 		// xxl: "",
// 	},
// 	typography: {
// 		fontFamily: {
// 			display: "Noto Sans,var(--joy-fontFamily-fallback)", // applies to `h1`–`h4`
// 			body: "Noto Sans,var(--joy-fontFamily-fallback)", // applies to `title-*` and `body-*`
// 		},
// 		h1: {
// 			background: "linear-gradient(-30deg, var(--joy-palette-primary-700), var(--joy-palette-primary-400))",
// 			WebkitBackgroundClip: "text",
// 			WebkitTextFillColor: "transparent",
// 		},
// 		h2: {
// 			background: "linear-gradient(-30deg, var(--joy-palette-primary-700), var(--joy-palette-primary-400))",
// 			WebkitBackgroundClip: "text",
// 			WebkitTextFillColor: "transparent",
// 		},
// 		h3: {
// 			background: "rgba(var(--joy-palette-primary-mainChannel) / 0.72)",
// 		},
// 		kbd: {
// 			background: "var(--joy-palette-gradient-primary)",
// 			border: "1px solid var(--joy-palette-neutral-outlinedBorder)",
// 			borderRadius: "var(--joy-radius-xs)",
// 			boxShadow: "var(--joy-shadow-sm)",
// 			padding: "0.125em 0.375em",
// 		},
// 		heroTitle: {
// 			fontSize: "42px",
// 			lineHeight: "52px",
// 		},
// 		greetingTitle: {
// 			fontSize: "32px",
// 			lineHeight: "40px",
// 		},
// 		pageTitle: {
// 			fontSize: "28px",
// 			lineHeight: "36px",
// 		},
// 	},
// 	colorSchemes: {
// 		light: {
// 			// This creates a 1px box-shadow.
// 			// Customizing the theme's shadow ring will affect all Joy UI components that consume the theme's shadows.
// 			// for only spicific component use :  boxShadow: theme.shadow.md,
// 			shadowRing: "0 0 0 1px rgba(0 0 0 / 0.1)",
// 			// box shadow color (must be on rgb !!)
// 			shadowChannel: "12 12 12",
// 			palette: {
// 				gradient: {
// 					primary: "linear-gradient(to top, var(--joy-palette-primary-main), #000)",
// 				},
// 				secondary: {
// 					50: "#fdf2f8",
// 					100: "#fce7f3",
// 					200: "#fbcfe8",
// 					300: "#f9a8d4",
// 					400: "#f472b6",
// 					500: "#ec4899",
// 					600: "#db2777",
// 					700: "#be185d",
// 					800: "#9d174d",
// 					900: "#831843",
// 					solidBg: "var(--joy-palette-secondary-400)",
// 					solidActiveBg: "var(--joy-palette-secondary-500)",
// 					outlinedBorder: "var(--joy-palette-secondary-500)",
// 					outlinedColor: "var(--joy-palette-secondary-700)",
// 					outlinedActiveBg: "var(--joy-palette-secondary-100)",
// 					softColor: "var(--joy-palette-secondary-800)",
// 					softBg: "var(--joy-palette-secondary-200)",
// 					softActiveBg: "var(--joy-palette-secondary-300)",
// 					plainColor: "var(--joy-palette-secondary-700)",
// 					plainActiveBg: "var(--joy-palette-secondary-100)",
// 				},
// 			},
// 		},
// 		dark: {
// 			palette: {
// 				secondary: {
// 					50: "#fdf2f8",
// 					100: "#fce7f3",
// 					200: "#fbcfe8",
// 					300: "#f9a8d4",
// 					400: "#f472b6",
// 					500: "#ec4899",
// 					600: "#db2777",
// 					700: "#be185d",
// 					800: "#9d174d",
// 					900: "#831843",
// 					solidBg: "var(--joy-palette-secondary-400)",
// 					solidActiveBg: "var(--joy-palette-secondary-500)",
// 					outlinedBorder: "var(--joy-palette-secondary-700)",
// 					outlinedColor: "var(--joy-palette-secondary-600)",
// 					outlinedActiveBg: "var(--joy-palette-secondary-900)",
// 					softColor: "var(--joy-palette-secondary-500)",
// 					softBg: "var(--joy-palette-secondary-900)",
// 					softActiveBg: "var(--joy-palette-secondary-800)",
// 					plainColor: "var(--joy-palette-secondary-500)",
// 					plainActiveBg: "var(--joy-palette-secondary-900)",
// 				},
// 			},
// 		},
// 	},
// 	components: {
// 		JoyStack: {
// 			defaultProps: {
// 				useFlexGap: true /* uses flexbox gap by default */,
// 			},
// 		},
// 		JoyTypography: {
// 			defaultProps: {
// 				level: "bodyText",
// 				// root component for every level
// 				levelMapping: {
// 					heroTitle: "h1", // <h1 level={"heroTitle"}>  text </h1>
// 					greetingTitle: "h1",
// 					pageTitle: "h2",
// 					kdb: "kdb",
// 					bodyText: "p",
// 					"body-lg": "span",
// 				},
// 			},
// 		},
// 		JoyListItemButton: {
// 			defaultProps: {
// 				variant: "outlined",
// 				color: "primary",
// 			},
// 			styleOverrides: {
// 				// `ownerState` contains the component props and internal state
// 				root: ({ theme, ownerState }) => ({
// 					transition: "color .15s ease-in-out,transform .15s ease-in-out, background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
// 					boxShadow: theme.shadow.lg,
// 					"--joy-shadowChannel": theme.vars.palette.primary.mainChannel,
// 					"--joy-shadowRing": "inset 0 -3px 0 rgba(0 0 0 / 0.24)",
// 					"&:hover": {
// 						boxShadow: theme.shadow.lg,
// 						// change opacity of primary color
// 						backgroundColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.1	)`,
// 						transform: "translateY(-3px)",
// 					},
// 					"&:active": {
// 						boxShadow: theme.shadow.md,
// 						transform: "translateY(0px)",
// 						"--joy-shadowRing": "0 0 #000",
// 					},
// 					...(ownerState.variant === "outlined" &&
// 						ownerState.color === "primary" && {
// 							borderStyle: "dashed",
// 						}),
// 					// Change styles based on state :
// 					// The available states are: active, checked, completed, disabled, error, expanded, focused, focusVisible, readOnly, required, selected
// 					[`&.${listItemButtonClasses.selected}`]: {
// 						color: "rgba(255 255 255 / 0.7)",
// 					},
// 					// add new color for the component
// 					...(ownerState.color === "special" && {
// 						color: theme.vars.palette.text.secondary,
// 						backgroundColor: theme.vars.palette.background.level1,
// 					}),
// 					// add new sizes for the component
// 					...(ownerState.size === "xs" && {
// 						"--Icon-fontSize": "1rem",
// 						"--Button-gap": "0.25rem",
// 						minHeight: "var(--Button-minHeight, 1.75rem)",
// 						fontSize: theme.vars.fontSize.xs,
// 						paddingBlock: "2px",
// 						paddingInline: "0.5rem",
// 					}),
// 					// add style based on the mode :  the result is `[data-joy-color-scheme="dark"] &`
// 					[theme.getColorSchemeSelector("light")]: {
// 						boxShadow: "none",
// 					},
// 				}),
// 			},
// 		},
// 		JoySheet: {
// 			styleOverrides: {
// 				root: ({ ownerState, theme }) => ({
// 					// add new variant to the component
// 					...(ownerState.variant === "glass" && {
// 						color: theme.vars.palette.text.primary,
// 						background: "rgba(255, 255, 255, 0.14)",
// 						backdropFilter: "blur(5px)",
// 						border: "1px solid rgba(255, 255, 255, 0.3)",
// 						boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
// 					}),
// 				}),
// 			},
// 		},
// 	},
// });
