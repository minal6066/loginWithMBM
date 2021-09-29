import React, { Component } from 'react';
import './login.css';
import APIManager from '../../APIManager';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roll_no: '',
            password : ''
        }
    }

    login = () => {
        APIManager.logIn(this.state).then((resp) =>
            {
                if(resp.status === 'success')
                    console.log("User logged in successfully!");
                else
                    console.log("Something Went Wrong!")
            }
        )
    }
    

    render() {
        return (
            <div id="container">
                <h1 id="head"> Log in</h1>
                <div id="logo"></div>
                <div id="details">
                    Roll Number <input type="text" id="roll_no" placeholder="Enter your roll number" onChange={(evt) => this.setState({roll_no : evt.target.value})}/>
                    <br />
                    Password <input type="password" id="pass" placeholder="Enter your password" onChange={(evt) => this.setState({password : evt.target.value})}/>
                    <br />
                    <input type="button" value="LOGIN" id="button" onClick={this.login}/>
                </div>
            </div>
        )
    }
}
export default Login;
