import React from "react";
import './Login.css';
import dreamteamlogo from "../assets/DTElogo.png";
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';

import dreamteamlogo from "../../assets/DTElogo.png";
// import SignUp from "../SignUp/index";
import { Link } from 'react-router-dom';

const LoginView = ({ onSubmit }) => {
  return (
    <div className="login-page container-fluid">
        <SignUp onSubmit={onSubmit}/>
        <SignIn onSubmit={onSubmit}/>
    </div>
  )
};

export default LoginView;