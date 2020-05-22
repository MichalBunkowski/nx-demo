import React from 'react';
import { text, number } from '@storybook/addon-knobs';
import Button from './Button';

export default { title: 'Button' };

export const primary = () => (
  <Button padding={number('Padding', 0)} text={text('Text', 'Click me')} />
);
