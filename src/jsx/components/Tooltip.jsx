import { styled } from "@mui/joy/styles";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

const JOYTooltipComponent = styled(TooltipComponent)(({ theme }) => ({
	// padding: "0.5rem 1rem",
	borderRadius: theme.vars.radius.sm,
	// display: "inline-flex",
	// justifyContent: "center",
	// gap: "8px",
	// minHeight: 40,
	fontFamily: theme.vars.fontFamily.body,
	fontSize: theme.vars.fontSize.md,
	fontWeight: theme.vars.fontWeight.md,
	// alignItems: "center",
	border: "1px solid",
	borderColor: theme.vars.palette.neutral.outlinedBorder,
	backgroundColor: theme.vars.palette.background.body,
	boxShadow: theme.vars.shadow.md,
	// [theme.focus.selector]: theme.focus.default,
	// ...theme.variants.plain.neutral,
	// ...(pressed === "false" && {
	// 	"&:hover": theme.variants.plainHover.neutral,
	// 	"&:active": theme.variants.plainActive.neutral,
	// }),
	// ...(pressed === "true" && {
	// 	color: theme.vars.palette.danger.plainColor,
	// 	backgroundColor: theme.vars.palette.background.body,
	// 	boxShadow: theme.shadow.sm.replace(/,/g, ", inset"),
	// }),
}));

export default function Tooltip({ children }) {
	function content() {
		return (
			<span id="tooltipContent">
				<p>
					<strong>Environmentally friendly</strong> or <strong>environment-friendly</strong>, <i>(also referred to as eco-friendly, nature-friendly, and green)</i> are marketing and sustainability terms referring to goods and services, laws, guidelines and policies that inflict reduced,
					minimal, or no harm upon ecosystems or the environment.
				</p>
			</span>
		);
	}
	return (
		<JOYTooltipComponent
			position="Top"
			opensMode={"auto"}
			// target={".btn-setting"}
			sx={{
				width: 50,
				height: 50,
				color: "white",
				display: "block",
				position: "absolute",
				bottom: "4px",
				right: "4px",
			}}
			content={content}
		>
			{children}
		</JOYTooltipComponent>
	);
}
