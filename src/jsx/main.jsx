/* eslint-disable unicorn/prefer-query-selector */
import "@fontsource/inter";
import "@scss/main.scss";

import { ContextProvider } from "@contexts/ContextProvider";
import App from "@pages/App";
import Tracker from "@pages/Tracker";
import Scheduler from "@pages/Scheduler";
import Drawer from "@pages/Drawer";
import Customers from "@pages/Customers";
import Ecommerce from "@pages/Ecommerce";
import Editor from "@pages/Editor";
import Employees from "@pages/Employees";
import Error from "@pages/Error";
import Kanban from "@pages/Kanban";
import Analytics from "@pages/Analytics";
import Loading from "@pages/Loading";
import Orders from "@pages/Orders";
import Map from "@pages/Map";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { registerLicense } from "@syncfusion/ej2-base";

// Registering Syncfusion license key
registerLicense("ORg4AjUWIQA/Gnt2VlhhQlVHfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn9Sd0djUX5cdXJcRWBY");


const router = createBrowserRouter(
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
	{ basename: "/React-Project/" }
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ContextProvider>
			<RouterProvider router={router} fallbackElement={<Loading />} />
		</ContextProvider>
	</React.StrictMode>
);
