import React, {Component} from 'react';
import {fetchUsers} from './api/usersAPI';

export default class App extends Component {
  componentDidMount() {
    fetchUsers();
  }

  render() {
    return null;
  }
}
