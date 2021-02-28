import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styled';

function Button({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  small: PropTypes.bool,
  outline: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.any,
};

Button.defaultProps = {
  type: 'button',
  small: false,
  outline: false,
  color: 'primary',
};

export default Button;
