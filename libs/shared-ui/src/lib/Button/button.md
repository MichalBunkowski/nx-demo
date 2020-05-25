```tsx
import React from 'react';

import { Button } from '@nx-demo/shared-ui';

const App = () => {
  return (
    <Button
      padding={10}
      text="Click me"
      contained={false}
      disabled={false}
      fullWidth={false}
    />
  );
};

export default App;
```

## Options (optional = ?)

|   Props   |  type   |    #     |
| :-------: | :-----: | :------: |
|  padding  | number  | optional |
|   text    | string  | required |
| contained | boolean | optional |
| disabled  | boolean | optional |
| fullWidth | boolean | optional |
