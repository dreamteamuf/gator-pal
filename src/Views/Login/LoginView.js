import React from "react";
import './Login.css';
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';
import { Link } from 'react-router-dom';

const LoginView = ({ onSubmit, onSubmit2 }) => {
  return (
    <div className="login-page container-fluid">
        <SignUp onSubmit={onSubmit2}/>
        <SignIn onSubmit={onSubmit}/>
    </div>
  )
};

export default LoginView;