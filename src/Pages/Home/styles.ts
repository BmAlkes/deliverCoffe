import styled from "styled-components";
import Bg from "../../assets/bg.png";

export const HomeContainer = styled.main`
  height: 600px;
`;

export const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: url(${Bg});
  background-size: cover;
  background-repeat: no-repeat;

  div {
    max-width: 600px;
  }
`;
export const SubTitle = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
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
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Divider = styled.div`
  div {
    display: flex;
    align-items: center;
    margin: 1rem 0;
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
    width: 4rem;
    height: 4rem;
    margin-right: 10px;
    color: #fff;
    background-color: black;
    padding: 1rem;
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
