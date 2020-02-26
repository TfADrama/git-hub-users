import {GET_USERS_SUCCESS} from '../../constants/UserTypes';

const initialState = {
  users: [],
  nextLink: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
