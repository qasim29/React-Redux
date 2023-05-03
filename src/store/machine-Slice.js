import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	machineList: [],
	id: "",
	name: "",
	ipAddress: "",
	health: 0,
	machines: "",
};

export const machineSlice = createSlice({
	name: "machine",
	initialState,
	reducers: {
		setMachine: (state, action) => {
			state.machineList = action.payload;
		},
		setId: (state, action) => {
			state.id = action.payload;
		},
		setName: (state, action) => {
			state.name = action.payload;
		},
		setIpAddress: (state, action) => {
			state.name = action.payload;
		},
		setHealth: (state, action) => {
			let objIndex = state.machineList.findIndex(
				(obj) => obj.id === action.payload.id
			);
			// console.log(objIndex);
			// console.log("Before update: ", state.machineList[objIndex]);
			state.machineList[objIndex].health=action.payload.health;
			// console.log("after update: ", state.machineList[objIndex]);
		},
		setClearState: (state) => {
			state.name = "";
			state.ipAddress = "";
			state.health = 0;
		},
	},
});

export const machineActions = machineSlice.actions;
export default machineSlice;

// some actions reamining
