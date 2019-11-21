import React from "react";
import './Login.css';
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';
import { Link } from 'react-router-dom';

const LoginView = ({ onSignIn, onSignUp }) => {
  return (
    <div className="login-page container-fluid">
        <SignUp onSubmit={onSignUp}/>
        <SignIn onSubmit={onSignIn}/>
    </div>
  )
};

export default LoginView;