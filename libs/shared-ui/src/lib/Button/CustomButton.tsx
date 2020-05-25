import React from 'react';

import {
  Button as MuiButton,
  ButtonProps,
  CircularProgress,
  makeStyles,
  Theme,
} from '@material-ui/core';

type ButtonSize = 'regular' | 'small';
type ButtonColor = 'primary' | 'danger';
type ButtonVariant = 'contained' | 'outlined';

const salmon = '#F78054';
const darkSalmon = '#C56B4A';
const errorRed = '#D74456';
const darkDangerRed = '#B03746';
const lighterGrey = '#EDEDED';
const white = '#FFFFFF';
const dangerRed = '#B03746';
const lightGrey = '#EDEDED';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: 45,
    minWidth: 140,
    borderRadius: 4,
    textTransform: 'uppercase',
    fontSize: 14,
    fontFamily: 'Nexa Bold',
    padding: '7px 20px 4px',
    boxShadow: 'none',
    [theme.breakpoints.down('sm')]: {
      height: 55,
    },
  },
  small: {
    height: 30,
    padding: '3px 5px 6px',
  },
  outlined: {
    '&.primary': {
      backgroundColor: 'transparent',
      border: `1px solid ${salmon}`,
      color: salmon,
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
        border: `1px solid ${darkSalmon}`,
        color: darkSalmon,
      },
    },
    '&.danger': {
      backgroundColor: 'transparent',
      border: `1px solid ${errorRed}`,
      color: errorRed,
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
        border: `1px solid ${darkDangerRed}`,
        color: darkDangerRed,
      },
    },
    '&.disabled': {
      backgroundColor: 'transparent',
      border: `1px solid ${lighterGrey}`,
      color: lighterGrey,
    },
  },
  contained: {
    '&.primary': {
      background: salmon,
      color: white,
      '&:hover': {
        backgroundColor: darkSalmon,
      },
    },
    '&.danger': {
      background: dangerRed,
      color: white,
      '&:hover': {
        backgroundColor: darkDangerRed,
      },
    },
    '&.disabled': {
      backgroundColor: lightGrey,
      color: lighterGrey,
    },
  },
  buttonProgress: {
    color: salmon,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

interface Props extends Omit<ButtonProps, 'variant' | 'color' | 'size'> {
  size?: ButtonSize;
  color: ButtonColor;
  variant: ButtonVariant;
  danger?: boolean;

  loading?: boolean;
}

export default function CustomButton({
  size = 'regular',
  color,
  variant,
  disabled,
  children,
  loading,
  danger,
  className,
  ...props
}: Props) {
  const { root, small, ...classes } = useStyles();

  const btnColor = danger ? 'danger' : 'primary';

  return (
    <MuiButton
      disabled={disabled}
      className={`
        ${root} 
        ${classes[variant]} 
        ${disabled ? 'disabled' : btnColor} 
        ${size === 'small' ? small : ''} 
        ${className}
      `}
      {...props}
    >
      {children}
      {loading && (
        <CircularProgress size={24} className={classes.buttonProgress} />
      )}
    </MuiButton>
  );
}
