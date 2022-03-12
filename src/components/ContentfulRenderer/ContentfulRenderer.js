import React from 'react';
import PropTypes from 'prop-types';

import Headline from '../Headline/Headline';
import Accordion from '../Accordion/Accordion';
import StarRating from '../StarRating/StarRating';
import Product from '../Product/Product';
import Paragraph from '../Paragraph/Paragraph';

export const components = {
  accordion: Accordion,
  headline: Headline,
  starRating: StarRating,
  product: Product,
  paragraph: Paragraph,
};

const ContentfulRenderer = ({ pageData }) => {

  const elementsToRender = pageData.components.map((props, index) => {
    const { contentType } = props
    if (!components.hasOwnProperty(contentType)) {
      console.log(`There is an element missing:`, contentType);

      return null;
    }

    const Component = components[contentType];

    return (
      <Component
        {...props}
        key={index}
      />
    );
  });

  return (
    <>
      {elementsToRender}
    </>
  );
};

ContentfulRenderer.propTypes = {
  pageData: PropTypes.object,
};

ContentfulRenderer.defaultProps = {
  pageData: { components: [] },
};

export default ContentfulRenderer;
