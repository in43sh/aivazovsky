import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css';
import Home from './Home';
import Biography from './Biography';
import Paintings from './Paintings';
import About from './About';
import Credits from './Credits';
import Admin from './Admin';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/biography" component={Biography}></Route>
      <Route path="/paintings" component={Paintings}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/credits" component={Credits}></Route>
      <Route path="/admin" component={Admin}></Route>
    </Switch>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
