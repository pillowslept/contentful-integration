import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  Container,
  Stars,
  Average,
  Total,
  Star,
  StarsContainer,
} from './StarRating.css';

const StarRating = ({ slug, ratings, hideTotal }) => {
  const rating = ratings.find(({ slug: ratingSlug }) => ratingSlug === slug);

  if (!rating) {
    return null;
  }

  return (
    <Container>
      <StarsContainer>
        <Stars>
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} active={rating.average >= star}/>
          ))}
        </Stars>
        <Average>{rating.average} / 5</Average>
      </StarsContainer>
      {!hideTotal && <Total>Total ({rating.total}) reviews</Total>}
    </Container>
  );
};

StarRating.propTypes = {
  hideTotal: PropTypes.bool,
  ratings: PropTypes.array,
  slug: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    ratings: state.ratings,
  };
};

export default connect(mapStateToProps)(StarRating);
