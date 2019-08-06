import React, { Component }from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Logo from '../assets/DTElogo.png'
import Main from './Main';
import Therapy from './Therapy'
import Analytics from './Analytics'
import './Home.css';
import app from '../constants/apiconfig'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import DashBoardIcon from '@material-ui/icons/Dashboard';
import AccesibilityIcon from '@material-ui/icons/Accessibility'
import ContactIcon from '@material-ui/icons/ContactSupport'
import ListItemText from '@material-ui/core/ListItemText';
import BugIcon from '@material-ui/icons/BugReport'

//import firestore from "./firestore";


 class Home extends Component {
   // eslint-disable-next-line no-useless-constructor
   constructor(props) {
     super(props);
     this.state = {
      user: this.props.user,
      fullname: "John",
      email: "john@john.com",
      database_username: '',
      left: false
    }
     
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
  toggleDrawer (open)  {
    this.setState({
      left : open
    })
  };
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
      <Router>
        <AppBar position="static" className="nav-bar">
          <Toolbar>
            <IconButton  onClick={() => this.toggleDrawer(true)} edge="start" className="menuButton" color="inherit" aria-label="Menu">
              <img src={Logo} className="logo"/>
            </IconButton>
            <h2 className="title">
              Gator Pal
            </h2>
            <Button color="inherit">
              <Link to="/" className="link color-white"> 
                Main
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="/therapy" className="link color-white"> 
                Therapy
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="/analytics" className="link color-white"> 
                Analytics
              </Link>
            </Button>
            <Button color="inherit" onClick={this.signOut}>
              Sign Out
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.left} onClose={() => this.toggleDrawer(false)}>
          <div
            className="list"
            role="presentation"
            // onClick={this.toggleDrawer('left', false)}
            // onKeyDown={this.toggleDrawer('left', false)}
          >
            <List>
              <Link to="/" className="link">
                <ListItem button key={'Home'}> 
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText primary={'Home'} />
                </ListItem>
              </Link>
              <Link to="/analytics"  className="link">
                <ListItem button key={'Analytics'}>
                    <ListItemIcon><DashBoardIcon /></ListItemIcon>
                    <ListItemText primary={'Analytics'} />
                </ListItem>
              </Link>
              <Link to="/therapy" className="link">
                <ListItem button key={'Therapy'}>
                  <ListItemIcon><AccesibilityIcon/></ListItemIcon>
                  <ListItemText primary={'Therapy'} />
              </ListItem>
              </Link>
              <Link to="Contact" className="link">
                <ListItem button key={'Contact'}>
                    <ListItemIcon><ContactIcon /></ListItemIcon>
                    <ListItemText primary={'Contact'} />
                </ListItem>
              </Link>
            </List>
            <Divider />
            <List>
              <ListItem button key={'Submit a Bug Report'}>
                <ListItemIcon><BugIcon/></ListItemIcon>
                <ListItemText primary={'Submit a Bug Report'} />
              </ListItem>
            </List>
          </div>
        </Drawer>
          <Route exact path="/" component={Main}></Route>
          <Route path="/analytics" component={Analytics}></Route>
          <Route path="/therapy" component={Therapy}></Route>
      </Router>
      </div> 
    )
  }
};
export default Home;