import React from "react";
import './Login.css';
import dreamteamlogo from "../assets/DTElogo.png";
// import SignUp from "../SignUp/index";
import { BrowserRouter as Router, Link } from 'react-router-dom';

const LoginView = ({ onSubmit }) => {
  return (
    <div className="login-page container-fluid">
        <div className="sign-in">
          <h1>Sign Up</h1>
          <form onSubmit={onSubmit}>
            <label htmlFor="name" className="label">Your name</label>
            <input
              className="sign-in-input1"
              name="name"
              type="name"
              id="name"
            />
            <label htmlFor="email" className="label">Your email</label>
            <input
              className="sign-in-input1"
              name="email"
              type="email"
              id="email"
            />
            <label htmlFor="password" className="label">Your password</label>
            <input
              className="sign-in-input1"
              name="password"
              type="password"
              id="password"
            />
            <input
              name="remember-me"
              type="checkbox"
              id="sign-in-checkbox"
            />
            <label htmlFor="sign-in-checkbox" className="small-text">
               I agree to Conditions of Use and Privacy Policy
            </label>
            <button className="button-signin" type="submit">Create Account</button>
          </form>
        </div>

        <div className="sign-in">
          <h1>Sign In</h1>
          <form onSubmit={onSubmit}>
            <label htmlFor="email" className="label">Your email</label>
            <input
              className="sign-in-input2"
              name="email"
              type="email"
              id="email"
            />
            <label htmlFor="password" className="label">Your password</label>
            <input
              className="sign-in-input2"
              name="password"
              type="password"
              id="password"
            />
            <input
              name="remember-me"
              type="checkbox"
              id="sign-in-checkbox"
            />
            <label htmlFor="sign-in-checkbox" className="small-text">
               Remember me
            </label>
            <button className="button-signin" type="submit">Create Account</button>
          </form>
        </div>
    </div>
  )
};

export default LoginView;