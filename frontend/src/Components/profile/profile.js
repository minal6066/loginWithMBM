import React, { Component } from "react";
import "./profile.css";
import APIManager from '../../APIManager';

class Profile extends Component {
  constructor(props) {
    super(props);
    APIManager.getProfile().then((resp) => {
      this.state = {...resp};
      console.log(resp, "Response")
    })
  }
  render() {
    return (
      <section class="wrapper">
        <div class="main-content">
          <h1 id="profile_title">PROFILE</h1>
          <div className="profile_pic"></div>
          <p className="profile_name">
            <b className="bolds">{this.state.name}</b>
          </p>
          <div id="profile_content">
            <ul>
              <p className="profile_details">
                <b className="bolds">E-mail : </b>{this.state.email}
              </p>
            </ul>
            <ul>
              <p className="profile_details">
                <b className="bolds">Roll Number: </b>{this.state.roll_no}
              </p>
            </ul>
            <ul>
              <p className="profile_details">
                <b className="bolds">Phone Number :</b>{this.state.phone}
              </p>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Profile;
