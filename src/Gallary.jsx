import React, { useState } from 'react';
import Lightbox from './Lightboxvive';

const Gallery = ({ images }) => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="relative cursor-pointer group overflow-hidden rounded-xl shadow-md"
            onClick={() => setSelectedImg(img)}
          >
            <img
              src={img.src}
              alt={img.caption}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              {img.caption}
            </div>
          </div>
        ))}
      </div>
      {selectedImg && (
        <Lightbox image={selectedImg} onClose={() => setSelectedImg(null)} />
      )}
    </div>
  );
};

export default Gallery;