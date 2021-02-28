# React Components Kit

[![NPM](https://img.shields.io/npm/v/@idui/react-kit.svg)](https://www.npmjs.com/package/@idui/react-kit/)
[![Size](https://img.shields.io/bundlephobia/min/@idui/react-kit)](https://www.npmjs.com/package/@idui/react-kit)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![LICENSE](https://img.shields.io/github/license/id-ui/react-kit)](https://github.com/id-ui/react-kit/blob/main/LICENSE)

## Install

```bash
npm install --save @idui/react-kit
```

```bash
yarn add @idui/react-kit
```

## Example

1) Provide theme

```jsx
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { seaSandTheme } from '@idui/react-kit';

function Layout({ children }) {

    return (
            <ThemeProvider theme={seaSandTheme}>
                {children}
            </ThemeProvider>
    );
}
```

2) Import font from your theme

```sass
@import url('https://fonts.googleapis.com/css?family=Montserrat:wght@500;700&display=swap')
```

3) Use components

```jsx
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { TextInput, Button } from '@idui/react-kit';

function Usage() {
    const [name, setName] = useState('');

    return (
          <div>
              <TextInput name="name" value={name} onChange={setName} />
              <Button outline>Cancel</Button>
              <Button>Submit</Button>
          </div>
    );
}
```

## License

MIT © [kaprisa57@gmail.com](https://github.com/id-ui)