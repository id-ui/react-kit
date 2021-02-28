import React from 'react';
import FileInput, { UploadArea } from '@idui/react-file-input';
import Image from 'kit/Image';

function ImageUploader({ value, ...props }) {
  return (
    <UploadArea>
      <FileInput {...props} />
      {value ? (
        <Image alt="" src={value} />
      ) : (
        <span>Drop file here or click to upload</span>
      )}
    </UploadArea>
  );
}

ImageUploader.propTypes = FileInput.propTypes;
ImageUploader.defaultProps = {
  ...FileInput.defaultProps,
  accept: 'image/*',
};

export default ImageUploader;
