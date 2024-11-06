import { useReducer } from "react";

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

type CounterAction =
  | {
      type: "IncreaseBy";
      payload: { value: number };
    }
  | { type: "reset" };

const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  const { changes, counter } = state;

  switch (action.type) {
    case "reset":
      return {
        counter: 0,
        previous: 0,
        changes: 0,
      };
    case "IncreaseBy":
      return {
        counter: counter + action.payload.value,
        previous: state.counter,
        changes: changes + 1,
      };

    default:
      return state;
  }
};

export const CounterReducerComponent = () => {
  const [{ counter, previous, changes }, dispatch] = useReducer(
    counterReducer,
    INITIAL_STATE
  );

  const handleResetValues = () => {
    dispatch({ type: "reset" });
  };

  const handleIncrease = (value: number) => {
    dispatch({
      type: "IncreaseBy",
      payload: { value },
    });
  };

  return (
    <>
      <h1>Counter Reducer:</h1>

      <button onClick={handleResetValues}>Reset</button>
      <button onClick={() => handleIncrease(1)}>+1</button>
      <button onClick={() => handleIncrease(5)}>+5</button>
      <button onClick={() => handleIncrease(10)}>+10</button>
      <p>
        counter:{counter},previous:{previous},changes:{changes}
      </p>
    </>
  );
};
