import styled from 'styled-components';
import { Radio } from '@idui/react-toggle-controls';

export default styled(Radio).attrs(({ theme }) => ({
  colors: {
    on: { border: theme.colors.primary, toggle: theme.colors.primary },
    off: {
      border: theme.colors.neutral,
      toggle: 'transparent',
      hover: { border: theme.colors.primary },
    },
    disabled: {
      border: theme.colors.disabledContrast,
      toggle: theme.colors.disabledContrast,
    },
  },
}))``;
