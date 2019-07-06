import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const AboutLightbox = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const images = [
    [require('../../images/lightbox/office-1.jpg'), 'Reception desk area'],
    [
      require('../../images/lightbox/office-2.jpg'),
      'Lounge area with snacks and mini-fridge'
    ],
    [
      require('../../images/lightbox/shop-2.jpg'),
      'Three 4-post lifts full as usual'
    ],
    [require('../../images/lightbox/shop-3.jpg'), 'Entrance to the shop'],
    [require('../../images/lightbox/shop-4.jpg'), 'Ricky hard at work'],
    [
      require('../../images/lightbox/shop-5.jpg'),
      'Peter preparing for a track day'
    ]
  ];

  const onImageClick = index => {
    setIsOpen(true);
    setPhotoIndex(index);
  };

  const displayImages = images.map((image, index) => {
    return (
      <div className="col-sm-6 col-lg-4" key={index}>
        <img
          src={image[0]}
          alt=""
          className="img-fluid p-2"
          onClick={() => onImageClick(index)}
        />
      </div>
    );
  });
  return (
    <section id="gallery">
      <div className="row">{displayImages}</div>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex][0]}
          nextSrc={images[(photoIndex + 1) % images.length][0]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length][0]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
          imageCaption={images[photoIndex][1]}
        />
      )}
    </section>
  );
};

export default AboutLightbox;
