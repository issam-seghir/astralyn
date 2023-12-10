/* eslint-disable sonarjs/no-duplicate-string */
import { listItemButtonClasses } from "@mui/joy/ListItemButton";
import { extendTheme } from "@mui/joy/styles";

const defaultTheme = extendTheme({
	colorSchemes: {
		dark: {
			palette: {
				background: {
					surface: "linear-gradient(to right top, #0c131f, #0c1623, #0c1927, #0a1b2a, #081e2e)",
					rowSelected: "var(--joy-palette-primary-700)",
					tableBody: "var(--joy-palette-primary-softBg)",
					card: "var(--joy-palette-primary-900)",
					cardSvg: "var(--joy-palette-primary-600)",
					level1: "var(--joy-palette-primary-800)",
					level1x: "var(--joy-palette-primary-800)",
					level1xl: "var(--joy-palette-primary-800)",
					level1xll: "var(--joy-palette-primary-800)",
				},
				text: {
					primary: "var(--joy-palette-primary-200)",
				},
				divider: "rgba(var(--joy-palette-primary-mainChannel) / 15%)",
			},
			shadowChannel: "var(--joy-palette-primary-mainChannel)",
			shadowRing: "inset -1px -3px 3px rgb(0 0 0 / 29%)",
		},
		light: {
			palette: {
				background: {
					rowSelected: "var(--joy-palette-primary-300)",
					tableBody: "var(--joy-palette-primary-softBg)",
					card: "var(--joy-palette-primary-200)",
					cardSvg: "var(--joy-palette-primary-200)",
					level1: "var(--joy-palette-primary-100)",
					level1x: "var(--joy-palette-primary-200)",
					level1xl: "var(--joy-palette-primary-300)",
					level1xll: "var(--joy-palette-primary-400)",
				},
				divider: "rgba(var(--joy-palette-primary-mainChannel) / 35%)",
			},
			shadowChannel: "var(--joy-palette-primary-lightChannel)",
			shadowRing: "inset -1px -3px 3px rgba(var(--joy-palette-primary-mainChannel) / 15%)",
		},
	},
	fontFamily: {
		//applies to `title-*` and `body-*`
		body: "'Inter', var(--joy-fontFamily-fallback)",
		//applies to `h1`–`h4`
		display: "'Inter', var(--joy-fontFamily-fallback)",
	},
	fontSize: {
		xs: "var(--text-xs)",
		sm: "var(--text-sm)",
		md: "var(--text-base)",
		lg: "var(--text-lg)",
		xl: "var(--text-xl)",
		xl2: "var(--text-xl2)",
		xl3: "var(--text-xl3)",
		xl4: "var(--text-xl4)",
		xl5: "var(--text-xl5)",
		xl6: "var(--text-xl6)",
		xl7: "var(--text-xl7)",
		xl8: "var(--text-xl8)",
		xl9: "var(--text-xl9)",
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
		JoySelect: {
			styleOverrides: {
				listbox: ({ theme }) => ({
					boxShadow: "none",
				}),
			},
		},
		JoyRadio: {
			styleOverrides: {
				// fix RTL input  text align problem
				action: ({ theme }) => ({
					textAlign: "start",
				}),
			},
		},
		JoyCheckbox: {
			styleOverrides: {
				// fix RTL input  text align problem
				action: ({ theme }) => ({
					textAlign: "start",
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
				background: {
					rowSelected: "var(--joy-palette-primary-300)",
					tableBody: "var(--joy-palette-primary-softBg)",
					card: "var(--joy-palette-primary-200)",
					cardSvg: "var(--joy-palette-primary-200)",
					level1: "var(--joy-palette-primary-100)",
					level1x: "var(--joy-palette-primary-200)",
					level1xl: "var(--joy-palette-primary-300)",
					level1xll: "var(--joy-palette-primary-400)",
				},
				divider: "rgba(var(--joy-palette-primary-mainChannel) / 35%)",
			},
			shadowChannel: "var(--joy-palette-primary-lightChannel)",
			shadowRing: "inset -1px -3px 3px rgba(var(--joy-palette-primary-mainChannel) / 15%)",
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
				background: {
					rowSelected: "var(--joy-palette-primary-700)",
					tableBody: "#1d6a5a",
					card: "var(--joy-palette-primary-900)",
					cardSvg: "var(--joy-palette-primary-700)",
					level1: "var(--joy-palette-primary-800)",
					level1x: "var(--joy-palette-primary-800)",
					level1xl: "var(--joy-palette-primary-800)",
					level1xll: "var(--joy-palette-primary-800)",
				},
				divider: "rgba(var(--joy-palette-primary-mainChannel) / 15%)",

				text: {
					primary: "var(--joy-palette-primary-200)",
				},
			},
			shadowChannel: "var(--joy-palette-primary-mainChannel)",
			shadowRing: "inset -1px -3px 3px rgb(0 0 0 / 29%)",
		},
	},
	fontSize: {
		xs: "var(--text-xs)",
		sm: "var(--text-sm)",
		md: "var(--text-base)",
		lg: "var(--text-lg)",
		xl: "var(--text-xl)",
		xl2: "var(--text-xl2)",
		xl3: "var(--text-xl3)",
		xl4: "var(--text-xl4)",
		xl5: "var(--text-xl5)",
		xl6: "var(--text-xl6)",
		xl7: "var(--text-xl7)",
		xl8: "var(--text-xl8)",
		xl9: "var(--text-xl9)",
	},
	components: {
		JoyStack: {
			defaultProps: {
				useFlexGap: true /* uses flexbox gap by default */,
			},
		},
		JoySelect: {
			styleOverrides: {
				listbox: ({ theme }) => ({
					boxShadow: "none",
				}),
			},
		},
		JoyRadio: {
			styleOverrides: {
				// Update the styles of MuiRadio-action based on RTL
				action: ({ theme }) => ({
					textAlign: "start",
				}),
			},
		},
		JoyCheckbox: {
			styleOverrides: {
				// Update the styles of MuiRadio-action based on RTL
				action: ({ theme }) => ({
					textAlign: "start",
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
					surface: "var(--joy-palette-primary-50)",
					popup: "var(--joy-palette-primary-50)",
					rowSelected: "var(--joy-palette-primary-300)",
					tableBody: "var(--joy-palette-primary-softBg)",
					card: "var(--joy-palette-primary-200)",
					cardSvg: "var(--joy-palette-primary-200)",
					level1: "var(--joy-palette-primary-100)",
					level1x: "var(--joy-palette-primary-200)",
					level1xl: "var(--joy-palette-primary-300)",
					level1xll: "var(--joy-palette-primary-400)",
				},
				divider: "rgba(var(--joy-palette-primary-mainChannel) / 15%)",
			},
			shadowChannel: "var(--joy-palette-primary-lightChannel)",
			shadowRing: "inset -1px -3px 3px rgba(var(--joy-palette-primary-mainChannel) / 15%)",
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
					rowSelected: "var(--joy-palette-primary-600)",
					tableBody: "var(--joy-palette-primary-900)",
					card: "var(--joy-palette-primary-900)",
					cardSvg: "var(--joy-palette-primary-600)",
					level1: "var(--joy-palette-primary-800)",
					level1x: "var(--joy-palette-primary-800)",
					level1xl: "var(--joy-palette-primary-900)",
					level1xll: "var(--joy-palette-primary-800)",
				},
				divider: "rgba(var(--joy-palette-primary-mainChannel) / 15%)",
				text: {
					primary: "var(--joy-palette-primary-200)",
				},
			},
			shadowChannel: "var(--joy-palette-primary-mainChannel)",
			shadowRing: "inset -1px -3px 3px rgb(0 0 0 / 29%)",
		},
	},
	fontSize: {
		xs: "var(--text-xs)",
		sm: "var(--text-sm)",
		md: "var(--text-base)",
		lg: "var(--text-lg)",
		xl: "var(--text-xl)",
		xl2: "var(--text-xl2)",
		xl3: "var(--text-xl3)",
		xl4: "var(--text-xl4)",
		xl5: "var(--text-xl5)",
		xl6: "var(--text-xl6)",
		xl7: "var(--text-xl7)",
		xl8: "var(--text-xl8)",
		xl9: "var(--text-xl9)",
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
		JoySelect: {
			styleOverrides: {
				listbox: ({ theme }) => ({
					boxShadow: "none",
				}),
			},
		},
		JoyRadio: {
			styleOverrides: {
				// Update the styles of MuiRadio-action based on RTL
				action: ({ theme }) => ({
					textAlign: "start",
				}),
			},
		},
		JoyCheckbox: {
			styleOverrides: {
				// Update the styles of MuiRadio-action based on RTL
				action: ({ theme }) => ({
					textAlign: "start",
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
