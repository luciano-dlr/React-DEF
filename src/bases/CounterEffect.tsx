import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap-trial";

const MAX_COUNT = 10;

export const CounterEffect = () => {
  const [counter, setCounter] = useState(5);
  const counterElement = useRef<HTMLHeadingElement>(null);

  const handleAdd = () => {
    // counter !== MAX_COUNT
    //   ? setCounter((prevValue) => prevValue + 1)
    //   : alert("Maximo valor 10");

    setCounter((prevValue) => Math.min(prevValue + 1, MAX_COUNT));
  };

  useEffect(() => {
    if (counter < 10) return;

    const tl = gsap.timeline();

    tl.to(counterElement.current, { y: -10, duration: 0.2, ease: "circ.out" });
    tl.to(counterElement.current, {
      y: 0,
      duration: 1,
      ease: "bounce.out",
    });
  }, [counter]);

  return (
    <>
      <h1>Counter Effect</h1>
      <h2 ref={counterElement}>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
    </>
  );
};
