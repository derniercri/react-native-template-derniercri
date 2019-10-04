import React from 'react';
import { Button as NativeButton, SafeAreaView } from 'react-native';

const Button = ({ onPress, children }) => (
  <SafeAreaView>
    <NativeButton onPress={onPress} title={children} />
  </SafeAreaView>
);

export default Button;
