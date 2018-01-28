import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../redux/ducks/reducer';

import AddNewPainting from './AddNewPainting';
import UpdatePainting from './UpdatePainting';
import DestroyPainting from './DestroyPainting';
import UserPaintings from './UserPaintings';

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

  logout() {
    axios.post('/logout').then(response => {
      this.props.login(null)
      console.log('you are out')
    }).catch(error => {
      console.log(error)
    })
  }

  componentWillMount() {
    axios.get('/user-data').then(response => {
      if (response.data.user) {
        this.props.login(response.data.user);
      }
    })
  }

  componentDidMount() {
    console.log('user.username -> ', this.props.user.username)
    axios.get(`/api/getUserId/${this.props.user.username}`)
    .then((response) => {
      this.setState({ userId: response.data[0].userid })
      console.log('userId -> ', this.state.userId);
    })
    .catch((error) => {
      console.log(error)
    })
  }

  changeView(str) {
    if ( str === 'update' ) {
      this.setState({ view: 'update' })
    } else if ( str === 'destroy' ) {
      this.setState({ view: 'destroy' })
    } else this.setState({ view: 'add' })
  }

  render() {
    const { user } = this.props; // destructuring object from Redux

    return (
      <div>
        <div>
          <h2 className="Title">Admin</h2>
          {user && <div>
            <Link to="/admin"><button onClick={ this.logout }>logout</button></Link>
            <button onClick={ () => {this.changeView('add')} }>add</button>
            <button onClick={ () => {this.changeView('update')} }>update</button>
            <button onClick={ () => {this.changeView('destroy')} }>destroy</button>

            {
              this.state.view === 'add' 
              ? <AddNewPainting user={ this.state.userId }/>
              : this.state.view === 'update'
                ? <UpdatePainting />
                : <DestroyPainting />
            }
            <UserPaintings user={ this.state.userId } />
          </div>}
          {!user && <p>You mush log in! <Link to="/admin">Log in</Link></p>}
          
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
