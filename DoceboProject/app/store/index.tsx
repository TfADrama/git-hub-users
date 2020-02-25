import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {reducers} from '../reducers';

const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

export default createStore(
  reducers,
  {},
  compose(applyMiddleware(...middleware)),
);
