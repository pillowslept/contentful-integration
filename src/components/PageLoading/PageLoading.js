import React from 'react';
import PropTypes from 'prop-types';

import {
  Spinner,
} from '../Styled/Spinner.css';

import {
  Container,
  Text,
} from './PageLoading.css';

const PageLoading = ({ showSpinner, showNotFound }) => {
  return (
    <>
      {showSpinner && <>
        <Spinner />
        <span>Give us a moment, we're searching...</span>
      </>}
      {showNotFound && (
        <Container>
          <Text>
            Looks like this page is not configured yet.
          </Text>
        </Container>
      )}
    </>
  );
};

PageLoading.propTypes = {
  showNotFound: PropTypes.bool.isRequired,
  showSpinner: PropTypes.bool.isRequired,
};

export default PageLoading;
