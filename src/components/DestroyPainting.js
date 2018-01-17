import React, { Component } from 'react';
import axios from 'axios';

export default class DestroyPainting extends Component {
  constructor() {
    super();

    this.state = {
      idInput: ''
    }
    this.handleIdChange = this.handleIdChange.bind(this)
    this.destroyPainting = this.destroyPainting.bind(this)
  }

  handleIdChange(val) {
    this.setState({ idInput: val })
  }

  destroyPainting(id) {
    axios.delete(`http://localhost:3333/api/delete/${this.state.idInput}`)
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
          <div>Please enter the id of the painting you want to delete</div>
          <input className="div-input" placeholder="Title:" onChange={ (e) => this.handleIdChange(e.target.value) }></input>
          <button className="admin-button" onClick={ this.destroyPainting }>delete</button>
        </div>
      </div>
    );
  }
}