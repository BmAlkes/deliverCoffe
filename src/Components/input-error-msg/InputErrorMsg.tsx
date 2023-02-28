import React, { FunctionComponent } from "react";
import { InputErrorMessageContainer } from "./styles";

interface InputErrorProps {
  children: React.ReactNode;
}

const InputError: React.FC<InputErrorProps> = ({ children }) => {
  return <InputErrorMessageContainer>{children}</InputErrorMessageContainer>;
};
export default InputError;
