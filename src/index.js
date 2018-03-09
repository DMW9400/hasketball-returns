import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import { rootReducer } from './reducers/index'
import { Provider } from 'react-redux'

// createStore requires a reducer to provide state and a means of operating upon it - here we reference the rootReducer

const store = createStore(rootReducer)

// We wrap the whole app in Provider to pass down store to the entire component hierarchy
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
