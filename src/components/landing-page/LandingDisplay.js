import React, { Fragment } from 'react';

const LandingDisplay = () => {
  return (
    <Fragment>
      <div className="image-container">
        <img src={require('../../images/landing-banner.png')} alt="" />
      </div>

      <section id="landing-header">
        <div className="row">
          <div className="col-8 mx-auto ">
            <div className="container text-center py-3">
              <h1>Subaru Specialists</h1>
              <p>
                With over a decade of experience with Subaru, our ASE Certified
                technicians have the knowledge to help you maintain your vehicle
                in great shape for the road.
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-2 text-center">
              <i className="fas fa-car fa-3x mb-2" />
              <h3>Maintenance</h3>
              <img
                src={require('../../images/maintenance.jpg')}
                alt=""
                className="img-fluid rounded mb-3"
                style={{ maxHeight: '180px' }}
              />
            </div>
            <div className="col-md-6 col-lg-3 mb-2 text-center">
              <i className="fas fa-tools fa-3x mb-2" />
              <h3>Repair</h3>
              <img
                src={require('../../images/repair.jpg')}
                alt=""
                className="img-fluid rounded mb-3"
                style={{ maxHeight: '180px' }}
              />
            </div>
            <div className="col-md-6 col-lg-3 mb-2 text-center">
              <i className="fas fa-cogs fa-3x mb-2" />
              <h3>Diagnostics</h3>
              <img
                src={require('../../images/diagnostics.jpg')}
                alt=""
                className="img-fluid rounded mb-3"
                style={{ maxHeight: '180px' }}
              />
            </div>
            <div className="col-md-6 col-lg-3 mb-2 text-center">
              <i className="fas fa-fire-alt fa-3x mb-2" />
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

      <section id="warranty" className="">
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
        <div className="row">
          <div className="col">
            <h1>Yelp TBD</h1>
          </div>
        </div>
      </section>

      <section id="location">
        <div className="dark-overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-4 mx-auto py-5">
                <p>
                  PM Autoworks
                  <br />
                  226 Phelan Ave
                  <br />
                  San Jose CA 95112
                  <br />
                  408-332-1024
                  <br />
                  powermotive.autoworks@gmail.com
                </p>
              </div>
              <div className="col-md-8 mx-auto">
                <h1>Google API</h1>
                <p>TBD</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default LandingDisplay;
