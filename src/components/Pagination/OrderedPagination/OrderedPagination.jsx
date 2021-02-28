import React from 'react';
import IDUIPagination from '@idui/react-pagination';
import { Container, Control, Divider, Page } from './styled';

function OrderedPagination(props) {
  return (
    <Container>
      <IDUIPagination {...props} />
    </Container>
  );
}

OrderedPagination.propTypes = IDUIPagination.propTypes;

OrderedPagination.defaultProps = {
  ...IDUIPagination.defaultProps,
  renderLeftControl: (props) => <Control {...props} name="arrowLeft" />,
  renderRightControl: (props) => <Control {...props} name="arrowRight" />,
  renderPage: ({ number, ...props }) => <Page {...props}>{number}</Page>,
  pageGroupsDivider: <Divider>...</Divider>,
};

export default OrderedPagination;
