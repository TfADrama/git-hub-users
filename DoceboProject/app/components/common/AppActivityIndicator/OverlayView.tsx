import React from 'react';
import { View, StyleSheet } from 'react-native';

const OverlayView = ({
  isOpaque = false,
  style,
  children,
  backgroundColor = '#00000080', // Color must have transparency value
  isTransparent = false,
}) => (
  <View
    style={[
      styles.overlay,
      !isOpaque && !isTransparent && { opacity: 0.5 },
      !isTransparent && { backgroundColor },
      style,
    ]}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default OverlayView;
