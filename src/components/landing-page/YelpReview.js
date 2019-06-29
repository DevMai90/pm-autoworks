import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

const YelpReview = ({ review }) => {
  const {
    text,
    url,
    rating,
    user: { image_url, name }
  } = review;

  let stars = '';

  for (let i = 0; i < rating; i++) {
    stars += '<i className="fas fa-star text-warning" />';
  }

  return (
    <Fragment>
      {rating >= 4 && (
        <div className="col-md-4 mx-auto">
          <div className="card mb-3">
            <div className="card-body text-center px-2">
              <img
                src={image_url}
                alt=""
                className="img-fluid rounded-circle w-50 mb-3"
              />
              <h2>{name}</h2>
              <span>{parse(stars)}</span>
              <p>{text}</p>
              <a
                href={url}
                className="btn btn-warning d-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                {`${name.split(' ')[0]}'s Full Review`}
              </a>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

YelpReview.propTypes = {
  review: PropTypes.object.isRequired
};

export default YelpReview;
