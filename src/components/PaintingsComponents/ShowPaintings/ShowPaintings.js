import React, { Component } from 'react';
import './ShowPaintings.css';

export default class ShowPaintings extends Component {
  constructor() {
    super();

    this.state = {
      paintings: [],
      title: '',
      year: '',
      dimensions: '',
      genre: '',
      location: '',
      url: '',
    }
  }
  
  render() {
    const displayArray = this.props.SearchResults
    .filter((element) => {
      return element.title.toLowerCase().includes(this.props.SearchInput.toLowerCase())
    })
    .map((element, index) => {
      return (
        <div className="showpaintings-div" key={ index }>
          <div className="showpainting-img-div">
            <img src={ element.url } alt={ element.title }/>
          </div>
          <div className="showpainting-info-div">
            <span>Title: { element.title }</span>
            <br />
            <span>Year: { element.year }</span>
            <br />
            <span>Dimensions: { element.dimensions }</span>
            <br />
            <span>Genre: { element.genre }</span>
          </div>
        </div>
      )
    })

    return (
      <div className="display-paintings">
       { displayArray }
      </div>
    )
  }
}