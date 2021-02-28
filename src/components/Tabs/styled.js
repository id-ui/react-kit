import styled, { css } from 'styled-components';
import { ifNotProp, prop } from 'styled-tools';
import { motion } from 'framer-motion';
import { colorize, colorizeOutline } from 'utils/mixins';

export const Container = styled.div`
  width: 100%;
  display: inline-flex;
  position: relative;
  border-radius: ${prop('theme.shape.secondary')};
  box-shadow: ${prop('theme.shadow.primary')};
  padding: 0.2rem;
  ${colorize};
`;

const itemStyle = css`
  font: ${prop('theme.typography.button')};
  padding: 0.6rem 1.6rem;
  border-radius: 3rem;
`;

export const Item = styled.div`
  ${itemStyle};
  position: relative;
  ${colorize};
  ${ifNotProp(
    'isActive',
    css`
      transition: font-weight 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        font-weight: 700;
      }
    `
  )}
`;

export const Outline = styled(motion.div)`
  ${itemStyle};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  ${colorizeOutline};
`;
