import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoDot } from "react-icons/go";
import { IoIosMore } from "react-icons/io";

// import { Button, LineChart, Pie, SparkLine, Stacked } from "../components";
import { useThemeContext } from "@contexts/ContextProvider";
import { SparklineAreaData, dropdownData, earningData, ecomPieChartData, medicalproBranding, recentTransactions, weeklyStats } from "../data/dummy";
import product9 from "../data/product9.jpg";
import Typography from "@mui/joy/Typography";
import { Box, Sheet, IconButton, Button, Card, CardCover, CardContent, List, ListItem, ListItemContent, Divider } from "@mui/joy";

const DropDown = ({ currentMode }) => (
	<div className="w-28 border-1 border-color px-2 py-1 rounded-md">
		<DropDownListComponent id="time" fields={{ text: "Time", value: "Id" }} style={{ border: "none", color: currentMode === "Dark" && "white" }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
	</div>
);

const Ecommerce = () => {
	const { currentColor, currentMode } = useThemeContext();

	return (
		<Box sx={{ my: 12, display: "flex", flexDirection: "column", gap: 4 }}>
			<Card color="neutral" orientation="vertical" size="md" variant="soft" sx={{ alignItems: "flex-start" }}>
				<CardCover>
					<img src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800" srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x" loading="lazy" alt="" />
				</CardCover>
				<CardContent sx={{ mb: 4 }}>
					<Typography level="title-md">Earnings</Typography>
					<Typography level="h3">$63,448.78</Typography>
				</CardContent>
				<Button size="lg" color="primary" variant="soft">
					Download
				</Button>
			</Card>
			<Box variant="soft" component="ul" sx={{ display: "flex", flexWrap: "wrap", gap: 2, "--Icon-fontSize": "4.5rem" }}>
				<Card component="li" color="neutral" orientation="vertical" size="lg" variant="soft" sx={{ flex: 1, alignItems: "flex-start" }}>
					<CardCover>
						<img src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800" srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x" loading="lazy" alt="" />
					</CardCover>
					<CardContent>
						<Sheet sx={{ gap: 2, borderRadius: "50%", width: "fit-content", p: 2, mb: 2 }} variant="soft" color="primary">
							<BsCurrencyDollar />
						</Sheet>
						<CardContent>
							<Typography level="h3">$63,448.78</Typography>
							<Typography level="title-md">Earnings</Typography>
						</CardContent>
					</CardContent>
				</Card>
				<Card component="li" color="neutral" orientation="vertical" size="lg" variant="soft" sx={{ flex: 1, alignItems: "flex-start" }}>
					<CardCover>
						<img src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800" srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x" loading="lazy" alt="" />
					</CardCover>
					<CardContent>
						<Sheet sx={{ gap: 2, borderRadius: "50%", width: "fit-content", p: 2, mb: 2 }} variant="soft" color="primary">
							<BsCurrencyDollar />
						</Sheet>
						<CardContent>
							<Typography level="h3">$63,448.78</Typography>
							<Typography level="title-md">Earnings</Typography>
						</CardContent>
					</CardContent>
				</Card>
				<Card component="li" color="neutral" orientation="vertical" size="lg" variant="soft" sx={{ flex: 1, alignItems: "flex-start" }}>
					<CardCover>
						<img src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800" srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x" loading="lazy" alt="" />
					</CardCover>
					<CardContent>
						<Sheet sx={{ gap: 2, borderRadius: "50%", width: "fit-content", p: 2, mb: 2 }} variant="soft" color="primary">
							<BsCurrencyDollar />
						</Sheet>
						<CardContent>
							<Typography level="h3">$63,448.78</Typography>
							<Typography level="title-md">Earnings</Typography>
						</CardContent>
					</CardContent>
				</Card>
				<Card component="li" color="neutral" orientation="vertical" size="lg" variant="soft" sx={{ flex: 1, alignItems: "flex-start" }}>
					<CardCover>
						<img src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800" srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x" loading="lazy" alt="" />
					</CardCover>
					<CardContent>
						<Sheet sx={{ gap: 2, borderRadius: "50%", width: "fit-content", p: 2, mb: 2 }} variant="soft" color="primary">
							<BsCurrencyDollar />
						</Sheet>
						<CardContent>
							<Typography level="h3">$63,448.78</Typography>
							<Typography level="title-md">Earnings</Typography>
						</CardContent>
					</CardContent>
				</Card>
			</Box>
			<Sheet variant="outlined" color="primary" component="ul" sx={{ p: 1  }}>
				<Box display={"flex"}>
					<Typography level="h4" flex={1}>
						$63,448.78
					</Typography>
					<List orientation="horizontal" sx={{ flex: 0 }} size="sm">
						<ListItem>
							<ListItemContent>Home</ListItemContent>
							<ListItemContent>Home</ListItemContent>
						</ListItem>
					</List>
				</Box>
				<Box display={"flex"} gap={2}>
					<Card component="li" color="neutral" orientation="vertical" size="lg" variant="soft" sx={{ flex: 1, alignItems: "flex-start" }}>
						<CardContent>
							<CardContent>
								<Typography level="h3">$63,448.78</Typography>
								<Typography level="title-md">Earnings</Typography>
							</CardContent>
							<CardContent>
								<Typography level="h3">$63,448.78</Typography>
								<Typography level="title-md">Earnings</Typography>
							</CardContent>
						</CardContent>
					</Card>
					<Divider orientation="vertical" />
					<Card component="li" color="neutral" orientation="vertical" size="lg" variant="soft" sx={{ flex: 1, alignItems: "flex-start" }}>
						<CardCover>
							<img src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800" srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x" loading="lazy" alt="" />
						</CardCover>
						<CardContent>
							<Sheet sx={{ gap: 2, borderRadius: "50%", width: "fit-content", p: 2, mb: 2 }} variant="soft" color="primary">
								<BsCurrencyDollar />
							</Sheet>
							<CardContent>
								<Typography level="h3">$63,448.78</Typography>
								<Typography level="title-md">Earnings</Typography>
							</CardContent>
						</CardContent>
					</Card>
				</Box>
			</Sheet>

			<Box sx={{ display: "flex", flexWrap: { sm: "wrap", md: "nowrap" }, justifyContent: "center" }}>
				<Box sx={{ height: 44, borderRadius: "sm", width: { sm: 1, lg: 80 }, p: 8, m: 3, backgroundImage: "url('https://i.ibb.co/MkvLDfb/Rectangle-4389.png')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
					<Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
						<div></div>
					</Box>
					<div className="mt-6">{/* <Button color="white" bgColor={currentColor} text="Download" borderRadius="10px" /> */}</div>
				</Box>
				{/* <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
					{earningData.map((item) => (
						<div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
							<button type="button" style={{ color: item.iconColor, backgroundColor: item.iconBg }} className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl">
								{item.icon}
							</button>
							<p className="mt-3">
								<span className="text-lg font-semibold">{item.amount}</span>
								<span className={`text-sm text-${item.pcColor} ml-2`}>{item.percentage}</span>
							</p>
							<p className="text-sm text-gray-400  mt-1">{item.title}</p>
						</div>
					))}
				</div> */}
			</Box>
		</Box>
	);
};

export default Ecommerce;
