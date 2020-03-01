export const GET_USERS_REQUEST = 'get_users_request';
export const GET_USERS_SUCCESS = 'get_users_success';
export const GET_MORE_USERS_REQUEST = 'get_more_users_request';
export const GET_MORE_USERS_SUCCESS = 'get_more_users_success';

interface GetUsersRequestAction {
  type: typeof GET_USERS_REQUEST;
}
interface GetUsersSuccessAction {
  type: typeof GET_USERS_SUCCESS;
  payload: Users;
}

interface GetMoreUsersRequestAction {
  type: typeof GET_MORE_USERS_REQUEST;
}
interface GetMoreUsersSuccessAction {
  type: typeof GET_MORE_USERS_SUCCESS;
  payload: Users;
}

export interface Users {
  users: Array<object>;
  nextLink: string;
}

export type UserActionTypes =
  | GetUsersRequestAction
  | GetUsersSuccessAction
  | GetMoreUsersRequestAction
  | GetMoreUsersSuccessAction;
