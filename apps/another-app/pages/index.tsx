import React from 'react';
import { Button, Input } from '@nx-demo/shared-ui';

export const Index = () => {
  return (
    <div>
      <Button text="elo again" padding={10}/>
      <Input type="password" padding={10} disabled={false}/>
      <p>{process.env.ENV}</p>
    </div>
  );
};

export default Index;
