import Box from "@mui/joy/Box";
import { useState } from "react";

export default function Toggler({ defaultExpanded = false, renderToggle, children }) {
	const [open, setOpen] = useState(defaultExpanded);
	return (
		<>
			{renderToggle({ open, setOpen })}
			<Box
				sx={{
					display: "grid",
					gridTemplateRows: open ? "1fr" : "0fr",
					transition: "0.2s ease",
					"& > *": {
						overflow: "hidden",
					},
				}}
			>
				{children}
			</Box>
		</>
	);
}
