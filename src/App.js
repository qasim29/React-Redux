import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Machines from "./components/Machines";
import RootLayout from "./RootLayout";
import "./App.css";
import MachinesList from "./components/MachinesList";
import {
	createBrowserRouter,
	// createRoutesFromElements,
	RouterProvider,
	// Route,
} from "react-router-dom";
import Health from "./components/Health";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		// errorElement: <ErrorPage />,
		children: [
			{ path: "/", element: <RootLayout /> },
			{ path: "/products", element: <Machines /> },
			{ path: "/products/:productId", element: <Health/> },
		],
	},
]);

const App = () => {
	return (
		<RouterProvider router={router}/>
		// <Router>
		// 		<Switch>
		// 			<Route path="/machines">
		// 				<Machines />
		// 			</Route>
		// 			<Route path="/machines/:pid">
		// 				<MachinesList></MachinesList>
		// 			</Route>
		// 		</Switch>
		// </Router>
	);
};

export default App;
