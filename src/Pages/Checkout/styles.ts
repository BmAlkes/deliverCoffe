import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FormLeftSide = styled.div``;

export const CartRightSide = styled.div``;

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
