import React, { Component } from 'react'

export default class SignUp extends Component {
    render() {
        return (
            <div className="sign-in">
              <h1>Sign In</h1>
              <form onSubmit={this.props.onSubmit}>
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
                <button className="button-signin" type="submit">Sign In</button>
              </form>
            </div>
        )
    }
}
