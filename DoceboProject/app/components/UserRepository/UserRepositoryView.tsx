import React, {FunctionComponent} from 'react';
import {UserRepositoryList} from './UserRepositoryList';

type Props = React.ComponentProps<typeof UserRepositoryList>;

// TODO: Add filters
const UserRepositoryView: FunctionComponent<Props> = ({...props}) => {
  const renderUsersList = () => {
    return <UserRepositoryList {...props} />;
  };

  return renderUsersList();
};

export default UserRepositoryView;
