// SettingsSidebar.js
import ModeToggle from "@components/ModeToggle";
import { useThemeContext } from "@contexts/ContextProvider";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { Typography } from "@mui/joy";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import FormLabel from "@mui/joy/FormLabel";
import Option from "@mui/joy/Option";
import Radio, { radioClasses } from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Select, { selectClasses } from "@mui/joy/Select";
import Sheet from "@mui/joy/Sheet";
import Snackbar from "@mui/joy/Snackbar";
import { MdKeyboardArrowDown } from "react-icons/md";

function splitCamelCase(input) {
	return input.replaceAll(/([a-z])([A-Z])/g, "$1 $2");
}
function SettingsSidebar({ showSettings }) {
	const { selectedTheme, setSelectedTheme, language, changeLanguage, setShowSnackBar, showSnackBar } = useThemeContext();
	const isArabic = language.language === "ar";

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
				insetInlineEnd: 0,
				p: 1,
				zIndex: 998,
				background: "linear-gradient(24deg, #0000009e, transparent)",
				transform: `translateX(${showSettings ? 0 : isArabic ? "-100%" : "100%"})`,
			}}
		>
			<Typography level="h1">{isArabic ? "الإعدادات" : "Settings"} </Typography>
			<div>
				<div>
					<Typography level="h2">{isArabic ? "إختر ثِيــمًا" : "Choose a theme:"}</Typography>
					<ModeToggle />
				</div>
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
				<Typography level="h2">{isArabic ? "إختر اللغة :" : "Select Language :"} </Typography>
				<div>
					<Select
						defaultValue={language.language}
						onChange={changeLanguage}
						indicator={<MdKeyboardArrowDown />}
						sx={{
							width: 240,
							[`& .${selectClasses.indicator}`]: {
								transition: "0.2s",
								[`&.${selectClasses.expanded}`]: {
									transform: "rotate(-180deg)",
								},
							},
						}}
					>
						<Option value="en">{isArabic ? "الإنجليزية" : "English"}</Option>
						<Option value="ar">{isArabic ? "العربية" : "Arabic"}</Option>
					</Select>
				</div>
				<Snackbar
					size="md"
					variant="soft"
					autoHideDuration={4000}
					open={showSnackBar}
					onClose={(event, reason) => {
						if (reason === "clickaway") {
							return;
						}
						setShowSnackBar(false);
					}}
				>
					{isArabic ? "تم تغيير اللغة ⚠: قد لا تعمل بعض الميزات بشكل صحيح حتى تتم إعادة تحميل الصفحة." : "Language Changed ⚠ : Some features may not work properly until the page is reloaded."}
				</Snackbar>
			</div>
		</Box>
	);
}

export default SettingsSidebar;
