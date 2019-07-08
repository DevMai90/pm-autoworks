import React from 'react';
import { Link } from 'react-router-dom';

const ServicesSidebar = () => {
  return (
    <div className="card border-warning sticky-top">
      <div className="card-header bg-dark text-warning">
        <a href="#main-nav" className="text-warning">
          <h3>Services</h3>
        </a>
      </div>
      <div className="card-body">
        <div className="d-flex flex-column">
          <a href="#maintenance" className="text-dark p-2">
            Maintenance
          </a>
          <a href="#repairs" className="text-dark p-2">
            Repairs
          </a>
          <a href="#diagnostics" className="text-dark p-2">
            Diagnostics
          </a>
          <a href="#performance" className="text-dark p-2">
            Performance
          </a>
          <Link to="/contact" className="btn btn-warning p-2">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesSidebar;
