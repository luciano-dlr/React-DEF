import { useReducer } from "react";
import { TodoState } from "../interfaces/interfaces";
import { TodoContext } from "./todoContext";
import { todoReducer } from "./todoReducer";

const INITIAL_STATE: TodoState = {
  todoCount: 0,
  todos: [
    {
      id: "1",
      description: "Recolectar Piedras del Espacio",
      completed: false,
    },
    {
      id: "2",
      description: "Recolectar Piedras de la Tierra",
      completed: false,
    },
  ],
  completed: 0,
  pending: 0,
};

interface TodoProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

  const ToggleTodo = (id: string) => {
    dispatch({ type: "toggleTodo", payload: { id: id } });
  };

  return (
    <TodoContext.Provider value={{ todoState, ToggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
