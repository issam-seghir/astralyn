import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import IconButton from "@mui/joy/IconButton";
import { useColorScheme } from "@mui/joy/styles";
import { useEffect, useState } from "react";

export default function ModeToggle() {
	const { mode, setMode } = useColorScheme();
	const [mounted, setMounted] = useState(false);

	// necessary for server-side rendering
	// because mode is undefined on the server
	useEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted) {
		// eslint-disable-next-line unicorn/no-null
		return null;
	}
	return (
		<IconButton
			color="primary"
			size="sm"
			variant="outlined"
			aria-label="Switch between Dark/White mode"
			onClick={() => {
				setMode(mode === "light" ? "dark" : "light");
			}}
		>
			{mode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
		</IconButton>
	);
}
