import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #282c34;
  color: white;
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const DefaultLink = styled(Link)`
  font-weight: bold;
  color: white;
  text-decoration: none;
  margin-left: 1rem;
  display: initial;

  &:hover {
    text-decoration: underline;
  }
`;

export const LogoImg = styled.img`
  width: 50px;
`;
