import React from "react";
import Body from "./Components/Body";
import LoginSignup from "./Components/LoginSignup";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App(){
  return(
    <>
      {/* <LoginSignup/> */}
      <BrowserRouter>
      <Routes> 
        <Route element={<LoginSignup/>} path="/login" />
        <Route element={<Body/>} path="/body" />
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App;