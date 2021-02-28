import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import Tree from '@idui/react-tree';
import { border } from 'utils/mixins';

export const CustomTree = styled(Tree)`
  border-left: ${border};
  margin-left: 0.35rem;
`;

export const CustomLeaf = styled.div`
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 0.2rem;
  ${ifProp(
    'hasChildren',
    css`
      transition: color 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        color: rgba(0, 0, 0, 1);
      }
    `
  )};
`;
