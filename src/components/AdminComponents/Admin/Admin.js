import React, { Component } from 'react';
import axios from 'axios';
import './Admin.css';

import { connect } from 'react-redux';
import { login } from '../../../redux/ducks/reducer'

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
    axios.post(`/login`, {
      username,
      password
    }).then(response => {
      // console.log('response.data ->', response.data)
      this.props.login(response.data.user)
      this.props.history.push('/dashboard');
      console.log('you are in')
    }).catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div className="login-main">
          <div className="login-main-container">
            <div className="info-input">
              <div className="input-data">
                <input placeholder="username" ref="username" onChange={ (e) => this.setState({ userInput: e.target.value }) } />
              </div>

              <div className="input-data">
                <input placeholder="password" type="password" ref="password" onChange={ (e) => this.setState({ passInput: e.target.value }) } />
              </div>

              <div className="btn">
                <button onClick={ this.login }>submit</button>
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