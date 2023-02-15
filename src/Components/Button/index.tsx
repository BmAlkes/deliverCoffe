import React from "react";
import {
  ButtonVariant,
  ButtonVariantBG,
  CustomButtonContainer,
} from "./styles";

interface CustomButton {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  variantBG?: ButtonVariantBG;
}

const Button: React.FC<CustomButton> = ({ children, variant, variantBG }) => {
  return (
    <CustomButtonContainer variantBG={variantBG} variant={variant}>
      {children}
    </CustomButtonContainer>
  );
};

export default Button;
