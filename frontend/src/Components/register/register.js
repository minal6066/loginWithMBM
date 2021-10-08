import React, { Component } from "react";
import "./register.css";
import APIManager from "../../APIManager";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      roll_no: "",
      email: "",
      phone: "",
      password: "",
      confirm_password: "",
    };
  }

  changeState = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  register = () => {
    const { roll_no, password, confirm_password } = this.state;
    if (!roll_no || !password || !confirm_password) {
      return console.log("Please add all mandatory fields!");
    }
    if (password != confirm_password) {
      return console.log("Password and Confirm Password should match");
    }
    APIManager.register(this.state).then((resp) => {
      if (resp.status === 200) {
        localStorage.setItem("token", resp.token);
        this.props.history.push("/profile");
        return console.log("User added successfully");
      } else {
        return console.log("Something went wrong!");
      }
    });
  };

  render() {
    return (
      <div className="container">
        <div className="left">
          <h1 className="head">Register</h1>
          <div className="logo"></div>
          <h3 className="para">
            To keep connected with us register here with your personal info.
          </h3>
        </div>
        <div className="right">
          <h1 className="head-2">Enter your details</h1>
          <div className="details">
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              onChange={(evt) => {
                this.changeState(evt);
              }}
            />
            <input
              type="text"
              placeholder="Enter your roll no"
              name="roll_no"
              onChange={(evt) => {
                this.changeState(evt);
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={(evt) => {
                this.changeState(evt);
              }}
            />
            <input
              type="number"
              name="phone_no"
              placeholder="Enter your Phone no"
              onChange={(evt) => {
                this.changeState(evt);
              }}
            />
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              onChange={(evt) => {
                this.changeState(evt);
              }}
            />
            <input
              type="password"
              placeholder="Confirm your password"
              name="confirm_password"
              onChange={(evt) => {
                this.changeState(evt);
              }}
            />
          </div>
          <input
            type="button"
            value="Register"
            className="button_reg"
            onClick={this.register}
          />
        </div>
      </div>
    );
  }
}
export default Register;
