/* eslint-disable react/prop-types */
import React from "react";
import "./Health.module.css";

const Health = (props) => {

	let fluid = " #5cb85c ";
	if (props.data < 51) {
		fluid = " #D9534F ";
	} else if (props.data < 71) {
		fluid = " #f0ad4e ";
	}
	let fill = props.data?.toString() + "%";
	// console.log(fill);
	return (
		<div>
			<div
				style={{ backgroundColor: fluid, width: fill, height: "20px" }}
			></div>
		</div>
	);
};

export default Health;
