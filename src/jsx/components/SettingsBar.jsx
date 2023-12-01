// SettingsSidebar.js
import ModeToggle from "@components/ModeToggle";
import { useThemeContext } from "@contexts/ContextProvider";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { Typography } from "@mui/joy";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import FormLabel from "@mui/joy/FormLabel";
import Radio, { radioClasses } from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Sheet from "@mui/joy/Sheet";

function splitCamelCase(input) {
	return input.replaceAll(/([a-z])([A-Z])/g, "$1 $2");
}
function SettingsSidebar({showSettings}) {
	const {  selectedTheme, setSelectedTheme, language, changeLanguage } = useThemeContext();


	function handleChange(e) {
		setSelectedTheme(e.target.value);
	}
	return (
		<Box
			variant="solid"
			sx={{
				transition: "transform .5s ease",
				width: "40%",
				height: "100%",
				position: "fixed",
				right: 0,
				p: 1,
				zIndex: 1,
				transform: `translateX(${showSettings ? 0 : "100%"})`,
			}}
		>
			<h2>Settings</h2>
			<div>
				<p>Choose a theme:</p>
				<ModeToggle />
			</div>
			<div>
				<RadioGroup
					aria-label="platform"
					value={selectedTheme}
					overlay
					onChange={handleChange}
					name="platform"
					sx={{
						flexDirection: "row",
						gap: 2,
						[`& .${radioClasses.checked}`]: {
							[`& .${radioClasses.action}`]: {
								inset: -1,
								border: "3px solid",
								borderColor: "primary.500",
							},
						},
						[`& .${radioClasses.radio}`]: {
							display: "contents",
							"& > svg": {
								zIndex: 2,
								position: "absolute",
								top: "-8px",
								right: "-8px",
								bgcolor: "background.surface",
								borderRadius: "50%",
							},
						},
					}}
				>
					{["greenEmerald", "default", "pinkFuchsia"].map((value) => (
						<Sheet
							key={value}
							variant="outlined"
							sx={{
								borderRadius: "md",
								boxShadow: "sm",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								gap: 1.5,
								p: 2,
								minWidth: 120,
							}}
						>
							<Radio id={value} value={value} checkedIcon={<CheckCircleRoundedIcon />} />
							<Avatar variant="soft" size="sm" />
							<FormLabel sx={{ textTransform: "capitalize" }} htmlFor={value}>
								{splitCamelCase(value)}
							</FormLabel>
						</Sheet>
					))}
				</RadioGroup>
			</div>

			<div>
				<Typography level="h1"> Choose your language : </Typography>
				<div>
					<label htmlFor="languageSelect">Select Language: </label>
					<select id="languageSelect" value={language.language} onChange={(e) => changeLanguage(e.target.value)}>
						<option value="en">English</option>
						<option value="ar">Arabic</option>
						{/* Add more language options as needed */}
					</select>
				</div>
			</div>
		</Box>
	);
}

export default SettingsSidebar;
