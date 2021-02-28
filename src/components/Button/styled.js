import styled, { css } from 'styled-components';
import { ifProp, prop } from 'styled-tools';
import {
  border,
  colorize,
  colorizeOutline,
  getThemeHighlightColor,
} from 'utils/mixins';

export const Container = styled.button`
  outline: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  border-radius: 0.5rem;
  padding: 0 1.5rem;
  font: ${prop('theme.typography.button')};

  ${ifProp(
    'small',
    css`
      min-width: 8.7rem;
      height: 2.8rem;
      font-size: 1.2rem;
    `,
    css`
      min-width: 11rem;
      height: 3.6rem;
    `
  )};

  ${ifProp(
    'outline',
    css`
      border: ${border};
      ${colorizeOutline};

      &:hover,
      &:active {
        border-color: ${getThemeHighlightColor};
        color: ${getThemeHighlightColor};
      }

      &:disabled {
        border-color: ${prop('theme.colors.disabledContrast')};
        color: ${prop('theme.colors.disabledContrast')};
      }
    `,
    css`
      ${colorize}

      &:hover,
    &:active {
        background-color: ${getThemeHighlightColor};
      }

      &:disabled {
        background-color: ${prop('theme.colors.disabledContrast')};
      }
    `
  )}
`;
