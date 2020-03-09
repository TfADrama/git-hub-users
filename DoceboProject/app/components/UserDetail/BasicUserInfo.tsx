import React, {FunctionComponent} from 'react';
import {CardContainer} from '../../components/common/Card';
import {Text, View, StyleSheet, Image, ImageSourcePropType} from 'react-native';
import {Spacing, Typography} from '../../styles';
import AccountCircle from '../../assets/icons/AccountCircle/baseline_account_circle_white_48pt.png';
import EmailItem from './EmailItem';
import LocationItem from './LocationItem';
import ExternalLinkItem from './ExternalLinkItem';

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
  console.log('rendering BasicUserInfo');

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

      <EmailItem email={email} />
      <LocationItem location={location} />
      <ExternalLinkItem externalLink={externalLink} />
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

export default React.memo(BasicUserInfo);
