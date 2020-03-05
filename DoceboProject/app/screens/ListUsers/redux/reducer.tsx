import {
  GET_USERS_SUCCESS,
  GET_USERS_REQUEST,
  UserActionTypes,
  GET_MORE_USERS_REQUEST,
  GET_MORE_USERS_SUCCESS,
  SEARCH_USERS_SUCCESS,
  SEARCH_USERS_REQUEST,
  SEARCH_USERS_FAILURE,
  GET_USERS_FAILURE,
  REFRESH_USERS_REQUEST,
  REFRESH_USERS_SUCCESS,
  REFRESH_USERS_FAILURE,
  GET_MORE_USERS_FAILURE,
} from './types';

export interface UsersReducerType {
  users: Array<object>;
  nextLink: string;
  isLoading: boolean;
  isRefreshing: boolean;
  isSearching: boolean;
  isSearchResults: boolean;
  isLoadMoreFailed: boolean;
  isLoadingMore: boolean;
}

const initialState = {
  users: [],
  nextLink: '',
  isLoading: false,
  isRefreshing: false,
  isSearching: false,
  isLoadingMore: false,
  isSearchResults: false,
  isLoadMoreFailed: false,
};

export default function(
  state: UsersReducerType = initialState,
  action: UserActionTypes,
) {
  switch (action.type) {
    /**
     * Requests
     */
    case GET_USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SEARCH_USERS_REQUEST:
      return {
        ...state,
        isSearching: true,
      };
    case REFRESH_USERS_REQUEST:
      return {
        ...state,
        isRefreshing: true,
      };
    case GET_MORE_USERS_REQUEST:
      return {
        ...state,
        isLoadMoreFailed: false,
        isLoadingMore: true,
      };

    /**
     * SUCCESS
     */
    case SEARCH_USERS_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isSearching: false,
        isSearchResults: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        isSearchResults: false,
      };
    case GET_MORE_USERS_SUCCESS:
      return {
        ...state,
        users: [...state.users, ...action.payload.users],
        nextLink: action.payload.nextLink,
        isLoadingMore: false,
      };
    case REFRESH_USERS_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isRefreshing: false,
        isSearchResults: false,
      };

    /**
     * FAILURE
     */
    case SEARCH_USERS_FAILURE:
      return {
        ...state,
        isSearching: false,
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case REFRESH_USERS_FAILURE:
      return {
        ...state,
        isRefreshing: false,
      };
    case GET_MORE_USERS_FAILURE:
      return {
        ...state,
        isLoadMoreFailed: true,
        isLoadingMore: false,
      };
    default:
      return state;
  }
}
