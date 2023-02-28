import React from "react";
import { BsGoogle } from "react-icons/bs";
import Button from "../../../Components/Button";
import CustomInput from "../../../Components/customInput/CustomInput";
import {
  RegisterContainer,
  LoginHeadline,
  LoginInputContainer,
} from "./styles";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleSubmitForm = (data: any) => {
    console.log({ data });
  };

  console.log({ errors });

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
          <CustomInput
            hasError={!!errors?.name}
            placeholder="Enter your Name"
            {...register("name", { required: true })}
          ></CustomInput>
        </LoginInputContainer>
        <LoginInputContainer>
          <p>Email</p>
          <CustomInput
            hasError={!!errors?.email}
            placeholder="Enter your email"
            type="email"
            {...register("email", { required: true })}
          ></CustomInput>
        </LoginInputContainer>
        <LoginInputContainer>
          <p>Adress</p>
          <CustomInput
            hasError={!!errors?.adress}
            placeholder="Enter your adress"
            {...register("adress", { required: true })}
          ></CustomInput>
        </LoginInputContainer>
        <LoginInputContainer>
          <p>Phone</p>
          <CustomInput
            hasError={!!errors?.phone}
            placeholder="Enter your phone"
            {...register("phone", { required: true })}
          ></CustomInput>
        </LoginInputContainer>
        <LoginInputContainer>
          <p>City</p>
          <CustomInput
            hasError={!!errors?.city}
            placeholder="Enter your City"
            {...register("city", { required: true })}
          ></CustomInput>
        </LoginInputContainer>
        <LoginInputContainer>
          <p>Password</p>
          <CustomInput
            hasError={!!errors?.password}
            placeholder="Enter your password"
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              maxLength: 14,
            })}
          ></CustomInput>
        </LoginInputContainer>
        <Button
          color="secondary"
          onClick={() => handleSubmit(handleSubmitForm)()}
        >
          Register
        </Button>
      </div>
    </RegisterContainer>
  );
};

export default Login;
