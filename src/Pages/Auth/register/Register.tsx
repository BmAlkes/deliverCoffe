import React from "react";
import { BsGoogle } from "react-icons/bs";
import Button from "../../../Components/Button";
import CustomInput from "../../../Components/customButton/CustomButton";
import {
  RegisterContainer,
  LoginHeadline,
  LoginInputContainer,
} from "./styles";

const Login = () => {
  return (
    <RegisterContainer>
      <img
        src="https://res.cloudinary.com/binvent/image/upload/v1676461088/BInvent%20App/Imagem_hinxg6.png"
        alt=""
      />
      <div>
        <LoginHeadline>Create a new account</LoginHeadline>
        <LoginInputContainer>
          <p>Name</p>
          <CustomInput placeholder="Enter your Name"></CustomInput>
        </LoginInputContainer>
        <LoginInputContainer>
          <p>Email</p>
          <CustomInput placeholder="Enter your email"></CustomInput>
        </LoginInputContainer>
        <LoginInputContainer>
          <p>Adress</p>
          <CustomInput placeholder="Enter your adress"></CustomInput>
        </LoginInputContainer>
        <LoginInputContainer>
          <p>Phone</p>
          <CustomInput placeholder="Enter your phone"></CustomInput>
        </LoginInputContainer>
        <LoginInputContainer>
          <p>City</p>
          <CustomInput placeholder="Enter your City"></CustomInput>
        </LoginInputContainer>
        <LoginInputContainer>
          <p>Password</p>
          <CustomInput placeholder="Enter your password"></CustomInput>
        </LoginInputContainer>
        <Button color="secondary">Enter</Button>
      </div>
    </RegisterContainer>
  );
};

export default Login;
