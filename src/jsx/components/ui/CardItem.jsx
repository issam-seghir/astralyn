import { Card, CardContent, CardCover, Sheet } from "@mui/joy";
import Typography from "@mui/joy/Typography";
import { signChecker } from "@utils/signChecker";
import { useEffect } from "react";

const CardItem = ({ icon, value, percent, label }) => {
	useEffect(() => {
		const tiltCards = document.querySelectorAll(".card");

		tiltCards.forEach((card) => {
			card.addEventListener("mousemove", (e) => {
				const rect = card.getBoundingClientRect();
				const posX = e.clientX - rect.left;
				const posY = e.clientY - rect.top;
				const cardWidth = rect.width;
				const cardHeight = rect.height;

				const tiltX = (cardWidth / 2 - posX) / 10;
				const tiltY = (cardHeight / 2 - posY) / 10;

				card.style.transform = `rotateY(${tiltX}deg) rotateX(${tiltY}deg)`;
			});

			card.addEventListener("mouseleave", () => {
				card.style.transform = "rotateY(0deg) rotateX(0deg)";
			});
		});

		return () => {
			tiltCards.forEach((card) => {
				card.removeEventListener("mousemove", () => {});
				card.removeEventListener("mouseleave", () => {});
			});
		};
	}, []);

	return (
		<Card
			className={"card"}
			component="li"
			color="primary"
			orientation="vertical"
			size="lg"
			variant="outlined"
			sx={{
				transition: ".2s all",
				flex: "30%",
				alignItems: "flex-start",
				"&:hover .card-icon": {
					boxShadow: "md",
				},
				"@container (max-width: 1230px)": {
					alignItems: "center",
				},
				"@media (max-width: 600px)": {
					flex: "45%",
				},
				"@media (max-width: 380px)": {
					flex: "90%",
				},
			}}
		>
			<CardCover sx={{ backdropFilter: "blur(16px) saturate(108%)" }}>
				<svg viewBox="0 0 800 800" opacity="0.92" preserveAspectRatio="xMidYMid slice">
					<defs>
						<filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
							<feGaussianBlur stdDeviation="130" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur>
						</filter>
					</defs>
					<g filter="url(#bbblurry-filter)">
						<ellipse rx="232.5" ry="125" cx="709.9019508561539" cy="34.70028654567864" fill="var(--joy-palette-background-cardSvg)"></ellipse>
						<ellipse rx="232.5" ry="125" cx="73.33563288344146" cy="662.326581865081" fill="var(--joy-palette-background-cardSvg)"></ellipse>
					</g>
				</svg>
			</CardCover>
			<CardContent>
				<Sheet
					sx={{
						gap: 2,
						borderRadius: "50%",
						width: "fit-content",
						transition: ".3s all",
						p: 3,
						mb: 2,
						bgcolor: "var(--joy-palette-background-card)",
					}}
					variant="soft"
					className="card-icon"
					color="primary"
				>
					{icon}
				</Sheet>
				<CardContent>
					<Typography
						sx={{ alignItems: "flex-end" }}
						level="h3"
						endDecorator={
							<Typography dir="ltr" level="title-sm" color={signChecker(percent) ? "success" : "danger"}>
								{percent}
							</Typography>
						}
					>
						{value}
					</Typography>
					<Typography level="title-md">{label}</Typography>
				</CardContent>
			</CardContent>
		</Card>
	);
};

export default CardItem;
