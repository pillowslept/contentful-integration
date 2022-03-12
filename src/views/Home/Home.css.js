import styled, { css } from 'styled-components';

const applyCommonStyles = css`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  ${applyCommonStyles}
`;

export const OptionsContainer = styled.div`
  ${applyCommonStyles}
  align-items: center;
`;

export const Options = styled.ul`
  text-align: left;
`;

export const Option = styled.li``;

export const Title = styled.strong``;

export const Spacer = styled.div`
  padding: 1rem;

  ${({ half }) => half && css`
    padding: 0.5rem;
  `}
`;
