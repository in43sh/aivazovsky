import React, { Component } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import './SlideShow.css'


class SlideShow extends Component {
  constructor() {
    super();

    this.state = {
      paintings: []
    }

  }

  componentWillMount = () => {
    axios.get(`/api/slideshow`)
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


  render () {
    const settings = {
      dots: true,
      infinite: true,
      arrows: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const display = this.state.paintings
    .map((element, index) => {
      return (
        <div key={ index }>
          <div className="slideshow">
            <img src={ element.url } alt={ element.title }/>
          </div>
        </div>
      )
    })
    return (
      <div>
        <Slider {...settings} className="slideshow">
          { display }
        </Slider>
      </div>
    );
  }
}

export default SlideShow;
