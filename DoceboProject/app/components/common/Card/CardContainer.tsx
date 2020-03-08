import React, {FunctionComponent} from 'react';
import {View, ViewStyle} from 'react-native';
import styles from './styles';

interface Props {
  style?: ViewStyle;
}

const CardContainer: FunctionComponent<Props> = ({children, style}) => (
  <View style={[styles.cardContainer, style]}>{children}</View>
);
export default CardContainer;
