import { extendTheme } from "@mui/joy/styles";


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
});

export default greenEmeraldTheme;




const fluentTheme = extendTheme({
	colorSchemes: {
		light: {
			palette: {
				primary: {
					solidBg: "#0078D4",
					solidHoverBg: "#106EBE",
					solidActiveBg: "#005A9E",
					solidDisabledBg: "#F3F2F1",
					solidDisabledColor: "#A19F9D",
				},
				neutral: {
					outlinedBg: "#fff",
					outlinedColor: "#201F1E",
					outlinedDisabledBg: "#F3F2F1",
					outlinedDisabledColor: "#A19F9D",
					outlinedDisabledBorder: "#C8C6C4",
					outlinedBorder: "#8A8886",
					outlinedHoverBg: "#F3F2F1",
					outlinedHoverBorder: undefined,
					outlinedActiveBg: "#EDEBE9",
				},
				focusVisible: "#323130",
			},
		},
	},
	focus: {
		default: {
			outlineOffset: -1,
			outlineWidth: "1px",
		},
	},
	fontFamily: {
		body: '"Segoe UI Variable", var(--fluent-fontFamily-fallback)',
	},
	components: {
		JoyButton: {
			styleOverrides: {
				root: ({ ownerState }) => ({
					"--Button-iconOffsetStep": 0,
					...(ownerState.variant === "solid" && {
						"&.Mui-focusVisible, &:focus-visible": {
							outlineOffset: "-3px",
							outlineColor: "#fff",
						},
					}),
					...(ownerState.variant === "outlined" && {
						"&.Mui-focusVisible, &:focus-visible": {
							outlineOffset: "-3px",
						},
					}),
					...(ownerState.size === "md" && {
						"--Icon-fontSize": "20px",
						fontSize: "14px",
						fontWeight: 600,
						minHeight: "32px",
						borderRadius: "2px",
						paddingLeft: 20,
						paddingRight: 20,
					}),
				}),
			},
		},
	},
});


