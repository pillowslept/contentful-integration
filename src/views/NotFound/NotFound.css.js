
import styled from 'styled-components';

import { getColor } from '../../utils/colors';

export const Container = styled.div`
  padding-top: 3rem;
`;

export const Text = styled.h1`
  color: ${getColor(`blue`)};
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;
