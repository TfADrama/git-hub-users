import React, {FunctionComponent} from 'react';
import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Platform,
  RefreshControl,
} from 'react-native';
import {Spacing} from '../../../styles';
import {AppRefreshControl} from '../../common/AppRefreshControl';
import EmptyList from '../../common/EmptyList/EmptyList';
import {LoadMoreListFooter} from '../../common/LoadMoreListFooter';

type Props = {
  data: Array<object>;
  hasMoreData: boolean;
  isRefreshing: boolean;
  showLoadMoreButton: boolean;
  onEndReached(): void;
  onRefresh(): void;
  onItemPress(index: number): void;
  emptyListTitle?: string;
  pullToRefreshTitle?: string;
  renderItem: FunctionComponent;
};

export const BaseList: FunctionComponent<Props> = ({
  data = [],
  hasMoreData = false,
  onEndReached,
  isRefreshing = false,
  onRefresh,
  onItemPress,
  showLoadMoreButton = false,
  emptyListTitle = '',
  pullToRefreshTitle = '',
  renderItem,
}) => {
  const listFooterComponent = () => (
    <LoadMoreListFooter
      hasMoreData={hasMoreData}
      onLoadMoreBtnPress={onEndReached}
      showLoadMoreButton={showLoadMoreButton}
    />
  );

  const listEmptyComponent = () => <EmptyList title={emptyListTitle} />;

  const renderRefreshControl = () =>
    Platform.select({
      // Android is not recognizing the custom component
      ios: (
        <AppRefreshControl
          onRefresh={onRefresh}
          isRefreshing={isRefreshing}
          title={pullToRefreshTitle}
        />
      ),
      android: (
        <RefreshControl onRefresh={onRefresh} refreshing={isRefreshing} />
      ),
    });

  const _renderItem = itemProps => {
    const {item, index} = itemProps;
    if (!onItemPress) return renderItem(itemProps); // No need to be a button

    return (
      <TouchableOpacity
        onPress={() => onItemPress(index)}
        style={styles.itemContainer}>
        {renderItem(itemProps)}
      </TouchableOpacity>
    );
  };
  const keyExtractor = item => item.id.toString();

  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={_renderItem}
      ListFooterComponent={listFooterComponent}
      ListFooterComponentStyle={styles.footerContainer}
      refreshControl={renderRefreshControl()}
      ListEmptyComponent={listEmptyComponent}
      contentContainerStyle={{flexGrow: 1}} // Added to center the empty list component
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      onEndReached={!showLoadMoreButton ? onEndReached : undefined}
      onEndReachedThreshold={0.01} //Fires only on the bottom
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
