import React from 'react';
import firebase from 'firebase'
import './Login.css'
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {username:'',password:''};
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleLogin(){
        //alert('started firebase authentication handling')
        firebase
        .auth()
        .signInWithEmailAndPassword(this.state.username,this.state.password)
        .then(() => alert('Signed in'))
        .catch(error => alert(error))
    }
    handleChangeUsername(e){
        this.setState({ username: e.target.value });
    }
    handleChangePassword(e){
        this.setState({password: e.target.value});
    }
    render(){
        return(
        <div className="login-features">
        <h2>Login below</h2>
        <input name="username" placeholder="Username" type="text" onChange={this.handleChangeUsername}/>
        <input name="password" placeholder="Password" type="password" onChange={this.handleChangePassword}/>
        <button onClick={this.handleLogin}>Login</button>
        </div>
        )
    }
}

export default Login;