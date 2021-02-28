import styled, { css } from 'styled-components';
import { prop, ifProp } from 'styled-tools';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Item = styled.span`
  color: ${prop('theme.colors.text')};
  cursor: pointer;
  transition: color ${prop('theme.transition.default')};
  text-decoration: none;
  font-size: 1.2rem;
  line-height: 2rem;
  &:hover {
    color: ${prop('theme.colors.primary')};
  }
  ${ifProp(
    'isActive',
    css`
      color: ${prop('theme.colors.primary')};
    `
  )}
`;

export const Divider = styled.span`
  margin: 0 1.6rem;
`;
