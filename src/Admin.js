import React, { Component } from 'react';
import axios from 'axios';

class Admin extends Component {
  constructor () {
    super();
    this.state = {
      titleInput: '',
      yearInput: '',
      sizeInput: '',
      locationInput: ''
    }
    this.addNewPainting  = this.addNewPainting.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  handleTitleChange(val) {
    this.setState({ titleInput: val})
    console.log('title ' + this.state.titleInput);
  }

  handleYearChange(val) {
    this.setState({ yearInput: val})
    console.log('year ' + this.state.yearInput);
  }

  handleSizeChange(val) {
    this.setState({ sizeInput: val})
    console.log('size ' + this.state.sizeInput);
  }

  handleLocationChange(val) {
    this.setState({ locationInput: val})
    console.log('location ' + this.state.locationInput);
  }

  addNewPainting() {
    axios.post(`http://localhost:3333/api/add`, {
      title: this.state.titleInput,
      year: this.state.yearInput,
      size: this.state.yearInput,
      location: this.state.locationInput
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
      <div className="Admin">
        <div>
          <div className="Admin-header">
            <h2>Admin</h2>
          </div>
          <div className="Add-painting-div">
            <div>Please enter the information about the painting:</div>
            <br />

            <div>
              <div>Title:</div>
              <input onChange={ (e) => this.handleTitleChange(e.target.value) }></input>
            </div>
            
            <div>Year:
              <input onChange={ (e) => this.handleYearChange(e.target.value) }></input>
            </div>
            
            <div>Size:
              <input onChange={ (e) => this.handleSizeChange(e.target.value) }></input>
            </div>
            
            <div>Location:
              <input onChange={ (e) => this.handleLocationChange(e.target.value) }></input>
            </div>
            
            <button className="Button" onClick={ this.addNewPainting }>Submit</button>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Admin;
