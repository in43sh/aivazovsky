import React, { Component } from 'react';
import axios from 'axios';

import AddNewPainting from './AddNewPainting';

class Admin extends Component {
  constructor () {
    super();
    this.state = {
      
    }
  }

  render() {
    return (
      <div className="Admin">
        <div>
        <h2 className="Title">Admin</h2>
          <AddNewPainting />
        </div>
      </div>
    );
  }
}

export default Admin;
