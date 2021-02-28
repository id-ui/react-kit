import styled from 'styled-components';
import Stepper from '@idui/react-stepper';
import { ifProp, prop, withProp } from 'styled-tools';
import { getThemeContrastColor, getThemeHighlightColor } from 'utils/mixins';

const StyledStepper = styled(Stepper).attrs(({ theme }) => ({
  theme: {
    colors: {
      step: {
        default: theme.colors.primary,
        completed: getThemeHighlightColor({ color: 'primary', theme }),
      },
      progress: {
        default: theme.colors.neutral,
        completed: theme.colors.secondary,
      },
    },
    stepSize: 50,
    progressWidth: 4,
    progressTransitionDuration: 300,
  },
}))``;

StyledStepper.propTypes = Stepper.propTypes;
StyledStepper.defaultProps = Stepper.defaultProps;

const Step = styled.div`
  transition: 0.3s linear color;
  transition-delay: 0.3s;
  color: ${ifProp(
    'completed',
    prop('theme.colors.secondary'),
    withProp('theme', (theme) =>
      getThemeContrastColor({ theme, color: 'primary' })
    )
  )};
`;

StyledStepper.Step = Step;

export default StyledStepper;
