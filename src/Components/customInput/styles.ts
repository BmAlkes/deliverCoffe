import styled from "styled-components";

type CustomInputContainerProps = {
  hasError?: boolean;
};

export const CustomInputContainer = styled.input<CustomInputContainerProps>`
  border: none;
  width: 100%;
  background-color: ${(props) => props.theme["base-input"]};
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: ${(props) => props.theme["base-text"]};
  border: ${(props) => (props.hasError ? `2px solid #DC143C` : "none")};
  &::placeholder {
    color: ${(props) =>
      props.hasError ? props.theme["base-error"] : props.theme["base-text"]};
  }
  &:focus {
    outline: ${(props) =>
      props.hasError ? "none" : `2px solid ${props.theme["purple"]}`};
  }
`;
