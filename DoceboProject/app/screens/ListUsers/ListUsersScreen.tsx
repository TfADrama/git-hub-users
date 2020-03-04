import React, {Component, Dispatch} from 'react';
import {
  getUsersThunk,
  getUsersWithLinkThunk,
  searchUsersThunk,
  refreshUsersThunk,
  searchUsersWithLinkThunk,
} from './redux/thunks';
import {connect} from 'react-redux';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Colors} from '../../styles';
import {ListUsersList} from '../../components/ListUsers';
import {AppActivityIndicator} from '../../components/common/AppActivityIndicator';
import {searchUser} from '../../api/users/searchUsersAPI';
import {SearchBar} from './../../components/common/SearchBar';
import {UsersReducerType} from './redux/reducer';
import {AppThunkType} from '../../store';

type Props = ReturnType<typeof mapStateToProps> & {
  dispatch: Dispatch<AppThunkType>;
};

class ListUsersScreen extends Component<Props> {
  async componentDidMount() {
    const {dispatch} = this.props;
    dispatch(getUsersThunk());
  }

  onRefresh = () => {
    const {dispatch} = this.props;
    dispatch(refreshUsersThunk());
  };

  onSearch = (keyword: string) => {
    const {dispatch} = this.props;
    dispatch(searchUsersThunk(keyword));
  };

  loadMoreUsers = () => {
    const {dispatch, nextLink, isSearchResults} = this.props;
    if (!nextLink) return;

    if (isSearchResults) {
      dispatch(searchUsersWithLinkThunk(nextLink));
    } else {
      dispatch(getUsersWithLinkThunk(nextLink));
    }
  };

  renderActivityIndicator = () => {
    const {isLoading} = this.props;
    if (!isLoading) return null;

    return (
      <AppActivityIndicator
        text={'LOADING_HOTELS'}
        color={Colors.primaryColor.normal}
      />
    );
  };

  renderUsersList = () => {
    const {
      usersArray,
      isLoading,
      isRefreshing,
      nextLink,
      isLoadMoreFailed,
    } = this.props;
    if (isLoading) return null;
    console.log('==================renderUsersList==================');
    console.log(usersArray);
    console.log('====================================');
    return (
      <ListUsersList
        data={usersArray}
        onPress={() => console.log('pressed')}
        isRefreshing={isRefreshing}
        onRefresh={this.onRefresh}
        hasMoreData={!!nextLink}
        onEndReached={this.loadMoreUsers}
        showLoadMoreButton={isLoadMoreFailed}
      />
    );
  };

  render() {
    const {isSearching} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <SearchBar showLoading={isSearching} onSubmit={this.onSearch} />
        {this.renderUsersList()}
        {this.renderActivityIndicator()}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor.dark,
  },
});

const mapStateToProps = ({users}: {users: UsersReducerType}) => ({
  usersArray: users.users,
  isLoading: users.isLoading,
  nextLink: users.nextLink,
  isSearching: users.isSearching,
  isRefreshing: users.isRefreshing,
  isSearchResults: users.isSearchResults,
  isLoadMoreFailed: users.isLoadMoreFailed,
});

export default connect(mapStateToProps)(ListUsersScreen);
