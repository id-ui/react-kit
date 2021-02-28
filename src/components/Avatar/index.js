import styled from 'styled-components';
import Avatar from '@idui/react-avatar';
import { getThemeColor } from 'utils/mixins';
import defaultSrc from './default.png';

const StyledAvatar = styled(Avatar).attrs(({ theme, color }) => ({
  color: getThemeColor({ theme, color }),
}))``;

StyledAvatar.propTypes = Avatar.propTypes;
StyledAvatar.defaultProps = {
  ...Avatar.defaultProps,
  defaultSrc,
};

export default StyledAvatar;
