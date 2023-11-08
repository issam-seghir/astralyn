import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListSubheader from "@mui/joy/ListSubheader";

const NestedListItem = ({ title, children }) => {
	return (
		<ListItem nested>
			<ListSubheader>{title}</ListSubheader>
			<List>{children}</List>
		</ListItem>
	);
};

export default NestedListItem;
