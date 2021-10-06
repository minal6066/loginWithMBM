import React, { Component } from "react";
import "./profile.css";
import APIManager from '../../APIManager';
import  { Redirect } from 'react-router-dom'

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      can_name : '',
      email: '',
      roll_no: null,
      phone: null
    }
  }
  

  componentDidMount = () => {
    const roll_no = localStorage.getItem('roll_no');
    APIManager.getProfile(roll_no).then((resp) => {
      const data = resp.data.data
      this.setState = ({
        can_name : data.can_name,
        email: data.email,
        roll_no: data.roll_no,
        phone: data.phone
      })
    })
  }

  logout = () => {
    localStorage.clear();
    this.props.history.push('/login')
  }

  render() {
    const {can_name, email, roll_no, phone} = this.state;
    return (
      <section className="wrapper">
        <div className="main-content">
          <h1 id="profile_title">PROFILE</h1>
          <div className="profile_pic"></div>
          <p className="profile_name">
            <b className="bolds">{can_name}</b>
          </p>
          <div id="profile_content">
            <ul>
              <p className="profile_details">
                <b className="bolds">E-mail : </b>{email}
              </p>
            </ul>
            <ul>
              <p className="profile_details">
                <b className="bolds">Roll Number: </b>{roll_no}
              </p>
            </ul>
            <ul>
              <p className="profile_details">
                <b className="bolds">Phone Number :</b>{phone}
              </p>
            </ul>
          </div>
        </div>
        <button onClick={this.logout}>Logout</button>
      </section>
    );
  }
}

export default Profile;
