import React from 'react';
import { Text } from 'react-native';
import mergeAll from 'ramda/es/mergeAll';

import { TypographyProps } from './typography.types';
import styles, { baseStyle, typographyAlignmentStyles } from './typography.styles';

const Typography: React.FC<TypographyProps> = ({
  children,
  style: styleOverrides,
  preset = 'default',
  align = 'left',
  ...props
}) => {
  const finalStyles = mergeAll([
    baseStyle,
    typographyAlignmentStyles[align],
    styles[preset],
    styleOverrides,
  ]);

  return (
    <Text {...props} style={finalStyles}>
      {children}
    </Text>
  );
};

export default Typography;
