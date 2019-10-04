import React from 'react';
import { View } from 'react-native';

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
};

export const CenteredView = ({ children }) => <View style={style}>{children}</View>;
