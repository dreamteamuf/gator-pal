import React, { Component } from "react";
import { withRouter } from "react-router";
import app from "../../constants/apiconfig";

import LoginView from "./LoginView";

class LoginContainer extends Component {


  handleSignUp = async event => {
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
          .then(async (data) => {
            const {user} = data
            if(user){
              await user.sendEmailVerification({
                url: 'http://localhost:3000',
              });
              this.props.history.push("/");
            }
          })
      
      // this.props.history.push("/");
    } catch(error){
      alert(error)
    }
  };

  handleSignIn = async event => {
    console.log('started authentication')
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await app
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        // SUDO TWO FACTOR AUTH CODE REQUIRES DOMAIN TO BE WHITELISTED
        // .then(async (data) => {
        //   const {user} = data
        //   var actionCodeSettings = {
        //     // URL you want to redirect back to. The domain (www.example.com) for this
        //     // URL must be whitelisted in the Firebase Console.
        //     url: 'https://www.example.com/finishSignUp?cartId=1234',
        //     // This must be true.
        //     handleCodeInApp: true,
        //     iOS: {
        //       bundleId: 'com.example.ios'
        //     },
        //     android: {
        //       packageName: 'com.example.android',
        //       installApp: true,
        //       minimumVersion: '12'
        //     },
        //     dynamicLinkDomain: 'example.page.link'
        //   };
        //   app.auth().sendSignInLinkToEmail(email.value, actionCodeSettings)
        //     .then(function() {
        //       // The link was successfully sent. Inform the user.
        //       // Save the email locally so you don't need to ask the user for it again
        //       // if they open the link on the same device.
        //       window.localStorage.setItem('emailForSignIn', email);
        //     })
        //     .catch(function(error) {
        //       alert(error);
        //       // Some error occurred, you can inspect the code: error.code
        //     });


        //   // Confirm the link is a sign-in with email link.
        //   if (app.auth().isSignInWithEmailLink(window.location.href)) {
        //     // Additional state parameters can also be passed via URL.
        //     // This can be used to continue the user's intended action before triggering
        //     // the sign-in operation.
        //     // Get the email if available. This should be available if the user completes
        //     // the flow on the same device where they started it.
        //     var email2 = window.localStorage.getItem('emailForSignIn');
        //     if (!email2) {
        //       // User opened the link on a different device. To prevent session fixation
        //       // attacks, ask the user to provide the associated email again. For example:
        //       email2 = window.prompt('Please provide your email for confirmation');
        //     }
        //     // The client SDK will parse the code from the link for you.
        //     app.auth().signInWithEmailLink(email2, window.location.href)
        //       .then(function(result) {
        //         // Clear email from storage.
        //         window.localStorage.removeItem('emailForSignIn');
        //         // You can access the new user via result.user
        //         // Additional user info profile not available via:
        //         // result.additionalUserInfo.profile == null
        //         // You can check if the user is new or existing:
        //         // result.additionalUserInfo.isNewUser
        //       })
        //       .catch(function(error) {
        //         alert(error);
        //         // Some error occurred, you can inspect the code: error.code
        //         // Common errors could be invalid email and invalid or expired OTPs.
        //       });
        //   }


          
        // })
      // this.props.history.push("/");
    } catch (error) {
      alert(error);//todo change on production
    }
  };

  render() {
    return <LoginView onSignIn={this.handleSignIn} onSignUp={this.handleSignUp} />;
  }
}

export default withRouter(LoginContainer);