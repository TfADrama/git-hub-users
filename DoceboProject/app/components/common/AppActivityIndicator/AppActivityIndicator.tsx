import React from 'react';
import {ActivityIndicator, StyleSheet, Text} from 'react-native';
import OverlayView from './OverlayView';
import {Colors, Spacing, Typography} from '../../../styles';

const AppActivityIndicator = ({text, color = Colors.primaryColor.dark}) => (
  <OverlayView isTransparent>
    <ActivityIndicator animating size="large" color={color} />
    <Text style={[styles.text, {color: color}]}>{text}</Text>
  </OverlayView>
);

export default AppActivityIndicator;

const styles = StyleSheet.create({
  text: {
    ...Typography.title1,
    color: Colors.primaryColor.dark,
    marginTop: Spacing.DEFAULT_SPACING,
  },
});
