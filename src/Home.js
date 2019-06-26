import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {
  return (
    <div className="root">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className="menuButton" color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <h2 className="title">
            Gator Pal
          </h2>
          <Button color="inherit">
            <Link to="/login" className="link">
              Login
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      <h1>Home</h1>
    </div> 
  )
};

export default Home;