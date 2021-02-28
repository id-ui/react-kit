import React from 'react';
import IDUIIcon from '@idui/react-icon';
import { withTheme } from 'styled-components';
import { getThemeColor, getThemeHighlightColor } from 'utils/mixins';

function Icon({ color, theme, ...props }) {
  return (
    <IDUIIcon
      {...props}
      color={getThemeColor({ theme, color })}
      hoverColor={getThemeHighlightColor({ theme, color })}
    />
  );
}

const IconWithTheme = withTheme(Icon);

IconWithTheme.propTypes = IDUIIcon.propTypes;
IconWithTheme.defaultProps = {
  ...IDUIIcon.defaultProps,
  color: 'primary',
};

export default IconWithTheme;
