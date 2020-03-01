import React, {FunctionComponent} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {Spacing, Colors, Typography} from '../../../styles';

type EmptyListProps = {
  imageSource: object;
  title: string;
};

const EmptyList: FunctionComponent<EmptyListProps> = ({imageSource, title}) => (
  <View style={styles.container}>
    <Image style={styles.img} source={imageSource} />
    <Text style={styles.text}>{title}</Text>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    ...Typography.title1,
    color: Colors.primaryColor.normal,
  },
  img: {
    marginBottom: Spacing.MAX_SPACING,
  },
});

export default EmptyList;
