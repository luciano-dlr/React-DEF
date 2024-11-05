import { useState } from "react";

interface CounterByProps {
  intitialValue?: number;
}

interface CounterTypeProps {
  counter: number;
  clicks: number;
}

export const CounterBy = ({ intitialValue = 5 }: CounterByProps) => {
  const [{ counter, clicks }, setCounterState] = useState<CounterTypeProps>({
    counter: intitialValue,
    clicks: 0,
  });

  const handleAdd = (value: number) => {
    setCounterState((prevValue) => ({
      counter: prevValue.counter + value,
      clicks: prevValue.clicks + 1,
    }));
  };

  return (
    <>
      <h1>CounterBy: {counter}</h1>
      <h1>Counter Clicks: {clicks}</h1>
      <button onClick={() => handleAdd(1)}>+1</button>
      <button onClick={() => handleAdd(5)}>5</button>
    </>
  );
};
