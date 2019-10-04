import { TextProps } from 'react-native';

import { TypographyPreset } from './typography.styles';

export interface TypographyProps extends TextProps {
  preset?: TypographyPreset;
  align?: 'left' | 'center' | 'right';
  children: any;
}
