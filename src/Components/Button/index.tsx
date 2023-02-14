import React from "react";
import {
  ButtonVariant,
  ButtonVariantBG,
  CustomButtonContainer,
} from "./styles";

interface CustomButton {
  children: React.ReactNode;
  variant?: ButtonVariant;
  variantBG?: ButtonVariantBG;
}

const Button: React.FC<CustomButton> = ({ ...props }) => {
  return (
    <CustomButtonContainer variantBG={"yellow"} variant={"yellow2"}>
      {props.children}
    </CustomButtonContainer>
  );
};

export default Button;
