import React from 'react';

import { Button, Input } from '@nx-demo/shared-ui';

export const Index = () => {
  return (
    <div className="app">
      <Button text="elo" padding={10}/>
      <Input type="text" padding={10} disabled={false}/>
    </div>
  );
};

export default Index;
