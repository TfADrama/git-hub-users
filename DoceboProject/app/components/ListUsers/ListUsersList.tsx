import React, {FunctionComponent} from 'react';
import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Platform,
  RefreshControl,
} from 'react-native';
import ListUsersItem from './ListUsersItem';
import {Colors, Spacing} from '../../styles';
import {AppRefreshControl} from '../common/AppRefreshControl';
import EmptyList from '../common/EmptyList/EmptyList';
import {EMPTY_LIST_TITLE} from '../../screens/ListUsers/strings';
import {AppButton} from '../common/AppButton';

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
  const listFooterComponent = () => {
    if (!hasMoreData) return null;

    if (showLoadMoreButton) {
      return (
        <AppButton
          title="Load More"
          style={styles.loadMoreBtn}
          onPress={onEndReached}
        />
      );
    }

    return (
      <ActivityIndicator size="small" color={Colors.secondaryColor.normal} />
    );
  };

  const listEmptyComponent = () => <EmptyList title={EMPTY_LIST_TITLE} />;

  const renderRefreshControl = () =>
    Platform.select({
      // Android is not recognizing the custom component
      ios: (
        <AppRefreshControl
          onRefresh={onRefresh}
          isRefreshing={isRefreshing}
          title={'PTR_TITLE'}
        />
      ),
      android: (
        <RefreshControl onRefresh={onRefresh} refreshing={isRefreshing} />
      ),
    });

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => onPress(item.login)}
      style={styles.itemContainer}>
      <ListUsersItem title={item.login} imgURL={item.avatar_url} />
    </TouchableOpacity>
  );
  const keyExtractor = item => item.id.toString();

  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={renderItem}
      ListFooterComponent={listFooterComponent}
      ListFooterComponentStyle={styles.footerContainer}
      refreshControl={renderRefreshControl()}
      ListEmptyComponent={listEmptyComponent}
      contentContainerStyle={{flexGrow: 1}} // Added to center the empty list component
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      onEndReached={!showLoadMoreButton ? onEndReached : undefined}
      onEndReachedThreshold={0.01}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.MIN_SPACING,
  },
  itemContainer: {
    flex: 1,
  },
  footerContainer: {
    marginVertical: Spacing.MAX_SPACING,
  },
  loadMoreBtn: {
    marginBottom: 20,
  },
});
