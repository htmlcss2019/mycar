import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import Router from './router'
// import configureStore from './redux/store/configureStore';
// const store = configureStore();


ReactDOM.render(
  // <Provider store={store}></Provider>
  <Router/>,
  document.getElementById('root')
)
registerServiceWorker();