import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import mergeAll from 'ramda/es/mergeAll';
import flatten from 'ramda/es/flatten';

import Typography from '../typography';

import { presets } from './button.styles';
import { ButtonProps } from './button.types';

const Button: React.FC<ButtonProps> = ({
  onPress,
  preset = 'default',
  style,
  textStyle,
  disabled,
  children,
  ...props
}) => {
  const viewStyles = useMemo(
    () =>
      mergeAll(
        flatten([presets[preset].outer, style, disabled && presets.disabled.outer]),
      ),
    [disabled, preset, style],
  );
  const textStyles = useMemo(() => mergeAll(flatten([presets[preset].text, textStyle])), [
    preset,
    textStyle,
  ]);

  return (
    <TouchableOpacity onPress={onPress} style={viewStyles} disabled={disabled} {...props}>
      <Typography style={textStyles}>{children}</Typography>
    </TouchableOpacity>
  );
};

export default Button;
