import React from "react";
import { Component } from "react";
import './Login.css';
import profile from "../a.png";
import email from "../email.png";
import pass from "../pass.png";

export default class Login extends Component {
    render(){
     return (
    <div className="mainl">
     <div className="sub-main">
       <div>

         <div className="imgs">
              <div className="container-image">
              <img src={profile} alt="profile" className="profile"/> 
           </div>
         </div>

         <div>
           <h1>Login</h1>

           <div>
              <img src={email} alt="email" className="email"/>
              <input type="text" placeholder="Email" className="name"/>
           </div>

           <div className="second-input">
              <img src={pass} alt="pass" className="email"/>
              <input type="password" placeholder="Password" className="name"/>
           </div>
            <br></br>
           
          <a href="/Home">
          <button className="btn_l">Login</button>
          </a>
        
           
            <p className="link">
              <a href="#">Forgot password ?</a> Or<a href="#">Sign Up</a>
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}
}

