import styled from "styled-components";

export const InputErrorMessageContainer = styled.p`
  width: 100%;
  color: ${(props) => props.theme["base-error"]};
  font-size: 0.75rem;
  margin-top: 5px;
`;
