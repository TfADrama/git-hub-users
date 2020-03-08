import React, {FunctionComponent} from 'react';
import {CardContainer} from '../../components/common/Card';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
  Linking,
  Platform,
} from 'react-native';
import {Spacing, Typography} from '../../styles';
import {IconInfo} from '../../components/common/IconInfo';
import AccountCircle from '../../assets/icons/AccountCircle/baseline_account_circle_white_48pt.png';

interface Props {
  externalLink: string;
  email: string;
  location: string;
  sourceImg: ImageSourcePropType;
  name: string;
}

const BasicUserInfo: FunctionComponent<Props> = ({
  externalLink,
  email,
  location,
  sourceImg,
  name,
}) => {
  //TODO: Meter isto em components
  function renderEmailItem() {
    if (!email) return null;
    const onPress = () => {
      Linking.openURL(`mailto:${email}`);
    };

    return (
      <IconInfo
        iconName={'email'}
        iconType={'material-icons'}
        onPress={onPress}
        value={email}
      />
    );
  }

  function renderLocationItem() {
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
  }

  function renderLinkItem() {
    if (!externalLink) return null;
    const onPress = () => {
      Linking.openURL(externalLink);
    };

    return (
      <IconInfo
        iconName={'external-link'}
        iconType={'font-awesome'}
        onPress={onPress}
        value={externalLink}
      />
    );
  }

  console.log('sasa', name);

  return (
    <CardContainer style={styles.container}>
      <View style={styles.topSection}>
        <Image
          defaultSource={AccountCircle}
          resizeMode={'contain'}
          source={sourceImg}
          style={styles.img}
        />
        {name && <Text style={styles.title}>{name}</Text>}
      </View>

      {renderEmailItem()}
      {renderLocationItem()}
      {renderLinkItem()}
    </CardContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: Spacing.MIN_SPACING,
  },
  topSection: {
    marginBottom: Spacing.MAX_SPACING,
    alignItems: 'center',
  },
  img: {
    marginRight: Spacing.DEFAULT_SPACING,
    height: Spacing.PROFILE_IMG_SIZE,
    width: Spacing.PROFILE_IMG_SIZE,
    borderRadius: Spacing.DEFAULT_RADIUS,
    marginBottom: Spacing.DEFAULT_SPACING,
  },
  title: {
    ...Typography.title1,
  },
});

export default BasicUserInfo;
