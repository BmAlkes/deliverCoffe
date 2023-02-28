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
import InputError from "../../../Components/input-error-msg/InputErrorMsg";

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
          {errors?.name?.type === "required" && (
            <InputError>Name Required</InputError>
          )}
        </LoginInputContainer>
        <LoginInputContainer>
          <p>Email</p>
          <CustomInput
            hasError={!!errors?.email}
            placeholder="Enter your email"
            type="email"
            {...register("email", { required: true })}
          ></CustomInput>
          {errors?.email?.type === "required" && (
            <InputError>Email Required</InputError>
          )}
        </LoginInputContainer>
        <LoginInputContainer>
          <p>Adress</p>
          <CustomInput
            hasError={!!errors?.adress}
            placeholder="Enter your adress"
            {...register("adress", { required: true })}
          ></CustomInput>
          {errors?.adress?.type === "required" && (
            <InputError>Adress Required</InputError>
          )}
        </LoginInputContainer>
        <LoginInputContainer>
          <p>Phone</p>
          <CustomInput
            hasError={!!errors?.phone}
            placeholder="Enter your phone"
            {...register("phone", { required: true })}
          ></CustomInput>
          {errors?.phone?.type === "required" && (
            <InputError>Phone Required</InputError>
          )}
        </LoginInputContainer>
        <LoginInputContainer>
          <p>City</p>
          <CustomInput
            hasError={!!errors?.city}
            placeholder="Enter your City"
            {...register("city", { required: true })}
          ></CustomInput>
          {errors?.city?.type === "required" && (
            <InputError>City Required</InputError>
          )}
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
          {errors?.password?.type === "required" && (
            <InputError>Password Required</InputError>
          )}
          {errors?.password?.type === "minLength" && (
            <InputError>must be at least 6 characters</InputError>
          )}
          {errors?.password?.type === "maxLength" && (
            <InputError>must be less than 16 characters</InputError>
          )}
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
