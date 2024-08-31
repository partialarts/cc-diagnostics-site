import React from 'react';

const ImageGallery = ({ images }) => {
  return (
    <figure className="mt-10 grid gap-4">
      {/* Main Image (First Image in the Array) */}
      {images.length > 0 && (
        <div>
          <img
            src={images[0].url}
            alt=""
            className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
            onError={(e) => { e.target.src = placeholder; }} // Error handling (placeholder image)
          />
        </div>
      )}

      {/* Thumbnail Grid (Remaining Images) */}
      {images.length > 1 && (
        <div className="grid grid-cols-5 gap-4">
          {images.slice(1).map((image, index) => (
            <div key={index}>
              <img
                src={image.url}
                className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer"
                alt="gallery-image"
                onError={(e) => { e.target.src = placeholder; }}
              />
            </div>
          ))}
        </div>
      )}
    </figure>
    
  );
};

export default ImageGallery;