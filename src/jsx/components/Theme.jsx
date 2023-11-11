/* eslint-disable sonarjs/no-duplicate-string */
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

