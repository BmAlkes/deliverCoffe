import styled, { css } from "styled-components";
import { ButtonProps } from "./index";

const COLOR = {
  primary: css`
    color: ${(props) => props.theme["yellow-dark"]};
    background: ${(props) => props.theme["yellow-light"]};
    &:hover {
      color: ${(props) => props.theme["white"]};
      background: ${(props) => props.theme["yellow-dark"]};
    }
  `,
  secondary: css`
    color: ${(props) => props.theme["white"]};
    background: ${(props) => props.theme["purple-dark"]};
    &:hover {
      color: ${(props) => props.theme["base-button"]};
      background: ${(props) => props.theme["purple"]};
    }
  `,
};

export const CustomButtonContainer = styled.button<ButtonProps>`
  width: 100%;
  ${(props) => props.color && COLOR[props.color]}
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: none;
  padding: 8px;
  font-weight: 600;
  transition: all 1s ease;
`;
