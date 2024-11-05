import "./App.css";
import { Counter } from "./bases/Counter";
import { CounterBy } from "./bases/CounterBy";
import { CounterEffect } from "./bases/CounterEffect";

function App() {
  return (
    <>
      <p>Soy React DEF</p>
      <hr />
      <Counter intitialValue={15} />
      <CounterBy intitialValue={5} />
      <CounterEffect />
    </>
  );
}

export default App;
