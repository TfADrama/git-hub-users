import React, {FunctionComponent} from 'react';
import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import ListUsersItem from './ListUsersItem';
import {Colors, Spacing} from '../../styles';

type ListUsersListProps = {
  data: Array<object>;
  hasMoreData: false;
  getMoreData(): void;
  onPress(username: string): void;
};

export const ListUsersList: FunctionComponent<ListUsersListProps> = ({
  data = [],
  hasMoreData = true,
  getMoreData,
  onPress,
}) => {
  const listFooterComponent = () =>
    hasMoreData && (
      <ActivityIndicator size="small" color={Colors.secondaryColor.normal} />
    );

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
      data={data}
      renderItem={renderItem}
      ListFooterComponent={listFooterComponent}
      ListFooterComponentStyle={styles.footerContainer}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      onEndReached={getMoreData}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
  },
  footerContainer: {
    marginVertical: Spacing.MAX_SPACING,
  },
});
