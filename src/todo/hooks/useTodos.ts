import { useContext } from "react";
import { TodoContext } from "../context/todoContext";

export const useTodos = () => {
  const { todoState, ToggleTodo } = useContext(TodoContext);

  const { todos } = todoState;
  return {
    todos: todos,
    pendinngTodos: todos.filter((todo) => !todo.completed),
    ToggleTodo,
  };
};
