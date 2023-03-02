import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 60vh;
  padding: 1.5rem;
  margin: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 90vh;
  }

  h2 {
    color: ${(props) => props.theme["yellow-dark"]};
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
  }
  h3 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: #403937;
    font-stretch: 100;
    margin: 1rem 0;
  }
`;

export const BorderContainer = styled.div`
  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, #dbac2c, #8047f8) border-box;
  border-radius: 50em;
  border: 1px solid transparent;
  width: 526px;
  border-radius: 6px 36px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1.3rem;
  @media (max-width: 768px) {
    width: 340px;
    padding: 0 1rem;
  }

  div {
    display: flex;
    align-items: center;
    padding: 2rem 0;
  }
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: ${(props) => props.theme["base-text"]};
  }
  strong {
    margin: 0 0.5rem;
  }
  svg {
    width: 2rem;
    height: 2rem;
    margin-right: 10px;
    color: #fff;
    padding: 0.4rem;
    background-color: black;
    border-radius: 50%;
  }
  .yellow {
    background-color: ${(props) => props.theme["yello"]};
  }
  .darkYellow {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }
  .purple {
    background-color: ${(props) => props.theme["purple"]};
  }
  .DarkPurple {
    background-color: ${(props) => props.theme["purple-dark"]};
  }
`;
