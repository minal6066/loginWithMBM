import React, { Component } from 'react';
import './register.css';
// import APIManager from '../../APIManager';

class Register extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="container">
                <div id="left">
                    <h1 id="head">Register</h1>
                    <div id="logo"></div>
                    <p id="para">To keep connected with us register here with your personal info.</p>
                </div>
                <div id="right">
                    <h1 id="head-2">Enter your details</h1>
                    <div id="details">
                        <input type="text" placeholder="Enter your name" name="name" id="item">
                        <input type="text" placeholder="Enter your roll no" name="roll_no" id="item">
                        <input type="email" name="email" placeholder="Enter your email" id="item">
                        <input type="number" name="phone" placeholder="Enter your Phone no" id="item">
                        <input type="password" placeholder="Enter your password" name="Password" id="item">
                        <input type="password" placeholder="Confirm your password" name="Password" id="item">
                    </div>
                    <input type="button" value="Register" id="button">
                </div>
            </div>
        )
    }
}
export default Register ;
