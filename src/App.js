import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./Login";
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
      //alert(this.state.currentUser);
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
              exact
              path="/"
              component={Home}
              authenticated={authenticated}
              user = {currentUser}
            />
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={SignUp}/>
      </Router>
    );
  }
}

export default App;
