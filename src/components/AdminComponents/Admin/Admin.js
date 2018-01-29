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
      message: '',
      errorMessage: ''
    }
    this.login = this.login.bind(this)
  }

  componentDidMount() {
    if (this.props.user) {
      this.props.history.push('/dashboard');
    }
  }

  login() {
    const username = this.state.userInput
    const password = this.state.passInput
    axios.post(`/login`, {
      username,
      password
    }).then(response => {
      if (response.data.status === 200) {
        console.log('response ->', response)
        this.props.login(response.data.user)
        this.props.history.push('/dashboard');
        console.log('you are in')
      } else if (response.data.status === 403) {
        console.log('Check the login and password')
      }
    }).catch(error => {
      console.log(error.response)
      console.log(error.response.data.message)
      if (error.response.status === 401) {
        this.setState({ errorMessage: 'Wrong password' })
      } else if (error.response.status === 403) {
        this.setState({ errorMessage: 'This user is not registered' })
      }
      console.log(this.state.errorMessage);
    })
  }



  render() {
    return (
      <div className="admin-main">
          <div className="admin-input-div">
            <div className="input-data">
              <input className="input-data-field" placeholder="username" ref="username" onChange={ (e) => this.setState({ userInput: e.target.value }) } />
            </div>

            <div className="input-data">
              <input className="input-data-field"  placeholder="password" type="password" ref="password" onChange={ (e) => this.setState({ passInput: e.target.value }) } />
            </div>

            <button className="submit-btn" onClick={ this.login }>submit</button>
            <div className="login-info-container">{this.state.errorMessage}</div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  login: login
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);