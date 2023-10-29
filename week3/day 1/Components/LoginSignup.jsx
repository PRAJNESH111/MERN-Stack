import React, { useState } from 'react';
import'./LoginSignup.css';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';import Body from './Body';



const LoginSignup = () => {
  
  const [action, setAction] = useState("Sign Up");


  const main_username="rishab";
  const main_password="rishab";
  const Redirect=()=>{
  const login=document.getElementById("email_login").value
  const password=document.getElementById("email_password").value
  let flag=0;
  
  if(login==""){
    alert('Enter login');
  }else{
    flag++;
  }
  if(password==""){
    alert('Enter password');
  }else{
    flag++;
  }

  if(flag==2 && login==main_username && password==main_password){
    console.log("done");
    
    window.location.assign("/body");
  }else{
    alert("invalid credentials");
  } 

}

  return (
    <>
    <div className="background-container">
    <div className='login_container container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? null : (
          <div className="input">
            <img src="" alt="" />
            <input type="text" placeholder="Name" />
          </div>
        )}
        <div className="input">
          <img src="" alt="" />
          <input id="email_login" type="email" placeholder='Email Id' />
        </div>
        <div className="input">
          <img src="" alt="" />
          <input id="email_password" type="password" placeholder='Password' />
        </div>
      </div>
      {action === "Sign Up" ? null : (
        <div className="forgot-password">Lost Password?<span>Click Here!</span></div>
      )}
      <div id="submit_login" className="submit-container" onClick={Redirect}>
        <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }} >Sign Up</div>
        <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }} >Log in</div>
      </div>
    </div>
    </div>
    </>
  );
}

export default LoginSignup;
