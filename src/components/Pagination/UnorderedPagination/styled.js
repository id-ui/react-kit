import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import { getThemeColor, getThemeHighlightColor } from 'utils/mixins';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Page = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 0.35rem;
  }
  ${ifProp(
    'isActive',
    css`
      background-color: ${getThemeHighlightColor};
    `,
    css`
      background-color: ${getThemeColor};
    `
  )}
`;
