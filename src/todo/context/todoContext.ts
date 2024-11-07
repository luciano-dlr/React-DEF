import { createContext } from "react";
import { TodoState } from "../interfaces/interfaces";

export type TodoContextProps = {
  todoState: TodoState;
  ToggleTodo: (id: string) => void;
};

// un createContext necesita un valor inicial, se inicia vacio pero Typescript lo necesita tipado
// se especifica que tendra un vlaor de tipo TodoContextProps
export const TodoContext = createContext<TodoContextProps>(
  {} as TodoContextProps
);
