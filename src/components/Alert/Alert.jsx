import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Icon from 'components/Icon';
import { Container, Content, CloseIcon } from './styled';
import { alertVariants, variantsMapping } from './config';

function Alert({ variant, children, isCloseable, onClose, className }) {
  const [isOpen, setOpen] = useState(true);

  const handleClose = useCallback(() => {
    setOpen(false);
    onClose();
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

  const config = variantsMapping[variant];

  return (
    <Container color={config.color} className={className}>
      <div>
        <Icon
          name={config.icon}
          color={`${config.color}Contrast`}
          size="1.2rem"
        />
        <Content>{children}</Content>
      </div>
      {isCloseable && (
        <CloseIcon onClick={handleClose} color={`${config.color}Contrast`} />
      )}
    </Container>
  );
}

Alert.propTypes = {
  variant: PropTypes.oneOf(Object.values(alertVariants)),
  children: PropTypes.any,
  isCloseable: PropTypes.bool,
  onClose: PropTypes.func,
  className: PropTypes.string,
};

Alert.defaultProps = {
  variant: alertVariants.info,
  isCloseable: true,
  onClose: _.noop,
};

export default Alert;
