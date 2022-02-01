import {createStore} from "redux";

const counterReducer = (state = {counter: 0}, action) => {
	switch (action.type) {
		case "increment":
			return {counter: state.counter + 1};
		case "decrement":
			return {counter: state.counter - 1};

		default:
			return state;
	}
};

const store = createStore(counterReducer);

export default store;

store.subscribe(() => {
	const latestState = store.getState();
	console.log(latestState);
});

store.dispatch({type: "increment"});
store.dispatch({type: "decrement"});
