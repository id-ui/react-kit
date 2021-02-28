import styled from 'styled-components';
import {
  LinearProgress as IDUILinearProgress,
  CircularProgress as IDUICircularProgress,
} from '@idui/react-progress';
import { prop } from 'styled-tools';
import { getThemeColor } from '../../utils/mixins';

export const LinearProgress = styled(IDUILinearProgress).attrs(
  ({ theme, color }) => ({
    color: getThemeColor({ theme, color }),
  })
)`
  background-color: ${prop('theme.colors.neutral')};
  border-radius: ${prop('theme.shape.primary')};
`;

LinearProgress.propTypes = IDUILinearProgress.propTypes;
LinearProgress.defaultProps = {
  ...IDUILinearProgress.defaultProps,
  color: 'primary',
};

export const CircularProgress = styled(IDUICircularProgress).attrs(
  ({ theme, color }) => ({
    color: getThemeColor({ theme, color }),
  })
)``;

CircularProgress.propTypes = IDUICircularProgress.propTypes;
CircularProgress.defaultProps = {
  ...IDUICircularProgress.defaultProps,
  color: 'primary',
};
