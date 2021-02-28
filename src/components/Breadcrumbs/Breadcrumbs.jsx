import React from 'react';
import PropTypes from 'prop-types';
import resolveComponentByProps from 'utils/resolveComponentByProps';
import { Container, Item, Divider } from './styled';

function Breadcrumbs({ items, divider, className }) {
  return (
    <Container className={className}>
      {items.map((item, index) => (
        <Item
          key={item.to}
          as={resolveComponentByProps(item)}
          isActive={index === items.length - 1}
          to={item.to}
        >
          {index !== 0 && <Divider>{divider}</Divider>}
          {item.name}
        </Item>
      ))}
    </Container>
  );
}

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      name: PropTypes.string,
      href: PropTypes.string,
    })
  ),
  divider: PropTypes.string,
  className: PropTypes.string,
};

Breadcrumbs.defaultProps = {
  items: [],
  divider: '/',
};

export default Breadcrumbs;
