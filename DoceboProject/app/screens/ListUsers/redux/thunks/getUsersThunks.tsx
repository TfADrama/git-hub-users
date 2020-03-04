import {fetchUsers, fetchUsersWithLink} from '../../../../api/users';
import {
  getUsersRequestAction,
  getUsersSuccessAction,
  getMoreUsersRequestAction,
  getMoreUsersSuccessAction,
  getMoreUsersFailureAction,
  getUsersFailureAction,
} from '../actions';
import {AppThunkType} from '../../../../store';

export const getUsersThunk = (): AppThunkType => async dispatch => {
  dispatch(getUsersRequestAction());

  try {
    const {data, next} = await fetchUsers();

    dispatch(
      getUsersSuccessAction({
        users: data,
        nextLink: next,
      }),
    );
  } catch (error) {
    console.log(error);
    dispatch(getUsersFailureAction());
  }
};

export const getUsersWithLinkThunk = (
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
