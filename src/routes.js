import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Biography from './components/Biography/Biography';
import Paintings from './components/PaintingsComponents/Paintings/Paintings';
import About from './components/About/About';
import Credits from './components/Credits/Credits';
import Admin from './components/AdminComponents/Admin/Admin';
import NotFound from './components/NotFound/NotFound';

import AdminDashboard from './components/AdminComponents/AdminDashboard/AdminDashboard';
import AddNewPainting from './components/AdminComponents/AddNewPainting';
import UpdatePainting from './components/AdminComponents/UpdatePainting';
import DestroyPainting from './components/AdminComponents/DestroyPainting';

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
    
    <Route path="*" component={ NotFound }/>
  </Switch>
)