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
            <div className="col-md-3 mb-2 text-center">
              <i className="fas fa-car fa-3x mb-2" />
              <h3>Maintenance</h3>
            </div>
            <div className="col-md-3 mb-2 text-center">
              <i className="fas fa-tools fa-3x mb-2" />
              <h3>Repair</h3>
            </div>
            <div className="col-md-3 mb-2 text-center">
              <i className="fas fa-cogs fa-3x mb-2" />
              <h3>Diagnostics</h3>
            </div>
            <div className="col-md-3 mb-2 text-center">
              <i className="fas fa-fire-alt fa-3x mb-2" />
              <h3>Performance</h3>
            </div>
          </div>
        </div>
      </section>

      <section id="warranty" className="">
        <div className="dark-overlay">
          <div className="row">
            <div className="col-8 mx-auto">
              <div className="container p-5 text-center">
                <h1>One-year / 12,000-Mile Warranty</h1>
                <p>
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
    </Fragment>
  );
};

export default LandingDisplay;
