import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { login } from '../ducks/reducer';
// import { Link } from 'react-router-dom';
// import { Route } from 'react-router-dom';
// import AdminDashboard from './AdminDashboard';

class Admin extends Component {
  constructor () {
    super();
    this.state = {
      userInput: '',
      passInput: '',
      message: ''
    }
    this.handleUserChange = this.handleUserChange.bind(this)
    this.handlePassChange = this.handlePassChange.bind(this)
    this.login = this.login.bind(this)
  }

  handleUserChange(val) {
    this.setState({ userInput: val })
  }

  handlePassChange(val) {
    this.setState({ passInput: val })
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
              <input ref="username" onChange={ (e) => this.handleUserChange(e.target.value) } />
              <input type="password" ref="password" onChange={ (e) => this.handlePassChange(e.target.value) } />
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