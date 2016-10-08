// Import Libraries
import React from 'react';
import ReactDOM from 'react-dom';

// // Import Redux
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux'

// // Import Middleware
// import ReduxPromise from 'redux-promise'
// import ReduxThunk from 'redux-thunk';

// Import Reducers
import store from './store/store'

// // Create Store
// const createStoreWithMiddleware = applyMiddleware(ReduxThunk, ReduxPromise)(createStore)
// const store = createStoreWithMiddleware(reducer)

import App from './App';
import './index.css';

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
);
