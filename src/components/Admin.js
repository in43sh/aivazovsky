import React, { Component } from 'react';

import AddNewPainting from './AddNewPainting';
import UpdatePainting from './UpdatePainting';
import DestroyPainting from './DestroyPainting';

class Admin extends Component {
  constructor () {
    super();
    this.state = {
      view: 'add'
    }
    this.changeView = this.changeView.bind(this)
  }

  changeView(str) {
    if ( str === 'update' ) {
      this.setState({ view: 'update' })
    } else if ( str === 'destroy' ) {
      this.setState({ view: 'destroy' })
    } else this.setState({ view: 'add' })
  }

  render() {
    return (
      <div>
        <div>
          <h2 className="Title">Admin</h2>
          <button onClick={ () => {this.changeView('add')} }>add</button>
          <button onClick={ () => {this.changeView('update')} }>update</button>
          <button onClick={ () => {this.changeView('destroy')} }>destroy</button>


          {
            this.state.view === 'add' 
            ? <AddNewPainting />
            : this.state.view === 'update'
              ? <UpdatePainting />
              : <DestroyPainting />
          }
        </div>
      </div>
    );
  }
}

export default Admin;
