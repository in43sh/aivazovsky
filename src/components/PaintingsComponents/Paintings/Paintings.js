import React, { Component } from 'react';
import axios from 'axios';
import './Paintings.css';
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

  // orderYearAsc = () => {
  //   let current_paintings = {
  //     data: this.state.paintings
  //   }
  //   console.log(this.state.paintings);
  //   console.log('hereeee');
  //   axios.get('/api/order-by-year-asc', current_paintings)
  //   .then((response) => {
  //     console.log('response ->', response);
  //     console.log('response.data ->', response.data);
  //     this.setPaintings(response.data)
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })
  // }
  // orderYearAsc = () => {
  //   const copyArray = this.state.paintings;

  //   copyArray.sort( (a, b) => a.year > b.year);
  // }

  render() {
    return (
      <div className="paintings-parent-container">
        <div className="paintings-child-container">
          <div className="paintings-menu-container">
            {/* think about separating search by title and filter by genre so that if we have some value in the search input field,
              we still would be able to filter by genre */}
            <input className="paintings-menu-search-input" placeholder="search..." onChange={ (e) => this.setState({ searchInput: e.target.value }) }></input>
            <button className="paintings-menu-btns"  onClick={ () => {this.getPaintingsByGenre('battle')} }>battle paintings</button>
            <button className="paintings-menu-btns"  onClick={ () => {this.getPaintingsByGenre('marina')} }>marina</button>
            <button className="paintings-menu-btns"  onClick={ () => {this.getPaintingsByGenre('landscape')} }>landscape</button>
            <button className="paintings-menu-btns"  onClick={ () => {this.getPaintingsByGenre('cityscape')} }>cityscape</button>
            <button className="paintings-menu-btns"  onClick={ this.orderYearAsc }>order by year ↑</button>
            <button className="paintings-menu-btns"  onClick={ this.getPaintings }>clear filters</button>
          </div>
          
          <div className="showpaintings-put-in-paintings-container">
            <ShowPaintings
              SearchResults = { this.state.paintings }
              SearchInput = { this.state.searchInput }
            />
          </div>

          <div className="paintings-empty-container"></div>
        </div>
      </div>
    );
  }
}

export default Paintings;