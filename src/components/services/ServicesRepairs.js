import React from 'react';

const ServicesRepairs = () => {
  return (
    <section id="repairs" className="mb-3">
      <div className="card border-warning">
        <div className="card-header bg-dark text-warning">
          <h3>Repairs</h3>
        </div>
        <div className="card-body">
          <p>
            With over 10 years of experience in working with Subaru, our ASE
            Certified Technicians provide top quality repair services at an
            affordable cost.
          </p>
          <h4>Engine Repair</h4>
          <ul>
            <li>Complete engine rebuild or replacement</li>
            <li>Engine cylinder head gaskets</li>
            <li>Engine fluid leaks (oil or coolant)</li>
            <li>
              Repair any mechanical failure such as bearings, pulleys, bent
              valves, etc
            </li>
            <li>Engine cooling system</li>
            <li>Turbo chargers</li>
            <li>Exhaust systems</li>
            <li>Starting &amp; charging</li>
          </ul>
          <h4>Drivetrain</h4>
          <ul>
            <li>Transmission Rebuilds</li>
            <li>Clutch replacement</li>
            <li>Driveshaft</li>
            <li>Differential</li>
            <li>Oil leaks</li>
          </ul>
          <h4>Chassis</h4>
          <ul>
            <li>Brakes</li>
            <li>Suspension</li>
            <li>Steering</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesRepairs;
