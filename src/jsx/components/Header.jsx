import { useThemeContext } from "@contexts/ContextProvider";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";

export default function Header() {
	const { toggleSideBar } = useThemeContext();

	return (
		<Box
			sx={{
				borderBottom: "1px solid",
				borderColor: "background.level1",
				boxShadow: "sm",
				position: "sticky",
				top: 0,
				background: "var(--joy-palette-background-surface)",
				zIndex: 2,
			}}
		>
			<IconButton
				onClick={() => toggleSideBar()}
				variant="soft"
				color="primary"
				size="sm"
				sx={{
					border: "1px solid",
					borderColor: "primary.700",
					p: ".5rem",
					m: 1,
					display: {
						md: "none",
					},
					transition: "transform 0.4s, width 0.4s",
				}}
			>
				<DensityMediumIcon />
			</IconButton>
		</Box>
	);
}
