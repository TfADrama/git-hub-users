import React from 'react';
import {View, Animated, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import {Colors} from '../../styles';

const AnimatedActivityIndicator = Animated.createAnimatedComponent(
  ActivityIndicator,
);
const AnimatedFastImage = Animated.createAnimatedComponent(FastImage);

class ProgressiveImage extends React.Component {
  constructor(props) {
    super(props);
    this.imageAnimated = new Animated.Value(0);
    this.placeholderAnimated = new Animated.Value(1);
    this.activityIndicatorAnimated = new Animated.Value(1);
  }

  shouldComponentUpdate() {
    return false;
  }

  onImageLoad = () => {
    this.containerRef.setNativeProps({backgroundColor: 'transparent'});
    Animated.parallel([
      Animated.timing(this.placeholderAnimated, {
        toValue: 0,
        useNativeDriver: true,
      }),
      Animated.timing(this.imageAnimated, {
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start();
  };

  onLoadEnd = () => {
    Animated.timing(this.activityIndicatorAnimated, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  onError = e => {};

  render() {
    const {style, sourceImgStyle, placeholderSource, source} = this.props;
    return (
      <View
        ref={ref => {
          this.containerRef = ref;
        }}
        style={[styles.container, style]}>
        {placeholderSource && (
          <AnimatedFastImage
            source={placeholderSource}
            style={[
              styles.placeholderImage,
              {
                opacity: this.placeholderAnimated,
              },
            ]}
            resizeMode={FastImage.resizeMode.center}
          />
        )}
        {source && (
          <AnimatedFastImage
            ref={this.props.innerRef} // Used To set the source image using native events
            source={source}
            style={[
              styles.viewOverlay,
              sourceImgStyle,
              {opacity: this.imageAnimated},
            ]}
            onLoad={this.onImageLoad}
            onLoadStart={this.onLoadStart}
            onLoadEnd={this.onLoadEnd}
            onError={this.onError}
          />
        )}
        <AnimatedActivityIndicator
          size="small"
          style={[
            styles.viewOverlay,
            {opacity: this.activityIndicatorAnimated},
          ]}
          color={Colors.primaryColor.normal}
        />
      </View>
    );
  }
}

ProgressiveImage.defaultProps = {
  placeholderSource: null,
  style: {},
};

ProgressiveImage.propTypes = {
  placeholderSource: PropTypes.number,
  source: PropTypes.shape({
    uri: PropTypes.string,
  }).isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default React.forwardRef((props, ref) => (
  <ProgressiveImage innerRef={ref} {...props} />
));
