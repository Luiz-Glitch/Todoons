import React from 'react';
import { TextInputProps } from 'react-native';

import { InputStyle } from './style';

export function Input(props: TextInputProps) {
  return <InputStyle {...props} />;
}
