import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container p-3">
        <div className="row">
          <div className="col-md-4 text-light">
            <p>
              PM Autoworks
              <br />
              226 Phelan Ave Ste D
              <br />
              San Jose CA 95112
            </p>
          </div>
          <div className="col-md-4 text-light">
            <p>
              Monday - Friday
              <br />
              9:00AM - 7:00PM
              <br />
              Saturday - Sunday
              <br />
              Closed
            </p>
          </div>
          <div className="col-md-4 text-light">
            <p className="mb-0">
              <a href="tel:1-408-332-1024" className="text-light">
                408-332-1024
              </a>
              <br />
              <a
                href="mailto:powermotive.autoworks@gmail.com"
                className="text-light"
              >
                powermotive.autoworks@gmail.com
              </a>
            </p>
            <span>
              <a
                href="https://www.yelp.com/biz/pm-autoworks-subaru-specialist-san-jose-8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-yelp fa-2x p-2 text-warning" />
              </a>
              <a
                href="https://www.facebook.com/pmautoworks/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f fa-2x p-2 text-warning" />
              </a>
              <a
                href="https://www.instagram.com/pmautoworks/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram fa-2x p-2 text-warning" />
              </a>
              <a
                href="https://www.youtube.com/channel/UClk2wEZ8TBgXkPnIuImkhiQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube fa-2x p-2 text-warning" />
              </a>
              <a href="tel:1-408-332-1024">
                <i className="fas fa-phone fa-2x p-2 text-warning" />
              </a>
              <a
                href="mailto:powermotive.autoworks@gmail.com"
                className="text-light"
              >
                <i className="far fa-envelope fa-2x p-2 text-warning" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
