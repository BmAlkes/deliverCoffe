import React, { ButtonHTMLAttributes } from "react";
import { CustomButtonContainer } from "./styles";

export type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode; // make the component able to receive children elements
  color?: "primary" | "secondary" | "Three";
  dataCount?: number;
  type?: "submit";
};

const Button = ({
  onClick,
  children,
  color = "primary",
  dataCount,
  type,
}: ButtonProps) => {
  return (
    <CustomButtonContainer
      onClick={onClick}
      color={color}
      dataCount={dataCount}
      type={type}
    >
      {children}
    </CustomButtonContainer>
  );
};

export default Button;
