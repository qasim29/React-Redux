import React from "react";
import { Link } from "react-router-dom";

const RootLayout = () => {
	return (
		<div className="App">
			<header className="App-header">
				<img
					alt="logo"
					height="272"
					width="800"
					src="https://i.imgur.com/jcvsFKh.png"
				/>
			</header>

			<nav className="App-nav">
				<Link to="/">Home</Link>
				<Link to="/machines">Machines</Link>
			</nav>
		</div>
	);
};

export default RootLayout;
