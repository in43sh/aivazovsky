import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Biography from './components/Biography/Biography';
import Paintings from './components/Paintings/Paintings';
import About from './components/About/About';
import Credits from './components/Credits/Credits';
import Admin from './components/Admin/Admin';
import NotFound from './components/NotFound/NotFound';

import AddNewPainting from './components/Admin/AddNewPainting';
import UpdatePainting from './components/Admin/UpdatePainting';
import DestroyPainting from './components/Admin/DestroyPainting';
import AdminDashboard from './components/Admin/AdminDashboard';

import UserPaintings from './components/Admin/UserPaintings';

import Uploader from './components/Admin/Uploader';

import SlideShow from './components/SlideShow/SlideShow';

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

    <Route path="/user_paintings" component={ UserPaintings } />

    <Route path="/uploader" component={ Uploader }/>

    <Route path="/slideshow" component={ SlideShow }/>
    
    <Route path="*" component={ NotFound }/>
  </Switch>
)