import { useCounter } from "../hooks/useCounter";

interface CounterHookProps {
  maxCount: number;
}

export const CounterHook = ({ maxCount }: CounterHookProps) => {
  const { elementToAnimate, counter, handleAdd } = useCounter({ maxCount });

  return (
    <>
      <h1>Counter Hook</h1>
      <h2 ref={elementToAnimate}>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
    </>
  );
};
