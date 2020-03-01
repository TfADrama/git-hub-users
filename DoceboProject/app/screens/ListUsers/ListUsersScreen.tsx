import React, {Component, Dispatch} from 'react';
import {getUsersAction, getUsersWithLinkAction} from './redux/thunks';
import {connect} from 'react-redux';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Colors} from '../../styles';
import {ListUsersList} from '../../components/ListUsers';
import {AppActivityIndicator} from '../../components/common/AppActivityIndicator';
import {Action} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {RootState} from '../../store/reducers';

type Props = {
  dispatch: Dispatch<ThunkAction<void, RootState, unknown, Action<string>>>;
  isLoading: boolean;
  usersArray: Array<object>;
  nextLink: string | undefined;
};

type State = {
  isRefreshing: boolean;
};

class ListUsersScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isRefreshing: false,
    };
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(getUsersAction());
  }

  onRefresh = async () => {
    const {dispatch} = this.props;
    // this.setState({isRefreshing: true});
    dispatch(getUsersAction());
    // this.setState({isRefreshing: false});
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
    return (
      <SafeAreaView style={styles.container}>
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

const mapStateToProps = ({users}: RootState) => ({
  usersArray: users.users,
  isLoading: users.isLoading,
  nextLink: users.nextLink,
});

export default connect(mapStateToProps)(ListUsersScreen);
