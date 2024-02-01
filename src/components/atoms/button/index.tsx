import React from 'react';

import { ButtonStyle, TextStyle } from './style';

interface ButtonProps {
  label: string;
  action?: () => void;
  disabled?: boolean;
}

export function Button(props: ButtonProps) {
  return (
    <ButtonStyle disabled={props.disabled} onPress={props.action}>
      <TextStyle>{props.label}</TextStyle>
    </ButtonStyle>
  );
}
