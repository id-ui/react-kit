import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'kit/Icon';
import { Container } from './styled';

function IconButton({ name, iconSize, iconColor, color, ...props }) {
  return (
    <Container color={color} {...props}>
      <Icon
        name={name}
        color={iconColor || `${color}Contrast`}
        size={iconSize}
      />
    </Container>
  );
}

IconButton.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  iconSize: PropTypes.string,
  className: PropTypes.string,
};

IconButton.defaultProps = {
  type: 'button',
  color: 'primary',
  size: '4rem',
  iconSize: '2rem',
};

export default IconButton;
