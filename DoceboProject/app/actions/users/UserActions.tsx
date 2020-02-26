import {fetchUsers} from '../../api/users';
import {GET_USERS_SUCCESS} from '../../constants/UserTypes';

export const getUsersAction = () => async dispatch => {
  const {data, next} = await fetchUsers();

  dispatch({
    type: GET_USERS_SUCCESS,
    payload: {
      users: data,
      nextLink: next,
    },
  });

  console.log('=================users===================');
  console.log(data);
  console.log(next);
  console.log('====================================');
};
