import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./Views/Home/Home";
import Analytics from "./Views/Analytics/Analytics";
import Login from "./Views/Login";
import SignUp from "./SignUp";
import PrivateRoute from './PrivateRoute';
import app from './constants/apiconfig';
import './App.css';

class App extends Component {
  state = { loading: true, authenticated: false, currentUser: null, test: "asdf",};
  componentDidMount() {//Changed from ComponentWillMount as it is legacy code
    app.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }

 
  render() {
    const { authenticated, loading, currentUser } = this.state;
    if (loading) {
      return <p>Loading...</p>
    }
    return (
      <Router>
        <PrivateRoute
              exact path="/"
              component={Home}
              authenticated={authenticated}
              user = {currentUser}
            />
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={SignUp}/>
        <PrivateRoute
            exact path="/analytics"
            component={Home}
            authenticated={authenticated}
            user = {currentUser}
          />
        <PrivateRoute
            exact path="/therapy"
            component={Home}
            authenticated={authenticated}
            user = {currentUser}
          />
      </Router>
    );
  }
}

export default App;
