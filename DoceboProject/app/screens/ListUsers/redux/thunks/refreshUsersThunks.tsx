import {fetchUsers} from '../../../../api';
import {
  refreshUsersRequestAction,
  refreshUsersSuccessAction,
  refreshUsersFailureAction,
} from '../actions';
import {AppThunkType} from '../../../../store';

export const refreshUsersThunk = (): AppThunkType => async dispatch => {
  dispatch(refreshUsersRequestAction());

  try {
    const {data, next} = await fetchUsers();
    console.log('===============data=====================');
    console.log(data);
    console.log('====================================');
    dispatch(
      refreshUsersSuccessAction({
        users: data,
        nextLink: next,
      }),
    );
  } catch (error) {
    console.log(error);
    dispatch(refreshUsersFailureAction());
  }
};
