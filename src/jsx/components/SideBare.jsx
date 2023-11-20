import ListItemHeaderNested from "@components/ListItemHeaderNested";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/joy/Box";
import Link from "@mui/joy/Link";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Typography from "@mui/joy/Typography";
import { BsJournalText, BsKanbanFill } from "react-icons/bs";
import { FaShoppingCart, FaUserTie } from "react-icons/fa";
import { FaCalendarDays, FaUserGroup } from "react-icons/fa6";
import { HiColorSwatch } from "react-icons/hi";
import { SiShopware } from "react-icons/si";
import { Link as RouterLink } from "react-router-dom";

export default function SideBare({ show, toggleSideBar }) {
	return (
		<>
			{/* Overlay background */}
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
					overflow: "auto",
					backgroundColor: "var(--joy-palette-background-backdrop)",
					transition: "opacity 0.4s",
					transform: {
						xs: "translateX(0)",
						lg: "translateX(-100%)",
					},
				}}
				onClick={() => toggleSideBar()}
			/>
			<Box
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
					transform: {
						xs: show ? "translateX(0)" : "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",
						md: "none",
					},
					transition: "transform 0.4s, width 0.4s",
					borderRight: "1px solid",
					borderColor: "divider",
				}}
			>
				<Box sx={{ display: "flex", gap: 3, p: 1.5 }}>
					<Link component={RouterLink} to="/">
						<SiShopware className="icon" />
					</Link>
					<Typography flex={1} level="title-lg">
						Infinitrix
					</Typography>
				</Box>
				<List
					size="md"
					sx={{
						justifyContent: "space-between",
						"--List-gap": "9px",
						"--ListItem-radius": "7px",
						"--ListItem-minHeight": "40px",
						"--ListItem-paddingY": "5px",
						"--ListItemDecorator-size": "43px",
						"--List-nestedInsetStart": ".5rem",
						".MuiListItem-nested": {
							width: "80%", // Specify the desired width here
						},
					}}
				>
					<ListItemHeaderNested title={"DASHBOARD"}>
						<ListItem>
							<ListItemButton color="primary" component={RouterLink} to="/" underline="none" selected>
								<ListItemDecorator>
									<SiShopware className="icon" />
								</ListItemDecorator>
								<ListItemContent>
									<Typography level="title-sm">Ecommerce</Typography>
								</ListItemContent>
							</ListItemButton>
						</ListItem>
					</ListItemHeaderNested>
					<ListItemHeaderNested title={"PAGES"}>
						<ListItem>
							<ListItemButton component={RouterLink} to="/orders" underline="none">
								<ListItemDecorator>
									<FaShoppingCart className="icon" />
								</ListItemDecorator>
								<Typography level="title-sm">Orders</Typography>
							</ListItemButton>
						</ListItem>
						<ListItem>
							<ListItemButton component={RouterLink} to="/employees" underline="none">
								<ListItemDecorator>
									<FaUserGroup className="icon" />
								</ListItemDecorator>
								<ListItemContent>
									<Typography level="title-sm">Employees</Typography>
								</ListItemContent>
							</ListItemButton>
						</ListItem>
						<ListItem>
							<ListItemButton component={RouterLink} to="/customers" underline="none">
								<ListItemDecorator>
									<FaUserTie className="icon" />
								</ListItemDecorator>
								<ListItemContent>
									<Typography level="title-sm">Customers</Typography>
								</ListItemContent>
							</ListItemButton>
						</ListItem>
					</ListItemHeaderNested>
					<ListItemHeaderNested title={"APPS"}>
						<ListItem>
							<ListItemButton component={RouterLink} to="/calendar" underline="none">
								<ListItemDecorator>
									<FaCalendarDays className="icon" />
								</ListItemDecorator>
								<Typography level="title-sm">Scheduler</Typography>
							</ListItemButton>
						</ListItem>
						<ListItem>
							<ListItemButton component={RouterLink} to="/kanban" underline="none">
								<ListItemDecorator>
									<BsKanbanFill className="icon" />
								</ListItemDecorator>
								<ListItemContent>
									<Typography level="title-sm">Kanban</Typography>
								</ListItemContent>
							</ListItemButton>
						</ListItem>
						<ListItem>
							<ListItemButton component={RouterLink} to="/editor" underline="none">
								<ListItemDecorator>
									<BsJournalText className="icon" />
								</ListItemDecorator>
								<ListItemContent>
									<Typography level="title-sm">Editor</Typography>
								</ListItemContent>
							</ListItemButton>
						</ListItem>
						<ListItem>
							<ListItemButton component={RouterLink} to="/color-picker" underline="none">
								<ListItemDecorator>
									<HiColorSwatch className="icon" />
								</ListItemDecorator>
								<ListItemContent>
									<Typography level="title-sm">Color Picker</Typography>
								</ListItemContent>
							</ListItemButton>
						</ListItem>
					</ListItemHeaderNested>
					<ListItemHeaderNested title={"CHARTS"}>
						<ListItem>
							<ListItemButton component={RouterLink} to="/line" underline="none">
								<ListItemDecorator>
									<DashboardIcon className="icon" />
								</ListItemDecorator>
								<Typography level="title-sm">Line</Typography>
							</ListItemButton>
						</ListItem>
						<ListItem>
							<ListItemButton component={RouterLink} to="/area" underline="none">
								<ListItemDecorator>
									<ShoppingCartIcon className="icon" />
								</ListItemDecorator>
								<ListItemContent>
									<Typography level="title-sm">Area</Typography>
								</ListItemContent>
							</ListItemButton>
						</ListItem>
						<ListItem>
							<ListItemButton component={RouterLink} to="/bar" underline="none">
								<ListItemDecorator>
									<ShoppingCartIcon className="icon" />
								</ListItemDecorator>
								<ListItemContent>
									<Typography level="title-sm">Bar</Typography>
								</ListItemContent>
							</ListItemButton>
						</ListItem>
						<ListItem>
							<ListItemButton component={RouterLink} to="/pie" underline="none">
								<ListItemDecorator>
									<ShoppingCartIcon className="icon" />
								</ListItemDecorator>
								<ListItemContent>
									<Typography level="title-sm">Pie</Typography>
								</ListItemContent>
							</ListItemButton>
						</ListItem>
					</ListItemHeaderNested>
				</List>
			</Box>
		</>
	);
}
