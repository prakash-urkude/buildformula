import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {Box, TextField, Button, Typography, CardMedia} from "@mui/material"

const Form = () => {
    const navigate = useNavigate()
    const [inputs, setInputs]= useState({
        first:"",
        last: "",
        email:"",
        phone:"",
    })

    const handleChange=(e) =>{
      setInputs((prevState) =>({
        ...prevState,
        [e.target.name]:e.target.value
      }))
    }
    const handleSubmit =async(e) => {
      e.preventDefault()

      localStorage.clear()
      
      localStorage.setItem("first", inputs.first)
      localStorage.setItem("last", inputs.last)
      localStorage.setItem("email", inputs.email)
      localStorage.setItem("phone", inputs.phone)

      console.log(localStorage)
                window.alert("Register Sucessfully");
                setInputs({
                  first: "",
                  last: "",
                  email: "",
                  phone: "",
                });
                navigate("/Task");

    }

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
  Register
</Typography>

    <TextField
      placeholder="First Name"
      value={inputs.first}
      type={"text"}
      margin="normal"
      name="first"
      required
      onChange={handleChange}
    />
    <TextField
      placeholder="Last Name"
      value={inputs.last}
      name="last"
      margin="normal"
      type={"text"}
      required
      onChange={handleChange}
    />
    <TextField
      placeholder="Email Id"
      value={inputs.email}
      name="email"
      margin="normal"
      type={"email"}
      required
      onChange={handleChange}
    />
    <TextField
      placeholder="Phone Number"
      value={inputs.phone}
      name="phone"
      margin="normal"
      type={"tel"}
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
     );
}
 
export default Form;