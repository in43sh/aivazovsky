import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { urlsend } from '../ducks/reducer';

import Uploader from './Uploader';

class AddNewPainting extends Component {
  constructor() {
    super();

    this.state = {
      titleInput: '',
      yearInput: '',
      dimensionsInput: '',
      genreInput: '',
      urlInput: ''
    }
  }

  handleTitleChange = (val) => {
    this.setState({ titleInput: val})
    console.log('title ' + this.state.titleInput);
  }

  handleYearChange = (val) => {
    this.setState({ yearInput: val})
    console.log('year ' + this.state.yearInput);
  }

  handleGenreChange = (val) => {
    this.setState({ genreInput: val})
    console.log('genre ' + this.state.genreInput);
  }

  handleDimensionsChange = (val) => {
    this.setState({ dimensionsInput: val})
    console.log('dimensions ' + this.state.dimensionsInput);
  }

  handleUrlChange = (val) => {
    this.setState({ urlInput: val})
    console.log('url ' + this.state.urlInput);
  }

  addNewPainting = () => {
    const { url } = this.props; // destructuring object from Redux

    axios.post(`/api/add`, {
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
              <input placeholder="Title:" className="div-input" onChange={ (e) => this.handleTitleChange(e.target.value) }></input>
          </div>
          
          <div>
            <input placeholder="Year:" className="div-input"  onChange={ (e) => this.handleYearChange(e.target.value) }></input>
          </div>
          
          <div>
            <input placeholder="Dimensions:" className="div-input"  onChange={ (e) => this.handleDimensionsChange(e.target.value) }></input>
          </div>

          <div>
            <input placeholder="Genre:" className="div-input"  onChange={ (e) => this.handleGenreChange(e.target.value) }></input>
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
    url: state.url
  };
};

export default connect (mapStateToProps, null)(AddNewPainting);