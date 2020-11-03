import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import axios from 'axios';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
// import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';

// THE HISTORY REDUCER
const historyReducer = (state = [], action) => {
  if (action.type === 'UPDATE_HISTORY') {
    return action.payload;
  }
  return state;
}

// SAGA STUFF
function* postCalculationSaga(action) {
  try {
    yield axios.post('/calculations', action.payload);
    yield put({ type: 'FETCH_HISTORY' });
  } catch (error) {
    console.log('error posting calculation', error);
  }    
}

function* getCalculationHistory() {
  try {
    const historyResponse = yield axios.get('/calculations');
    yield put({ type: 'UPDATE_HISTORY', payload: historyResponse.data });
  } catch (error) {
    console.log('error getting history', error);
  }
}

function* watcherSaga() {
  yield takeEvery('SAVE_CALCULATION_TO_DB', postCalculationSaga);
  yield takeEvery('FETCH_HISTORY', getCalculationHistory);
}

const sagaMiddleware = createSagaMiddleware();




const storeInstance = createStore(
  combineReducers({
    historyReducer,
  }),
  applyMiddleware( sagaMiddleware),
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
