import React, {Component} from 'react';
import {getUsersAction} from '../actions/users/UserActions';
import {connect} from 'react-redux';

class ListUsersScreen extends Component {
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(getUsersAction());
  }

  render() {
    return null;
  }
}

export default connect()(ListUsersScreen);
