import React, {FunctionComponent} from 'react';
import ListUsersItem from './ListUsersItem';
import {BaseList} from '../common/BaseList';
import {
  EMPTY_LIST_TITLE,
  USERS_LIST_PULL_TO_REFRESH_TEXT,
} from '../../utils/strings';

type Props = {
  data: Array<object>;
  hasMoreData: boolean;
  isRefreshing: boolean;
  showLoadMoreButton: boolean;
  onEndReached(): void;
  onRefresh(): void;
  onPress(username: string): void;
};

export const ListUsersList: FunctionComponent<Props> = ({
  data = [],
  hasMoreData = false,
  onEndReached,
  isRefreshing = false,
  onRefresh,
  onPress,
  showLoadMoreButton = false,
}) => {
  const renderItem = ({item}) => (
    <ListUsersItem title={item.login} imgURL={item.avatar_url} />
  );

  return (
    <BaseList
      data={data}
      hasMoreData={hasMoreData}
      isRefreshing={isRefreshing}
      showLoadMoreButton={showLoadMoreButton}
      onEndReached={onEndReached}
      onRefresh={onRefresh}
      onItemPress={onPress}
      emptyListTitle={EMPTY_LIST_TITLE}
      pullToRefreshTitle={USERS_LIST_PULL_TO_REFRESH_TEXT}
      renderItem={renderItem}
    />
  );
};
