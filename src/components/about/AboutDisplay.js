import React from 'react';
import AboutLightbox from './AboutLightbox';

const AboutDisplay = () => {
  return (
    <div>
      <div className="image-container mb-3">
        <img src={require('../../images/about-banner.jpg')} alt="" />
      </div>

      <div className="container">
        <section id="about">
          <div className="row">
            <div className="col-md-12 mx-auto">
              <h3>About The Shop</h3>
              <p>
                Established in 2017, PM Autoworks was founded by family members
                that shared an affinity for cars ever since childhood. Our roots
                come from working on cold concrete slabs in our home garages
                (some of our best memories come from late night wrenching with
                friends and family). We eventually made our way into independent
                shops dealerships where we mastered our craft.
              </p>
              <figure className="figure">
                <img
                  src={require('../../images/shop-1.jpg')}
                  alt=""
                  className="fig-image img-fluid rounded"
                />
                <figcaption className="figure-caption">
                  Our initial opening in 2016 with just one lift at the time.
                </figcaption>
              </figure>
              <p>
                Through the wonderful connections we've made and with great
                support from our peers,{' '}
                <strong>
                  <i>our dreams came true</i>
                </strong>{' '}
                when we opened the doors to PM Autoworks in the heart of San
                Jose. Now, we can express our passion through our clients and
                the cars that you all bring in.
              </p>
            </div>
          </div>
        </section>

        <section id="gallery">
          <AboutLightbox />
        </section>
      </div>
    </div>
  );
};

export default AboutDisplay;
