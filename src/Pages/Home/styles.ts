import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 600px;
  padding: 1rem 0;

  h2 {
    margin-top: 3rem;
    margin-bottom: 3rem;
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
    color: #403937;
  }
`;
export const SquareCoffee = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
