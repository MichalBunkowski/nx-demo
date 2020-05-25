import React from 'react';
import { text, number, boolean } from '@storybook/addon-knobs';
import Button from './Button';
import CircleButton from './CircleButton';
import AzaButton from './AzaButton';

import ButtonReadMe from './button.md'

export default { title: 'Button' };

export const buttonDefaule = () => (
  <Button
    padding={number('Padding', 0)}
    text={text('Text', 'Click me')}
    contained={boolean('Contained', false)}
    disabled={boolean('Disabled', false)}
    fullWidth={boolean('FullWidth', false)}
  />
);

export const circleButton = () => (
  <CircleButton
    disabled={boolean('Disabled', false)}
    small={boolean('Small', false)}
  />
);

export const primaryButton = () => (
  <AzaButton
    color="primary"
    variant="contained"
    danger={boolean('Danger', false)}
    loading={boolean('Loading', false)}
  >
    Primary Button
  </AzaButton>
);
