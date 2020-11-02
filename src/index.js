import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import axios from 'axios';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';

// THE HISTORY REDUCER
const historyReducer = (state = [], action) => {
  if (action.type === 'UPDATE_HISTORY') {
    return action.payload;
  }
  return state;
}

// SAGA STUFF
function* postCalculationSaga(action) {
  console.log('postCalculationSaga was hit with action:', action);
  try {
    yield axios.post('/calculations', action.payload);
    // then refresh history??
  } catch (error) {
    console.log('error posting an element', error);
  }    
}

function* watcherSaga() {
  yield takeEvery('SAVE_CALCULATION_TO_DB', postCalculationSaga);
}

const sagaMiddleware = createSagaMiddleware();




const storeInstance = createStore(
  combineReducers({
    historyReducer,
  }),
  applyMiddleware(logger, sagaMiddleware),
);

sagaMiddleware.run(watcherSaga);

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
