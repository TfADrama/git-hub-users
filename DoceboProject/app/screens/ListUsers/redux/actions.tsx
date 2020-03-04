import {
  GET_USERS_SUCCESS,
  GET_USERS_REQUEST,
  UserActionTypes,
  Users,
  GET_MORE_USERS_REQUEST,
  GET_MORE_USERS_SUCCESS,
  GET_USERS_FAILURE,
  GET_MORE_USERS_FAILURE,
  SEARCH_USERS_REQUEST,
  SEARCH_USERS_SUCCESS,
  SEARCH_USERS_FAILURE,
  REFRESH_USERS_REQUEST,
  REFRESH_USERS_SUCCESS,
  REFRESH_USERS_FAILURE,
} from './types';

/**
 * GET USERS ACTIONS
 */
export function getUsersRequestAction(): UserActionTypes {
  return {
    type: GET_USERS_REQUEST,
  };
}

export function getUsersSuccessAction(usersList: Users): UserActionTypes {
  return {
    type: GET_USERS_SUCCESS,
    payload: usersList,
  };
}

export function getUsersFailureAction(): UserActionTypes {
  return {
    type: GET_USERS_FAILURE,
  };
}

/**
 * GET MORE USERS ACTIONS
 */
export function getMoreUsersRequestAction(): UserActionTypes {
  return {
    type: GET_MORE_USERS_REQUEST,
  };
}

export function getMoreUsersSuccessAction(usersList: Users): UserActionTypes {
  return {
    type: GET_MORE_USERS_SUCCESS,
    payload: usersList,
  };
}

export function getMoreUsersFailureAction(): UserActionTypes {
  return {
    type: GET_MORE_USERS_FAILURE,
  };
}

/**
 * SEARCH USERS ACTIONS
 */
export function searchUsersRequestAction(): UserActionTypes {
  return {
    type: SEARCH_USERS_REQUEST,
  };
}

export function searchUsersSuccessAction(usersList: Users): UserActionTypes {
  return {
    type: SEARCH_USERS_SUCCESS,
    payload: usersList,
  };
}

export function searchUsersFailureAction(): UserActionTypes {
  return {
    type: SEARCH_USERS_FAILURE,
  };
}

/**
 * REFRESH USERS ACTIONS
 */
export function refreshUsersRequestAction(): UserActionTypes {
  return {
    type: REFRESH_USERS_REQUEST,
  };
}

export function refreshUsersSuccessAction(usersList: Users): UserActionTypes {
  return {
    type: REFRESH_USERS_SUCCESS,
    payload: usersList,
  };
}

export function refreshUsersFailureAction(): UserActionTypes {
  return {
    type: REFRESH_USERS_FAILURE,
  };
}
