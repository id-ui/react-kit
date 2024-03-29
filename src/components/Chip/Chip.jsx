import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { stopPropagation } from 'utils/events';
import { Container, RemoveIcon } from './styled';

function Chip({ children, isRemovable, onRemove, ...props }) {
  const handleRemove = useCallback(
    (e) => {
      stopPropagation(e);
      onRemove();
    },
    [onRemove]
  );

  return (
    <Container {...props}>
      {children}
      {isRemovable && <RemoveIcon onClick={handleRemove} />}
    </Container>
  );
}

Chip.propTypes = {
  color: PropTypes.string,
  children: PropTypes.any,
  isRemovable: PropTypes.bool,
  onRemove: PropTypes.func,
  isInteractive: PropTypes.bool,
  className: PropTypes.string,
};

Chip.defaultProps = {
  isRemovable: false,
  onRemove: () =>  {},
  color: 'primary',
  isInteractive: false,
};

export default Chip;
