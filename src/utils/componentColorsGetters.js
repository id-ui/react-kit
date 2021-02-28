import { getThemeContrastColor, getThemeHighlightColor } from './mixins';

export const getInputColors = (theme) => ({
  default: {
    background: 'white',
    border: theme.colors.neutral,
    color: theme.colors.base,
    placeholder: theme.colors.text,
    tag: theme.colors.primary,
  },
  disabled: {
    background: theme.colors.disabled,
    border: theme.colors.neutral,
    color: theme.colors.disabledContrast,
    tag: theme.colors.disabledContrast,
  },
  error: {
    border: getThemeContrastColor({ theme, color: 'error' }),
    color: getThemeContrastColor({ theme, color: 'error' }),
    background: theme.colors.error,
    tag: getThemeContrastColor({ theme, color: 'error' }),
  },
  focused: {
    border: theme.colors.primary,
    tag: getThemeHighlightColor({ theme, color: 'primary' }),
  },
});

export const getDateComponentColors = (theme) => ({
  day: {
    default: {},
    active: {
      background: getThemeHighlightColor({ theme, color: 'primary' }),
      color: getThemeContrastColor({ theme, color: 'primary' }),
    },
    current: {
      color: getThemeHighlightColor({ theme, color: 'primary' }),
    },
    disabled: {
      color: theme.colors.disabledContrast,
    },
    hover: {
      background: theme.colors.primary,
      color: theme.colors.baseContrast,
    },
  },
  time: {
    active: {
      background: getThemeHighlightColor({ theme, color: 'primary' }),
      color: getThemeContrastColor({ theme, color: 'primary' }),
    },
    default: {
      color: theme.colors.neutral,
    },
    disabled: {
      color: theme.colors.disabledContrast,
    },
  },
  input: getInputColors(theme),
  controls: {
    color: theme.colors.primary,
    hoverColor: getThemeHighlightColor({ theme, color: 'primary' }),
    monthAndYear: getThemeHighlightColor({ theme, color: 'primary' }),
  },
});

export const getCheckboxColors = (theme) => ({
  on: {
    background: theme.colors.primary,
    border: theme.colors.primary,
    icon: getThemeContrastColor({ theme, color: 'primary' }),
  },
  off: {
    background: 'transparent',
    border: theme.colors.neutral,
    icon: 'transparent',
    hover: { border: theme.colors.primary },
  },
  disabled: {
    background: theme.colors.disabled,
    border: theme.colors.neutral,
    icon: theme.colors.disabledContrast,
  },
});
