import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  AddToCart,
  Container,
  Title,
  Price,
  SalePrice,
  Size,
  SizeLabel,
  SizesContainer,
  ListSizes,
  PriceInformation,
  ProductInformation,
  Separator,
} from './Purchaser.css';

const Purchaser = ({ slug, products }) => {
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
      <ProductInformation>
        <Title>{product.title}</Title>
        <PriceInformation>
          <Price showSalePrice={showSalePrice}>${product.price}</Price>
          {showSalePrice && <SalePrice>${product.salePrice}</SalePrice>}
        </PriceInformation>
      </ProductInformation>
      <Separator />
      {renderList(product.sizes)}
      {renderList(product.colors)}
      <AddToCart>Add to cart</AddToCart>
    </Container>
  );
};

Purchaser.propTypes = {
  products: PropTypes.array,
  slug: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(Purchaser);
