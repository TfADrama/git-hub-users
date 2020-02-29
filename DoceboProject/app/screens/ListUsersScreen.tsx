import React, {Component} from 'react';
import {getUsersAction} from '../actions/users/UserActions';
import {connect} from 'react-redux';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {Colors} from '../styles';
import {ListUsersList} from '../components/ListUsers';

class ListUsersScreen extends Component {
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(getUsersAction());
  }

  render() {
    const {usersArray} = this.props;

    console.log('==============usersArray======================');
    console.log(usersArray);
    console.log('====================================');
    return (
      <SafeAreaView
        style={{
          flex: 1,
          // alignItems: 'center',
          // justifyContent: 'center',
          backgroundColor: Colors.primaryColor.normal,
        }}>
        <ListUsersList
          data={usersArray}
          onPress={() => console.log('pressed')}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = ({users}) => ({
  usersArray: users.users,
});

export default connect(mapStateToProps)(ListUsersScreen);
