import React, {useState, CSSProperties} from 'react';
import {SearchBar as SearchBarElements} from 'react-native-elements';
import {FunctionComponent} from 'react';
import {Platform, StyleProp, ViewStyle} from 'react-native';

type Props = {
  placeholder?: string;
  showLoading?: boolean;
  onSubmit: (keyword: string) => void;
  onClear?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
};

const SearchBar: FunctionComponent<Props> = ({
  placeholder = 'Type Here...',
  showLoading = false,
  onSubmit,
  onClear,
  containerStyle,
}: Props) => {
  const [keyword, setKeyword] = useState('');

  const onChangeText = (keyword: string) => {
    setKeyword(keyword);
  };

  const onSubmitEditing = () => {
    onSubmit(keyword);
  };

  return (
    <SearchBarElements
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={keyword}
      showLoading={showLoading}
      onSubmitEditing={onSubmitEditing}
      onClear={onClear}
      platform={Platform.OS}
      returnKeyType={'search'}
      containerStyle={containerStyle}
    />
  );
};

export default SearchBar;
