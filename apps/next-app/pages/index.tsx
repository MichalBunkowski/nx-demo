import React, { useEffect } from 'react';

import { Button, Input } from '@nx-demo/shared-ui';
import { getCookie, storeCookie } from '@nx-demo/cookies';

export const Index = () => {

  useEffect(() => {
    let counter = Number(getCookie('counter'))

    counter = isNaN(counter) ? 1 : counter + 1

    storeCookie('counter', counter.toString(), process.env.DOMAIN)
  }, [])

  return (
    <div>
      <Button text="elo" padding={10}/>
      <Input type="text" padding={10} disabled={false}/>
      <p>{process.env.ENV}</p>
    </div>
  );
};

export default Index;
