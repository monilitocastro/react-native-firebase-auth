import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const CommonButton = props => {
  const { onPress, title } = props;
  return (
    <TouchableOpacity style={style.TouchableOpacityStyle} onPress={onPress} title={title}>
      <Text style={style.TextStyle}>{title}</Text>
    </TouchableOpacity>
  );
};
const style = {
  TouchableOpacityStyle: {
    margin: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderWidth: 3,
    borderColor: '#1122FF'
  },
  TextStyle: {
    color: '#1122FF',
    fontSize: 24,
    textAlign: 'center'
  }
};
export { CommonButton };
