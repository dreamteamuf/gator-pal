import React from "react";
import './Login.css';
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';
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