import React, { Component } from 'react';
import axios from 'axios';

export default class DestroyPainting extends Component {
  constructor() {
    super();

    this.state = {
      idInput: ''
    }
    this.destroyPainting = this.destroyPainting.bind(this)
  }

  destroyPainting() {
    axios.delete(`/api/delete/${this.state.idInput}`)
    .then((response) => {
      // console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
      <div className="admin-main">
        <div className="admin-input-div">
          <div>Please enter the id of the painting you want to delete</div>
          <input className="input-data-field" placeholder="Title:" onChange={ (e) => this.setState({ idInput: e.target.value }) }></input>
          <button className="submit-btn" onClick={ this.destroyPainting }>delete</button>
        </div>
      </div>
    );
  }
}