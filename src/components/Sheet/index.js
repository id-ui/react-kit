import styled from 'styled-components';
import { prop } from 'styled-tools';
import Sheet from '@idui/react-sheet';

const StyledSheet = styled(Sheet)`
  box-shadow: ${prop('theme.shadow.secondary')};
  background-color: ${prop('theme.colors.baseContrast')};
`;

StyledSheet.propTypes = Sheet.propTypes;
StyledSheet.defaultProps = Sheet.defaultProps;

export default StyledSheet;
