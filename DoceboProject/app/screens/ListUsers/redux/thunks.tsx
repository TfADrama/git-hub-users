import {fetchUsers, fetchUsersWithLink} from '../../../api/users/listUsers';
import {
  getUsersRequestAction,
  getUsersSuccessAction,
  getMoreUsersRequestAction,
  getMoreUsersSuccessAction,
  getMoreUsersFailureAction,
  getUsersFailureAction,
} from './actions';
import {AppThunkType} from '../../../store';

export const getUsersAction = (): AppThunkType => async dispatch => {
  dispatch(getUsersRequestAction());

  try {
    const {data, next} = await fetchUsers();

    setTimeout(() => {
      console.log('time');
      dispatch(
        getUsersSuccessAction({
          users: data,
          nextLink: next,
        }),
      );
    }, 5000);
  } catch (error) {
    console.log(error);
    dispatch(getUsersFailureAction());
  }
};

export const getUsersWithLinkAction = (
  link: string,
): AppThunkType => async dispatch => {
  dispatch(getMoreUsersRequestAction());

  try {
    const {data, next} = await fetchUsersWithLink(link);

    dispatch(
      getMoreUsersSuccessAction({
        users: data,
        nextLink: next,
      }),
    );
  } catch (error) {
    console.log(error);
    dispatch(getMoreUsersFailureAction());
  }
};
