import React, { Fragment, useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import API_KEY from '../../APIKeys';
import axios from 'axios';
import YelpReview from './YelpReview';
import Spinner from '../layout/Spinner';

const LandingDisplay = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const getReviews = async () => {
    const proxyurl = 'https://cors-anywhere.herokuapp.com/';
    const url =
      'https://api.yelp.com/v3/businesses/pm-autoworks-subaru-specialist-san-jose-8/reviews';
    const config = {
      headers: {
        Authorization: `Bearer ${API_KEY.yelpAPI}`
      }
    };

    try {
      const res = await axios.get(proxyurl + url, config);

      setReviews(res.data.reviews);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <Fragment>
      <div className="image-container">
        <img src={require('../../images/banners/landing-banner.png')} alt="" />
      </div>

      <section id="landing-header">
        <div className="row">
          <div className="col-8 mx-auto ">
            <div className="container text-center py-3">
              <h1>Subaru Specialists</h1>
              <p>
                Established in 2016, PM Autoworks is a professional
                repair/performance shop specializing in Subaru vehicles. With
                over a decade of experience with Subaru, our ASE Certified
                technicians have the knowledge to help you maintain your vehicle
                in great shape for the road.
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-2 text-center">
              <Link to="/services">
                <i className="circle-icon fas fa-car fa-3x" />
              </Link>
              <h3>Maintenance</h3>
              <img
                src={require('../../images/maintenance.jpg')}
                alt=""
                className="img-fluid rounded mb-3"
                style={{ maxHeight: '180px' }}
              />
            </div>
            <div className="col-md-6 col-lg-3 mb-2 text-center">
              <Link to="/services#repairs">
                <i className="circle-icon fas fa-tools fa-3x" />
              </Link>
              <h3>Repairs</h3>
              <img
                src={require('../../images/repair.jpg')}
                alt=""
                className="img-fluid rounded mb-3"
                style={{ maxHeight: '180px' }}
              />
            </div>
            <div className="col-md-6 col-lg-3 mb-2 text-center">
              <Link to="/services#diagnostics">
                <i className="circle-icon fas fa-cogs fa-3x" />
              </Link>
              <h3>Diagnostics</h3>
              <img
                src={require('../../images/diagnostics.jpg')}
                alt=""
                className="img-fluid rounded mb-3"
                style={{ maxHeight: '180px' }}
              />
            </div>
            <div className="col-md-6 col-lg-3 mb-2 text-center">
              <Link to="/services#performance">
                <i className="circle-icon fas fa-fire-alt fa-3x" />
              </Link>
              <h3>Performance</h3>
              <img
                src={require('../../images/performance.jpg')}
                alt=""
                className="img-fluid rounded mb-3"
                style={{ maxHeight: '180px' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="warranty">
        <div className="dark-overlay">
          <div className="row">
            <div className="col">
              <div className="container py-5">
                <h2>One-year / 12,000-Mile Warranty</h2>
                <p className="d-none d-md-block">
                  We believe that auto care should be a hassle-free experience.
                  We have built trusted customer relationships based on PM
                  Autoworks' reliability and professional service. And because
                  we know that quality parts and services are important to you,
                  we stand behind them with our guarantees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="yelp">
        <div className="container">
          <div className="row">
            <div className="col text-center py-5">
              <h3>
                Our Clients <i>Trust</i> Us
              </h3>
              <p>
                We understand that{' '}
                <i>
                  <strong>trust</strong>
                </i>{' '}
                is a difficult thing to build and easily lost. Which is why we
                take pride in our craftsmanship and building strong{' '}
                <i>
                  <strong>relationships</strong>
                </i>{' '}
                with our clients. See what others are saying about us on{' '}
                <a
                  href="https://www.yelp.com/biz/pm-autoworks-subaru-specialist-san-jose-8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-dark">
                    <strong>
                      Yelp <i className="fab fa-yelp" />
                    </strong>
                  </span>
                </a>
                .
              </p>
              <img
                src={require('../../images/yelp.jpg')}
                alt="2017-yelp"
                className="img-fluid"
              />
            </div>
          </div>
          {loading ? (
            <Spinner />
          ) : (
            <div className="row py-5" id="authors">
              {reviews.map(review => (
                <YelpReview review={review} key={review.id} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="booking">
        <div className="dark-overlay">
          <div className="row">
            <div className="container">
              <div className="col p-5">
                <h3>Schedule Your Appointment Now</h3>
                <Link to="/contact">
                  <button className="btn btn-warning btn-lg" type="button">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default LandingDisplay;
