import styled from "styled-components";

export const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  div {
    max-width: 600px;
  }
`;
export const SubTitle = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 130%;
  color: ${(props) => props.theme["base-subtitle"]};
  font-stretch: 100;
  padding: 1rem 0;
`;

export const Title = styled.h1`
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 130%;
  color: ${(props) => props.theme["base-title"]};
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const Divider = styled.div`
  div {
    display: flex;
    align-items: center;
    margin: 1rem 0;
    @media (max-width: 768px) {
      margin: 0.4rem;
    }
  }
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: ${(props) => props.theme["base-text"]};
  }

  svg {
    width: 2rem;
    height: 2rem;
    margin: 0 10px;
    color: #fff;
    padding: 0.4rem;
    background-color: black;
    border-radius: 50%;
  }
  .yellow {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }
  .darkYellow {
    background-color: ${(props) => props.theme["yello"]};
  }
  .textBase {
    background-color: ${(props) => props.theme["base-text"]};
  }
  .purple {
    background-color: ${(props) => props.theme["purple"]};
  }
`;
