import React, { Component } from 'react';
import './register.css';
// import APIManager from '../../APIManager';

class Register extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="left">
                    <h1 className="head">Register</h1>
                    <div className="logo">

                    </div>
                    <h3 className="para">To keep connected with us register here with your personal info.</h3>
                </div>
                <div className="right">
                    <h1 className="head-2">Enter your details</h1>
                    <div className="details">
                        <input type="text" placeholder="Enter your name" name="name" className="item" />
                        <input type="text" placeholder="Enter your roll no" name="roll_no" className="item" />
                        <input type="email" name="email" placeholder="Enter your email" className="item" />
                        <input type="number" name="phone" placeholder="Enter your Phone no" className="item" />
                        <input type="password" placeholder="Enter your password" name="Password" className="item" />
                        <input type="password" placeholder="Confirm your password" name="Password" className="item" />
                    </div>
                    <input type="button" value="Register" className="button" />
                </div>
            </div>
        )
    }
}
export default Register ;
