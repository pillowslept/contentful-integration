import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'

import { mapProductPageData } from '../../utils/dataMapper';

import { useContentfulRequest } from '../../hooks/ContentfulRequest';

import PageLoading from '../../components/PageLoading/PageLoading';

import Headline from '../../components/Headline/Headline';
import Accordion from '../../components/Accordion/Accordion';
import Product from '../../components/Product/Product';
import Paragraph from '../../components/Paragraph/Paragraph';

import {
  Separator,
} from '../../components/Styled/Separator.css';

import {
  Container,
  ProductContainer,
  QualitiesContainer,
  LoaderContainer,
} from './ProductPage.css';

const ProductPage = () => {
  const { pathname } = useLocation();
  const response = useContentfulRequest(`productPage`, pathname);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (response.finished) {
      const mappedData = mapProductPageData(response.data);
      setData(mappedData);
    }
  }, [response]);

  useEffect(() => {
    setData(null);
  }, [pathname]);

  const showNotFound = !response.loading && response.finished && !response.data.length;

  const renderProductData = () => {
    if (!data || !data.contentType || showNotFound) {
      return null;
    }

    const {
      accordion: { items: accordionItems },
      product: { slug, title: productName },
      headline: { title: headlineTitle, color: headlineColor },
      paragraph: { content: paragraphContent, color: paragraphColor },
    } = data;

    return (
      <>
        <ProductContainer>
          <Product
            slug={slug}
            productName={productName}
          />
        </ProductContainer>
        <QualitiesContainer>
          <Headline
            title={headlineTitle}
            color={headlineColor}
          />
          <Separator />
          <Paragraph content={paragraphContent} color={paragraphColor} />
          <Separator />
          <Accordion items={accordionItems} />
        </QualitiesContainer>
      </>
    );
  };

  return (
    <Container>
      {renderProductData()}
      <LoaderContainer>
        <PageLoading
          showNotFound={showNotFound}
          showSpinner={response.loading}
        />
      </LoaderContainer>
    </Container>
  );
};

export default ProductPage;
