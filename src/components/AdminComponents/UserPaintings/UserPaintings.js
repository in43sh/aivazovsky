import React, { Component } from 'react';
import axios from 'axios';
import './UserPainting.css';

class UserPaintings extends Component {
  constructor() {
    super();

    this.state = {
      userPaintings: []
    }
  }


  componentDidMount() {
    axios.get(`/api/paintings/user=${ this.props.user }`)
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
          <td>{ element.paintingid }</td>
          <td>{ element.title }</td>
          <td>{ element.url }</td>
        </tr>
      )
    })
    return (
      <div className="admin-main">
        <div className="user-paintings-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
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