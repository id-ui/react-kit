# React Components Kit

[![NPM](https://img.shields.io/npm/v/@idui/react-kit.svg)](https://www.npmjs.com/package/@idui/react-kit/)
[![Size](https://img.shields.io/bundlephobia/min/@idui/react-kit)](https://www.npmjs.com/package/@idui/react-kit)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![LICENSE](https://img.shields.io/github/license/id-ui/react-kit)](https://github.com/id-ui/react-kit/blob/main/LICENSE)

⚠️ It's beta version. The system is still in development 🚀

- [IDUI](http://idui.online/)
- [Components](http://idui.online/components/button/Button)
- [Themes](http://idui.online/themes/tenderness)

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

## Available Themes

- iduiTheme
- coffeeTheme
- tendernessTheme
- sunsetTheme
- seaSandTheme

## Available Components

- Alert
- Avatar ([@idui/react-avatar](https://www.npmjs.com/package/@idui/react-avatar))
- Badge ([@idui/react-badge](https://www.npmjs.com/package/@idui/react-badge))
- Icon ([@idui/react-icon](https://www.npmjs.com/package/@idui/react-icon))
- Sheet ([@idui/react-sheet](https://www.npmjs.com/package/@idui/react-sheet))
- SnackbarGroup ([@idui/react-snackbar](https://www.npmjs.com/package/@idui/react-snackbar))
- Snackbar ([@idui/react-snackbar](https://www.npmjs.com/package/@idui/react-snackbar))
- Stepper ([@idui/react-stepper](https://www.npmjs.com/package/@idui/react-stepper))
- Tree ([@idui/react-tree](https://www.npmjs.com/package/@idui/react-tree))
- CheckboxTree ([@idui/react-tree](https://www.npmjs.com/package/@idui/react-tree))
- TreeSelect ([@idui/react-tree-select](https://www.npmjs.com/package/@idui/react-tree-select))
- Modal ([@idui/react-modal](https://www.npmjs.com/package/@idui/react-modal))
- Popover ([@idui/react-popover](https://www.npmjs.com/package/@idui/react-popover))
- Tooltip ([@idui/react-popover](https://www.npmjs.com/package/@idui/react-popover))
- Collapse ([@idui/react-collapse](https://www.npmjs.com/package/@idui/react-collapse))
- Calendar ([@idui/react-date-components](https://www.npmjs.com/package/@idui/react-date-components))
- DatePicker ([@idui/react-date-components](https://www.npmjs.com/package/@idui/react-date-components))
- DateInput ([@idui/react-date-components](https://www.npmjs.com/package/@idui/react-date-components))
- TimePicker ([@idui/react-date-components](https://www.npmjs.com/package/@idui/react-date-components))
- TimeInput ([@idui/react-date-components](https://www.npmjs.com/package/@idui/react-date-components))
- DateRangePicker ([@idui/react-date-components](https://www.npmjs.com/package/@idui/react-date-components))
- DateRangeInput ([@idui/react-date-components](https://www.npmjs.com/package/@idui/react-date-components))
- TextArea ([@idui/react-text-area](https://www.npmjs.com/package/@idui/react-text-area))
- TextInput ([@idui/react-inputs](https://www.npmjs.com/package/@idui/react-inputs))
- NumberInput ([@idui/react-inputs](https://www.npmjs.com/package/@idui/react-inputs))
- SearchInput ([@idui/react-inputs](https://www.npmjs.com/package/@idui/react-inputs))
- TagInput ([@idui/react-inputs](https://www.npmjs.com/package/@idui/react-inputs))
- FileInput ([@idui/react-file-input](https://www.npmjs.com/package/@idui/react-file-input))
- ImageUploader ([@idui/react-file-input](https://www.npmjs.com/package/@idui/react-file-input))
- MaskInput ([@idui/react-mask-input](https://www.npmjs.com/package/@idui/react-mask-input))
- Checkbox ([@idui/react-toggle-controls](https://www.npmjs.com/package/@idui/react-toggle-controls))
- Radio ([@idui/react-toggle-controls](https://www.npmjs.com/package/@idui/react-toggle-controls))
- Switch ([@idui/react-toggle-controls](https://www.npmjs.com/package/@idui/react-toggle-controls))
- OrderedPagination ([@idui/react-pagination](https://www.npmjs.com/package/@idui/react-pagination))
- UnorderedPagination ([@idui/react-pagination](https://www.npmjs.com/package/@idui/react-pagination))
- LinearProgress ([@idui/react-progress](https://www.npmjs.com/package/@idui/react-progress))
- CircularProgress ([@idui/react-progress](https://www.npmjs.com/package/@idui/react-progress))
- Breadcrumbs
- Button
- Chip
- DropDownMenu
- ExternalLink
- IconButton
- Image
- Tabs
- Select (in development)

## License

MIT © [kaprisa57@gmail.com](https://github.com/id-ui)