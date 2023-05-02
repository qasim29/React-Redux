import { createSlice } from '@reduxjs/toolkit';
// import { dispatch } from './store';
// import { useDispatch } from "react-redux";


const initialState = {
	machineList: [],
	id:	'',
	name: '',
	ipAddress: '',
	health: 0,
	machines: '',
};

export const machineSlice = createSlice({
	name: 'machine',
	initialState,
	reducers: {
		setMachine: (state, action) => {
			console.log(action.payload);
			state.machineList = action.payload;
			console.log(initialState);
			console.log('qasim');
		},
		setId: (state, action) => {
			state.id = action.payload;
			// console.log(initialState);
		},
		setName: (state, action) => {
			state.name = action.payload;
			// console.log(initialState);
		},
		setIpAddress: (state, action) => {
			state.name = action.payload;
		},
		setHealth: (state, action) => {
			state.name = action.payload;
		},
		setClearState: (state) => {
			state.name = '';
			state.ipAddress = '';
			state.health = 0;
			// console.log(initialState);
		},

	},
});

// export const { setName, setIpAddress,setHealth,setMachine } = machineSlice.actions;

export const machineActions = machineSlice.actions;
export default machineSlice;



// some actions reamining