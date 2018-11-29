import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../../redux/ducks/reducer';
import './AdminDashboard.css';

import AddNewPainting from '../AddNewPainting';
import UpdatePainting from '../UpdatePainting';
import DestroyPainting from '../DestroyPainting';
import UserPaintings from '../UserPaintings/UserPaintings';

class AdminDashboard extends Component {
  constructor () {
    super();
    this.state = {
      view: 'add',
      userId: ''
    }
    this.changeView = this.changeView.bind(this)
    this.logout = this.logout.bind(this)
  }

  componentWillMount() {
    axios.get('/user-data').then(response => {
      if (response.data.user) {
        this.props.login(response.data.user);
      }
    })
  }

  componentDidMount() {
    console.log(this.props);
    if (this.props.user) {
      axios.get(`/api/getUserId/${this.props.user.username}`)
      .then((response) => {
        this.setState({ userId: response.data[0].userid })
        console.log('userId -> ', this.state.userId);
        console.log('user.username -> ', this.props.user.username)
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }
  
  logout() {
    axios.post('/logout').then(response => {
      this.props.login(null)
      console.log('you are out')
    }).catch(error => {
      console.log(error)
    })
  }

  changeView(str) {
    switch (str) {
      case "update":
        this.setState({ view: "update" })
        break;

      case "destroy":
        this.setState({ view: "destroy" })
        break;
      
      case "show":
        this.setState({ view: "show" })
        break;
    
      default:
        this.setState({ view: "add" })
        break;
    }
  }

  render() {
    const { user } = this.props; // destructuring object from Redux

    return (
      <div className="admin-dashboard-parent-container">
        {user && <div className="admin-dashboard-child-container">
          <div className="admin-dashboard-menu-btns-container">
            <Link className="menu-btns-link" to="/admin"><button className="menu-btns-top" onClick={ this.logout }>logout</button></Link>
            <button className="menu-btns" onClick={ () => {this.changeView('add')} }>add</button>
            <button className="menu-btns" onClick={ () => {this.changeView('update')} }>update</button>
            <button className="menu-btns" onClick={ () => {this.changeView('destroy')} }>destroy</button>
            <button className="menu-btns" onClick={ () => {this.changeView('show')} }>uploads</button>
          </div>

          <div className="admin-dashboard-content-container">
            {
              this.state.view === 'add' 
              ? <AddNewPainting user={ this.state.userId }/>
              : this.state.view === 'update'
                ? <UpdatePainting />
                : this.state.view === 'destroy'
                  ? <DestroyPainting />
                    : <UserPaintings user={ this.state.userId } />
            }
          </div>

          <div className="admin-dashboard-empty-container"></div>
        </div>}

        {!user && <div className="you-must-log-in-div"><p>You must log in! <Link to="/admin">Log in</Link></p></div>}
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
