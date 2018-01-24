import React, { Component } from 'react';
import axios from 'axios';

export default class UpdatePainting extends Component {
  constructor() {
    super();

    this.state = {
      idInput: '',
      dataInput: ''
    }
    this.handleIdChange = this.handleIdChange.bind(this)
    this.handleDataChange = this.handleDataChange.bind(this)
    this.updatePainting = this.updatePainting.bind(this)
  }

  handleIdChange(val) {
    this.setState({ idInput: val })
    console.log('id ->  ' + this.state.idInput)
  }

  handleDataChange(val) {
    this.setState({ dataInput: val })
    console.log('data ->  ' + this.state.dataInput)
  }

  updatePainting() {
    let myObj = {
      data: this.state.dataInput
    }
    axios.put(`/api/painting/${this.state.idInput}`, myObj)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
      <div>
        <div className="Admin-input-form">
          <div>Update:</div>
          <input className="div-input" placeholder="id" onChange={ (e) => this.handleIdChange(e.target.value) }></input>
          <input className="div-input" placeholder="data" onChange={ (e) => this.handleDataChange(e.target.value) }></input>

          <button className="admin-button" onClick={ this.updatePainting }>update</button>
        </div>
      </div>
    );
  }
}