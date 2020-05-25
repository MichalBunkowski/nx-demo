```tsx
import React, { useState } from 'react';

import { PNCountryCodeSelector } from '@bitpesa/aza-reusables';

const App = () => {
  const [phonenumber, setPhoneNumber] = useState({
    value: '',
    code: '',
  });

  return (
    <div style={{ width: '25%', margin: 'auto' }}>
      <p>1.) Phone number input with country code selector.</p>
      <PNCountryCodeSelector
        name="phone_number"
        error={false}
        onChange={(value, code) => {
          setPhoneNumber({ ...phonenumber, value, code });
        }}
        value={phonenumber.value}
      />
    </div>
  );
};

export default App;
```

## Options (optional = ?)

|        Props         |   type   |    #     |
| :------------------: | :------: | :------: |
|        error         | boolean  | optional |
|  defaultCountryCode  |  string  | optional |
|         name         |  string  | required |
|        value         |  string  | required |
| blackListedCountries | string[] | optional |
|       onChange       |   func   | required |
|      styleProps      | object\* |  option  |

```
  styleProps?: {
    codeFontFamily?: string;
    inputFontFamily?: string;
    codeListFontFamily?: string;
    dropDownCodeFontFamily?: string;
    countryNameFontFamily?: string;
  };

```
