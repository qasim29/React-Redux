/* eslint-disable quotes */
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getMachinesList } from "../store/machine-actions";
import { machineActions } from "../store/machine-Slice";
import "./MachinesList.module.css";
import MachinedataRow from "./MachinedataRow";
import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";


const MachinesList = () => {
	const dispatch = useDispatch();
	const machine = useSelector((state) => state.machine);
	const { lastJsonMessage } = useWebSocket("ws://127.0.0.1:1337", {
		onOpen: () => {
			console.log("WebSocket connection established.");
		},
		share: true
	});

	const id = lastJsonMessage?.id || null;
	const health = lastJsonMessage?.health || null;
	if (id && health) {
		setTimeout(() => {
			dispatch(machineActions.setHealth({ id, health })); 
		}, 500);
	}
	// dispatch(updateMachineList());

	useEffect(() => {
		dispatch(getMachinesList());

		return () => {};
	}, [dispatch]);

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
							id={obj.id}
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
