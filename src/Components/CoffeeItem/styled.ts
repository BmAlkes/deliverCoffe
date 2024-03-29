import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme["base-card"]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  border-radius: 6px 36px;
  height: 310px;
  position: relative;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.15);

  img {
    position: absolute;
    top: -30px;
  }
  h3 {
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    margin: 1rem 0;
  }
`;
export const Pharse = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  text-align: center;
  width: 228px;
  color: ${(props) => props.theme["base-label"]};
`;

export const SpanLoop = styled.span`
  background: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 50px;
  width: 62px;
  height: 21px;
  margin: 1rem 0;
`;

export const CartContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 0.2rem;
  padding: 1rem;
`;

export const Price = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 130%;
  text-align: center;
  color: ${(props) => props.theme["base-text"]};
  padding: 0.7rem 0;

  span {
    font-weight: 400;
    font-size: 14px;
    margin-right: 0.1rem;
  }
`;

export const AmountItem = styled.div`
  background: ${(props) => props.theme["base-button"]};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.4rem;
  margin: 0;

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
