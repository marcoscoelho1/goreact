import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';

const middlewares = [];

const sagaMiddlware = createSagaMiddleware();
middlewares.push(sagaMiddlware);

const store = createStore(reducers, compose(applyMiddleware(...middlewares)));
sagaMiddlware.run(sagas);

export default store;
