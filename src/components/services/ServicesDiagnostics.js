import React from 'react';

const ServicesDiagnostics = () => {
  return (
    <section id="diagnostics" className="mb-3">
      <div className="card border-warning">
        <div className="card-header bg-dark text-warning">
          <h3>Diagnostics</h3>
        </div>
        <div className="card-body">
          <p>
            Is your vehicle running bad or stalling? Is your check engine light
            on? The issue could be as simple as a loose gas cap or as complex as
            internal engine repair. Either way, PM Autoworks can help. Pairing
            up state of the art equipment with our professional certified
            technicians, gives us the ability to diagnose the concern and
            determine what repairs are needed to get you safely back on the
            road.
          </p>
          <h4>Warning Lights</h4>
          <ul>
            <li>Check Engine</li>
            <li>Oil level</li>
            <li>Oil pressure</li>
            <li>Cruise Control</li>
            <li>AT Temp</li>
            <li>VDC</li>
            <li>Trac Off</li>
            <li>Traction Control</li>
            <li>Tire pressure (TPMS)</li>
            <li>Air Bag</li>
          </ul>
          <h4>Engine</h4>
          <ul>
            <li>Engine performance and drivability</li>
            <li>Abnormal engine noises</li>
            <li>Oil consumption</li>
            <li>Compression and leak-down testing</li>
            <li>Misfires</li>
          </ul>
          <h4>Cooling System</h4>
          <ul>
            <li>Overheating</li>
            <li>Coolant leaks</li>
            <li>Coolant consumption</li>
            <li>Coolant contamination</li>
            <li>Radiator fan operation</li>
          </ul>
          <h4>Electrical and Accessories</h4>
          <ul>
            <li>Power windows,&nbsp;locks,&nbsp;mirrors, and seats</li>
            <li>Heated seats</li>
            <li>Sunroofs / moonroofs</li>
            <li>Electric parking brakes</li>
            <li>Cruise control</li>
          </ul>
          <h4>Starting and Charging</h4>
          <ul>
            <li>Slow starting</li>
            <li>No starting</li>
            <li>Battery failures</li>
            <li>Charging trouble</li>
            <li>Parasitic loads that drain your battery</li>
          </ul>
          <h4>Transmission, Drivetrain, and Differential</h4>
          <ul>
            <li>“AT Temp” light on or flashing</li>
            <li>Binding/shuddering when turning</li>
            <li>Groaning, whining, or clicking noises</li>
            <li>Delayed or harsh shifting</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesDiagnostics;
