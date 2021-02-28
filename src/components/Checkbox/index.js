import styled from 'styled-components';
import { Checkbox } from '@idui/react-toggle-controls';
import { prop } from 'styled-tools';
import { getCheckboxColors } from 'utils/componentColorsGetters';

export default styled(Checkbox).attrs(({ theme }) => ({
  colors: getCheckboxColors(theme),
}))`
  border-radius: ${prop('theme.shape.primary')};
`;
