import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

import { color, spacing } from '../../theme';

export type Preset = keyof typeof presets;

const styles = StyleSheet.create({
  outer: {
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[5],
  } as ViewStyle,

  text: {
    fontSize: 20,
    color: color.palette.white,
    textAlign: 'center',
  } as TextStyle,
});

export const presets = {
  default: {
    outer: {
      ...styles.outer,
      borderColor: color.primary,
      backgroundColor: color.primary,
    },
    text: {
      ...styles.text,
    },
  },
  blue: {
    outer: {
      ...styles.outer,
      borderColor: color.secondary,
      backgroundColor: color.secondary,
    },
    text: {
      ...styles.text,
    },
  },
  disabled: {
    outer: {
      ...styles.outer,
      borderColor: color.palette.grey3,
      backgroundColor: color.palette.grey3,
    },
    text: {
      ...styles.text,
    },
  },
  link: {
    outer: {
      borderColor: color.transparent,
      backgroundColor: color.transparent,
    },
    text: { ...styles.text, fontSize: 16 } as TextStyle,
  },
};
