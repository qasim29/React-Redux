/* eslint-disable react/prop-types */
import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getMachinesList } from "../store/machine-actions";
import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";
import { machineActions } from "../store/machine-Slice";
import Health from "./Health";
import classes from "./MachineDetails.module.css";

const MachineDetails = () => {
	const [myState, setMyState] = useState({});
	const dispatch = useDispatch();
	const machine = useSelector((state) => state.machine);
	const params = useParams();
	let data = machine.machineList.find((obj) => obj.id === params.id);
	// console.log(data);
	useEffect(() => {
		dispatch(getMachinesList());
		return () => {
			console.log("delete qasim");
		};
	}, [dispatch]);
	useEffect(() => {
		// console.log(data);
		setMyState(data);
		console.log(data);
		return () => {};
	}, [machine]);

	const { lastJsonMessage } = useWebSocket("ws://127.0.0.1:1337", {
		onOpen: () => {
			console.log("WebSocket connection established.");
		},
		share: true,
	});

	const mid = lastJsonMessage?.id || null;
	const mhealth = lastJsonMessage?.health || null;
	if (mid && mhealth) {
		setTimeout(() => {
			dispatch(machineActions.setHealth({ id: mid, health: mhealth }));
		}, 500);
	}

	return (
		<div className={classes.flexContainer}>
			<div className={classes.childContainer}>
				<h1>{myState?.name}</h1>
				<h3>Update Device</h3>
				<form>
					<label id="input">Name:</label>
					<br></br>
					<input
						type="text"
						placeholder={myState?.name}
						id="input"
					></input>
					<br></br>
					<input type="submit"></input>
				</form>
			</div>
			<div className={classes.childContainer}>
				<div>
					<h1>{myState?.health}</h1>
					<Health data={myState?.health}></Health>
				</div>
				<div>
					<h1>Stats</h1>
					<p>IP Address: {myState?.ip_address}</p>
				</div>
			</div>
		</div>
	);
	// return (
	// 	<div className={classes.flexContainer}>
	// 		<div>
	// 			<h1>{state.name}</h1>
	// 			<h3>Update Device</h3>
	// 			<form>
	// 				<label id="input">Name:</label>
	// 				<input
	// 					type="text"
	// 					placeholder="Machine 1"
	// 					id="input"
	// 				></input>
	// 				<input type="submit"></input>
	// 			</form>
	// 		</div>
	// 		<div>
	// 			<div>
	// 				<h1>{state.health}</h1>
	// 				<Health data={state.health}></Health>
	// 			</div>
	// 			<div>
	// 				<h1>Stats</h1>
	// 				<p>IP Address:{state.ipAddress}</p>
	// 			</div>
	// 		</div>
	// 	</div>
	// );
};

export default MachineDetails;
