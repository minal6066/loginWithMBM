import React, { Component } from "react";
import "./signin.css";
import APIManager from '../../APIManager';
import Permission from '../permission/permission'
// import {useLocation} from "react-router-dom";

class SignIn extends Component {
  constructor(props) {
    super(props);
    const search = this.props.location.search;
    const redirectURL= new URLSearchParams(search).get("redirectURL");
    const success= new URLSearchParams(search).get("success");
    const failure= new URLSearchParams(search).get("failure");
    console.log("re", redirectURL, success, failure)
    this.state = {
      roll_no : '',
      password: '',
      showPermission : false,
      data: {redirectURL,success, failure }
    }
  }

  signUp = (event) => {
    APIManager.logIn(this.state).then((resp) => {
      if (resp.status === 200) {
        localStorage.setItem("token", resp.data.token);
        localStorage.setItem("roll_no", resp.data.data.roll_no);
        this.setState({
          showPermission: true,
          data: resp.data.data
        })
        event.preventDefault();
        console.log("SHow permission reached")
      } else console.log("Something Went Wrong!");
    });
    
  }
  render() {
    console.log("This state", this.state)
    return (
      <>
      {!this.state.showPermission && <section class="wrapper">
        <div class="main-content">
          <div className="logo_mbm"></div>
          <h1 id="title">SIGN IN</h1>
          <p id="sub-signin">with M.B.M. Engineering College</p>
          {/* <form action=""> */}
            <div class="input-group">
              <input
                type="text"
                onChange={(evt) => this.setState({ roll_no: evt.target.value })}
                placeholder="Roll No"
                id="email_signin"
                autocomplete="off"
              />
            </div>
            <div class="input-group">
              <input
                onChange={(evt) => this.setState({ password: evt.target.value })}
                type="password"
                placeholder="Password"
                id="password_signin"
                autocomplete="off"
              />
            </div>
            <a id="link_acc" href="/register">
              Create account
            </a>
            <div class="input-group">
              <button className="btn_signup" onClick={(evt) => this.signUp(evt)}>Sign up</button>
            </div>
          {/* </form> */}
        </div>
      </section>}
      {console.log(this.state.showPermission)}
        {
          this.state.showPermission && <Permission data={this.state.data}/>
        }
      </>
    );
  }
}

export default SignIn;
