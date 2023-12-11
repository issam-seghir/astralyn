import ModeToggle from "@jsx/components/ui/ModeToggle";
import { useThemeContext } from "@contexts/ContextProvider";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { Badge, Chip, Typography, Button, Checkbox } from "@mui/joy";
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
import { HiColorSwatch } from "react-icons/hi";
import { useState } from "react";
import { splitCamelCase } from "@jsx/utils/splitCamelCase";

function SettingsSidebar({ showSettings, setShowSettings }) {
	const { selectedTheme, setSelectedTheme, language, changeLanguage, setShowSnackBar, showSnackBar, handleCheckboxbgBlurOnlyMainPagee, handleCheckboxbgBlurAll, status } = useThemeContext();
	const isArabic = language.language === "ar";
	const isSmallDevice = useMediaQuery("only screen and (max-width : 380px)");

	function handleChange(e) {
		setSelectedTheme(e.target.value);
	}


	return (
		<>
			{/* Overlay background */}
			<Box
				sx={{
					display: showSettings ? "block" : "none",
					position: "fixed",
					zIndex: 998,
					top: 0,
					left: 0,
					width: "100vw",
					height: "100vh",
					opacity: "0.5",
					overflow: "auto",
					backgroundColor: "var(--joy-palette-background-backdrop)",
					transition: "opacity 0.4s",
					transform: {
						xs: "translateX(0)",
						lg: "translateX(-100%)",
					},
				}}
				onClick={() => setShowSettings(() => !showSettings)}
			/>
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
					borderInlineStart: "1px solid",
					borderColor: "divider",
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
						{isArabic ? "تسجيل الخروج" : "Sign Out"}
					</Button>
				</Box>
				<Box sx={{ display: "flex", alignItems: "flex-start", flexDirection: "column", gap: 2 }}>
					<Typography level="h2">{isArabic ? ": الإعدادات" : "Settings :"} </Typography>
					<Typography level="h3">{isArabic ? "إختر اللغة :" : "Select The Language :"} </Typography>
					<Select
						defaultValue={language.language}
						variant="outlined"
						color="primary"
						onChange={changeLanguage}
						indicator={<MdKeyboardArrowDown />}
						sx={{
							boxShadow: "none",
							width: 240,
							[`& .${selectClasses.indicator}`]: {
								transition: "0.2s",
								[`&.${selectClasses.expanded}`]: {
									transform: "rotate(-180deg)",
								},
							},
						}}
					>
						<Option
							sx={{
								boxShadow: "none",
							}}
							value="en"
						>
							{isArabic ? "الإنجليزية" : "English"}
						</Option>
						<Option value="ar">{isArabic ? "العربية" : "Arabic"}</Option>
					</Select>
					<Typography level="h3">{isArabic ? "إختر ثِيــمًا" : "Choose a Theme:"}</Typography>
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
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									gap: 1.5,
									p: 2,
									minWidth: 120,
								}}
							>
								<Radio id={value} value={value} checkedIcon={<CheckCircleRoundedIcon />} />
								<HiColorSwatch />
								<FormLabel sx={{ textTransform: "capitalize" }} htmlFor={value}>
									{splitCamelCase(value)}
								</FormLabel>
							</Sheet>
						))}
					</RadioGroup>
					<Typography level="h3">{isArabic ? "تأثيرات إضافية :" : "Additional  Effects :"}</Typography>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: 2,
							width: isSmallDevice? "fit-content": 300,
							"& > div": { p: 2, borderRadius: "md", display: "flex" },
						}}
					>
						<Sheet variant="outlined" color="primary">
							<Badge
								anchorOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								size="sm"
								badgeContent={"new"}
								badgeInset="-15%"
								color="primary"
							>
								<Checkbox checked={status.bgBlurAll} onChange={handleCheckboxbgBlurAll} overlay label={isArabic ? "خلفية تأثير قوس قزح" : "rainbow blurring background"} />
							</Badge>
						</Sheet>
						<Sheet variant="outlined">
							<Checkbox checked={status.bgBlurOnlyMainPage} disabled={!status.bgBlurAll} onChange={handleCheckboxbgBlurOnlyMainPagee} label={isArabic ? "فقط للصفحات (استبعاد الشريط الجانبي)" : "only for pages (exclude sidebar)"} overlay />
						</Sheet>
					</Box>
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
		</>
	);
}

export default SettingsSidebar;
