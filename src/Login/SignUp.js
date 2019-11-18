import React, { Component } from 'react'

export default class SignIn extends Component {
    render() {
        return (
            <div className="sign-in">
              <h1>Sign Up</h1>
              <form onSubmit={this.props.onSubmit}>
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
        )
    }
}
