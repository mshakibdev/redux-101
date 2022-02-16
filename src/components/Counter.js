import {useDispatch, useSelector} from "react-redux";
import { counterActions } from "../store/counterSlice";
import classes from "./Counter.module.css";

const Counter = () => {
	const count = useSelector((state) => state.counter.counter);
	const show = useSelector((state) => state.counter.showCounter);
	const dispatch = useDispatch();

	const incrementHandler = () => {
		dispatch(counterActions.increment());
	};
	const decrementHandler = () => {
		dispatch(counterActions.decrement());
	};
	const increaseHandler = () => {
		dispatch(counterActions.increase(5));
	};

	const toggleCounterHandler = () => {
		dispatch(counterActions.toggle());
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>

			<div>
				<button onClick={incrementHandler}>Increment</button>
				<button onClick={increaseHandler}>Increment by 5</button>
				<button onClick={decrementHandler}>Decrement</button>
			</div>

			{show && <div className={classes.value}>{count}</div>}

			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
