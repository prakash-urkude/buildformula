import React, { useState, useEffect } from "react";
import TaskCard from "./TaskCard";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const getAllTodos = () => {
    console.log("getAllTodos");
    const task = JSON.parse(localStorage.getItem("tasks"));
    console.log(task);
    setTodos(task);
  };

  useEffect(() => {
    getAllTodos();
  }, [todos]);
  

  console.log("todos", todos);
  
  return (
    <div>
      {todos.map((todo) => (
  <TaskCard key={todo.id} id={todo.id} task={todo.name} />
))}

    </div>
  );
};

export default Todos;
