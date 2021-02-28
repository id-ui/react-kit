import { Link } from 'react-router-dom';

export default (props, defaultComponent = 'span') => {
  if (props.to) {
    return Link;
  }
  if (props.href) {
    return 'a';
  }
  return defaultComponent;
};
