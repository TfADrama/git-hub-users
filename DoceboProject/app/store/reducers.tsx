import {combineReducers} from 'redux';
import users from '../screens/ListUsers/redux/reducer';

export const rootReducers = combineReducers({
  users,
});

export type RootState = ReturnType<typeof rootReducers>;
