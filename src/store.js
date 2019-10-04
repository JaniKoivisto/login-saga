import { applyMiddleware, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import { authentication } from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({ authentication });
const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;
