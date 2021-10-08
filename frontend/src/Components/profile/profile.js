import React, { Component } from "react";
import "./profile.css";
import APIManager from "../../APIManager";

// get our fontawesome imports
import {
  faEdit,
  faHome,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      roll_no: null,
      phone_no: null,
      edit: false,
      data : {}
    };
  }

  componentDidMount = () => {
    const roll_no = localStorage.getItem("roll_no");
    if (!roll_no) {
      this.props.history.push("/login");
    }
    APIManager.getProfile(roll_no).then((resp) => {
      const data = resp.data.data;
      this.setState({
        ...data,
        data : data
      });
    });
  };

  logout = () => {
    localStorage.clear();
    this.props.history.push("/login");
  };

  setEdit = () => {
    if(this.state.edit){
      const data = this.state.data
      this.setState({
        ...data,
        edit: false
      })
    }else{
      this.setState({
        edit: true
      })
    }
  }

  updateProfile = () => {
    const data = this.state;
    delete data.edit;
    delete data.data;
    APIManager.updateProfile(data).then((resp) => {
      this.setState({
        ...resp.data.data,
        data: resp.data.data
      })
    })
  }

  changeState = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  render() {
    const { name, email, roll_no, phone_no } = this.state;
    return (
      <section className="wrapper">
        <div className="main-content">
          <h1 id="profile_title">PROFILE</h1>
          <div className="profile_pic"></div>
          <div className="button_profile">
            <FontAwesomeIcon onClick={this.setEdit} id="edit_profile" icon={faPen} />
            <FontAwesomeIcon id="delete_profile" icon={faTrash} />
          </div>
          <p className="profile_name">
            <b className="bolds">{!this.state.edit && name}</b>
            {this.state.edit && <input className="edit_input" value={this.state.name} name="name" onChange={(evt) => {
                this.changeState(evt);
              }}/>}
          </p>
          <div id="profile_content">
            <ul>
              <p className="profile_details">
                <b className="bolds">E-mail : </b>
                {!this.state.edit && email}
                {this.state.edit && <input className="edit_input" value={this.state.email} name="email" onChange={(evt) => {
                this.changeState(evt);
              }}/>}
              </p>
            </ul>
            <ul>
              <p className="profile_details">
                <b className="bolds">Roll Number : </b>
                {!this.state.edit && roll_no}
                {this.state.edit && <input className="edit_input" value={this.state.roll_no} disabled/>}

              </p>
            </ul>
            <ul>
              <p className="profile_details">
                <b className="bolds">Phone Number : </b>
                {!this.state.edit && phone_no}
                {this.state.edit && <input className="edit_input" name="phone_no" value={this.state.phone_no} onChange={(evt) => {
                this.changeState(evt);
              }}/>}
              </p>
            </ul>
            {
              this.state.edit && 
            <div>
              <button id="update_profile" onClick={this.updateProfile}>
                Update
              </button>
              <button id="cancel_edit" onClick={this.setEdit}>
                Cancel
              </button>
            </div>
            }
            {!this.state.edit && <button id="logout_profile" onClick={this.logout}>
              Logout
            </button>}
          </div>
        </div>
      </section>
    );
  }
}

export default Profile;
