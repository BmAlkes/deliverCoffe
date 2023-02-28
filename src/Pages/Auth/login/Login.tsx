import React from "react";
import Button from "../../../Components/Button";
import {
  LoginContainer,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle,
} from "./styles";

const Login = () => {
  return (
    <LoginContainer>
      <img
        src="https://res.cloudinary.com/binvent/image/upload/v1676461088/BInvent%20App/Imagem_hinxg6.png"
        alt=""
      />
      <div>
        <LoginHeadline>Enter with your account</LoginHeadline>
        <LoginSubtitle>Or enter with your email</LoginSubtitle>
        <LoginInputContainer></LoginInputContainer>
        <LoginInputContainer></LoginInputContainer>
        <Button color="secondary">Enter</Button>
      </div>
    </LoginContainer>
  );
};

export default Login;
