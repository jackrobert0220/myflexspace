import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/HomePage";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
	//browser router helps keep UI in sync with the URLS, and best practice to wrap BrowserRouter at the highest level in the application (for us this is index.js~)
	<BrowserRouter>
		<React.StrictMode>
			<Home />
		</React.StrictMode>
	</BrowserRouter>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
