import React, {Component} from 'react';
import {fetchUsers} from './api/users';

export default class App extends Component {
  async componentDidMount() {
    const users = await fetchUsers();
    console.log('=================users===================');
    console.log(users);
    console.log('====================================');
  }

  render() {
    return null;
  }
}
