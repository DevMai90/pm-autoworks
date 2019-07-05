import React from 'react';
import { Link } from 'react-router-dom';

const ServicesDisplay = () => {
  return (
    <div style={{ background: '#000000' }}>
      <div className="image-container mb-3">
        <img src={require('../../images/services.jpg')} alt="" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-3 d-none d-md-block">
            <div className="card border-warning sticky-top">
              <div className="card-header bg-dark text-warning">
                <h3>Services</h3>
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
                  <Link
                    to="/contact"
                    className="btn btn-warning p-2"
                    // style={{ backgroundColor: '#000000' }}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-9 px-0">
            <section id="maintenance" className="mb-3">
              <div className="card border-warning">
                <div className="card-header bg-dark text-warning">
                  <h3>Scheduled Maintenance</h3>
                </div>
                <div className="card-body">
                  <p>
                    Routine vehicle maintenance can help you avoid unpredictable
                    roadside breakdowns, reduce costly repairs, and keep your
                    vehicle lasting longer.
                  </p>
                  <p>
                    More importantly, routine maintenance helps keep your
                    vehicle{' '}
                    <strong>
                      <i>safe</i>
                    </strong>{' '}
                    for you and all of your passengers. Because of this, we at
                    PM Autoworks provide exemplary factory maintenance services
                    at reasonable rates.
                  </p>
                  <p>
                    <strong>
                      Subaru vehicles up to model year 2014 use the following
                      schedule:
                    </strong>
                  </p>
                  <ul>
                    <li>Engine Oil Service (3,750 Miles) – Some models</li>
                    <li>Minor Service (7,500 Miles)</li>
                    <li>Intermediate Service (15,000 Miles)</li>
                    <li>Major Service (30,000 Miles)</li>
                    <li>Timing Belt Service (105,000 Miles)</li>
                  </ul>
                  <p>
                    <strong>
                      Subaru vehicles 2015 and newer use the following schedule:
                    </strong>
                  </p>
                  <ul>
                    <li>Minor Service (6,000 Miles)</li>
                    <li>Intermediate Service (12,000 Miles)</li>
                    <li>Major Service (30,000 Miles)</li>
                    <li>
                      Timing Belt Service (105,000 Miles) – STI models only
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="repairs" className="mb-3">
              <div className="card border-warning">
                <div className="card-header bg-dark text-warning">
                  <h3>Repairs</h3>
                </div>
                <div className="card-body">
                  <p>
                    With over 10 years of experience in working with Subaru, our
                    ASE Certified Technicians provide top quality repair
                    services at an affordable cost.
                  </p>
                  <h4>Engine Repair</h4>
                  <ul>
                    <li>Complete engine rebuild or replacement</li>
                    <li>Engine cylinder head gaskets</li>
                    <li>Engine fluid leaks (oil or coolant)</li>
                    <li>
                      Repair any mechanical failure such as bearings, pulleys,
                      bent valves, etc
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

            <section id="diagnostics" className="mb-3">
              <div className="card border-warning">
                <div className="card-header bg-dark text-warning">
                  <h3>Diagnostics</h3>
                </div>
                <div className="card-body">
                  <p>
                    Is your vehicle running bad or stalling? Is your check
                    engine light on? The issue could be as simple as a loose gas
                    cap or as complex as internal engine repair. Either way, PM
                    Autoworks can help. Pairing up state of the art equipment
                    with our professional certified technicians, gives us the
                    ability to diagnose the concern and determine what repairs
                    are needed to get you safely back on the road.
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

            <section id="performance" className="mb-3">
              <div className="card border-warning">
                <div className="card-header bg-dark text-warning">
                  <h3>Performance Upgrades</h3>
                </div>
                <div className="card-body">
                  <p>Mo' powah baby</p>
                  <h4>Engine Upgrades</h4>
                  <ul>
                    <li>
                      <strong>Stage 1 Power Package</strong>
                      <ul>
                        <li>
                          <em>Intake</em>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Stage 2 Power Package</strong>
                      <ul>
                        <li>
                          <em>Intake, Turboback Exhaust</em>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Stage 3 Power Package</strong>
                      <ul>
                        <li>
                          <em>Intake, Turboback Exhaust, Fuel System</em>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <h4>Suspension Upgrades</h4>
                  <ul>
                    <li>
                      <strong>Stage 1 Suspension package</strong>
                      <ul>
                        <li>
                          <em>Lowering springs, Strut bars</em>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Stage 2 Suspension package</strong>
                      <ul>
                        <li>
                          <em>Full Coilovers, Strut bars</em>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Stage 3 Suspension package</strong>
                      <ul>
                        <li>
                          <em>
                            Full Coilovers, Strut bars, Sway bars and bushings
                          </em>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <h4>Brake Upgrades</h4>
                  <ul>
                    <li>
                      <strong>Stage 1 Brake package</strong>
                      <ul>
                        <li>
                          <em>Upgraded pads, Drilled and Slotted rotors</em>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Stage 2 Brake package</strong>
                      <ul>
                        <li>
                          <em>
                            Upgraded pads, Drilled and Slotted rotors, Stainless
                            steel brake lines
                          </em>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDisplay;
