import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login';
import firebase from 'firebase'
import * as serviceWorker from './serviceWorker';

const config = {
    apiKey: "AIzaSyBDkJRXNKflTli-wPXrZ6hG6XH4dd70CAc",
    authDomain: "dreamteamu-appdev-gatorpal.firebaseapp.com",
    databaseURL: "https://dreamteamu-appdev-gatorpal.firebaseio.com",
    projectId: "dreamteamu-appdev-gatorpal",
    storageBucket: "dreamteamu-appdev-gatorpal.appspot.com",
    messagingSenderId: "970434865161",
    appId: "1:970434865161:web:dd7a70b10534fc61"
}
firebase.initializeApp(config);
ReactDOM.render(<Login />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
