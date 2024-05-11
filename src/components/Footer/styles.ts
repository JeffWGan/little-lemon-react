import styled from "styled-components";
import { HTMLAttributes } from "react";

export const Container = styled.footer<HTMLAttributes<HTMLElement>>`
  width: auto;
  height: auto;
  display: flex;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Copyright = styled.div<HTMLAttributes<HTMLDivElement>>`
  padding: 3.5rem 0;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .5rem;
  text-align: center;

  a {
    text-decoration: underline;
    line-height: 150%;
  };
`;
