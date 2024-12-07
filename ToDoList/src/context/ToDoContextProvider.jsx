import React, { useEffect } from "react";
import ToDoContext from "./ToDoContext";
import { useState } from "react";

const ToDoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    // {
    //   id: 1,
    //   todo: "Todo Message",
    //   isCompleted: false,
    // },
  ]);

  const addTodo = (todo) => {
    setTodos((prevToDo) => [...prevToDo, { id: Date.now(), ...todo }]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prevToDo) =>
      prevToDo.map((todoObj) => (todoObj.id === id ? todo : todoObj))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevToDo) => prevToDo.filter((todoObj) => todoObj.id !== id));
  };

  const toggleComplete = (id) => {
    console.log("toggle complete called", id);
    setTodos((prevToDo) =>
      prevToDo.map((todoObj) =>
        todoObj.id === id
          ? { ...todoObj, isCompleted: !todoObj.isCompleted }
          : todoObj
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <ToDoContext.Provider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export default ToDoContextProvider;
