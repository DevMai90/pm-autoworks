import React from 'react';

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="spinner-border text-warning  mb-5"
        role="status"
        style={{ height: '3rem', width: '3rem' }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
