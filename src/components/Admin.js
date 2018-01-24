import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { login } from '../ducks/reducer';

class Admin extends Component {
  constructor () {
    super();
    this.state = {
      userInput: '',
      passInput: '',
      message: ''
    }
    this.login = this.login.bind(this)
  }

  login() {
    const username = this.state.userInput
    const password = this.state.passInput
    console.log('hello')
    axios.post(`/login`, {
      username,
      password
    }).then(response => {
      console.log('response.data ->', response.data)
      this.props.login(response.data.user)
      this.props.history.push('/dashboard');
      console.log('you are in')
    }).catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div>
        <div>
          <h2 className="Title">Admin</h2>

          <div className="login-main-container">
            <div>
              <input ref="username" onChange={ (e) => this.setState({ userInput: e.target.value }) } />
              <input type="password" ref="password" onChange={ (e) => this.setState({ passInput: e.target.value }) } />
            </div>
            <br />
            
            <div>
              <button onClick={ this.login }>submit</button>
              {/* <Link to="/dashboard"><button onClick={ this.login }>login</button></Link> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  login: login
}

export default connect(null, mapDispatchToProps)(Admin);