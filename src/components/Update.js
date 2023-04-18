import React, {useState, useEffect} from "react";
import {Box, TextField, Button, Typography, CardMedia} from "@mui/material"
import { useNavigate, useParams } from "react-router-dom";
   
const Update = () => {
  const [inputs, setInputs] = useState({task:"", title:""});

    const id = useParams().id;
    const navigate = useNavigate();
console.log(inputs)

useEffect(() => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const task = tasks.find((x) => x.id === id);
  if (task) {
    setInputs(task);
  }
}, [id]);


const handleChange = (e) => {
  setInputs((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
  }));
};
console.log(inputs)
const handleSubmit = (e) => {
  e.preventDefault();
  try {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = tasks.map((x) =>
      x.id !== id ? { ...x, title: inputs.title, task: inputs.task } : x
    );
    console.log(updatedTasks)
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    navigate("/Task");
  } catch (error) {
    console.log(error);
  }
};
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
    Update
  </Button>
</Box>

</Box>



        </form>
      </>
    )
}
 
export default Update;