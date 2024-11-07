import { useTodos } from "../hooks/useTodos";

export const Title = () => {
  const { pendinngTodos } = useTodos();
  return <h1>Tareas Pendientes : {pendinngTodos.length}</h1>;
};
