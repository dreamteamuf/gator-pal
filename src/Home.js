import React, { Component }from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Logo from './assets/DTElogo.png'
import './Home.css';
import app from './constants/apiconfig'
 class Home extends Component {
   state = {
     user: this.props.user.uid,
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
  render () {

    return (
      <div className="root">
        <AppBar position="static" className="AppBar">
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
          <p>{alert(this.state.user)}</p>
        </Router>
      </div> 
    )
  }
};

export default Home;