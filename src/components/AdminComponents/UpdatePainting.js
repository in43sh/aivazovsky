import React, { Component } from 'react';
import axios from 'axios';

export default class UpdatePainting extends Component {
  constructor() {
    super();

    this.state = {
      idInput: '',
      dataInput: ''
    }
  }

  updatePainting = () => {
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
        <div className="admin-input-div">
          <div>Update:</div>
          <input className="input-data-field" placeholder="id" onChange={ (e) => this.setState({ idInput: e.target.value }) }></input>
          <input className="input-data-field" placeholder="data" onChange={ (e) => this.setState({ dataInput: e.target.value }) }></input>

          <button className="submit-btn" onClick={ this.updatePainting }>update</button>
        </div>
      </div>
    );
  }
}