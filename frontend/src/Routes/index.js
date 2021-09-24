import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Login from '../Components/login/login';
import SignUp from "../Components/signup/signup";
import Register from "../Components/register/register";
import Permission from "../Components/permission/permission";
import Login from "../Components/login/login";
import SignIn from "../Components/signin/signin";
import Profile from "../Components/profile/profile";
// import Landing from '../Components/landing';

class AppRoutes extends Component {
  render() {
    return (
      <Switch>
        {/* <Route exact path="/" to="/home" component={Landing} /> */}
        {/* <Route exact path="/login" component={Login} /> */}
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/permission" component={Permission} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    );
  }
}
export default AppRoutes;
