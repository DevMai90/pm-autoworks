import React from 'react';

const AboutShop = () => {
  return (
    <section id="about">
      <div className="row">
        <div className="col-md-12 mx-auto">
          <h3>About The Shop</h3>
          <p>
            Established in 2017, PM Autoworks was founded by family members that
            shared an affinity for cars ever since childhood. Our roots come
            from working on cold concrete slabs in our home garages (some of our{' '}
            <strong>
              <i>best memories</i>
            </strong>{' '}
            come from late night wrenching with{' '}
            <strong>
              <i>friends and family</i>
            </strong>
            ). We eventually made our way into independent shops and dealerships
            where we mastered our craft.
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
            Through the wonderful connections we've made and with great support
            from our peers,{' '}
            <strong>
              <i>our dreams came true</i>
            </strong>{' '}
            when we opened the doors to PM Autoworks in the heart of San Jose.
            Now, we can express our passion through our clients and the cars
            that you all bring in.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutShop;
