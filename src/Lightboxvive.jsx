import React from 'react';

const LightboxView = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
      <div className="relative w-full max-w-4xl mx-auto p-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl font-bold"
        >
          ×
        </button>
        <img
          src={image.src}
          alt={image.caption}
          className="w-full h-auto rounded-xl"
        />
        <p className="text-white mt-4 text-center text-lg">{image.caption}</p>
      </div>
    </div>
  );
};

export default LightboxView;