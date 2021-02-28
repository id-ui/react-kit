import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { AnimateSharedLayout } from 'framer-motion';
import { Container, Item, Outline } from './styled';

const spring = {
  type: 'spring',
  stiffness: 500,
  damping: 30,
};

function Tabs({
  items,
  className,
  renderItem: providedRenderItem,
  valueKey,
  labelKey,
  activeTab,
  onChangeTab,
}) {
  const renderItem = useMemo(
    () => providedRenderItem || ((item) => _.get(item, labelKey)),
    [labelKey, providedRenderItem]
  );

  const activeTabValue = _.get(activeTab, valueKey);

  return (
    <AnimateSharedLayout>
      <Container className={className}>
        {items.map((item) => {
          const itemId = _.get(item, valueKey);
          const isActive = itemId === activeTabValue;
          const content = renderItem(item);
          return (
            <Item
              key={itemId}
              isActive={isActive}
              onClick={() => onChangeTab(item)}
              {...item}
            >
              {content}
              {isActive && (
                <Outline layoutId="outline" initial={false} transition={spring}>
                  {content}
                </Outline>
              )}
            </Item>
          );
        })}
      </Container>
    </AnimateSharedLayout>
  );
}

Tabs.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string,
  renderItem: PropTypes.func,
  valueKey: PropTypes.string,
  labelKey: PropTypes.string,
  activeTab: PropTypes.object,
  onChangeTab: PropTypes.func,
};

Tabs.defaultProps = {
  valueKey: 'id',
  labelKey: 'name',
  items: [],
  onChangeTab: _.noop,
};

export default Tabs;
