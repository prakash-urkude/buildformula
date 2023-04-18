import React, {useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { unstable_composeClasses } from '@mui/material';

export default function TaskCard({
    id,
    task,

}) {

  
  const taskz = JSON.parse(localStorage.getItem("tasks"))
       

    
   
  const handleDelete = () => {
    
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const filteredTasks = tasks.filter((x) => x.id !== id);
    localStorage.setItem("tasks", JSON.stringify(filteredTasks));
  };

       const handleEdit = async () =>{
        try{
            localStorage.removeItem('task');
        }catch(error){console.log(error)}
       }

   


  return (
    <Card sx={{ maxWidth: 545 }}>
      <CardContent>
         <Typography variant="h5" component="div">
    Task ID: {id}
  </Typography>
  <Typography sx={{ mb: 1.5 }} color="text.secondary">
    Task Name: {task}
  </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small" onClick={handleEdit}>edit</Button>
        <Button variant="contained" size="small" onClick={handleDelete}>delete</Button>
      </CardActions>
    </Card>
  );
}
