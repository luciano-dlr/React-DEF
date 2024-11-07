import "./App.css";
// import { Counter } from "./bases/Counter";
// import { CounterBy } from "./bases/CounterBy";
// import { CounterEffect } from "./bases/CounterEffect";
import { CounterHook } from "./bases/CounterHook";
import { CounterReducerComponent } from "./counter-reducer/CounterReducer.";
import { Todo } from "./todo/Todo";
// import { CounterReducerComponent } from "./bases/CounterReducer";

function App() {
  return (
    <>
      <p>Soy React DEF</p>
      <hr />
      <CounterHook maxCount={10} />
      <CounterReducerComponent />
      <Todo />
    </>
  );
}

export default App;
