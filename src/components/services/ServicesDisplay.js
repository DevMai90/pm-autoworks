import React from 'react';
import ServicesSidebar from './ServicesSidebar';
import ServicesMaintenance from './ServicesMaintenance';
import ServicesRepairs from './ServicesRepairs';
import ServicesDiagnostics from './ServicesDiagnostics';

const ServicesDisplay = () => {
  return (
    <div style={{ background: '#000000' }}>
      <div className="image-container mb-3">
        <img src={require('../../images/services.jpg')} alt="" />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDisplay;
