

import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding: 0.8rem 0;
  display: flex;
  flex-direction: column;
`;

export const StarsContainer = styled.div`
  display: flex;
`;

export const Average = styled.div`
  color: ${({ color }) => color ? color : `gray`};
  font-size: 1rem;
  font-weight: bold;
  margin-left: 0.5rem;
`;

export const Total = styled.div`
  color: ${({ color }) => color ? color : `gray`};
  font-size: 1rem;
  font-weight: bold;
`;

export const Stars = styled.div`
  color: ${({ color }) => color ? color : `gray`};
  font-size: 1rem;
  font-weight: bold;
  display: flex;
`;

export const Star = styled.div`
  :before {
    content: '☆';

    ${({ active }) => active && css`
      color: #F4D26A;
    `}
  }
`;
