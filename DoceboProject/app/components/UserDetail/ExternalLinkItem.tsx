import React, {FunctionComponent} from 'react';
import {Linking} from 'react-native';
import {IconInfo} from '../common/IconInfo';

interface Props {
  externalLink: string;
}

const ExternalLinkItem: FunctionComponent<Props> = ({externalLink}) => {
  if (!externalLink) return null;
  const onPress = () => {
    Linking.openURL(externalLink);
  };

  return (
    <IconInfo
      iconName={'external-link'}
      iconType={'font-awesome'}
      onPress={onPress}
      value={externalLink}
    />
  );
};

export default React.memo(ExternalLinkItem);
