import React from 'react';
import { View } from 'react-native';

const Card = props => <View style={style.CardStyle}>{props.children}</View>;
const style = {
  CardStyle: {
    margin: 5,
    backgroundColor: '#FFFFFF'
  }
};
export { Card };
