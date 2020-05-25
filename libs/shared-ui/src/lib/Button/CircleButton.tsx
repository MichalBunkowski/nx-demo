import React from 'react';
import { IconButton } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

interface Props {
  disabled?: boolean;
  small?: boolean;
}

export default function CircleButton({ disabled, small }: Props) {
  return (
    <IconButton color="secondary" disabled={disabled}>
      <AddCircleOutlineIcon fontSize={small ? 'small' : 'large'} />
    </IconButton>
  );
}
