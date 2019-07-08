import React from 'react';

const ServicesMaintenance = () => {
  return (
    <section id="maintenance" className="mb-3">
      <div className="card border-warning">
        <div className="card-header bg-dark text-warning">
          <h3>Scheduled Maintenance</h3>
        </div>
        <div className="card-body">
          <p>
            Routine vehicle maintenance can help you avoid unpredictable
            roadside breakdowns, reduce costly repairs, and keep your vehicle
            lasting longer.
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
              Subaru vehicles up to model year 2014 use the following schedule:
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
        </div>
      </div>
    </section>
  );
};

export default ServicesMaintenance;
