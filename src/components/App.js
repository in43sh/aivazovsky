import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

import routes from '../routes';

export default class App extends Component {
  render() {
    return (
      <div>
        <nav className="navigation">
          <Link to="/" className="links"><div>Aivazovsky</div></Link>
          
          <div className="link-wrap">
            <Link to="/biography" className="links">Biography</Link>
            <Link to="/paintings" className="links">Paintings</Link>
            <Link to="/about" className="links">About</Link>
            <Link to="/admin" className="links">Admin</Link>
          </div>
        </nav>

        <div className="page">
          { routes }
        </div>
      </div>
    )
  }
}