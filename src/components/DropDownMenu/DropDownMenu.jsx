import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Popover from '@idui/react-popover';
import { Container, Item } from './styled';

function DropDownMenu({ items, children, renderItem, ...props }) {
  return (
    <Container
      {...props}
      content={
        <Fragment>
          {items.map((item, index) => {
            const itemView = <Item key={index}>{renderItem(item)}</Item>;
            if (item.children) {
              return (
                <DropDownMenu
                  items={item.children}
                  {...props}
                  {...item.childMenuProps}
                >
                  {itemView}
                </DropDownMenu>
              );
            }
            return itemView;
          })}
        </Fragment>
      }
    >
      {children}
    </Container>
  );
}

const itemShape = PropTypes.shape({
  children: PropTypes.array,
  childMenuProps: PropTypes.object,
});

DropDownMenu.propTypes = {
  ...Popover.propTypes,
  items: PropTypes.arrayOf(itemShape),
  renderItem: PropTypes.func,
};

DropDownMenu.defaultProps = {
  renderItem: (item) => item.value,
  items: [],
};

export default DropDownMenu;
