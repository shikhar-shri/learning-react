import React, { useContext } from "react";
import TodoItem from "./ToDoItem";
import ToDoContext from "../context/ToDoContext";

function TodoItems() {
  const { todos } = useContext(ToDoContext);
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id} className="w-full">
          <TodoItem todo={todo} />
        </div>
      ))}
    </>
  );
}

export default TodoItems;
