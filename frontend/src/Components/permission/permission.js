import React, { Component } from 'react';
import './permission.css';
import { withRouter } from 'react-router';
// import APIManager from '../../APIManager';

class Permission extends Component {
    constructor(props) {
        super(props);
    }

    redirect = () => {
        this.props.history.push({
            pathname: '/demo',
            state: {
                person : {
                    email: this.props.data.email,
                    name: this.props.data.name,
                    roll_no: this.props.data.roll_no,
                    phone_no : this.props.data.phone_no
                }
            }
        });
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
                    <input type="button" value="Cancel" className="can" onClick={() => this.props.history.push('/demo')}/>
                    <input type="button" value="Accept" className="acc" onClick={() => this.redirect()}/>
                </div>
            </div>
        )
    }
}
export default withRouter(Permission) ;
