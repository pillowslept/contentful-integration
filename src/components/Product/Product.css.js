

import styled, { css } from 'styled-components';

import { getColor } from '../../utils/colors';

export const Container = styled.div`
  padding: 0 0.8rem;
  display: flex;
  flex-direction: column;
`;

export const PriceInformation = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Price = styled.div`
  font-size: 1rem;
  color: ${getColor(`gray`)};

  ${({ showSalePrice }) => showSalePrice && css`
    text-decoration: line-through;
  `}
`;

export const Description = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SalePrice = styled.div`
  font-size: 1rem;
  color: ${getColor(`green`)};
  margin-left: 0.5rem;
  font-weight: bold;
`;

export const Image = styled.img`
  width: -webkit-fill-available;
  border-radius: 0.2rem;
`;

export const SizesContainer = styled.div``;

export const SizeLabel = styled.div`
  font-size: 1.3rem;
  color: ${getColor(`blue`)};
  font-weight: bold;
  text-align: left;
`;

export const ListSizes = styled.ul`
  color: ${getColor(`gray`)};
  font-size: 1rem;
  margin-top: 0.5rem 0;
`;

export const Size = styled.li`
  text-align: left;
`;
