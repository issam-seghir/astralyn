/* eslint-disable unicorn/prefer-query-selector */
import "@fontsource/inter";
import "@scss/main.scss";

import { ContextProvider } from "@contexts/ContextProvider";

import { registerLicense } from "@syncfusion/ej2-base";
import { StrictMode, lazy } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import App from "@jsx/App";
import Error from "@pages/Error";


const Tracker = lazy(() => import("@pages/Tracker"));
const Scheduler = lazy(() => import("@pages/Scheduler"));
const Orders = lazy(() => import("@pages/Orders"));
const Map = lazy(() => import("@pages/Map"));
const Kanban = lazy(() => import("@pages/Kanban"));
const Employees = lazy(() => import("@pages/Employees"));
const Editor = lazy(() => import("@pages/Editor"));
const Ecommerce = lazy(() => import("@pages/Ecommerce"));
const Drawer = lazy(() => import("@pages/Drawer"));
const Customers = lazy(() => import("@pages/Customers"));
const Analytics = lazy(() => import("@pages/Analytics"));

// Registering Syncfusion license key
registerLicense(import.meta.env.VITE_SYNCFUSION_LICENSE_KEY);
export const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <App />,
			errorElement: <Error />,
			children: [
				{
					index: true,
					element: <Ecommerce />,
				},
				{
					path: "ecommerce",
					element: <Ecommerce />,
				},
				{
					path: "orders",
					element: <Orders />,
				},
				{
					path: "employees",
					element: <Employees />,
				},
				{
					path: "customers",
					element: <Customers />,
				},
				{
					path: "scheduler",
					element: <Scheduler />,
				},
				{
					path: "kanban",
					element: <Kanban />,
				},
				{
					path: "markdawn-editor",
					element: <Editor />,
				},
				{
					path: "drawer",
					element: <Drawer />,
				},
				{
					path: "analytics",
					element: <Analytics />,
				},
				{
					path: "tracker",
					element: <Tracker />,
				},
				{
					path: "map",
					element: <Map />,
				},
			],
		},
	],
	{ basename: import.meta.env.BASE_URL }
);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ContextProvider>
			<RouterProvider router={router} />
		</ContextProvider>
	</StrictMode>
);
