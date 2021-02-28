import styled from 'styled-components';
import { prop } from 'styled-tools';
import { colorize, getThemeHighlightColor } from 'utils/mixins';

export const Container = styled.button`
  &,
  &:hover,
  &:active,
  &:focus {
    outline: none;
  }
  cursor: pointer;
  border: none;
  transition: all 0.3s ease-in-out;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${colorize};
  &:hover {
    background-color: ${getThemeHighlightColor};
  }
  border-radius: 50%;
  width: ${prop('size')};
  height: ${prop('size')};
  box-shadow: ${prop('theme.shadow.secondary')};
`;
