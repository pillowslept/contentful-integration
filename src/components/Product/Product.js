import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Headline from '../Headline/Headline';
import StarRating from '../StarRating/StarRating';

import {
  Separator,
} from '../Styled/Separator.css';

import {
  Container,
  Price,
  SalePrice,
  Size,
  SizeLabel,
  SizesContainer,
  ListSizes,
  PriceInformation,
  Image,
  Description,
} from './Product.css';

const Product = ({ slug, productName, products }) => {
  const product = products.find(({ slug: productSlug }) => productSlug === slug);

  if (!product) {
    return null;
  }

  const showSalePrice = !!product.salePrice && product.salePrice < product.price;

  const renderList = (items) => {
    if (!items) {
      return null;
    }

    return (
      <SizesContainer>
        <SizeLabel>Available in:</SizeLabel>
        <ListSizes>
          {items.map(({ id, title }) => <Size key={id}>{title}</Size>)}
        </ListSizes>
      </SizesContainer>
    );
  };

  return (
    <Container>
      <Headline
        alignment={`left`}
        title={productName}
        color={`green`}
      />
      <Separator />
      <Description>
        <PriceInformation>
          <Price showSalePrice={showSalePrice}>${product.price}</Price>
          {showSalePrice && <SalePrice>${product.salePrice}</SalePrice>}
        </PriceInformation>
        <StarRating
          hideTotal
          slug={slug}
        />
      </Description>
      <Separator />
      <Image
        alt={`gallery-image`}
        src={product.image}
      />
      <Separator />
      {renderList(product.sizes)}
      {renderList(product.colors)}
    </Container>
  );
};

Product.propTypes = {
  products: PropTypes.array,
  productName: PropTypes.string,
  slug: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(Product);
