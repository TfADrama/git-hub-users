import {AppThunkType} from '../../../../store';
import {searchUser} from '../../../../api/users';
import {
  searchUsersSuccessAction,
  searchUsersFailureAction,
  searchUsersRequestAction,
  getMoreUsersRequestAction,
  getMoreUsersFailureAction,
  getMoreUsersSuccessAction,
} from '../actions';
import {fetchUsersWithLink} from '../../../../api/users/listUsersAPI';

export const searchUsersThunk = (
  keyword: string,
): AppThunkType => async dispatch => {
  dispatch(searchUsersRequestAction());

  try {
    const {data, next} = await searchUser(keyword);

    dispatch(
      searchUsersSuccessAction({
        users: data.items,
        nextLink: next,
      }),
    );
  } catch (error) {
    console.log(error);
    dispatch(searchUsersFailureAction());
  }
};

export const searchUsersWithLinkThunk = (
  link: string,
): AppThunkType => async dispatch => {
  dispatch(getMoreUsersRequestAction());

  try {
    const {data, next} = await fetchUsersWithLink(link);

    dispatch(
      getMoreUsersSuccessAction({
        users: data.items,
        nextLink: next,
      }),
    );
  } catch (error) {
    console.log(error);
    dispatch(getMoreUsersFailureAction());
  }
};
