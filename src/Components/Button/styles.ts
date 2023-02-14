import styled from "styled-components";

export type ButtonVariant = "yellow2" | "white";
export type ButtonVariantBG = "yellow" | "purple";

interface CustomButtonContainerProps {
  variantBG: ButtonVariantBG;
  variant: ButtonVariant;
}

const buttonVariant = {
  yellow2: "#C47F17",
  white: "#fff",
};
const buttonVariantBG = {
  yellow: "#F1E9C9",
  purple: "#4B2995",
};

export const CustomButtonContainer = styled.button<CustomButtonContainerProps>`
  width: 100%;
  ${(props) => {
    return `background-color:${buttonVariantBG[props.variantBG]}`;
  }};
  ${(props) => {
    return `color:${buttonVariant[props.variant]}`;
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: none;
  padding: 8px;
  font-weight: 600;
  transition: all 1s ease;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme["yellow-dark"]};
    color: ${(props) => props.theme.white};
  }
`;
