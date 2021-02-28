import { Link } from 'react-router-dom';

export const resolveComponentByProps = (props, defaultComponent = 'span') => {
  if (props.to) {
    return Link;
  }
  if (props.href) {
    return 'a';
  }
  return defaultComponent;
};
