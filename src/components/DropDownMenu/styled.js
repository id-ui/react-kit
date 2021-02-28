import styled from 'styled-components';
import Popover from '@idui/react-popover';
import { prop } from 'styled-tools';

export const Container = styled(Popover)`
  padding: 0.5rem 0;
`;

export const Item = styled.div`
  font-size: 1.4rem;
  line-height: 2rem;
  padding: 0.5rem 1.6rem;
  cursor: pointer;
  white-space: nowrap;
  color: ${prop('theme.colors.base')};
  transition: color ${prop('theme.transition.default')};
  &:hover {
    color: ${prop('theme.colors.primary')};
  }
`;
