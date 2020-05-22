import React from 'react';

interface Props {
  text: string;
  padding: number;
}
export default function Button({ text, padding }: Props) {
  return <button style={{ padding: `${padding}px` }}>{text}</button>;
}
