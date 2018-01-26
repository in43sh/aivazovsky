import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
// import { user } from '../ducks/reducer';

class UserPaintings extends Component {
  constructor() {
    super();

    this.state = {
      // userId: '',
      userPaintings: []
    }
  }


  showUserPaintings = () => {
    axios.get(`/api/paintings/${ this.props.user }`)
    .then((response) => {
      this.setState({ userPaintings: response.data })
      console.log('userPaintings -> ', this.state.userPaintings);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    const contents = this.state.userPaintings.map((element, index) => {
      return (
        <tr key={ index }>
          <td>{ element.title }</td>
          <td>{ element.url }</td>
        </tr>
      )
    })
    return (
      <div>
        <button onClick={ this.showUserPaintings }>show</button>
        
        <div>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>URL</th>
              </tr>
            </thead>
            
            <tbody>
              { contents }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default UserPaintings;