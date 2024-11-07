import { Todo } from "../interfaces/interfaces";
import { useTodos } from "../hooks/useTodos";

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  // const { ToggleTodo } = useContext(TodoContext);

  const { ToggleTodo } = useTodos();

  const handleDubleClick = (id: string) => {
    ToggleTodo(id);
  };

  return (
    <li
      style={{
        cursor: "pointer",
        textDecoration: todo.completed ? "line-through" : "",
      }}
      // onDoubleClick={() => handleDubleClick(todo.id)}
      draggable
      onDragEnd={() => handleDubleClick(todo.id)}
    >
      {todo.description}
    </li>
  );
};
