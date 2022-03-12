
import styled from 'styled-components';

import { getColor } from '../../utils/colors';

export const Container = styled.div`
  padding: 0.8rem 0;
`;

export const Text = styled.p`
  color: ${({ color }) => getColor(color)};
  font-size: 1rem;
  margin: 0;
  text-align: left;
`;
