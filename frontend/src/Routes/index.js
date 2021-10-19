import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "../Components/register/register";
import Login from "../Components/login/login";
import SignIn from "../Components/signin/signin";
import Profile from "../Components/profile/profile";
import Landing from "../Components/landing/landing";
import Demo from "../Components/demo/demo";

class AppRoutes extends Component {
  render() {
    return (
      <Switch>
        {<Route exact path="/" to="/home" component={Landing} />}
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/demo" component={Demo} />
      </Switch>
    );
  }
}
export default AppRoutes;
