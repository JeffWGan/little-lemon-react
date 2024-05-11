import styled from "styled-components";
import { HTMLAttributes } from "react";

export const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 3rem;
  margin: 0 auto;
  gap: 1rem;

  @media (max-width: 768px) {
    padding: 0 3rem;
  };
`;
