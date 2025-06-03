import React from 'react';
import './ImageSlider.css';

const ImageSlider = ({ images, title }) => {
  return (
    <div className="image-slider container-fluid">
      <div id={`carousel-${title.replace(/\s/g, '')}`} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner rounded">
          {images.map((img, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img src={img.url} className="d-block w-100 slider-img" alt={img.alt || `Slide ${index + 1}`} />
              {img.caption && (
                <div className="carousel-caption d-none d-md-block">
                  <h5>{img.caption}</h5>
                </div>
              )}
            </div>
          ))}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${title.replace(/\s/g, '')}`} data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${title.replace(/\s/g, '')}`} data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
