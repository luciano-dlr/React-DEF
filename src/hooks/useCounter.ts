import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap-trial";

interface useCounterProps {
  maxCount: number;
}

export const useCounter = ({ maxCount }: useCounterProps) => {
  const [counter, setCounter] = useState(5);
  const elementToAnimate = useRef<any>(null);

  const tl = useRef(gsap.timeline());

  const handleAdd = () => {
    setCounter((prevValue) => Math.min(prevValue + 1, maxCount));
  };

  useLayoutEffect(() => {
    if (!elementToAnimate.current) return;

    // Limpiar el timeline antes de definir nuevas animaciones
    tl.current.clear();

    // Configurar las animaciones
    tl.current.to(elementToAnimate.current, {
      y: -10,
      duration: 0.2,
      ease: "circ.out",
    });
    tl.current
      .to(elementToAnimate.current, {
        y: 0,
        duration: 1,
        ease: "bounce.out",
      })
      .pause();
  }, []);

  useEffect(() => {
    tl.current.play(0);
  }, [counter]);

  return { elementToAnimate, counter, handleAdd };
};
