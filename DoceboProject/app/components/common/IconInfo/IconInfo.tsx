import React, {FunctionComponent} from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Spacing, Typography} from '../../../styles';
import {IconType, Icon} from 'react-native-elements';

interface Props {
  iconName: string;
  iconType?: IconType;
  value: string;
  onPress: () => void;
}

const IconInfo: FunctionComponent<Props> = ({
  iconName,
  iconType,
  value,
  onPress,
}) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Icon name={iconName} type={iconType} containerStyle={styles.icon} />
    <Text style={styles.text}>{value}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Spacing.MIN_SPACING,
  },
  icon: {
    marginRight: Spacing.DEFAULT_SPACING,
  },
  text: {
    ...Typography.title2,
  },
});

export default IconInfo;
