import styled from "styled-components";

export const SquareContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px 30px;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 50px 30px;
  }
`;
