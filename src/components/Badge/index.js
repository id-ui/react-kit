import styled from 'styled-components';
import Badge from '@idui/react-badge';
import { getThemeColor } from 'utils/mixins';

const StyledBadge = styled(Badge).attrs(({ theme, color }) => ({
  color: getThemeColor({ theme, color }),
}))``;

StyledBadge.propTypes = Badge.propTypes;
StyledBadge.defaultProps = Badge.defaultProps;

export default StyledBadge;
