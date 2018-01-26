import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
// import { urlsend, user } from '../ducks/reducer';

import Uploader from './Uploader';

//////////////////////////////////////////////////////////////////////////////
// This component adds new painting to the database. It includes handling
// the information put in the input fields and a separate Upload component
// that handles uploading file to the AWS account and puts the image URL
// to the Redux Store.
//////////////////////////////////////////////////////////////////////////////
class AddNewPainting extends Component {
  constructor() {
    super();

    this.state = {
      userId: '',
      titleInput: '',
      yearInput: '',
      dimensionsInput: '',
      genreInput: '',
      urlInput: ''
    }
  }

  componentWillMount() {
    const { user } = this.props;
    console.log('user.username -> ', user.username)
    axios.get(`/api/getUserId/${user.username}`)
    .then((response) => {
      this.setState({ userId: response.data[0].userid })
      console.log('userId -> ', this.state.userId);
    })
    .catch((error) => {
      console.log(error)
    })
  }

  addNewPainting = () => {
    const { url } = this.props; // destructuring object from Redux
    axios.post('/api/add', {
      userid: this.state.userId,
      title: this.state.titleInput,
      year: this.state.yearInput,
      dimensions: this.state.dimensionsInput,
      genre: this.state.genreInput,
      url: url // from Redux
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <div>
        <div className="Admin-input-form">
          <div>Please enter the information about the painting:</div>
          <br />

          <div>
            <input placeholder="Title:" className="div-input" onChange={ (e) => this.setState({ titleInput: e.target.value }) }></input>
          </div>
          
          <div>
            <input placeholder="Year:" className="div-input"  onChange={ (e) => this.setState({ yearInput: e.target.value }) }></input>
          </div>
          
          <div>
            <input placeholder="Dimensions:" className="div-input"  onChange={ (e) => this.setState({ dimensionsInput: e.target.value }) }></input>
          </div>

          <div>
            <input placeholder="Genre:" className="div-input"  onChange={ (e) => this.setState({ genreInput: e.target.value }) }></input>
          </div>

          {/* uploads image to AWS when file is dropped there */}
          <Uploader /> 

          <button className="admin-button"  onClick={ this.addNewPainting }>Submit</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state =>  {
  return {
    url: state.url,
    user: state.user
  };
};

export default connect (mapStateToProps, null)(AddNewPainting);