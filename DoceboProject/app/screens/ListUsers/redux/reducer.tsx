import {
  GET_USERS_SUCCESS,
  GET_USERS_REQUEST,
  UserActionTypes,
  GET_MORE_USERS_REQUEST,
  GET_MORE_USERS_SUCCESS,
} from './types';

const initialState = {
  users: [],
  nextLink: '',
  isLoading: false,
};

export default function(state = initialState, action: UserActionTypes) {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        // isLoading: false,
        ...action.payload,
      };
    case GET_MORE_USERS_SUCCESS:
      return {
        users: [...state.users, ...action.payload.users],
        nextLink: action.payload.nextLink,
      };
    case GET_MORE_USERS_REQUEST:
    case GET_USERS_REQUEST:
      return {
        ...state,
        // isLoading: true,
      };
    default:
      return state;
  }
}
