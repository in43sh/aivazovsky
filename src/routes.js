import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Biography from './components/Biography';
import Paintings from './components/Paintings';
import About from './components/About';
import Credits from './components/Credits';
import Admin from './components/Admin';
import NotFound from './components/NotFound';

import AddNewPainting from './components/AddNewPainting';
import UpdatePainting from './components/UpdatePainting';
import DestroyPainting from './components/DestroyPainting';
import AdminDashboard from './components/AdminDashboard';
import Uploader from './components/Uploader';

export default (
  <Switch>
    <Route exact path="/" component={ Home } />
    <Route path="/biography" component={ Biography }/>
    <Route path="/paintings" component={ Paintings }/>
    <Route path="/about" component={ About }/>
    <Route path="/credits" component={ Credits }/>
    <Route path="/admin" component={ Admin }/>
    <Route path="/dashboard" component={ AdminDashboard }/>

    <Route path="/add" component={ AddNewPainting } />
    <Route path="/update" component={ UpdatePainting } />
    <Route path="/destroy" component={ DestroyPainting } />

    <Route path="/uploader" component={ Uploader }/>
    
    <Route path="*" component={ NotFound }/>
  </Switch>
)