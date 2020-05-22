import React from 'react';
import { Button, Input } from '@nx-demo/shared-ui';

export const Index = () => {
  return (
    <div className="app">
      <Button text="elo again" padding={10}/>
      <Input type="password" padding={10} disabled={false}/>
    </div>
  );
};

export default Index;
