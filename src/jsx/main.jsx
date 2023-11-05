/* eslint-disable unicorn/prefer-query-selector */
import "@fontsource/inter";
import "@scss/main.scss";

// import "@syncfusion/ej2/base/material.scss";
// import "@syncfusion/ej2/calendar/material.scss";
// import "@syncfusion/ej2/drop-down-base/material.scss";
// import "@syncfusion/ej2/drop-down-button/material.scss";
// import "@syncfusion/ej2/drop-down-list/material.scss";
// import "@syncfusion/ej2/drop-down-tree/material.scss";
// import "@syncfusion/ej2/grid/material.scss";
// import "@syncfusion/ej2/input/material.scss";
// import "@syncfusion/ej2/kanban/material.scss";
// import "@syncfusion/ej2/popup/material.scss";
// import "@syncfusion/ej2/rich-text-editor/material.scss";
// import "@syncfusion/ej2/schedule/material.scss";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ContextProvider>
			<App />
		</ContextProvider>
	</React.StrictMode>
);
