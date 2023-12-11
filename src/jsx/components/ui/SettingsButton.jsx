import SettingsBar from "@jsx/components/ui/SettingsBar";
import IconButton from "@mui/joy/IconButton";
import Tooltip from "@mui/joy/Tooltip";
import { useTheme } from "@mui/joy/styles";
import { memo, useState } from "react";
import { FiSettings } from "react-icons/fi";

function SettingsButton() {
	const [showSettings, setShowSettings] = useState(false);
	const theme = useTheme();
	return (
		<>
			<Tooltip title="setting" size="md" variant="solid" color="primary" placement="top" sx={{ boxShadow: "none" }} arrow>
				<IconButton
					variant="soft"
					color="primary"
					size="lg"
					sx={{
						zIndex: 999,
						borderRadius: "50%",
						p: ".5em",
						position: "fixed",
						insetInlineEnd: 4,
						[theme.breakpoints.up("xs")]: {
							top: 4,
						},
						[theme.breakpoints.up("md")]: {
							bottom: 4,
							top: "initial",
						},
					}}
					onClick={() => setShowSettings(() => !showSettings)}
				>
						<FiSettings className="icon rotate" />
				</IconButton>
			</Tooltip>
			<SettingsBar showSettings={showSettings} setShowSettings={setShowSettings}/>
		</>
	);
}

const MemoizedSettingsButton = memo(SettingsButton);

export default MemoizedSettingsButton;
