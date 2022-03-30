import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import "./styles/tailwind.css";
import App from "./App";
import { AuthContextProvider } from "./context/auth-context";

ReactDOM.render(
	<React.StrictMode>
		<AuthContextProvider>
			<App />
		</AuthContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
