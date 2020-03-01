import {ThunkAction} from 'redux-thunk';
import {Action} from 'redux';
import {RootState} from '../../../store/reducers';
import {fetchUsers, fetchUsersWithLink} from '../../../api/users';
import {
  getUsersRequestAction,
  getUsersSuccessAction,
  getMoreUsersRequestAction,
  getMoreUsersSuccessAction,
  getMoreUsersFailureAction,
  getUsersFailureAction,
} from './actions';

export const getUsersAction = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async dispatch => {
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
): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
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
