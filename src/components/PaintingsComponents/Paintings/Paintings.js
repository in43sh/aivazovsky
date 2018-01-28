import React, { Component } from 'react';
import axios from 'axios';
import ShowPaintings from '../ShowPaintings/ShowPaintings';

class Paintings extends Component {
  constructor() {
    super();

    this.state = {
      paintings: [],
      searchInput: ''
    }
  }

  componentWillMount () {
    axios.get(`/api/paintings`)
    .then((response) => {
      this.setPaintings(response.data)
      console.log(this.state.paintings);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  setPaintings = (paintingsArray) => {
    this.setState({paintings: paintingsArray}) 
  }

  getPaintings = () => {
    axios.get(`/api/paintings`)
    .then((response) => {
      this.setPaintings(response.data)
      // console.log(this.state.paintings);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  getPaintingsByGenre = (str) => {
    axios.get(`/api/genre=${str}`)
    .then((response) => {
      this.setPaintings(response.data)
      // console.log(this.state.paintings);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <div>
        <button onClick={ () => {this.getPaintingsByGenre('battle')} }>battle paintings</button>
        <button onClick={ () => {this.getPaintingsByGenre('marina')} }>marina</button>
        
        <br />
        <button onClick={ this.getPaintings }>clear</button>
        <br />
        <br />
        {/* think about separating search by title and filter by genre so that if we have some value in the search input field,
        we still would be able to filter by genre */}
        <input placeholder="search..." onChange={ (e) => this.setState({ searchInput: e.target.value }) }></input>
        
        <ShowPaintings
          SearchResults = { this.state.paintings }
          SearchInput = { this.state.searchInput }
        />
      </div>
    );
  }
}

export default Paintings;