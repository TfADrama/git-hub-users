import React, {FunctionComponent} from 'react';
import {StyleSheet} from 'react-native';
import {ProgressiveImage} from '../ProgressiveImage';

type RoundedImageProps = {
  placeholderSource: object;
  source: object;
  style: object;
};

const RoundedImage: FunctionComponent<RoundedImageProps> = ({
  placeholderSource,
  source,
  style,
}) => (
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
});

export default RoundedImage;
