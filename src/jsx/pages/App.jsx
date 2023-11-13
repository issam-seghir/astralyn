/* eslint-disable unicorn/prefer-number-properties */
import SettingsBar from "@components/SettingsBar";
import Sidebar from "@components/SideBare";
import { useThemeContext } from "@contexts/ContextProvider";
import Box from "@mui/joy/Box";
import GlobalStyles from "@mui/joy/GlobalStyles";
import IconButton from "@mui/joy/IconButton";
import Sheet from "@mui/joy/Sheet";
import { CssVarsProvider } from "@mui/joy/styles";
import Tooltip from "@mui/joy/Tooltip";
import Loading from "@pages/Loading";
import { motion } from "framer-motion";
import { FiSettings } from "react-icons/fi";
import { Outlet } from "react-router-dom";

function App() {
	const { showSettings, setShowSettings, theme, loading } = useThemeContext();

	return (
		<CssVarsProvider theme={theme} defaultMode="system">
			{/* style for icons library's */}
			<GlobalStyles
				styles={{
					"svg.icon": {
						color: "var(--Icon-color)",
						margin: "var(--Icon-margin)",
						fontSize: "var(--Icon-fontSize, 20px)",
						width: "0.75em",
						height: "0.75em",
					},
				}}
			/>

			{loading ? (
				<Loading />
			) : (
				<Sheet variant="plain">
					<Box position={"relative"} sx={{ display: "flex", height: " calc(100dvh - var(--variant-borderWidth) *2 )", alignItems: "stretch" }}>
						<Tooltip title="setting" size="md" variant="solid" color="primary" placement="top" arrow>
							<IconButton component={motion.button} whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} variant="soft" color="primary" size="lg" sx={{ zIndex: 2, borderRadius: "50%", p: ".5em", position: "absolute", right: 4, bottom: 4 }} onClick={() => setShowSettings(!showSettings)}>
								<motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }}>
									<FiSettings className="icon"/>
								</motion.div>
							</IconButton>
						</Tooltip>
						<SettingsBar />
						<Sidebar />
						{/* main content */}
						<Box sx={{ flex: 1, mx: 2,overflow:"auto" }}>
							<Outlet />
						</Box>
					</Box>
				</Sheet>
			)}
		</CssVarsProvider>
	);
}

{
	/* <Header toggleSideBar={toggleSideBar} />
	<SideBare show={show} toggleSideBar={toggleSideBar} /> */
}

export default App;
