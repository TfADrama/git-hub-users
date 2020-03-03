import {
  GET_USERS_SUCCESS,
  GET_USERS_REQUEST,
  UserActionTypes,
  Users,
  GET_MORE_USERS_REQUEST,
  GET_MORE_USERS_SUCCESS,
  GET_USERS_FAILURE,
  GET_MORE_USERS_FAILURE,
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
// export function getUsersRequestAction(): UserActionTypes {
//   return {
//     type: GET_USERS_REQUEST,
//   };
// }

// export function getUsersSuccessAction(usersList: Users): UserActionTypes {
//   return {
//     type: GET_USERS_SUCCESS,
//     payload: usersList,
//   };
// }

// export function getUsersFailureAction(): UserActionTypes {
//   return {
//     type: GET_USERS_FAILURE,
//   };
// }
