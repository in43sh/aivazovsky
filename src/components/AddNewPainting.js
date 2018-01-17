import React, { Component } from 'react';
import axios from 'axios';

export default class AddNewPainting extends Component {
  constructor() {
    super();

    this.state = {
      titleInput: '',
      yearInput: '',
      dimensionsInput: '',
      genreInput: '',
      locationInput: '',
      urlInput: ''
    }
    this.addNewPainting  = this.addNewPainting.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleDimensionsChange = this.handleDimensionsChange.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleUrlChange = this.handleUrlChange.bind(this);
  }


  handleTitleChange(val) {
    this.setState({ titleInput: val})
    console.log('title ' + this.state.titleInput);
  }

  handleYearChange(val) {
    this.setState({ yearInput: val})
    console.log('year ' + this.state.yearInput);
  }

  handleGenreChange(val) {
    this.setState({ genreInput: val})
    console.log('genre ' + this.state.genreInput);
  }

  handleDimensionsChange(val) {
    this.setState({ dimensionsInput: val})
    console.log('dimensions ' + this.state.dimensionsInput);
  }

  handleLocationChange(val) {
    this.setState({ locationInput: val})
    console.log('location ' + this.state.locationInput);
  }

  handleUrlChange(val) {
    this.setState({ urlInput: val})
    console.log('url ' + this.state.urlInput);
  }

  addNewPainting() {
    axios.post(`http://localhost:3333/api/add`, {
      title: this.state.titleInput,
      year: this.state.yearInput,
      dimensions: this.state.dimensionsInput,
      genre: this.state.genreInput,
      location: this.state.locationInput,
      url: this.state.urlInput
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
          
          <div>
            <input placeholder="Location:" className="div-input"  onChange={ (e) => this.handleLocationChange(e.target.value) }></input>
          </div>

          <div>
            <input placeholder="URL:" className="div-input"  onChange={ (e) => this.handleUrlChange(e.target.value) }></input>
          </div>
          
          <button className="admin-button"  onClick={ this.addNewPainting }>Submit</button>
        </div>
      </div>
    );
  }
}