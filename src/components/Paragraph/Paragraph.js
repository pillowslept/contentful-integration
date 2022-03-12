import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Text,
} from './Paragraph.css';

const Paragraph = ({ content, color }) => {
  return (
    <Container>
      <Text color={color}>
        {content}
      </Text>
    </Container>
  );
};

Paragraph.propTypes = {
  content: PropTypes.string.isRequired,
  color: PropTypes.string,
};

Paragraph.defaultProps = {
  color: ``,
};

export default Paragraph;
