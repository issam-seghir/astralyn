/* eslint-disable unicorn/prefer-query-selector */
import "@fontsource/inter";
import "@scss/main.scss";

import { ContextProvider } from "@contexts/ContextProvider";

// import Loading from "@pages/Loading";

import { registerLicense } from "@syncfusion/ej2-base";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";

// import Analytics from "@pages/Analytics";
import App from "@pages/App";
// import Customers from "@pages/Customers";
// import Drawer from "@pages/Drawer";
// import Ecommerce from "@pages/Ecommerce";
// import Editor from "@pages/Editor";
// import Employees from "@pages/Employees";
import Error from "@pages/Error";
// import Kanban from "@pages/Kanban";
// import Map from "@pages/Map";
// import Orders from "@pages/Orders";
// import Scheduler from "@pages/Scheduler";
// import Tracker from "@pages/Tracker";

const LazyLoading = React.lazy(() => import("@pages/Loading"));
const LazyTracker = React.lazy(() => import("@pages/Tracker"));
const LazyScheduler = React.lazy(() => import("@pages/Scheduler"));
const LazyOrders = React.lazy(() => import("@pages/Orders"));
const LazyMap = React.lazy(() => import("@pages/Map"));
const LazyKanban = React.lazy(() => import("@pages/Kanban"));
const LazyEmployees = React.lazy(() => import("@pages/Employees"));
const LazyEditor = React.lazy(() => import("@pages/Editor"));
const LazyEcommerce = React.lazy(() => import("@pages/Ecommerce"));
const LazyDrawer = React.lazy(() => import("@pages/Drawer"));
const LazyCustomers = React.lazy(() => import("@pages/Customers"));
const LazyAnalytics = React.lazy(() => import("@pages/Analytics"));

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
					element: <LazyEcommerce />,
				},
				{
					path: "ecommerce",
					element: <LazyEcommerce />,
				},
				{
					path: "orders",
					element: <LazyOrders />,
				},
				{
					path: "employees",
					element: <LazyEmployees />,
				},
				{
					path: "customers",
					element: <LazyCustomers />,
				},
				{
					path: "scheduler",
					element: <LazyScheduler />,
				},
				{
					path: "kanban",
					element: <LazyKanban />,
				},
				{
					path: "markdawn-editor",
					element: <LazyEditor />,
				},
				{
					path: "drawer",
					element: <LazyDrawer />,
				},
				{
					path: "analytics",
					element: <LazyAnalytics />,
				},
				{
					path: "tracker",
					element: <LazyTracker />,
				},
				{
					path: "map",
					element: <LazyMap />,
				},
			],
		},
	],
	{ basename: import.meta.env.BASE_URL }
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ContextProvider>
				<RouterProvider router={router} fallbackElement={<LazyLoading />} />
		</ContextProvider>
	</React.StrictMode>
);
