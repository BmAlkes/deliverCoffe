import React from "react";
import { BsGoogle } from "react-icons/bs";
import Button from "../../../Components/Button";
import CustomInput from "../../../Components/customButton/CustomButton";
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
        <Button color="secondary">
          <BsGoogle size={20} />
          Enter with Google
        </Button>
        <LoginSubtitle>Or enter with your email</LoginSubtitle>
        <LoginInputContainer>
          <p>Email</p>
          <CustomInput placeholder="Enter your email"></CustomInput>
        </LoginInputContainer>
        <LoginInputContainer>
          <p>Password</p>
          <CustomInput placeholder="Enter your password"></CustomInput>
        </LoginInputContainer>
        <Button color="secondary">Enter</Button>
      </div>
    </LoginContainer>
  );
};

export default Login;
