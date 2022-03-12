
import styled, { css } from 'styled-components';

import { getColor } from '../../utils/colors';

export const Container = styled.div`
  padding: 0.8rem 0;

  ${({ alignment }) => alignment && css`
    text-align: ${alignment};
  `}
`;

export const Text = styled.h1`
  color: ${({ color }) => getColor(color)};
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;
