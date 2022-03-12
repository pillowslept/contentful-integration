import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Text,
} from './Headline.css';

const Headline = ({ title, color, alignment }) => {
  return (
    <Container alignment={alignment}>
      <Text color={color}>
        {title}
      </Text>
    </Container>
  );
};

Headline.propTypes = {
  alignment: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
};

Headline.defaultProps = {
  color: ``,
};

export default Headline;
