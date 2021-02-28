import { css } from 'styled-components';
import { prop, withProp } from 'styled-tools';
import { darken, readableColor } from 'polished';

export const ellipsis = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const rounded = css`
  border-radius: 1rem;
`;

export const transition = css`
  transition: all 0.3s ease-in-out;
`;

export const withSpacing = css`
  & > *:not(:last-child) {
    margin-right: ${prop('spacing')};
  }
`;

export const getThemeColor = ({ theme, color = 'primary' }) =>
  theme.colors[color] || color;
export const getThemeContrastColor = ({ theme, color = 'primary' }) =>
  theme.colors[`${color}Contrast`] ||
  readableColor(getThemeColor({ theme, color }));
export const getThemeHighlightColor = ({ theme, color = 'primary' }) =>
  theme.colors[`${color}Highlight`] ||
  darken(theme.highlightPercent, getThemeColor({ theme, color }));

export const colorize = ({ theme, color }) => css`
  background-color: ${getThemeColor({ theme, color })};
  color: ${getThemeContrastColor({ theme, color })};
  border-color: ${getThemeContrastColor({ theme, color })};
`;

export const colorizeOutline = ({ theme, color }) => css`
  background-color: ${getThemeContrastColor({ theme, color })};
  color: ${getThemeColor({ theme, color })};
  border-color: ${getThemeColor({ theme, color })};
`;

export const border = withProp(
  'theme.border.default',
  (config) => `${config.width} ${config.style} ${config.color}`
);
