import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding: 0.8rem 0;
`;

export const HeadingContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h3`
  color: gray;
  transition: transform 0.15s ease-out;

  ${HeadingContainer}:hover & {
    transform: translateZ(0) translateX(0.5rem);
  }
`;

export const Element = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  padding: 0.5rem;
  display: none;
  text-align: left;
  white-space: pre-line;

  ${({ isOpen }) => isOpen && css`
    display: block;
  `}
`;

export const Icon = styled.span`
  transition: transform 0.30s ease-out;

  ${({ isOpen }) => isOpen && css`
    transform: rotate(-180deg);
  `}
`;
