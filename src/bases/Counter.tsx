import { useState } from "react";

interface CounterProps {
  intitialValue: number;
}

export const Counter = ({ intitialValue }: CounterProps) => {
  const [counter, setCounter] = useState(intitialValue);

  const handleAdd = () => {
    setCounter((prevValue) => prevValue + 1);
  };

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={handleAdd}>+1</button>
    </>
  );
};
