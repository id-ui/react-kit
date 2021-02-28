import React from 'react';
import { default as IDUITree } from '@idui/react-tree';
import { CustomLeaf, CustomTree } from './styled';

const renderCustomLeaf = ({ toggle, isOpen, icon, label, hasChildren }) => (
  <CustomLeaf hasChildren={hasChildren} onClick={toggle}>
    {hasChildren && (isOpen ? '▾' : '▸') + ' '}
    {icon} {label}
  </CustomLeaf>
);

function Tree(props) {
  return <CustomTree {...props} />;
}

Tree.propTypes = IDUITree.propTypes;
Tree.defaultProps = {
  ...IDUITree.defaultProps,
  renderLeaf: renderCustomLeaf,
};

export default Tree;
