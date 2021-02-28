import styled, { css } from 'styled-components';
import { ifProp, prop } from 'styled-tools';
import Icon from 'kit/Icon';
import {
  getThemeColor,
  getThemeContrastColor,
  getThemeHighlightColor,
} from '../../../utils/mixins';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Page = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  line-height: 1;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 0.35rem;
  }
  ${ifProp(
    'isActive',
    css`
      color: ${getThemeContrastColor};
      background-color: ${getThemeHighlightColor};
    `,
    css`
      color: ${prop('theme.colors.text')};
      &:hover {
        color: ${getThemeColor};
      }
    `
  )}
`;

export const Control = styled(Icon).attrs({
  cursor: 'pointer',
  color: 'primary',
  size: '1.4rem',
})`
  line-height: 1;
  &:first-child {
    margin-right: 1rem;
  }
  &:last-child {
    margin-left: 1rem;
  }
`;

export const Divider = styled.span`
  margin: 0 0.5rem;
  color: ${prop('theme.colors.text')};
`;
