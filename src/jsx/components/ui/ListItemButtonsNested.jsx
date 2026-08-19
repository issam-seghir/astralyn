import Toggler from "@jsx/components/ui/Toggler";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Typography from "@mui/joy/Typography";
import { MdKeyboardArrowDown } from "react-icons/md";

const NestedListItem = ({ children, title, level, decorator }) => {
	return (
		<ListItem nested>
			<Toggler
				renderToggle={({ open, setOpen }) => (
					<ListItemButton onClick={() => setOpen(!open)}>
						<ListItemDecorator>{decorator}</ListItemDecorator>
						<ListItemContent>
							<Typography level={level}>{title}</Typography>
						</ListItemContent>
						<MdKeyboardArrowDown style={{ transform: open ? "rotate(180deg)" : undefined }} />
					</ListItemButton>
				)}
			>
				<List>{children}</List>
			</Toggler>
		</ListItem>
	);
};

export default NestedListItem;
