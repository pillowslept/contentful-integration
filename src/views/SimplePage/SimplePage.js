import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux';

import { mapSimplePageData } from '../../utils/dataMapper';

import { useContentfulRequest } from '../../hooks/ContentfulRequest';

import ContentfulRenderer from '../../components/ContentfulRenderer/ContentfulRenderer';
import PageLoading from '../../components/PageLoading/PageLoading';

import {
  Container,
} from './SimplePage.css';

const SimplePage = () => {
  const { pathname } = useLocation();
  const response = useContentfulRequest(`simplePage`, pathname);
  const [data, setData] = useState({ components: [] });

  useEffect(() => {
    if (response.finished) {
      const mappedData = mapSimplePageData(response.data);
      setData(mappedData);
    }
  }, [response]);

  return (
    <Container>
      <ContentfulRenderer pageData={data} />
      <PageLoading
        showNotFound={!response.loading && response.finished && !response.data.length}
        showSpinner={response.loading}
      />
    </Container>
  );
};

SimplePage.propTypes = {
  contentful: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    contentful: state.contentful,
  };
};

export default connect(mapStateToProps)(SimplePage);

