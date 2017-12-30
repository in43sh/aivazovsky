import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Biography from './components/Biography';
import Paintings from './components/Paintings';
import About from './components/About';
import Credits from './components/Credits';
import Admin from './components/Admin';
import NotFound from './components/NotFound';

export default (
  <Switch>
    <Route exact path="/" component={ Home } />
    <Route path="/biography" component={ Biography }/>
    <Route path="/paintings" component={ Paintings }/>
    <Route path="/about" component={ About }/>
    <Route path="/credits" component={ Credits }/>
    <Route path="/admin" component={ Admin }/>
    <Route path="*" component={ NotFound }/>
  </Switch>
)