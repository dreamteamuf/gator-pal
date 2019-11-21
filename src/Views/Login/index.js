import React, { Component } from "react";
import { withRouter } from "react-router";
import app from "../../constants/apiconfig";

import LoginView from "./LoginView";

class LoginContainer extends Component {


  handleSignUp2 = async event => {
    console.log('started signup')
    event.preventDefault();
    const {name, email, password} = event.target.elements;
    try{
      const user = await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
          // set user's name as well -- needs to be added to user properties in console
          // .then(
          //   (data) => {
          //     const {user} = data
          //     console.log(user)
          //     if(user){
          //       user.updateProfile({
          //         name: name.value
          //       })
          //     }
          //     console.log(user.name)
          // })
          // .catch(function(error){
          //   console.log("we got an error my boi");
          // });
      this.props.history.push("/");
    } catch(error){
      alert(error)
    }
  };

  handleSignUp = async event => {
    console.log('started authentication')
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await app
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/");
    } catch (error) {
      alert(error);//todo change on production
    }
  };

  render() {
    return <LoginView onSubmit={this.handleSignUp} onSubmit2={this.handleSignUp2} />;
  }
}

export default withRouter(LoginContainer);