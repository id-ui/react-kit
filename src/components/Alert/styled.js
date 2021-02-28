import styled from 'styled-components';
import Icon from 'components/Icon';
import { prop } from 'styled-tools';
import { colorize } from 'utils/mixins';

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.4rem 1.6rem;
  min-width: 26rem;
  border-radius: ${prop('theme.shape.primary')};
  ${colorize};
  & > div:first-child {
    display: flex;
  }
`;

export const Content = styled.div`
  margin-left: 1.2rem;
  ${prop('theme.typography.input')};
  line-height: 1;
`;

export const CloseIcon = styled(Icon).attrs({
  size: '1.2rem',
  cursor: 'pointer',
  name: 'cross',
})`
  margin-left: 1rem;
`;
