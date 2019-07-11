import React from 'react';
import ServicesSidebar from './ServicesSidebar';
import ServicesMaintenance from './ServicesMaintenance';
import ServicesRepairs from './ServicesRepairs';
import ServicesDiagnostics from './ServicesDiagnostics';
import ServicesPerformance from './ServicesPerformance';

const ServicesDisplay = () => {
  return (
    <div style={{ background: '#000000' }}>
      <div className="image-container mb-3">
        <img src={require('../../images/services.jpg')} alt="" />
        <div className="centered">
          <h2 className="display-2 fadeIn">
            <strong>Services</strong>
          </h2>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-3 d-none d-md-block">
            <ServicesSidebar />
          </div>
          <div className="col-md-9 px-0">
            <ServicesMaintenance />
            <ServicesRepairs />
            <ServicesDiagnostics />
            <ServicesPerformance />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDisplay;
