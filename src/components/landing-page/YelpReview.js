import React, { Fragment } from 'react';

const YelpReview = ({ review }) => {
  const {
    text,
    rating,
    user: { image_url, name }
  } = review;
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body text-center">
          <img
            src={image_url}
            alt=""
            className="img-fluid rounded-circle w-50 mb-3"
          />
          <h2>{name}</h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default YelpReview;
