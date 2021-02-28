import styled, { css } from 'styled-components';
import { ifProp, prop } from 'styled-tools';
import Icon from 'components/Icon';
import {
  colorize,
  getThemeContrastColor,
  getThemeHighlightColor,
} from 'utils/mixins';

export const Container = styled.span`
  display: inline-flex;
  align-items: center;
  border-radius: ${prop('theme.shape.secondary')};
  transition: all ${prop('theme.transition.default')};
  padding: 0 0.6rem;
  height: 2.1rem;
  font: ${prop('theme.typography.button')};
  font-size: 1.2rem;
  ${colorize};
  ${ifProp(
    'isInteractive',
    css`
      cursor: pointer;
      &:hover {
        background-color: ${getThemeHighlightColor}
    `
  )}
`;

export const RemoveIcon = styled(Icon).attrs(({ theme, color }) => ({
  name: 'cross',
  size: '0.6rem',
  cursor: 'pointer',
  color: getThemeContrastColor({ theme, color }),
}))`
  margin-left: 0.5rem;
`;
