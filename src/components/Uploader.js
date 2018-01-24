import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import request  from 'superagent';

import { connect } from 'react-redux';
import { urlsend } from '../ducks/reducer';

class Uploader extends Component {
  constructor() {
    super();

    this.state = {
      url: ''
    }
  }
  
  onDrop = (files) => {
    request
    .post('/api/upload')
    .attach('painting', files[0]) // 'painting' has to match with another string in /server/index.js (line 38)
    .end((error, response) => {
      this.setState({ url: response.text })
      this.props.urlsend(response.text)
      console.log('response -> ', response.text)
      if (error) console.log(error);
      console.log('File Uploaded Succesfully');
    })
  }

  render() {
    return (
        <div>
          <Dropzone onDrop={ this.onDrop } multiple={ false }>
            <div>Drop a file here, or click to select a file to upload.</div>
            {/* <div>{this.state.url}</div> */}
          </Dropzone>
          <div>{this.state.url}</div>
        </div>
    );
  }
}

const mapDispatchToProps = {
  urlsend: urlsend
}

export default connect(null, mapDispatchToProps)(Uploader);