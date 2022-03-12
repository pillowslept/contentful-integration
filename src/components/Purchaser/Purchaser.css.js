

import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
`;

export const ProductInformation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PriceInformation = styled.div`
  display: flex;
`;

export const Title = styled.div`
  font-size: 1.5rem;
`;

export const Price = styled.div`
  font-size: 1rem;
  color: red;
  margin-left: 0.5rem;

  ${({ showSalePrice }) => showSalePrice && css`
    text-decoration: line-through;
  `}
`;

export const Separator = styled.div`
  height: 0.1rem;
  background-color: gray;
  margin: 1rem 0;
  width: 100%;
`;

export const SalePrice = styled.div`
  font-size: 1rem;
  color: green;
  margin-left: 0.5rem;
`;

export const SizesContainer = styled.div`

`;

export const ListSizes = styled.ul`

`;

export const Size = styled.li`
  font-size: 1.5rem;
  color: gray;
  text-align: left;
`;

export const SizeLabel = styled.div`
  font-size: 1.5rem;
  color: gray;
`;

export const AddToCart = styled.button`
  margin-top: 1.5rem;
`;
