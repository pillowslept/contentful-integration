import styled, { keyframes } from 'styled-components';

const borderWidth = `5px`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  margin: 0 auto;
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: ${borderWidth} solid grey;
  border-right: ${borderWidth} solid grey;
  border-bottom: ${borderWidth} solid grey;
  border-left: ${borderWidth} solid black;
  background: transparent;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
