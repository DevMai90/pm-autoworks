import React, { Fragment } from 'react';

const ContactList = () => {
  return (
    <Fragment>
      <h3>Address</h3>
      <p>
        PM Autoworks
        <br />
        226 Phelan Ave Ste D
        <br />
        San Jose CA 95112
      </p>
      <h3>Hours</h3>
      <p>
        Monday - Friday
        <br />
        9:00AM - 7:00PM
        <br />
        Saturday - Sunday
        <br />
        Closed
      </p>
      <h3>Contact</h3>
      <a href="tel:1-408-332-1024" className="text-dark">
        Call/Text: 408-332-1024
      </a>
      <br />
      <a href="mailto:powermotive.autoworks@gmail.com" className="text-dark">
        Email: powermotive.autoworks@gmail.com
      </a>
      <h3 className="mt-3">Social Media</h3>
      <span>
        <a
          href="https://www.yelp.com/biz/pm-autoworks-subaru-specialist-san-jose-8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-yelp fa-2x p-2 text-dark" />
        </a>
        <a
          href="https://www.facebook.com/pmautoworks/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f fa-2x p-2 text-dark" />
        </a>
        <a
          href="https://www.instagram.com/pmautoworks/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram fa-2x p-2 text-dark" />
        </a>
        <a
          href="https://www.youtube.com/channel/UClk2wEZ8TBgXkPnIuImkhiQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-youtube fa-2x p-2 text-dark" />
        </a>
        <a href="tel:1-408-332-1024">
          <i className="fas fa-phone fa-2x p-2 text-dark" />
        </a>
        <a href="mailto:powermotive.autoworks@gmail.com" className="text-light">
          <i className="far fa-envelope fa-2x p-2 text-dark" />
        </a>
      </span>
    </Fragment>
  );
};

export default ContactList;
