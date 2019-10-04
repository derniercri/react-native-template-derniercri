import { ViewStyle, TouchableOpacityProps, TextStyle } from 'react-native';

import { Preset } from './button.styles';

export interface ButtonProps extends TouchableOpacityProps {
  /**
   * The content the button will draw
   */
  children: string;

  /**
   * The preset that will be used.
   * It determines the button color
   */
  preset?: Preset;

  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle | ViewStyle[];

  /**
   * An optional style override for text.
   */
  textStyle?: TextStyle | TextStyle[];
}
