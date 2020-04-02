import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import Axios from 'axios';


function* watcherSaga() {
  // yield takeEvery('FETCH_PETS', fetchPets);
  yield takeEvery('POST_PET', addPets);
  // yield takeEvery('DELETE_PLANTS', deletePlants);

}

// function* fetchPets() {
//   // const elementResponse = yield Axios.get('/api/pet');
//   // console.log('element array', elementResponse.data);
//   yield put({ type: 'GET_PET', payload: elementResponse.data })
// }

function* addPets(action) {
  console.log('adding pet', action);
  //post axios would be here
  // yield Axios.post('/api/pet', action.payload);
  yield put({type:"ADD_PET", payload: action.payload})
} //adding new pet to petList reducer



const petList = (state = [], action) => {
  console.log('this is petlist', action.payload)
  switch (action.type) {
    case 'ADD_PET':
      return [action.payload]
    default:
      return state;
  }
};




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    petList,
  }),
  applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

