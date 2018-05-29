import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducers from './reducers/index' 
import middlewares from './middlewares/index'

import './index.css'

const store = createStore(reducers, middlewares)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));
