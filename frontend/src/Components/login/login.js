import React, { Component } from 'react';
import './login.css';
// import APIManager from '../../APIManager';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="container">
                <h1 id="head"> Log in</h1>
                <div id="logo"></div>
                <div id="details">
                    Roll Number <input type="text" id="name" placeholder="Enter your roll number">
                    <br>
                    Password <input type="password" id="pass" placeholder="Enter your password">
                    <br>
                    <input type="button" value="LOGIN" id="button">
                </div>
            </div>
        )
    }
}
export default Login;
