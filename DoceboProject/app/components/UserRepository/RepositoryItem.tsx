import {View, StyleSheet, Text} from 'react-native';
import {Typography, Spacing} from '../../styles';
import React, {FunctionComponent} from 'react';
import {Icon} from 'react-native-elements';

interface Props {
  title: string;
  numberOfStars: number;
}

const RepositoryItem: FunctionComponent<Props> = ({title, numberOfStars}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.rightContainer}>
      <Text style={styles.starsNumber}>{numberOfStars}</Text>
      <Icon name={'star'} type={'material-icons'}></Icon>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    ...Typography.title1,
  },
  starsNumber: {
    ...Typography.title1,
    marginHorizontal: Spacing.MIN_SPACING,
  },
  rightContainer: {
    flexDirection: 'row',
  },
});

export default RepositoryItem;
