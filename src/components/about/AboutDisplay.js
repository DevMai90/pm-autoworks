import React from 'react';
import AboutShop from './AboutShop';
import AboutLightbox from './AboutLightbox';
import AboutTeam from './AboutTeam';

const AboutDisplay = () => {
  return (
    <div>
      <div className="image-container mb-3">
        <img src={require('../../images/banners/about-banner.jpg')} alt="" />
        <div className="centered">
          <h2
            className="display-2 text-white fadeIn"
            style={{ fontSize: '48px', textDecoration: 'underline #ffc107' }}
          >
            <strong>About Us</strong>
          </h2>
        </div>
      </div>

      <div className="container">
        <AboutShop />
        <AboutLightbox />
        <AboutTeam />
      </div>
    </div>
  );
};

export default AboutDisplay;
