import { Title } from "./components/Title";
import { TodoList } from "./components/TodoList";
import { TodoProvider } from "./context/todoProvider";
export const Todo = () => {
  return (
    <TodoProvider>
      <Title />
      <h3>Doble Click para completar una tarea</h3>
      <TodoList />
    </TodoProvider>
  );
};
