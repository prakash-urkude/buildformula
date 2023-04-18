import React, { useState, useEffect } from "react";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";

const Task = () => {
  const [todos, setTodos] = useState([]);

  const getAllTodos = () => {
    const task = JSON.parse(localStorage.getItem("tasks")) || [];
    setTodos(task);
  };

  useEffect(() => {
    getAllTodos();
  }, [todos]);

  return (
    <div>
      <TaskForm />
      <div>
        {todos.map((todo) => (
          <TaskCard title={todo.title} key={todo.id} id={todo.id} task={todo.task} />
        ))}
      </div>
    </div>
  );
};

export default Task;
