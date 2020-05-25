import React from 'react';
import { Button as MuiButton, makeStyles } from '@material-ui/core';

interface Props {
  text: string;
  padding: number;
  disabled?: boolean;
  contained?: boolean;
  fullWidth?: boolean;
}
export default function Button({
  text,
  padding,
  contained,
  disabled,
  fullWidth,
}: Props) {
  return (
    <MuiButton
      color="primary"
      variant={contained ? 'contained' : 'outlined'}
      disabled={disabled}
      fullWidth={fullWidth}
    >
      {text}
    </MuiButton>
  );
}
