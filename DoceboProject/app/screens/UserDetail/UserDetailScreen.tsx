import React, {useContext, useEffect, useState} from 'react';
import {
  NavigationScreenProp,
  NavigationState,
  NavigationContext,
} from 'react-navigation';
import {BasicUserInfo} from '../../components/UserDetail';
import {fetchUser, fetchUserRepositories, fetchMoreWithLink} from '../../api';
import {Dimensions} from 'react-native';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {TabView, TabBar} from 'react-native-tab-view';
import UserRepositoryView from '../../components/UserRepository/UserRepositoryView';
import {Colors} from '../../styles';

interface NavigationParams {
  username: string;
}

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

interface Props {
  navigation: Navigation;
}

const initialLayout = {width: Dimensions.get('window').width};

const UserDetailScreen: NavigationStackScreenComponent<
  NavigationParams,
  Props
> = () => {
  const navigation = useContext(NavigationContext);

  /**
   * Profile Tab
   */
  const [user, setUser] = useState({});

  /**
   * Repositories Tab
   */
  const [repos, setRepos] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoadMoreFailed, setIsLoadMoreFailed] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [nextLink, setNextLink] = useState('');

  /**
   * Tab component
   */
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'profile', title: 'Profile'},
    {key: 'repositories', title: 'Repositories'},
  ]);

  useEffect(() => {
    const asyncFetchUser = async () => {
      const username = navigation.state.params?.username;
      try {
        const user = await fetchUser(username);
        setUser(user);
      } catch (error) {
        console.log(error);
      }
      try {
        const {data, next} = await fetchUserRepositories(username);
        setRepos(data);
        setNextLink(next);
      } catch (error) {
        console.log(error);
      }
    };

    asyncFetchUser();
  }, []);

  const onRefresh = async () => {
    setIsRefreshing(true);
    const {data, next} = await fetchUserRepositories(user.login);
    setRepos(data);
    setNextLink(next);
    setIsRefreshing(false);
  };

  const loadMoreRepos = async () => {
    if (!nextLink) return; // There are no more users to load
    if (isLoadingMore) return; // prevents duplicated requests when loading more

    setIsLoadingMore(true);
    setIsLoadMoreFailed(false);

    try {
      console.log(nextLink);

      const {data, next} = await fetchMoreWithLink(nextLink);
      setRepos([...repos, ...data]);
      setNextLink(next);
      setIsLoadingMore(false);
    } catch (error) {
      console.log(error);
      setIsLoadMoreFailed(true);
    }
  };

  const ProfileRoute = (
    <BasicUserInfo
      email={user.email}
      location={user.location}
      externalLink={user.html_url}
      name={user.name}
      sourceImg={{uri: user.avatar_url}}
    />
  );

  const RepositoryRoute = (
    <UserRepositoryView
      data={repos}
      isRefreshing={isRefreshing}
      onRefresh={onRefresh}
      hasMoreData={!!nextLink}
      onEndReached={loadMoreRepos}
      showLoadMoreButton={isLoadMoreFailed}
    />
  );
  const renderScene = ({route}) => {
    switch (route.key) {
      case 'profile':
        return ProfileRoute;
      case 'repositories':
        return RepositoryRoute;
      default:
        return null;
    }
  };

  const renderTabBar = props => (
    <TabBar
      {...props}
      onTabPress={({route}) => {
        if (route.key === 'profile') setIndex(0);
        else setIndex(1);
      }}
      indicatorContainerStyle={{
        backgroundColor: Colors.secondaryColor.normal,
      }}
    />
  );

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
};

UserDetailScreen.navigationOptions = ({
  navigation,
}: {
  navigation: Navigation;
}) => ({
  headerTitle: navigation.state.params ? navigation.state.params.username : '',
});

export default UserDetailScreen;
