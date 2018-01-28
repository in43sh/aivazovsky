import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-browser-router';
import './index.css';
import App from './components/App';
import store from './redux/store';
import { Provider } from 'react-redux';
// import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Provider store={store} >
    <Router>
      <App />
    </Router>
  </Provider>
  ,document.getElementById('root'));
// registerServiceWorker();
