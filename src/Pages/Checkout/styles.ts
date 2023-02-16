import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
  margin: 0 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const DivContainer = styled.div`
  background: ${(props) => props.theme["base-card"]};
  padding: 1rem;
  margin: 2rem 0;
`;
export const FormLeftSide = styled.div`
  flex: 1;
  margin: 1rem 0;
  padding: 1rem;
  @media (max-width: 768px) {
    max-width: 450px;
    padding: 0;
  }
  h2 {
    margin: 1rem 0;
  }

  h3 {
    display: flex;
    align-items: center;
    padding: 0.3rem 0;
    & svg {
      color: ${(props) => props.theme["yellow-dark"]};
      margin-right: 0.5rem;
    }
  }
  p {
    padding-bottom: 2rem;
  }
  form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
    input {
      margin: 0.5rem;
      padding: 0.5rem;
      border: none;
      border-radius: 2px;
      background-color: ${(props) => props.theme["base-input"]};
    }
  }
  .dollar {
    color: ${(props) => props.theme["purple-dark"]};
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  button {
    width: 158px;
    height: 51px;
    padding: 1rem;
    display: flex;
    align-items: center;
    border-radius: 8px;
    border: none;
    background-color: ${(props) => props.theme["base-button"]};
    cursor: pointer;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;

    & svg {
      color: ${(props) => props.theme["purple-dark"]};
      margin-right: 1rem;
    }
    &:hover {
      background-color: ${(props) => props.theme["purpe-light"]};
    }
    @media (max-width: 768px) {
      width: 80%;
      justify-content: center;
    }
  }
`;

export const CartRightSide = styled.div`
  width: 450px;
  margin: 1rem 0;
  @media (max-width: 768px) {
    width: 320px;
    padding: 0;
    margin: 0 auto;
  }

  h3 {
    margin: 1rem 0;
  }
  div {
    background-color: ${(props) => props.theme["base-card"]};
    padding: 1rem;
  }
`;

export const CartConteinerCoffe = styled.div`
  display: flex;
  border-bottom: 1px solid #d7d5d5;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 0 !important;
    flex-direction: column;
  }

  div {
    display: flex;
    padding: 1rem;
    @media (max-width: 768px) {
      padding: 1rem 0;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
  img {
    width: 70px;
    object-fit: contain;
    margin-top: 20px;
  }
  .column {
    flex-direction: column;
    p {
      margin-bottom: 15px;
    }
  }
  .column2 {
    padding: 0;
    @media (max-width: 768px) {
      padding: 1rem 0;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  }
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
    color: #574f4d;
  }
`;

export const AmountItem2 = styled.div`
  background: ${(props) => props.theme["base-input"]}!important;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.2rem;
  width: 100px;
  margin-right: 5px;

  svg {
    color: ${(props) => props.theme.purple};
    font-weight: bold;
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme["purple-dark"]};
    }
  }
  span {
    padding: 0 1rem;
  }
`;

export const ContainerValue = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
      max-width: 450px;
      padding: 0;
      margin: 0 auto;
    }
  }
`;
