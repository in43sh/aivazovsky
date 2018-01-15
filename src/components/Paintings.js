import React, { Component } from 'react';
import axios from 'axios';
import ShowPaintings from './ShowPaintings';

class Paintings extends Component {
  constructor() {
    super();

    this.state = {
      paintings: [],
      searchInput: ''
    }
    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.setPaintings = this.setPaintings.bind(this)
    this.getPaintings = this.getPaintings.bind(this)
    this.getPaintingsByGenre = this.getPaintingsByGenre.bind(this)
  }

  componentDidMount () {
    const paintingsFromContoller = axios.get(`http://localhost:3333/api/paintings`)
    .then((response) => {
      this.setPaintings(response.data)
      console.log(this.state.paintings);
    })
    .catch((error) => {
      console.log(error);
    })
    // {this.getPaintingsByGenre('seascape')}
    // {this.getPaintingsByGenre('marina')}
  }

  handleSearchChange(val) {
    this.setState({ searchInput: val })
    console.log('search input >>>' + this.state.searchInput)
  }

  setPaintings(paintingsArray) {
    this.setState({paintings: paintingsArray}) 
  }

  getPaintings() {
    const paintingsFromContoller = axios.get(`http://localhost:3333/api/paintings`)
    .then((response) => {
      this.setPaintings(response.data)
      // console.log(this.state.paintings);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  getPaintingsByGenre(str) {
    const paintingsFromContoller = axios.get(`http://localhost:3333/api/genre=${str}`)
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
        <h2 className="Title">Paintings</h2>

        <button onClick={ () => {this.getPaintingsByGenre('seascape')} }>seascapes</button>
        <button onClick={ () => {this.getPaintingsByGenre('marina')} }>marina</button>
        
        <br />
        <button onClick={ this.getPaintings }>clear</button>
        <br />
        <br />
        // think about separating search by title and filter by genre so that if we have some value in the search input field,
        // we still would be able to filter by genre
        <input placeholder="search..." onChange={ (e) => this.handleSearchChange(e.target.value) }></input>
        
        <ShowPaintings
          SearchResults = { this.state.paintings }
          SearchInput = { this.state.searchInput }
        />
      </div>
    );
  }
}

export default Paintings;