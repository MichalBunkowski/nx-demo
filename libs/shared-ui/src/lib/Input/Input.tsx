import React from 'react';

interface Props {
  type: 'text' | 'number' | 'password' | 'email';
  padding: number;
  disabled?: boolean;
}
export default function Button({ type, padding, disabled }: Props) {
  return (
    <input
      type={type}
      style={{ padding: `${padding}px` }}
      disabled={disabled}
    />
  );
}
