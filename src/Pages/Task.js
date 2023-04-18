import React, {useState,useEffect} from "react";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";

const Task = () => {
    const [todos, setTodos] = useState([]);

    const getAllTodos = () => {
    
      const task = JSON.parse(localStorage.getItem("tasks"));
 
      setTodos(task);
    };
  
    useEffect(() => {
      getAllTodos();
    }, [todos]);

let task = localStorage.getItem("task")
// console.log("task7")
    return ( 
        <div>
        <TaskForm/>
        <div>
        {todos.map((todo) => (
  <TaskCard key={todo.id} id={todo.id} task={todo.name} />
))}
        </div>
        
        </div>

     );
}
 
export default Task;