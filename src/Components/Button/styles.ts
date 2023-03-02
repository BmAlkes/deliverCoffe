import styled, { css } from "styled-components";
import { ButtonProps } from ".";

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
  Three: css`
    color: ${(props) => props.theme["white"]};
    background: ${(props) => props.theme["yellow-dark"]};
    &:hover {
      color: ${(props) => props.theme["white"]};
      background: ${(props) => props.theme["yellow-dark"]};
    }
  `,
};

export const CustomButtonContainer = styled.button<ButtonProps>`
  width: 100%;
  ${(props) => COLOR[props.color || "primary"]}
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: none;
  padding: 8px;
  font-weight: 600;
  transition: all 1s ease;
  cursor: pointer;
  position: relative;

  span {
    font-size: 12px;
    background-color: ${(props) => props.theme["yellow-dark"]};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 1.7em;
    min-width: 1.7em;
    position: absolute;
    top: -12px;
    right: 0px;
    border-radius: 50%;
  }
`;
