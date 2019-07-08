import React from 'react';
import AboutShop from './AboutShop';
import AboutLightbox from './AboutLightbox';
import AboutTeam from './AboutTeam';

const AboutDisplay = () => {
  return (
    <div>
      <div className="image-container mb-3">
        <img src={require('../../images/about-banner.jpg')} alt="" />
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
