import {createStackNavigator} from 'react-navigation-stack';
import ListUsersScreen from '../../screens/ListUsers/ListUsersScreen';
import UserDetailScreen from '../../screens/UserDetail/UserDetailScreen';

export default createStackNavigator({
  ListUsers: {
    screen: ListUsersScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  UserDetail: {
    screen: UserDetailScreen,
  },
});
