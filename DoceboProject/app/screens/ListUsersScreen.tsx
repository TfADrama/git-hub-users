import React, {Component} from 'react';
import {getUsersAction} from '../actions/users/UserActions';
import {connect} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import RoundedImage from '../components/RoundedImage/RoundedImage';
import AccountCircle from '../assets/icons/AccountCircle/baseline_account_circle_white_48pt.png';
import {PROFILE_IMG_SIZE, PROFILE_IMG_RADIUS} from '../styles/spacing';

class ListUsersScreen extends Component {
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(getUsersAction());
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <RoundedImage
          style={styles.userImg}
          source={{uri: 'https://avatars0.githubusercontent.com/u/1?v=4'}}
          placeholderSource={AccountCircle}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  userImg: {
    height: PROFILE_IMG_SIZE,
    width: PROFILE_IMG_SIZE,
    borderRadius: PROFILE_IMG_RADIUS,
  },
  img: {},
});

export default connect()(ListUsersScreen);
