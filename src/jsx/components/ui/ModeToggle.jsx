import IconButton from "@mui/joy/IconButton";
import { useColorScheme } from "@mui/joy/styles";
import { useEffect, useState } from "react";
import { BiSolidMoon as DarkModeIcon, BiSun as LightModeIcon } from "react-icons/bi";

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
			size="md"
			sx={{borderRadius:"50%"}}
			variant="outlined"
			aria-label="Switch between Dark/White mode"
			onClick={() => {
				setMode(mode === "light" ? "dark" : "light");
			}}
		>
			{mode === "light" ? <LightModeIcon className="icon" /> : <DarkModeIcon className="icon" />}
		</IconButton>
	);
}
