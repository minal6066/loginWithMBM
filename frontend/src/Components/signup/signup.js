import React , {Component} from 'react';

// import APIManager from '../../APIManager';

class SignUp extends Component {
    constructor(props){
        super(props);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.value)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                Name:
                <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
          </form>
        )
    }
}
export default SignUp;
