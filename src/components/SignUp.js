import React, { Component } from 'react';
import './components.css';

class SignUp extends Component {
  render () {
    return (
      <div className="outer"  style={{ height:'300px'}}>
        <span className="inner">
          <button onClick={this.props.signUpWithGoogle} >Google</button>
        </span>
      </div>
    );
  }
}

export default SignUp;
