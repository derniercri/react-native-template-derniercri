import { StyleSheet, TextStyle } from 'react-native';

import { color } from '../../theme';

export type TypographyPreset = keyof typeof typographyStyles;

export const baseStyle: TextStyle = {
  color: color.text,
  // fontFamily: typography.primary,
};

const typographyStyles = StyleSheet.create({
  body: {
    // fontFamily: typography.secondary,
    fontSize: 16,
    lineHeight: 22,
  } as TextStyle,
  default: {
    fontSize: 16,
  },
  h1: {
    // fontFamily: typography.primaryBold,
    fontSize: 48,
    lineHeight: 56,
  } as TextStyle,
  h2: {
    // fontFamily: typography.primary,
    fontSize: 24,
    lineHeight: 36,
  } as TextStyle,
  h3: {
    // fontFamily: typography.primary,
    fontSize: 20,
    lineHeight: 30,
  } as TextStyle,
  label: {
    // fontFamily: typography.primarySemiBold,
    fontSize: 18,
    lineHeight: 27,
  } as TextStyle,
  small: {
    // fontFamily: typography.secondary,
    fontSize: 14,
    lineHeight: 19,
  } as TextStyle,
  tiny: {
    // fontFamily: typography.secondaryBold,
    fontSize: 12,
    lineHeight: 16,
    textTransform: 'uppercase',
  } as TextStyle,
});

export const typographyAlignmentStyles = StyleSheet.create({
  center: { textAlign: 'center' },
  left: { textAlign: 'left' },
  right: { textAlign: 'right' },
});

export default typographyStyles;
