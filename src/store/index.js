import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './rootReducer';
import machineSlice from './machine-Slice';

const store = configureStore({
	reducer: {machine: machineSlice.reducer}
});
// const dispatch = useDispatch();
export default store;

// this file is ok 