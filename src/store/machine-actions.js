import { machineActions } from "./machine-Slice";

export const getMachinesList = () => {
	return async (dispatch) => {
		const fetchMachineData = async () => {
			const response = await fetch("http://localhost:8080/machines");

			if (!response.ok) {
				throw new Error("cant fetch /machines");
			}

			const data = response.json();

			return data;
		};

		try {
			const list = await fetchMachineData();
			// console.log(list);
			dispatch(machineActions.setMachine(list));
			// machineActions.setId(list.id);
			// machineActions.setName(list.name);
			// machineActions.setIpAddress(list.ip_address);
			// machineActions.setHealth(list.health);
		} catch (error) {
			console.log("error fetching", error);
		}
	};
};

// export const updateMachineList = (dispatch) => {


// };
