import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import defaultImage from './defaultImage.png';
// import { API_BASE_URL } from 'config/constants';

const normalizeSrc = (src) => {
  return src;
  //return src === defaultImage ? src : `${API_BASE_URL}${src}`;
};

function Image({ src: providedSrc, ...props }) {
  const [src, setSrc] = useState(() =>
    normalizeSrc(providedSrc || defaultImage)
  );

  useEffect(() => {
    setSrc(normalizeSrc(providedSrc || defaultImage));
  }, [providedSrc]);

  const setDefaultSrc = useCallback(() => {
    setSrc(defaultImage);
  }, []);

  return <img src={src} alt="" onError={setDefaultSrc} {...props} />;
}

Image.propTypes = {
  src: PropTypes.string,
};

export default Image;
