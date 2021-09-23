import React, { Component } from 'react';
import './permission.css';
// import APIManager from '../../APIManager';

class Permission extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="container">
                <div id="logo"> </div>
                <h1 id="head">
                    This app would like to view and manage your details
                </h1>
                <p>This app will use this information in accordance with their respective terms of service and privacy policies.</p>
                <br>
                <div id="buttons">
                    <input type="button" value="Cancel" id="can">
                    <input type="button" value="Accept" id="acc">
                </div>
            </div>
        )
    }
}
export default Permission ;
