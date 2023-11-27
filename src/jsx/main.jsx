/* eslint-disable unicorn/prefer-query-selector */
import "@fontsource/inter";
import "@scss/main.scss";

import { ContextProvider } from "@contexts/ContextProvider";
import App from "@pages/App";
import Area from "@pages/Area";
import Bar from "@pages/Bar";
import Scheduler from "@pages/Scheduler";
import ColorPicker from "@pages/ColorPicker";
import Customers from "@pages/Customers";
import Ecommerce from "@pages/Ecommerce";
import Editor from "@pages/Editor";
import Employees from "@pages/Employees";
import Error from "@pages/Error";
import Kanban from "@pages/Kanban";
import Line from "@pages/Line";
import Loading from "@pages/Loading";
import Orders from "@pages/Orders";
import Pie from "@pages/Pie";
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
					path: "color-picker",
					element: <ColorPicker />,
				},
				{
					path: "line",
					element: <Line />,
				},
				{
					path: "area",
					element: <Area />,
				},
				{
					path: "bar",
					element: <Bar />,
				},
				{
					path: "pie",
					element: <Pie />,
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
