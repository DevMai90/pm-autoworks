import React, { Fragment } from 'react';
import ContactMap from './ContactMap';

const ContactDisplay = () => {
  return (
    <Fragment>
      <div className="image-container">
        <img src={require('../../images/banners/contact-banner.jpg')} alt="" />
      </div>

      <ContactMap />
      <h1>hiihhi</h1>
      <h1>hiihhi</h1>
    </Fragment>
  );
};

export default ContactDisplay;
