import React, { Component } from "react";
import "./signin.css";
// import APIManager from '../../APIManager';

class SignIn extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section class="wrapper">
        <div class="main-content">
          <div className="logo_mbm"></div>
          <h1 id="title">SIGN IN</h1>
          <p>with M.B.M. Engineering College</p>
          <form action="">
            <div class="input-group">
              <input
                type="email"
                placeholder="Email"
                id="email"
                autocomplete="off"
              />
            </div>
            <div class="input-group">
              <input
                type="password"
                placeholder="Password"
                id="password"
                autocomplete="off"
              />
            </div>
            <a href="">Create account</a>
            <div class="input-group">
              <button>Sign up</button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default SignIn;
