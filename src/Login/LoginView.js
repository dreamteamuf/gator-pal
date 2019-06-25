import React from "react";
import './Login.css';
import dreamteamlogo from "../assets/DTElogo.png";
const LoginView = ({ onSubmit }) => {
  return (
    <div className="login-page container">
      <div className="login-modal">
        <div className="container">
          <img className="dreamteam-logo" src={dreamteamlogo}></img>
          <h1>Login</h1>
          <form onSubmit={onSubmit} class="login-form container">
            <input
              className="input"
              name="email"
              type="email"
              placeholder="Email"
            />
            <input
              className="input"
              name="password"
              type="password"
              placeholder="Password"
            />
            <button className="button-signin" type="submit">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginView;