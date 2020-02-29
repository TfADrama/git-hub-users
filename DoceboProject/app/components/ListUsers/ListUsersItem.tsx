import React, {FunctionComponent} from 'react';
import {View, StyleSheet, Text, Image, Platform} from 'react-native';
import {RoundedImage} from '../common/RoundedImage';
import AccountCircle from '../../assets/icons/AccountCircle/baseline_account_circle_white_48pt.png';
import {PROFILE_IMG_SIZE, PROFILE_IMG_RADIUS} from '../../styles/spacing';
import {Spacing, Colors} from '../../styles';

const NavigationArrow = Platform.select({
  android: () =>
    require('../../assets/icons/ArrowForward/android/baseline_arrow_forward_white_48pt.png'),
  ios: () =>
    require('../../assets/icons/ArrowForward/ios/baseline_arrow_forward_ios_white_48pt.png'),
});

type ListUsersItemProps = {
  imgURL: string;
  title: string;
};

const ListUsersItem: FunctionComponent<ListUsersItemProps> = ({
  imgURL,
  title,
}) => (
  <View style={styles.container}>
    <View style={styles.leftWrapper}>
      <RoundedImage
        style={styles.userImg}
        source={{uri: imgURL}}
        placeholderSource={AccountCircle}
      />
      <Text style={styles.textLbl} ellipsizeMode="tail" numberOfLines={1}>
        {title}
      </Text>
    </View>

    <Image
      resizeMode={'contain'}
      style={styles.img}
      source={NavigationArrow()}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.primaryColor.dark,
    paddingVertical: Spacing.MIN_SPACING,
  },
  leftWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImg: {
    height: PROFILE_IMG_SIZE,
    width: PROFILE_IMG_SIZE,
    borderRadius: PROFILE_IMG_RADIUS,
  },
  textLbl: {
    flexShrink: 2,
    marginHorizontal: Spacing.DEFAULT_SPACING,
    color: Colors.primaryColor.normal,
  },
  img: {
    height: 30,
    width: 30,
    tintColor: Colors.primaryColor.normal,
  },
});

export default ListUsersItem;
