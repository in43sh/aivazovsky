import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
// import { urlsend } from '../../redux/ducks/reducer';

import Uploader from './Uploader/Uploader';

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

  addNewPainting = () => {
    const { url } = this.props; // destructuring object from Redux
    // console.log(this.props)
    axios.post('/api/add', {
      userid: this.props.user,
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
      <div className="admin-main">
        <div className="admin-input-div">
          <div>Please enter the information about the painting:</div>
          <div>
            <input placeholder="Title:" className="input-data-field" onChange={ (e) => this.setState({ titleInput: e.target.value }) }></input>
          </div>
          <div>
            <input placeholder="Year:" className="input-data-field"  onChange={ (e) => this.setState({ yearInput: e.target.value }) }></input>
          </div>
          <div>
            <input placeholder="Dimensions:" className="input-data-field"  onChange={ (e) => this.setState({ dimensionsInput: e.target.value }) }></input>
          </div>
          <div>
            <input placeholder="Genre:" className="input-data-field"  onChange={ (e) => this.setState({ genreInput: e.target.value }) }></input>
          </div>
          {/* uploads image to AWS when file is dropped there */}
          <div>
            <Uploader />
          </div>
          <button className="submit-btn"  onClick={ this.addNewPainting }>Submit</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    url: state.url
  }
}

export default connect(mapStateToProps, null)(AddNewPainting);