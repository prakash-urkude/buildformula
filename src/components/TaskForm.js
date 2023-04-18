import React, {useState} from "react";
import {Box, TextField, Button, Typography, CardMedia} from "@mui/material"

const TaskForm = () => {
    
  const [inputs, setInputs] = useState({
    task: "",
    title:"",
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      
      const existingTasks = await JSON.parse(localStorage.getItem("tasks")) || [];
  
      const newTask = {
        id: Date.now(), 
        title:inputs.title,
        name: inputs.task,
        
      };
  
      
      existingTasks.push(newTask);
      await localStorage.setItem("tasks", JSON.stringify(existingTasks));
  
      window.alert("Task Added.");
      console.log(localStorage)
      setInputs({
        task: "",
        title:"",
      });
    } catch (error) {
      console.log(error);
      
    }
  };
  
      const handleChange=(e) =>{
        setInputs((prevState) =>({
          ...prevState,
          [e.target.name]:e.target.value
        }))}

        // console.log("form46")
        // const task = JSON.parse(localStorage.getItem("tasks"))
        // console.log(task)     

    return ( 
        <>
          <form onSubmit={handleSubmit}>
          <Box
  display="flex"
  alignItems="center"
  padding={10}
//   height="100vh"
>
  <Box
  
    display="flex"
    width={500}
    flexDirection="column"
    padding={3}
    borderRadius={5}
    backgroundColor= "white"
  >
    <Typography variant="h5" fontWeight="bold" padding="2%" color="gray" sx={{ marginBottom: 2 }}>
  Task
</Typography>

<TextField
      placeholder="Title"
      value={inputs.title}
      name="title"
      margin="normal"
      type="text"
      required
      onChange={handleChange}
    />
    <TextField
      placeholder="Task"
      value={inputs.task}
      name="task"
      margin="normal"
      type="text"
      required
      onChange={handleChange}
    />
    <Button
      type="submit"
      sx={{ borderRadius: 3, marginTop: 3 }}
      variant="contained"
      color="primary"
    >
      Submit
    </Button>
  </Box>

</Box>

  

          </form>
        </>
     )
    }
    
export default TaskForm;