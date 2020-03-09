import React, {FunctionComponent} from 'react';
import {Linking, Platform} from 'react-native';
import {IconInfo} from '../common/IconInfo';

interface Props {
  location: string;
}

const LocationItem: FunctionComponent<Props> = ({location}) => {
  if (!location) return null;

  const onPress = () => {
    Platform.select({
      ios: Linking.openURL(`http://maps.apple.com/maps?q=${location}`),
      android: Linking.openURL(`http://maps.google.com/maps?q=${location}`),
    });
  };

  return (
    <IconInfo
      iconName={'location-on'}
      iconType={'material-icons'}
      onPress={onPress}
      value={location}
    />
  );
};

export default React.memo(LocationItem);
