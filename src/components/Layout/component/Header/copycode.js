import {
    AppBar,
    Avatar,
    InputBase,
    Toolbar,
    Typography,
    styled,
    TextField,
    Button,
    Box,
    Stack,
    Container,
    IconButton,
    Chip,
  
  } from "@mui/material";
  import React from "react";
  import SearchIcon from '@mui/icons-material/Search';
  import About from "./About";
  import Project from "./Project";
  import Profile from "./Profile";
  import Home from "./Home";
  import theme from "../theme";
  import "../assets/Navbar.css"
   import avatar from"../assets/img/customer.png"
  
   import { Switch, Route, Routes, Link, NavLink, redirect } from "react-router-dom";
  import Dashboard from "./Dashboard";
    
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "center",
    backgroundColor: "white",
    color: "#000",
     
  });
  
  const Links = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    marginLeft:"50px",
    width: "350px",
    height: "19px",
    backgroundColor: "#fff",
    color: "#000",
    fontSize:"18px",
   
  });
  const Search = styled("div")(() => ({
    backgroundColor: "gray",
    color:"white",
    padding: "0 10px",
     height: "28px",
    
    width: "270px",
    boxShadow: "0.5 0.5 0.5 0.5 0.5",
    marginTop: "10px",
    position: "relative",
     
  }));
  
  const Avatars = styled(Chip)(({ theme }) => ({
    paddingTop:0,
    paddingBottom:0,
    paddingRight:"90px",
  }));
  
  
  
  const Icons_Container = styled(IconButton)(({ theme }) => ({
    backgroundColor: "skyblue",
     
    width: "30px",
    height: "29px",
    marginRight:"20px",
   
     position: "absolute",
     left: "680px",
     top:"57%",
     transform: "translateY(-50%)",
     "&:hover":{
      backgroundColor: "skyblue",
      borderRadius:"29px",
     },
  }));
  
  const Findhub = styled(Typography)(({ theme }) => ({
    marginLeft: "",
    fontWeight:"bold",
    
    
  }));
  const Searching = styled(Box)(({ theme }) => ({
    // display:"flex",
    // marginLeft: "120px",
    // width:"280px",
    // height:"50px",
     
   
     
     
  }));
  
  
  
  function  Navbar()  {
    return (
       
        <div id='Container' > 
          {/* Findhub */}
         <div id="FindHub">
         <h1 id="Find">Find</h1>
  
          <h1 id="Hub">Hub</h1>
         </div>
          
          
          
     
  
          
          
  {/* Thanh Search */}
  
          <Searching id='Search_Container' >
  <div id='Search_Bar'>
  
             <div id='Search_Input'>
           <InputBase position="relative" placeholder="Search here..." sx={{
             
              }} />
           </div>
                         
          
  
            <button id='Search_Button'> 
            
            <SearchIcon />
              
          </button>
           
             
             
   </div>
            
                   
          </Searching>
  {/* Links + Avatars */}
  <div id='list_link' >
  <ul  >
    <Link  to="/Dashboard" id='list_item'> Dashboard </Link>
    <Link to="/About" id='list_item' >About</Link> */
    /* <redirect from='/Navbar.jsx' to='/Dashboard.js' />
    <li id='list_item'> <a href="/" >Home</a></li>
    <li id='list_item'> <a href="#" >About</a></li>
    <li id='list_item'> <a href="#" >Project</a></li>
    <li id='list_item'> <a href="#" >Profile</a></li>      
          </ul>
  
           <div>
           
           </div>
           <Routes>
            <Route path="/Dashboard" element={<Dashboard/>}>
  
            </Route>
           </Routes>
       
          
  </div>
         
  <Stack direction="row" spacing={1} sx={{
      marginRight:"10px",
  
  }}>
         
        <div id='avatar_frame'> 
           <img id='avatar' src={avatar}/>
           <span id='username'>Avatar</span>
        </div>
      </Stack>
           
        </div>
       
    );
  };
  export default Navbar