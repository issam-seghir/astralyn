import SettingsBar from "@components/SettingsBar";
import IconButton from "@mui/joy/IconButton";
import Tooltip from "@mui/joy/Tooltip";
import { motion } from "framer-motion";
import { memo, useState } from "react";
import { FiSettings } from "react-icons/fi";

function SettingsButton() {
	const [showSettings, setShowSettings] = useState(false);
	return (
		<>
			<Tooltip title="setting" size="md" variant="solid" color="primary" placement="top" arrow>
				<IconButton component={motion.button} whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} variant="soft" color="primary" size="lg" sx={{ zIndex: 999, borderRadius: "50%", p: ".5em", position: "absolute", insetInlineEnd: 4, bottom: 4 }} onClick={() => setShowSettings(() => !showSettings)}>
					<motion.div animate={{ rotate: 360 }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "linear" }}>
						<FiSettings className="icon" />
					</motion.div>
				</IconButton>
			</Tooltip>
			<SettingsBar showSettings={showSettings} />
		</>
	);
}

const MemoizedSettingsButton = memo(SettingsButton);

export default MemoizedSettingsButton;

// export default SettingsButton;
