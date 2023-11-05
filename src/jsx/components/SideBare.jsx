import ListItemNested from "@components/ListItemNested";
import ModeToggle from "@components/ModeToggle";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import BrightnessAutoRoundedIcon from "@mui/icons-material/BrightnessAutoRounded";
import CloseIcon from "@mui/icons-material/Close";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswer";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import Chip from "@mui/joy/Chip";
import Divider from "@mui/joy/Divider";
import IconButton from "@mui/joy/IconButton";
import Input from "@mui/joy/Input";
import LinearProgress from "@mui/joy/LinearProgress";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";

export default function SideBare({ show, toggleSideBar }) {

	return (
		<>
			<Box
				sx={{
					display: show ? "block" : "none",
					position: "fixed",
					zIndex: 998,
					top: 0,
					left: 0,
					width: "100vw",
					height: "100vh",
					opacity: "0.5",
					backgroundColor: "var(--joy-palette-background-backdrop)",
					transition: "opacity 0.4s",
					transform: {
						xs: "translateX(0)",
						lg: "translateX(-100%)",
					},
				}}
				onClick={() => toggleSideBar()}
			/>
			<Sheet
				variant="soft"
				sx={{
					display: "flex",
					alignSelf: "stretch",
					justifyContent: "space-between",
					flexDirection: "column",
					width: "15rem",
					flexBasis: "auto",
					px: "1rem",
					py: "1rem",
					position: {
						xs: "fixed",
						md: "unset",
					},
					zIndex: 999,
					inset: 0,
					height: "100dvh",
					transform: {
						xs: show ? "translateX(0)" : "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",
						md: "none",
					},
					transition: "transform 0.4s, width 0.4s",
					borderRight: "1px solid",
					borderColor: "divider",
				}}
			>
				<Box>
					<Box sx={{ display: "flex", gap: 2, alignItems: "center", justifyContent: "center", mb: 3 }}>
						<IconButton variant="soft" color="primary" size="sm">
							<BrightnessAutoRoundedIcon />
						</IconButton>
						<Typography flex={1} level="title-lg">
							Acme Co.
						</Typography>
						<ModeToggle />
					</Box>
					<Input sx={{ mb: 1.5 }} placeholder="Search" startDecorator={<SearchIcon />}></Input>
					<List
						size="md"
						variant="plain"
						sx={{
							"--List-gap": "4px",
							"--ListItem-radius": "7px",
							"--ListItem-minHeight": "40px",
							"--ListItem-paddingY": "5px",
							"--ListItemDecorator-size": "43px",
							"--List-nestedInsetStart": "calc(var(--ListItemDecorator-size))",
						}}
					>
						<ListItem>
							<ListItemButton>
								<ListItemDecorator>
									<HomeIcon />
								</ListItemDecorator>
								<ListItemContent>
									<Typography level="title-sm">Home</Typography>
								</ListItemContent>
							</ListItemButton>
						</ListItem>
						<ListItem>
							<ListItemButton>
								<ListItemDecorator>
									<DashboardIcon />
								</ListItemDecorator>
								<Typography level="title-sm">Dashboard</Typography>
							</ListItemButton>
						</ListItem>
						<ListItem>
							<ListItemButton>
								<ListItemDecorator>
									<ShoppingCartIcon />
								</ListItemDecorator>
								<ListItemContent>
									<Typography level="title-sm">Order</Typography>
								</ListItemContent>
							</ListItemButton>
						</ListItem>
						<ListItemNested title="Tasks" level={"title-sm"} decorator={<AssignmentRoundedIcon />}>
							<ListItem>
								<ListItemButton>
									<Typography level="title-sm">All Tasks</Typography>
								</ListItemButton>
							</ListItem>
							<ListItem>
								<ListItemButton>
									<Typography level="title-sm">Backlog</Typography>
								</ListItemButton>
							</ListItem>
							<ListItem>
								<ListItemButton>
									<Typography level="title-sm">In progress</Typography>
								</ListItemButton>
							</ListItem>
							<ListItem>
								<ListItemButton>
									<Typography level="title-sm">Done</Typography>
								</ListItemButton>
							</ListItem>
						</ListItemNested>
						<ListItem>
							<ListItemButton role="menuitem" component="a" href="#">
								<ListItemDecorator>
									<QuestionAnswerRoundedIcon />
								</ListItemDecorator>
								<ListItemContent>
									<Typography level="title-sm">Messages</Typography>
								</ListItemContent>
								<Chip size="sm" color="primary" variant="solid">
									4
								</Chip>
							</ListItemButton>
						</ListItem>
						<ListItemNested title="Users" level={"title-sm"} decorator={<AssignmentRoundedIcon />}>
							<ListItem>
								<ListItemButton>
									<Typography level="title-sm">My profile</Typography>
								</ListItemButton>
							</ListItem>
							<ListItem>
								<ListItemButton>
									<Typography level="title-sm">Create a new users</Typography>
								</ListItemButton>
							</ListItem>
							<ListItem>
								<ListItemButton>
									<Typography level="title-sm">Roles & permissions</Typography>
								</ListItemButton>
							</ListItem>
						</ListItemNested>
					</List>
				</Box>
				<Box sx={{ mb: 2, display: "flex", flexDirection: "column", gap: 1.5 }}>
					<List
						size="md"
						variant="plain"
						sx={{
							"--List-gap": "4px",
							"--ListItem-radius": "7px",
							"--ListItem-minHeight": "40px",
							"--ListItem-paddingY": "5px",
							"--ListItemDecorator-size": "43px",
							"--ListDivider-gap": "6px",
						}}
					>
						<ListItem>
							<ListItemButton>
								<ListItemDecorator>
									<SupportAgentIcon />
								</ListItemDecorator>
								<ListItemContent>
									<Typography level="title-sm">Support</Typography>
								</ListItemContent>
							</ListItemButton>
						</ListItem>
						<ListItem>
							<ListItemButton>
								<ListItemDecorator>
									<SettingsIcon />
								</ListItemDecorator>
								<Typography level="title-sm">Settings</Typography>
							</ListItemButton>
						</ListItem>
					</List>
					<Card invertedColors variant="soft" color="warning" size="sm" sx={{ boxShadow: "none" }}>
						<Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
							<Typography level="title-sm">Used space</Typography>
							<IconButton size="sm">
								<CloseIcon />
							</IconButton>
						</Box>
						<Typography pr={1.5} level="body-xs">
							Your team has used 80% of your available space. Need more?
						</Typography>
						<LinearProgress color="warning" determinate size="md" value={80} variant="outlined" />
						<CardActions>
							<Button size="sm" color="warning" variant="solid">
								Upgrade Plane
							</Button>
						</CardActions>
					</Card>
					<Divider />
					<Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
						<Avatar variant="outlined" size="sm" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286" />
						<Box sx={{ minWidth: 0, flex: 1 }}>
							<Typography level="title-sm">Siriwat K.</Typography>
							<Typography level="body-xs">siriwatk@test.com</Typography>
						</Box>
						<IconButton size="sm" variant="plain" color="neutral">
							<LogoutRoundedIcon />
						</IconButton>
					</Box>
				</Box>
			</Sheet>
		</>
	);
}
