/* eslint-disable react/prop-types */
import React from "react";
import Health from "./Health";
import { Link } from "react-router-dom";

const MachinedataRow = (props) => {
	return (
		<>
			<tr>
				<td>
					<Link
						style={{
							textDecoration: "inherit",
							color: "inherit",
							cursor: "auto"
						}}
						to={'/machines/'+props.id}
					>
						<p>{props.name}</p>
					</Link>
				</td>
				<td>{props.ip_address}</td>
				<td>
					<Health data={props.health}></Health>
				</td>
			</tr>
		</>
	);
};

export default MachinedataRow;
