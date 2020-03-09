import React, {FunctionComponent} from 'react';
import {Linking} from 'react-native';
import {IconInfo} from '../common/IconInfo';

interface Props {
  email: string;
}

const EmailItem: FunctionComponent<Props> = ({email}) => {
  if (!email) return null;
  const onPress = () => {
    Linking.openURL(`mailto:${email}`);
  };

  return (
    <IconInfo
      iconName={'email'}
      iconType={'material-icons'}
      onPress={onPress}
      value={email}
    />
  );
};

export default React.memo(EmailItem);
