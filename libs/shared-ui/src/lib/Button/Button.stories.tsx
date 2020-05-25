import React from 'react';
import { text, number, boolean } from '@storybook/addon-knobs';
import Button from './Button';
import CircleButton from './CircleButton';
import CustomButton from './CustomButton';

import markdown from './button.md';

export default {
  title: 'Button',
};

export const buttonDefault = () => (
  <Button
    padding={number('Padding', 0)}
    text={text('Text', 'Click me')}
    contained={boolean('Contained', false)}
    disabled={boolean('Disabled', false)}
    fullWidth={boolean('FullWidth', false)}
  />
);

buttonDefault.story = {
  parameters: {
    notes: { markdown },
  },
};

export const circleButton = () => (
  <CircleButton
    disabled={boolean('Disabled', false)}
    small={boolean('Small', false)}
  />
);

export const primaryButton = () => (
  <CustomButton
    color="primary"
    variant="contained"
    danger={boolean('Danger', false)}
    loading={boolean('Loading', false)}
  >
    Primary Button
  </CustomButton>
);
