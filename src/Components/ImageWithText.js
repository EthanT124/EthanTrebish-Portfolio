import React from 'react';

const ImageWithText = ({ imagePath, text }) => {
  return (
    <div className="position-relative">
      <img src={imagePath} className="img-fluid" alt="..." />
      <div className="position-absolute bottom-0 start-50 translate-middle-x bg-dark p-2" style={{ zIndex: 1 }}>
        <p className="text-light m-0">{text}</p>
      </div>
    </div>
  );
}

export default ImageWithText;
