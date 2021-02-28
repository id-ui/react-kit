import styled from 'styled-components';
import { prop } from 'styled-tools';
import { colorize } from 'utils/mixins';

export const Container = styled.div`
  display: flex;
  min-width: 30rem;
  max-width: 60rem;
  border-radius: ${prop('theme.shape.primary')};
  ${colorize};
  box-shadow: 0 0.4rem 0.5rem rgba(0, 0, 0, 0.09),
    0 0.4rem 1.2rem rgba(0, 0, 0, 0.05), 0 0.2rem 0.6rem rgba(0, 0, 0, 0.1);
  padding: 1.4rem;
`;

export const Content = styled.div`
  margin-left: 1.2rem;
  ${prop('theme.typography.input')};
  line-height: 1;
`;
