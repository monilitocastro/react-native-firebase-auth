import React from 'react';
import { Text } from 'react-native';

const ErrorText = props => <Text style={style.errorStyle}>{props.children}</Text>;

const style = {
  errorStyle: {
    fontSize: 18,
    color: '#ff1122',
    textAlign: 'center'
  }
};
export { ErrorText };
