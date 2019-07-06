import React from 'react';
import PropTypes from 'prop-types';

const AboutFounders = ({ founderName, title, about, avatar }) => {
  return (
    <div className="col-md-4 mx-auto">
      <div className="card mb-3">
        <div className="card-body text-center px-2">
          <img
            src={require(`../../images/founders/${avatar}`)}
            alt=""
            className="img-fluid rounded-circle w-50 mb-3"
          />
          <h3>{founderName}</h3>
          <h5 className="text-muted">{title}</h5>
          <p>{about}</p>
        </div>
      </div>
    </div>
  );
};

AboutFounders.propTypes = {
  founderName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
};

export default AboutFounders;
