/* eslint-disable react/prop-types */
import electricNetworkData from "@data/map/electric-network-algeria.geojson.json";
import L from "leaflet";
import "leaflet-geosearch/dist/geosearch.css";
import "leaflet.fullscreen/Control.FullScreen.css";
import "leaflet.fullscreen/Control.FullScreen.js";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import { Circle, CircleMarker, LayersControl, MapContainer, Marker, Popup, TileLayer, useMap, useMapEvent } from "react-leaflet";

import { useThemeContext } from "@contexts/ContextProvider";
import Seo from "@jsx/components/Hemlet/Seo";
import { useMediaQuery } from "@uidotdev/usehooks";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";

const ComponentResize = () => {
	const map = useMap();

	setTimeout(() => {
		map.invalidateSize();
	}, 0);

	return null;
};

const GeoJSONData = () => {
	const map = useMap();

	// Load and display GeoJSON data
	const geoJSONLayer = L.geoJSON(electricNetworkData, {
		style: {
			color: "red", // Set your desired style properties
			weight: 3,
		},
		onEachFeature: (feature, layer) => {
			if (feature.properties && feature.properties.name) {
				layer.bindPopup(feature.properties.name); // Attach a popup with feature properties
			}
		},
	}).addTo(map);

	return null;
};

const HomeButton = () => {
	const map = useMap();

	useEffect(() => {
		if (!map) return;

		const customControler = L.Control.extend({
			options: {
				position: "topleft",
			},

			onAdd: function () {
				const btn = L.DomUtil.create("button", "back-to-home");
				btn.title = "rotation";
				btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.451L16 6.031 0 18.451v-5.064L16 .967l16 12.42zM28 18v12h-8v-8h-8v8H4V18l12-9z"></path></svg>';

				btn.addEventListener("click", function () {
					map.flyToBounds([position], { maxZoom: 7 });
					document.body.classList.remove("show-button-home");
				});

				return btn;
			},
		});

		const existingControl = document.querySelector(".back-to-home");
		if (!existingControl) {
			map.addControl(new customControler());
		}
	}, [map]);

	useMapEvent({
		dragend() {
			const { lat: latD, lng: lngD } = map.getCenter();
			const { lat, lng } = map.getCenter();

			const checkEqualArrays = [lat, lng] !== [latD.toFixed(5) * 1, lngD.toFixed(5) * 1];

			document.body.classList[checkEqualArrays ? "add" : "remove"]("show-button-home");
		},
	});

	return null;
};

const SearchField = () => {
	const provider = new OpenStreetMapProvider();

	const searchControl = new GeoSearchControl({
		provider: provider,
		style: "bar",
	});

	const map = useMap();
	useEffect(() => {
		map.addControl(searchControl);
		return () => map.removeControl(searchControl);
	}, []);

	return null;
};

const center = [51.505, -0.09];
const position = [36.0339, 1.6596];
const africaCenter = [0, 20];

const fillBlueOptions = { fillColor: "blue" };
const redOptions = { color: "red" };

const layers = [
	{
		name: "Osm Mapnik",
		attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a>OpenStreetMap</a> contributors',
		url: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
	},
	{
		name: "CartoDB",
		attribution: '&copy; <a href="http://cartodb.com/attributions">CartoDB</a> contributors',
		url: "https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png",
	},
];

const Map = () => {
	const { language } = useThemeContext();
	const isArabic = language.language === "ar";
	const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
	const title = isArabic ? "أسترالين | الخريطة" : "Astralyn | Map";
	const description = isArabic ? "خريطة تعرض مواقع العملاء" : "map displaying the customer's locations";
	const name = isArabic ? "أسترالين" : "Astralyn";
	const type = "website";
	return (
		<>
			<Seo title={title} description={description} name={name} type={type} />
			<MapContainer
				style={{
					height: "100dvh",
					width: "100%",
					borderRadius: "1rem",
				}}
				fullscreenControl={true}
				fullscreenControlOptions={{ position: "topleft" }}
				center={position}
				zoom={7}
				minZoom={3}
				scrollWheelZoom={true}
			>
				<ComponentResize />
				<TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
				<GeoJSONData />
				<Marker position={position}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
				<LayersControl position="topright">
					{layers.map((layer, index) => {
						return (
							<LayersControl.BaseLayer key={index} checked={index === 0 ? true : false} name={layer.name}>
								<TileLayer attribution={layer.attribution} url={layer.url} />
							</LayersControl.BaseLayer>
						);
					})}
				</LayersControl>
				<HomeButton />
				<SearchField />
				<Circle center={center} pathOptions={fillBlueOptions} radius={200} />
				<CircleMarker center={position} pathOptions={redOptions} radius={20}>
					<Popup>Popup in CircleMarker</Popup>
				</CircleMarker>
			</MapContainer>
		</>
	);
};

export default Map;
