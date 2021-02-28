import styled, { css } from 'styled-components';
import { ifProp, prop } from 'styled-tools';
import { colorize } from 'utils/mixins';

export const Container = styled.div`
  max-height: 30rem;
  overflow-y: auto;
`;

export const Option = styled.div`
  background-color: inherit;
  border-radius: ${prop('theme.shape.primary')};
  padding: 0.5rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  ${ifProp(
    'isActive',
    css`
      ${colorize};
    `
  )}
`;
