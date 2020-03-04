export const GET_USERS_REQUEST = 'get_users_request';
export const GET_USERS_SUCCESS = 'get_users_success';
export const GET_USERS_FAILURE = 'get_users_failure';
export const GET_MORE_USERS_FAILURE = 'get_more_users_failure';
export const GET_MORE_USERS_REQUEST = 'get_more_users_request';
export const GET_MORE_USERS_SUCCESS = 'get_more_users_success';
export const SEARCH_USERS_REQUEST = 'search_users_request';
export const SEARCH_USERS_SUCCESS = 'search_users_success';
export const SEARCH_USERS_FAILURE = 'search_users_failure';
export const REFRESH_USERS_REQUEST = 'refresh_users_request';
export const REFRESH_USERS_SUCCESS = 'refresh_users_success';
export const REFRESH_USERS_FAILURE = 'refresh_users_failure';

/**
 * GET USERS ACTIONS
 */
interface GetUsersRequestAction {
  type: typeof GET_USERS_REQUEST;
}
interface GetUsersSuccessAction {
  type: typeof GET_USERS_SUCCESS;
  payload: Users;
}
interface GetUsersFailureAction {
  type: typeof GET_USERS_FAILURE;
}

type GetUserTypes =
  | GetUsersRequestAction
  | GetUsersSuccessAction
  | GetUsersFailureAction;

/**
 * GET MORE USERS ACTIONS
 */
interface GetMoreUsersRequestAction {
  type: typeof GET_MORE_USERS_REQUEST;
}
interface GetMoreUsersSuccessAction {
  type: typeof GET_MORE_USERS_SUCCESS;
  payload: Users;
}
interface GetMoreUsersFailureAction {
  type: typeof GET_MORE_USERS_FAILURE;
}

type GetMoreUsersTypes =
  | GetMoreUsersRequestAction
  | GetMoreUsersSuccessAction
  | GetMoreUsersFailureAction;

/**
 * SEARCH USERS ACTIONS
 */
interface SearchUsersRequestAction {
  type: typeof SEARCH_USERS_REQUEST;
}
interface SearchUsersSuccessAction {
  type: typeof SEARCH_USERS_SUCCESS;
  payload: Users;
}
interface SearchUsersFailureAction {
  type: typeof SEARCH_USERS_FAILURE;
}

export interface Users {
  users: Array<object>;
  nextLink: string;
}

type SearchUsersTypes =
  | SearchUsersRequestAction
  | SearchUsersSuccessAction
  | SearchUsersFailureAction;

/**
 * REFRESH USERS ACTIONS
 */
interface RefreshUsersRequestAction {
  type: typeof REFRESH_USERS_REQUEST;
}
interface RefreshUsersSuccessAction {
  type: typeof REFRESH_USERS_SUCCESS;
  payload: Users;
}
interface RefreshUsersFailureAction {
  type: typeof REFRESH_USERS_FAILURE;
}

type RefreshUsersTypes =
  | RefreshUsersRequestAction
  | RefreshUsersSuccessAction
  | RefreshUsersFailureAction;

export interface Users {
  users: Array<object>;
  nextLink: string;
}

export type UserActionTypes =
  | GetUserTypes
  | GetMoreUsersTypes
  | SearchUsersTypes
  | RefreshUsersTypes;
