import React, {FunctionComponent} from 'react';
import {RefreshControl} from 'react-native';
import {Colors} from '../../../styles';

type AppRefreshControlProps = {
  title: string;
  isRefreshing: boolean;
  onRefresh(): void;
};

const AppRefreshControl: FunctionComponent<AppRefreshControlProps> = ({
  onRefresh = () => {},
  isRefreshing = false,
  title,
}) => (
  <RefreshControl
    refreshing={isRefreshing}
    onRefresh={onRefresh}
    title={title}
    tintColor={Colors.primaryColor.light}
    titleColor={Colors.primaryColor.light}
  />
);

export default AppRefreshControl;
