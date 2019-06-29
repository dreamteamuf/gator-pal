import React, { Component }from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Logo from '../assets/DTElogo.png'
import './Home.css';
import app from '../constants/apiconfig'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { blue } from "@material-ui/core/colors";
//import firestore from "./firestore";

 class Home extends Component {
   state = {
     user: this.props.user,
     fullname: "John",
     email: "john@john.com",
     database_username: ''
   }
   // eslint-disable-next-line no-useless-constructor
   constructor(props) {
     super(props);
     //this.state = {userName:""}
  }
  signOut () {
    app.auth().signOut().then(function() {
      alert('Signed out')
    },function(error) {
      alert('cant sign out')
    });
  }
  addTest () {
    console.log("Started Database Test")
    const db = app.firestore().collection('users').doc(this.state.user.uid);
    const {fullname , email} = this.state;
    db.set({
        fullname,
        email
    }).then(console.log("Completed Database Add"))
    .catch((error) => alert(error))
  }
  getTest () {
    console.log("Started Database get test")
    const db = app.firestore().collection('users').doc(this.state.user.uid);
    db.get().then((doc) => {
      if (doc.exists) {
        const board = doc.data();
        this.setState({
          database_username: board.fullname,
        });
      } else {
        console.log("No such document!");
      }
    });
  }
  render () {
    //this.addTest();
    this.getTest();
    return (
      
      <div className="root">
        <AppBar position="static" className="nav-bar">
          <Toolbar>
            <IconButton edge="start" className="menuButton" color="inherit" aria-label="Menu">
              <img src={Logo} className="logo"/>
            </IconButton>
            <h2 className="title">
              Gator Pal
            </h2>
            <Button color="inherit">
              <Link to="/login" className="link"> 
                Login
              </Link>
            </Button>
            <Button color="inherit" onClick={this.signOut}>
              Sign Out
            </Button>
          </Toolbar>
        </AppBar>
        <Router>
          <h1>Home</h1>
          <p>{this.state.database_username}</p>
        </Router>
      </div> 
    )
  }
};
export default Home;