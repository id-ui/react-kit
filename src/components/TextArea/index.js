import styled from 'styled-components';
import TextArea from '@idui/react-text-area';
import { prop } from 'styled-tools';
import { getThemeContrastColor } from 'utils/mixins';
import { lighten } from 'polished';

const StyledTextArea = styled(TextArea).attrs(({ theme }) => ({
  colors: {
    default: {
      border: theme.colors.neutral,
      color: theme.colors.base,
      placeholder: theme.colors.text,
      outline: theme.colors.primary,
    },
    disabled: {
      background: theme.colors.disabled,
      border: theme.colors.neutral,
      color: theme.colors.disabledContrast,
      tag: theme.colors.disabledContrast,
    },
    error: {
      border: getThemeContrastColor({ theme, color: 'error' }),
      color: getThemeContrastColor({ theme, color: 'error' }),
      background: theme.colors.error,
      placeholder: lighten(
        0.1,
        getThemeContrastColor({ theme, color: 'error' })
      ),
    },
  },
}))`
  border-radius: ${prop('theme.shape.primary')};
  border-width: ${prop('theme.border.default.width')};
  border-style: ${prop('theme.border.default.style')};
`;

StyledTextArea.propTypes = TextArea.propTypes;
StyledTextArea.defaultProps = TextArea.defaultProps;

export default StyledTextArea;
