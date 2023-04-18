import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {AppBar, Box, Tab, Tabs} from "@mui/material";
const Header = () => {
    const [value, setValue] = useState(0)
    return ( 
        <AppBar position="sticky" style={{ backgroundColor: '#f50057' }}>
                  <Box display={"flex"} marginLeft="auto" marginRight={"auto"}>
                  <Tabs
                  textColor ="inherit"
                  value ={value}
                  onChange={(e,val) => setValue(val)}
                  >
                         
                  <Tab label="Home" LinkComponent={Link} to="/" /> 
                  <Tab label=" Contact" LinkComponent={Link} to="/Contact" />
                  <Tab label=" Task" LinkComponent={Link} to="/Task" />
                  </Tabs>
                </Box>
        </AppBar>
        

     );
}
 

export default Header;