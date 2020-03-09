import React, {FunctionComponent} from 'react';
import {View, Text, StyleSheet, ImageSourcePropType} from 'react-native';
import {Spacing, Colors, Typography} from '../../../styles';
import {Icon} from 'react-native-elements';

type EmptyListProps = {
  title: string;
};

const EmptyList: FunctionComponent<EmptyListProps> = ({title}) => (
  <View style={styles.container}>
    <Icon
      name="users"
      type="font-awesome"
      color={Colors.secondaryColor.normal}
      size={50}
      iconStyle={styles.icon}
    />
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
    color: Colors.secondaryColor.normal,
  },
  icon: {
    marginBottom: Spacing.MAX_SPACING,
  },
});

export default EmptyList;
