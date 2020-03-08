import React, {Component} from 'react';
import {NavigationScreenProp, NavigationState} from 'react-navigation';
import {BasicUserInfo} from '../../components/UserDetail';
import {fetchUser} from '../../api/users';
interface NavigationParams {
  username: string;
}

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

interface Props {
  navigation: Navigation;
}

class UserDetailScreen extends Component<Props> {
  public static navigationOptions = ({
    navigation,
  }: {
    navigation: Navigation;
  }) => ({
    headerTitle: navigation.state.params
      ? navigation.state.params.username
      : '',
  });

  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  async componentDidMount() {
    const {navigation} = this.props;
    const username = navigation.state.params?.username;
    const user = await fetchUser(username);
    console.log('user');

    this.setState({user});
  }

  render() {
    const {user} = this.state;
    if (!user) return null;

    return (
      <BasicUserInfo
        email={user.email}
        location={user.location}
        externalLink={user.url}
        username={user.name}
        sourceImg={{uri: user.avatar_url}}
      />
    );
  }
}

export default UserDetailScreen;
