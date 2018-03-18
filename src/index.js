import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import Main from './main';

import { Provider } from 'react-redux';

import store from './store';

import './App.css';


ReactDOM.render(      
  <Provider store={store}>
    <Main />
  </Provider>, document.getElementById('root'));

