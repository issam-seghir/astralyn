import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";

export default function Header({ toggleSideBar }) {
	return (
		<Box sx={{ borderBottom: "1px solid", borderColor: "background.level1", boxShadow: "sm" }}>
			<IconButton
				onClick={() => toggleSideBar()}
				variant="outlined"
				color="neutral"
				size="sm"
				sx={{
					border: "1px solid black",
					p: ".5rem",
					m: 1,
					transition: "transform 0.4s, width 0.4s",
				}}
			>
			DarkMode
			</IconButton>
		</Box>
	);
}
