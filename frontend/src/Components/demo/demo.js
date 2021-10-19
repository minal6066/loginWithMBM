import React, { Component } from "react";


class Demo extends Component {
    constructor(props) {
      super(props);
      this.state= {
          data: ''
      }
    }

    componentDidMount(){
        const signinData = this.props?.location?.state?.person
        if(signinData){ 
            this.setState({
                data : signinData
            }) 
        }
    }
  
    signInWithMBM = () => {
      this.props.history.push('/signin?redirectURL=/&success=/demo&failure=/login')
    }
  
    render() {
        const {name, email, roll_no, phone_no} = this.state.data
        console.log(this.state.data, "Sign in data")
      return (
          <div style={{textAlign: 'center', margin: '7vw'}}>
        <button style={{height: '4vw', padding: '5px 10px', margin: '3vw', borderRadius: '10px', background: 'cornsilk'}} onClick={this.signInWithMBM}>Sign In with MBM!</button>
        {name && <>
            <h1 style={{margin: '2vw'}}>Signed In As:</h1>
            <h4>{name}</h4>
            <h4>{email}</h4>
            <h4>{phone_no}</h4>
            <h4>{roll_no}</h4>
            </>}
        </div>
      )
    }
}

export default Demo;