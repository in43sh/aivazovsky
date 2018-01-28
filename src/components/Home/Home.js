import React, { Component } from 'react';
import SlideShow from '../SlideShow/SlideShow';

class Home extends Component {
  constructor() {
    super();

    this.state = {

    }

  }


  render() {
    return (
      <div className="App">
        <SlideShow />
      </div>
    );
  }
}

export default Home;
