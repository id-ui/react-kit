import React from 'react';
import PropTypes from 'prop-types';
import { Snackbar as IDUISnackbar } from '@idui/react-snackbar';
import Icon from 'components/Icon';
import { Container, Content } from './styled';
import { snackbarVariants, variantsMapping } from './config';

function Snackbar({ children, className, variant, ...props }) {
  const config = variantsMapping[variant];

  return (
    <IDUISnackbar {...props}>
      <Container className={className} color={config.color}>
        <Icon
          name={config.icon}
          color={`${config.color}Contrast`}
          size="1.2rem"
        />
        <Content>{children}</Content>
      </Container>
    </IDUISnackbar>
  );
}

Snackbar.propTypes = {
  ...IDUISnackbar.propTypes,
  variant: PropTypes.oneOf(Object.values(snackbarVariants)),
};

Snackbar.defaultProps = {
  ...IDUISnackbar.defaultProps,
  variant: 'info',
};

export default Snackbar;
