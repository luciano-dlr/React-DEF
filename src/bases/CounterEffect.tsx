import { useEffect, useState } from "react";
import { gsap } from "gsap-trial";

const MAX_COUNT = 10;

export const CounterEffect = () => {
  const [counter, setCounter] = useState(5);

  const handleAdd = () => {
    // counter !== MAX_COUNT
    //   ? setCounter((prevValue) => prevValue + 1)
    //   : alert("Maximo valor 10");

    setCounter((prevValue) => Math.min(prevValue + 1, MAX_COUNT));
  };

  useEffect(() => {
    if (counter < 10) return;
    gsap.to("h2", { y: -10, duration: 0.2, ease: "sine.out" }).then(() => {
      gsap.to("h2", { y: 0, duration: 0.3, ease: "bounce.out" });
    });
  }, [counter]);

  return (
    <>
      <h1>Counter Effect</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
    </>
  );
};
