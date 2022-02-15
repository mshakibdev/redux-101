import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: "counter",
    initialState,
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

//! Action creators are generated for each case reducer function

const store = configureStore({ reducer: counterSlice.reducer });

export default store;

export const counterActions = counterSlice.actions;