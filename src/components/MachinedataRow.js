/* eslint-disable react/prop-types */
import React from "react";
import Health from "./Health";
const MachinedataRow = (props) => {
	return (
		<>
			<tr>
				<td>{props.name}</td>
				<td>{props.ip_address}</td>
				<td>
					<Health data={props.health}></Health>
				</td>
			</tr>
		</>
	);
};

export default MachinedataRow;
