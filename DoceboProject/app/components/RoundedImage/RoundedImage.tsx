import React from 'react';
import {StyleSheet} from 'react-native';
import {ProgressiveImage} from '../ProgressiveImage';

export default ({placeholderSource, source, style}) => (
  <ProgressiveImage
    style={[styles.container, style]}
    sourceImgStyle={[styles.container, style]}
    source={source}
    placeholderSource={placeholderSource}
  />
);

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  img: {},
});
