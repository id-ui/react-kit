import React from 'react';
import styled from 'styled-components';
import TreeSelect from '@idui/react-tree-select';
import { SearchInput, TextInput } from 'kit/Inputs';

export default styled(TreeSelect).attrs({
  renderInput: (props) => <TextInput readOnly {...props} />,
  renderSearchInput: (props) => <SearchInput autoFocus {...props} />,
})``;
