import React, { Component }from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Logo from './assets/DTElogo.png'
import './Home.css';
import app from './constants/apiconfig'
 class Home extends Component {
   constructor(props) {
     super(props);
     this.state = {}
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
        <AppBar position="static">
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
        <h1>Home</h1>
      </div> 
    )
  }
};

export default Home;