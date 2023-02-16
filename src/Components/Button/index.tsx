import React, { ButtonHTMLAttributes } from "react";
import { CustomButtonContainer } from "./styles";

export type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // to handle onClick functions
  children?: React.ReactNode; // make the component able to receive children elements
  color?: "primary" | "secondary" | "Three";
  dataCount?: number;
};

const Button = ({
  onClick,
  children,
  color = "primary",
  dataCount,
}: ButtonProps) => {
  return (
    <CustomButtonContainer
      onClick={onClick}
      color={color}
      dataCount={dataCount}
    >
      {children}
    </CustomButtonContainer>
  );
};

export default Button;
