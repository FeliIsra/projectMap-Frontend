import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from '@redux-saga/core';

import storageMiddleware from 'redux/middlewares/storage.middleware';

import reducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, storageMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

export default store;
