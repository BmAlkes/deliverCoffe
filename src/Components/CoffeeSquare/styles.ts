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

export const Container = styled.div`
  background: ${(props) => props.theme["base-card"]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 6px 36px;
  height: 310px;
  position: relative;

  img {
    position: absolute;
    top: -30px;
  }
`;
