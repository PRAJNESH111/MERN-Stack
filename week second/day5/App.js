// import React from 'react';
// import  Header from "./components/Header";
// import Body from "./components/Body";
// import Footer from "./components/Footer";
// import Bootstrap from './components/Bootstrap';

// const App=()=>{
//   return(
//     <>
//     <Bootstrap/>
//     <Header/>
//     <Body/>
//     <Footer/>
//     </>
//   )
// }
// export default App;

import React from "react";
import Home from "./Pages/Home";
import Contact from"./Pages/Contact";
import About from "./Pages/About";
import Navbar from "./components/Navbar";

import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App()
{
  return (
         <>
         <BrowserRouter>
         <Navbar/>
         
         <Routes>
          <Route element={<Navbar/>} path="/navbar"/>
          <Route element= {<Home/>} path="/home"/>
          <Route element= {<Contact/>} path="/contact"/>
          <Route element= {<About/>} path="/about"/>
          <Route element= {<Login/>} path="/login"/>
          <Route element= {<Signup/>} path="/signup"/>
         </Routes>
         </BrowserRouter>
         </>

  );

   
};
export default App;