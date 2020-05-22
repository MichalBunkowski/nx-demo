import React from 'react';

import { Button, Input } from '@nx-demo/shared-ui';

export const Index = () => {
  return (
    <div>
      <Button text="elo" padding={10}/>
      <Input type="text" padding={10} disabled={false}/>
      <p>{process.env.ENV}</p>
    </div>
  );
};

export default Index;
