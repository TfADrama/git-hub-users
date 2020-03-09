import React, {FunctionComponent} from 'react';
import RepositoryItem from './RepositoryItem';
import {BaseList} from '../common/BaseList';
import {
  REPOSITORIES_EMPTY_LIST_TITLE,
  REPOSITORIES_PULL_TO_REFRESH_TEXT,
} from '../../utils/strings';

type Props = {
  data: Array<object>;
  hasMoreData: boolean;
  isRefreshing: boolean;
  showLoadMoreButton: boolean;
  onEndReached(): void;
  onRefresh(): void;
};

export const UserRepositoryList: FunctionComponent<Props> = ({
  data = [],
  hasMoreData = false,
  onEndReached,
  isRefreshing = false,
  onRefresh,
  showLoadMoreButton = false,
}) => {
  const renderItem = ({item}) => (
    <RepositoryItem title={item.name} numberOfStars={item.stargazers_count} />
  );

  return (
    <BaseList
      data={data}
      hasMoreData={hasMoreData}
      isRefreshing={isRefreshing}
      showLoadMoreButton={showLoadMoreButton}
      onEndReached={onEndReached}
      onRefresh={onRefresh}
      emptyListTitle={REPOSITORIES_EMPTY_LIST_TITLE}
      pullToRefreshTitle={REPOSITORIES_PULL_TO_REFRESH_TEXT}
      renderItem={renderItem}
    />
  );
};
