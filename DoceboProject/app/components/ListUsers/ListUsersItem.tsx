import React, {FunctionComponent} from 'react';
import {View, StyleSheet, Text, Image, Platform} from 'react-native';
import {RoundedImage} from '../common/RoundedImage';
import AccountCircle from '../../assets/icons/AccountCircle/baseline_account_circle_white_48pt.png';
import {PROFILE_IMG_SIZE, PROFILE_IMG_RADIUS} from '../../styles/spacing';
import {Spacing, Colors} from '../../styles';
import {Icon} from 'react-native-elements';

type ListUsersItemProps = {
  imgURL: string;
  title: string;
};

const ListUsersItem: FunctionComponent<ListUsersItemProps> = ({
  imgURL,
  title,
}) => {
  const NavigationArrow = Platform.select({
    android: (
      <Icon
        name="arrow-forward"
        type="materialIcons"
        color={Colors.primaryColor.light}
        size={30}
      />
    ),
    ios: (
      <Icon
        name="keyboard-arrow-right"
        type="materialIcons"
        color={Colors.primaryColor.light}
        size={30}
      />
    ),
  });

  return (
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
      {NavigationArrow}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
});

export default ListUsersItem;
