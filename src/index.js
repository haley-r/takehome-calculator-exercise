import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

const historyReducer = (state={}, action)=>{
  if (action.type === 'UPDATE_HISTORY') {
    return action.payload;
  }
  return state;
}

const storeInstance = createStore(
  combineReducers({
    historyReducer,
  }),
  applyMiddleware(logger),
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


// redux store will hold latest 10 calculations
// when it updates, the components will use useEffect to render
// it will use websocket to know if it is updated by another user
