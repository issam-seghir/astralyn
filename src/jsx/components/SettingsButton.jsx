// SettingsSidebar.js
import { useThemeContext } from "@contexts/ContextProvider";
import IconButton from "@mui/joy/IconButton";
import Tooltip from "@mui/joy/Tooltip";
import { motion } from "framer-motion";
import { FiSettings } from "react-icons/fi";
import { memo } from "react";
import SettingsBar from "@components/SettingsBar";

function SettingsButton() {
	const { showSettings, setShowSettings } = useThemeContext();

	return (
		<>
			<Tooltip title="setting" size="md" variant="solid" color="primary" placement="top" arrow>
				<IconButton component={motion.button} whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} variant="soft" color="primary" size="lg" sx={{ zIndex: 2, borderRadius: "50%", p: ".5em", position: "absolute", right: 4, bottom: 4 }} onClick={() => setShowSettings(() => !showSettings)}>
					<motion.div animate={{ rotate: 360 }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "linear" }}>
						<FiSettings className="icon" />
					</motion.div>
				</IconButton>
			</Tooltip>
							<SettingsBar />
		</>

	);
}

const MemoizedSettingsButton = memo(SettingsButton);

export default MemoizedSettingsButton;

// export default SettingsButton;
