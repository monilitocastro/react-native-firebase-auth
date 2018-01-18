import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = props => (
  <View style={style.ViewStyle}>
    <ActivityIndicator size={props.size || 'large'} />
  </View>
);
const style = {
  ViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50
  }
};
export { Spinner };
