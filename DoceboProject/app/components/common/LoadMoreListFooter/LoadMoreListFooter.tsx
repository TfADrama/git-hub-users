import React, {FunctionComponent} from 'react';
import {AppButton} from '../AppButton';
import {StyleSheet, ActivityIndicator} from 'react-native';
import {Colors} from '../../../styles';

interface Props {
  hasMoreData: boolean;
  showLoadMoreButton: boolean;
  onLoadMoreBtnPress: () => void;
}

const LoadMoreListFooter: FunctionComponent<Props> = ({
  hasMoreData,
  showLoadMoreButton,
  onLoadMoreBtnPress,
}) => {
  if (!hasMoreData) return null;

  if (showLoadMoreButton) {
    return (
      <AppButton
        title="Load More"
        style={styles.loadMoreBtn}
        onPress={onLoadMoreBtnPress}
      />
    );
  }

  return (
    <ActivityIndicator size="small" color={Colors.secondaryColor.normal} />
  );
};

const styles = StyleSheet.create({
  loadMoreBtn: {
    marginBottom: 20,
  },
});

export default LoadMoreListFooter;
