/* eslint-disable unicorn/prefer-query-selector */
import "@fontsource/inter";
import "@scss/main.scss";

import { ContextProvider } from "@contexts/ContextProvider";

import { registerLicense } from "@syncfusion/ej2-base";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";

import App from "@jsx/App";
import Error from "@pages/Error";


const Loading = React.lazy(() => import("@pages/Loading"));
const Tracker = React.lazy(() => import("@pages/Tracker"));
const Scheduler = React.lazy(() => import("@pages/Scheduler"));
const Orders = React.lazy(() => import("@pages/Orders"));
const Map = React.lazy(() => import("@pages/Map"));
const Kanban = React.lazy(() => import("@pages/Kanban"));
const Employees = React.lazy(() => import("@pages/Employees"));
const Editor = React.lazy(() => import("@pages/Editor"));
const Ecommerce = React.lazy(() => import("@pages/Ecommerce"));
const Drawer = React.lazy(() => import("@pages/Drawer"));
const Customers = React.lazy(() => import("@pages/Customers"));
const Analytics = React.lazy(() => import("@pages/Analytics"));

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

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ContextProvider>
				<RouterProvider router={router} fallbackElement={<Loading />} />
		</ContextProvider>
	</React.StrictMode>
);
