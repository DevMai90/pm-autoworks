import React, { Fragment } from 'react';

const ServicesDisplay = () => {
  return (
    <Fragment>
      <div className="image-container">
        <img src={require('../../images/services.jpg')} alt="" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-3 d-none d-md-block py-3">
            <div className="d-flex flex-column sticky-top">
              <h3>Services</h3>
              <a href="#" className="text-dark p-2">
                Maintenance
              </a>
              <a href="#" className="text-dark p-2">
                Repairs
              </a>
              <a href="#" className="text-dark p-2">
                Diagnostics
              </a>
              <a href="#" className="text-dark p-2">
                Performance
              </a>
            </div>
          </div>

          <div className="col-md-9 py-3">
            <section id="maintenance">
              <h2>Scheduled Maintenance Services</h2>
              <p>
                Routine vehicle maintenance can help you avoid unpredictable
                roadside breakdowns, reduce costly repairs, and keep your
                vehicle lasting longer.
              </p>
              <p>
                More importantly, routine maintenance helps keep your vehicle{' '}
                <strong>
                  <i>safe</i>
                </strong>{' '}
                for you and all of your passengers. Because of this, we at PM
                Autoworks provide exemplary factory maintenance services at
                reasonable rates.
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
                <li>Timing Belt Service (105,000 Miles) – STI models only</li>
              </ul>
            </section>

            <section id="repairs">
              <h2>Repairs</h2>
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
            </section>

            <section id="diagnostics">
              <h2>Diagnostics</h2>
              <p>
                Is your vehicle running bad or stalling? Is your check engine
                light on? The issue could be as simple as a loose gas cap or as
                complex as internal engine repair. Either way, PM Autoworks can
                help. Pairing up state of the art equipment with our
                professional certified technicians, gives us the ability to
                diagnose the concern and determine what repairs are needed to
                get you safely back on the road.
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
            </section>

            <section id="performance">
              <h2>Performance Upgrades</h2>
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
            </section>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ServicesDisplay;
