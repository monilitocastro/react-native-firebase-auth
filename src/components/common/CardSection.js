import React from 'react';
import { View } from 'react-native';
const CardSection = props => {
  const { top } = props;
  if (top) {
    return <View style={style.CardSectionStyleTop}>{props.children}</View>;
  }
  return <View style={style.CardSectionStyle}>{props.children}</View>;
};

const style = {
  CardSectionStyleTop: {
    padding: 5
  },
  CardSectionStyle: {
    padding: 5,
    borderTopWidth: 1,
    borderTopColor: '#A8A8A8'
  }
};
export { CardSection };
