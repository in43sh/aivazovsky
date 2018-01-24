import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import request  from 'superagent';

export default class ImageUpload extends Component {
  onDrop = (files) => {
    request
    .post('/api/upload')
    .attach('painting', files[0]) // 'painting' has to match with another string in /server/index.js (line 38)
    .end((error, response) => {
      if (error) console.log(error);
      console.log('File Uploaded Succesfully');
    })
  }

  render() {
    return (
        <div>
          <Dropzone onDrop={ this.onDrop } multiple={ false }>
            <div>Drop a file here, or click to select a file to upload.</div>
          </Dropzone>
        </div>
    );
  }
}