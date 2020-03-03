import React, {Component, Dispatch} from 'react';
import {getUsersAction, getUsersWithLinkAction} from './redux/thunks';
import {connect} from 'react-redux';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Colors} from '../../styles';
import {ListUsersList} from '../../components/ListUsers';
import {AppActivityIndicator} from '../../components/common/AppActivityIndicator';
import {searchUser} from '../../api/users/searchUsers';
import {SearchBar} from './../../components/common/SearchBar';
import {UsersReducerType} from './redux/reducer';
import {AppThunkType} from '../../store';

type Props = ReturnType<typeof mapStateToProps> & {
  dispatch: Dispatch<AppThunkType>;
  isSearching: boolean;
};

type State = {
  isRefreshing: boolean;
  keywordSearch: string;
};

class ListUsersScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isRefreshing: false,
      keywordSearch: '',
    };
  }

  async componentDidMount() {
    const {dispatch} = this.props;
    dispatch(getUsersAction());
    const u = await searchUser('tom');
    console.log('=================SEARCH USERS===================');
    console.log(u);
    console.log('====================================');
  }

  onRefresh = async () => {
    const {dispatch} = this.props;
    // this.setState({isRefreshing: true});
    dispatch(getUsersAction());
    // this.setState({isRefreshing: false});
  };

  updateSearch = (keywordSearch: string) => {
    this.setState({keywordSearch});
  };

  loadMoreUsers = () => {
    const {dispatch, nextLink} = this.props;
    if (!nextLink) return;

    dispatch(getUsersWithLinkAction(nextLink));
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
    const {usersArray, isLoading, nextLink} = this.props;
    if (isLoading) return null;

    return (
      <ListUsersList
        data={usersArray}
        onPress={() => console.log('pressed')}
        isRefreshing={isLoading}
        onRefresh={this.onRefresh}
        hasMoreData={!!nextLink}
        onEndReached={this.loadMoreUsers}
      />
    );
  };

  render() {
    const {keywordSearch} = this.state;
    const {isSearching} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <SearchBar
          onChangeText={this.updateSearch}
          value={keywordSearch}
          showLoading={isSearching}
          onSubmit={a => console.log(a)}
        />
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
});

export default connect(mapStateToProps)(ListUsersScreen);
