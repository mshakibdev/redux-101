import {configureStore, createSlice} from "@reduxjs/toolkit";

const initialCounterState = {counter: 0, showCounter: true};

const counterSlice = createSlice({
	name: "counter",
	initialState: initialCounterState,
	reducers: {
		increment: (state) => {
			state.counter += 1;
		},
		decrement: (state) => {
			state.counter -= 1;
		},
		increase: (state, action) => {
			state.counter += action.payload;
		},
		toggle: (state) => {
			state.showCounter = !state.showCounter;
		},
	},
});

const initialAuthState = {
	isAuthenticated: false,
};
const authSlice = createSlice({
	name: "authentication",
	initialState: initialAuthState,
	reducers: {
		login: (state) => {
			state.isAuthenticated = true;
		},
		logout: (state) => {
			state.isAuthenticated = false;
		},
	},
});

const store = configureStore({
	reducer: {counter: counterSlice.reducer, auth: authSlice.reducer},
});
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
