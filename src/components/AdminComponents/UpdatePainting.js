import React, { Component } from 'react';
import axios from 'axios';

export default class UpdatePainting extends Component {
  constructor() {
    super();

    this.state = {
      idInput: '',
      dataInput: ''
    }
    this.updatePainting = this.updatePainting.bind(this)
  }

  updatePainting() {
    let myObj = {
      data: this.state.dataInput
    }
    axios.put(`/api/update/${this.state.idInput}`, myObj)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
      <div className="admin-main">
        <div className="admin-input-form">
          <div>Update:</div>
          <input className="div-input" placeholder="id" onChange={ (e) => this.setState({ idInput: e.target.value }) }></input>
          <input className="div-input" placeholder="data" onChange={ (e) => this.setState({ dataInput: e.target.value }) }></input>

          <button className="submit-btn" onClick={ this.updatePainting }>update</button>
        </div>
      </div>
    );
  }
}