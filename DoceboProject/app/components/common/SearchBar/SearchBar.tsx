import React, {useState} from 'react';
import {SearchBar as SearchBarElements} from 'react-native-elements';
import {FunctionComponent} from 'react';
import {Platform} from 'react-native';

type Props = {
  placeholder?: string;
  onChangeText: (keyword: string) => void;
  value: string;
  showLoading?: boolean;
  onSubmit: (keyword: string) => void;
};

const SearchBar: FunctionComponent<Props> = ({
  placeholder = 'Type Here...',
  showLoading = false,
  onSubmit,
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
      platform={Platform.OS}
      returnKeyType={'search'}
    />
  );
};

export default SearchBar;
