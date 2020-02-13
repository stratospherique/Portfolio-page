import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import globalReducer from './redux/reducers';


ReactDOM.render(
  <Provider store={createStore(globalReducer)}>
    <App />
  </Provider>,
  document.getElementById('root'));


