import React from 'react';
import PropTypes from 'prop-types';
import { Container, Item, Divider } from './styled';

function Breadcrumbs({ items, divider, className, tag }) {
  return (
    <Container className={className}>
      {items.map((item, index) => (
        <Item
          key={item.to}
          isActive={index === items.length - 1}
          to={item.to}
          href={item.href}
          as={tag}
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
  itemElement: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

Breadcrumbs.defaultProps = {
  items: [],
  divider: '/',
  itemElement: 'a',
};

export default Breadcrumbs;
