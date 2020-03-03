import {createStore, compose, applyMiddleware, Action} from 'redux';
import thunk, {ThunkAction} from 'redux-thunk';
import logger from 'redux-logger';
import {rootReducers, RootState} from './reducers';

export type AppThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

export default createStore(
  rootReducers,
  {},
  compose(applyMiddleware(...middleware)),
);
