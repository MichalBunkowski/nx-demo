import React from 'react';
import { number, boolean } from '@storybook/addon-knobs';
import Input from './Input';

export default { title: 'Input' };

export const primary = () => (
  <Input
    padding={number('Padding', 0)}
    type={'text'}
    disabled={boolean('Disabled', false)}
  />
);
