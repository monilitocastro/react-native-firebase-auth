import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = props => {
  const { label, placeholder, secureTextEntry, onChangeText, value } = props;
  return (
    <View style={style.rowStyle}>
      <Text style={style.TextStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        style={style.InputStyle}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};
const style = {
  rowStyle: {
    flexDirection: 'row'
  },
  TextStyle: {
    flex: 1,
    margin: 5,
    backgroundColor: '#FFFFFF',
    fontSize: 20,
    color: '#000000'
  },
  InputStyle: {
    flex: 2,
    height: 40,
    backgroundColor: '#F8F8F8'
  }
};
export { Input };
