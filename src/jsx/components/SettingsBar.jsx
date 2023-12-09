import ModeToggle from "@components/ModeToggle";
import { useThemeContext } from "@contexts/ContextProvider";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { Badge, Chip, Typography, Button } from "@mui/joy";
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
import { useMediaQuery } from "@uidotdev/usehooks";


function splitCamelCase(input) {
	return input.replaceAll(/([a-z])([A-Z])/g, "$1 $2");
}
function SettingsSidebar({ showSettings }) {
	const { selectedTheme, setSelectedTheme, language, changeLanguage, setShowSnackBar, showSnackBar } = useThemeContext();
	const isArabic = language.language === "ar";
	const isSmallDevice = useMediaQuery("only screen and (max-width : 380px)");

	function handleChange(e) {
		setSelectedTheme(e.target.value);
	}
	return (
		<Sheet
			sx={{
				transition: "transform .5s ease",
				width: { xs: "100%", sm: "fit-content" },
				height: "100%",
				position: "fixed",
				overflowY: "auto",
				overflowX: "hidden",
				insetInlineEnd: 0,
				py: 3,
				px: 5,
				zIndex: 998,
				transform: `translateX(${showSettings ? 0 : isArabic ? "-100%" : "100%"})`,
			}}
		>
			<ModeToggle />
			<Box sx={{ display: "flex", alignItems: "center", textAlign: "center", flexDirection: "column", gap: 1, mb: 5 }}>
				<Badge badgeInset="14%" size="lg" color="success">
					<Avatar src="https://i.imgur.com/8uk5u6F.png" sx={{ "--Avatar-size": "7rem" }} />
				</Badge>
				<Chip
					size="sm"
					variant="soft"
					color="primary"
					sx={{
						mt: -2,
						mb: 1,
						border: "3px solid",
						borderColor: "background.surface",
					}}
				>
					PRO
				</Chip>
				<Typography level="title-lg">Issam Seghir</Typography>
				<Button variant="soft" sx={{ mt: 2 }}>
					Sign Out
				</Button>
			</Box>
			<Box sx={{ display: "flex", alignItems: "flex-start", flexDirection: "column", gap: 2 }}>
				<Typography level="h2">{isArabic ? ": الإعدادات" : "Settings :"} </Typography>
				<Typography level="h3">{isArabic ? "إختر اللغة :" : "Select The Language :"} </Typography>
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
				<Typography level="h3">{isArabic ? "إختر ثِيــمًا" : "Choose a theme:"}</Typography>
				<RadioGroup
					aria-label="platform"
					value={selectedTheme}
					overlay
					onChange={handleChange}
					name="platform"
					sx={{
						flexDirection: isSmallDevice ? "column" : "row",
						flexWrap: "wrap",
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
			</Box>
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
		</Sheet>
	);
}

export default SettingsSidebar;
