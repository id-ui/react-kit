import styled from 'styled-components';
import { Switch } from '@idui/react-toggle-controls';
import { getThemeContrastColor } from 'utils/mixins';

export default styled(Switch).attrs(({ theme }) => ({
  colors: {
    on: {
      toggle: theme.colors.primary,
      handle: theme.colors.primary,
      icon: getThemeContrastColor({ theme, color: 'primary' }),
    },
    off: {
      toggle: 'white',
      handle: theme.colors.neutral,
      icon: theme.colors.neutral,
    },
    disabled: {
      toggle: theme.colors.neutral,
      handle: theme.colors.disabledContrast,
      icon: theme.colors.disabledContrast,
    },
  },
}))``;
