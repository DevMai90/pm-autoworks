import React, { Fragment, useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const AboutLightbox = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const images = [
    require('../../images/lightbox/office-1.jpg'),
    require('../../images/lightbox/office-2.jpg'),
    require('../../images/lightbox/shop-2.jpg'),
    require('../../images/lightbox/shop-3.jpg'),
    require('../../images/lightbox/shop-4.jpg'),
    require('../../images/lightbox/shop-5.jpg')
  ];

  const onImageClick = index => {
    setIsOpen(true);
    setPhotoIndex(index);
  };

  const displayImages = images.map((image, index) => {
    return (
      <div className="col-md-4" key={index}>
        <img
          src={image}
          alt=""
          className="img-fluid p-2"
          onClick={() => onImageClick(index)}
        />
      </div>
    );
  });
  return (
    <Fragment>
      <div className="container">
        <div className="row">{displayImages}</div>
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </Fragment>
  );
};

export default AboutLightbox;
