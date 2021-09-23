import React, { Component } from 'react';
import './permission.css';
// import APIManager from '../../APIManager';

class Permission extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container2">
                <div className="logo2"> </div>
                <h1 className="head1">
                    This app would like to view and manage your details
                </h1>
                <p className="head2">This app will use this information in accordance with their respective terms of service and privacy policies.</p>
                <br />
                <div className="buttons">
                    <input type="button" value="Cancel" className="can" />
                    <input type="button" value="Accept" className="acc" />
                </div>
            </div>
        )
    }
}
export default Permission ;
