import React from "react";
import MachinesList from "./MachinesList";
import { useParams } from 'react-router-dom';

export default function Machines() {
	const params = useParams();
	return (
		<>
			<MachinesList></MachinesList>
		</>
	);
}
