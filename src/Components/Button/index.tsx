import React, { ButtonHTMLAttributes } from "react";
import { CustomButtonContainer } from "./styles";

export type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // to handle onClick functions
  children?: React.ReactNode; // make the component able to receive children elements
  color?: "primary" | "secondary"; // two styling options
};

const Button = ({ onClick, children, color = "primary" }: ButtonProps) => {
  return (
    <CustomButtonContainer onClick={onClick} color={color}>
      {children}
    </CustomButtonContainer>
  );
};

export default Button;
