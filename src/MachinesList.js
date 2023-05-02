/* eslint-disable quotes */
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getMachinesList } from "./store/machine-actions";
import "./MachinesList.module.css";
import useWebSocket from "react-use-websocket";
import MachinedataRow from "./MachinedataRow";

// import { setMachine } from './store/reducers';

const MachinesList = () => {
	const dispatch = useDispatch();
	const machine = useSelector((state) => state.machine);

	useEffect(() => {
		dispatch(getMachinesList());
	}, [dispatch]);

	// const { lastJsonMessage } = useWebSocket("ws://127.0.0.1:1337", {
	// 	onOpen: () => {
	// 		console.log("WebSocket connection established.");
	// 	},
	// 	share: true,
	// 	filter: false,
	// });
	// const activities = lastJsonMessage;
	// console.log(activities);
	// console.log(machine);
	return (
		<table>
			<tbody>
				<tr>
					<th>Name</th>
					<th>IP Address</th>
					<th>Health</th>
				</tr>
				{machine.machineList.map((obj) => {
					return (
						<MachinedataRow
							key={obj.id}
							name={obj.name}
							ip_address={obj.ip_address}
							health={obj.health}
						/>
					);
				})}
			</tbody>
		</table>
	);
};

export default MachinesList;
