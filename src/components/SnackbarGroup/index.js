import styled from 'styled-components';
import { SnackbarGroup as IDUISnackbarGroup } from '@idui/react-snackbar';
import { Container, Content } from 'kit/Snackbar/styled';
import React from 'react';
import { prop } from 'styled-tools';
import PropTypes from 'prop-types';
import { snackbarVariants } from 'kit/Snackbar';
import { variantsMapping } from 'kit/Snackbar/config';
import Icon from 'kit/Icon';

const GroupItemContainer = styled(Container)`
  margin-bottom: 0.5rem;
`;

const SnackbarGroup = styled(IDUISnackbarGroup).attrs(
  ({ renderContent = prop('id'), variant }) => {
    const config = variantsMapping[variant];

    return {
      renderItem: (...args) => (
        <GroupItemContainer color={config.color}>
          <Icon name={config.icon} color={config.color} size="1.2rem" />
          <Content>{renderContent(...args)}</Content>
        </GroupItemContainer>
      ),
    };
  }
)``;

SnackbarGroup.propTypes = {
  ...IDUISnackbarGroup.propTypes,
  variant: PropTypes.oneOf(Object.values(snackbarVariants)),
};

SnackbarGroup.defaultProps = {
  ...IDUISnackbarGroup.defaultProps,
  variant: 'info',
};

export default SnackbarGroup;
