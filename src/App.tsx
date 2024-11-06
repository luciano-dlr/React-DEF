import "./App.css";
// import { Counter } from "./bases/Counter";
// import { CounterBy } from "./bases/CounterBy";
// import { CounterEffect } from "./bases/CounterEffect";
import { CounterHook } from "./bases/CounterHook";
import { CounterReducerComponent } from "./counter-reducer/CounterReducer.";
// import { CounterReducerComponent } from "./bases/CounterReducer";

function App() {
  return (
    <>
      <p>Soy React DEF</p>
      <hr />
      {/* <Counter intitialValue={15} />
      <CounterBy intitialValue={5} /> */}
      {/* <CounterEffect /> */}
      <CounterHook maxCount={10} />
      {/* <CounterReducerComponent /> */}
      <CounterReducerComponent />
    </>
  );
}

export default App;
