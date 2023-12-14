/* eslint-disable unicorn/prefer-query-selector */
import "@fontsource/inter";
import "@scss/main.scss";

import { ContextProvider } from "@contexts/ContextProvider";

import Loading from "@pages/Loading";

import { registerLicense } from "@syncfusion/ej2-base";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Analytics from "@pages/Analytics";
import App from "@pages/App";
import Customers from "@pages/Customers";
import Drawer from "@pages/Drawer";
import Ecommerce from "@pages/Ecommerce";
import Editor from "@pages/Editor";
import Employees from "@pages/Employees";
import Error from "@pages/Error";
import Kanban from "@pages/Kanban";
import Map from "@pages/Map";
import Orders from "@pages/Orders";
import Scheduler from "@pages/Scheduler";
import Tracker from "@pages/Tracker";

const LazyEcommerce = React.lazy(() => import("@pages/Ecommerce"));

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
					element: <LazyEcommerce />,
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
