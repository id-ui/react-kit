import styled from 'styled-components';
import { CheckboxTree as IDUICheckboxTree } from '@idui/react-tree';
import { getCheckboxColors } from 'utils/componentColorsGetters';

const CheckboxTree = styled(IDUICheckboxTree).attrs(({ theme }) => ({
  colors: getCheckboxColors(theme),
}))``;

CheckboxTree.propTypes = IDUICheckboxTree.propTypes;
CheckboxTree.defaultProps = IDUICheckboxTree.defaultProps;

export default CheckboxTree;
