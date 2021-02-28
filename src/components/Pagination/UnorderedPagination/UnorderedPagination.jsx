import React from 'react';
import IDUIPagination from '@idui/react-pagination';
import { Container, Page } from './styled';

function UnorderedPagination(props) {
  return (
    <Container>
      <IDUIPagination {...props} visiblePagesCount={0} />
    </Container>
  );
}

UnorderedPagination.propTypes = IDUIPagination.propTypes;

UnorderedPagination.defaultProps = {
  ...IDUIPagination.defaultProps,
  renderPage: (props) => <Page {...props} />,
};

export default UnorderedPagination;
