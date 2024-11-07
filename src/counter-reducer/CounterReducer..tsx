import { useReducer } from "react";

import { CounterState } from "./interfaces/interfaces";
import { doIncreaseBy, doReset } from "./actions/actions";
import { counterReducer } from "./state/counterReducer";

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

export const CounterReducerComponent = () => {
  const [{ counter, previous, changes }, dispatch] = useReducer(
    counterReducer,
    INITIAL_STATE
  );

  const handleResetValues = () => {
    dispatch(doReset());
  };

  const handleIncrease = (value: number) => {
    dispatch(doIncreaseBy(value));
  };

  return (
    <>
      <h1>Counter Reducer Segmentado:</h1>
      <h2>counter: {counter}</h2>
      <h2>previous: {previous}</h2>
      <h2>changes: {changes}</h2>
      <button onClick={handleResetValues}>Reset</button>
      <button onClick={() => handleIncrease(1)}>+1</button>
      <button onClick={() => handleIncrease(5)}>+5</button>
      <button onClick={() => handleIncrease(10)}>+10</button>
    </>
  );
};
