import React from 'react';
import {FunctionComponent} from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {Colors, Spacing} from '../../../styles';
type Props = {
  onPress: () => void;
  title: string;
  style: React.CSSProperties;
};
const AppButton: FunctionComponent<Props> = ({onPress, title, style}) => (
  <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
    <Text>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    height: Spacing.DEFAULT_BUTTON_HEIGHT,
    flex: 1,
    backgroundColor: Colors.primaryColor.normal,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Spacing.DEFAULT_RADIUS,
  },
});

export default AppButton;
