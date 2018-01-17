import React, { Component } from 'react';

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
        <div className="painting" key={ index }>
          <div className="painting-img-div">
            <img src={ element.url } alt={ element.title }/>
          </div>
          <div className="info-div">
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
    // console.log(displayArray)

    return (
      <div className="display-paintings">
       { displayArray }
      </div>
    )
  }
}