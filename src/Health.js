import React from "react";
import classes from "./Health.module.css";

const Health = (props) => {
	// eslint-disable-next-line react/prop-types
	let fluid = " #5cb85c ";
	// eslint-disable-next-line react/prop-types
	if (props.data < 51) {
		fluid = " #D9534F ";
		// eslint-disable-next-line react/prop-types
	} else if (props.data < 71) {
		fluid = " #f0ad4e ";
	}
	// eslint-disable-next-line react/prop-types
	let fill = 100 - props.data;

	return (
		<div
			style={{
				// eslint-disable-next-line react/prop-types
				background:
					"linear-gradient(90deg, " +
					fluid +
					// eslint-disable-next-line react/prop-types
					props.data +
					"%,white " +
					fill +
					"%)",
				padding: "10px",
				marginTop: "5px",
				marginRight: "10px",
				// width:'90%'
			}}
		></div>
	);
};

export default Health;
