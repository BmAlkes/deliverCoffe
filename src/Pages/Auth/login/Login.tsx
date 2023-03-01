import React from "react";
import { BsGoogle } from "react-icons/bs";
import Button from "../../../Components/Button";
import CustomInput from "../../../Components/customInput/CustomInput";
import {
  LoginContainer,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle,
} from "./styles";
import { useForm } from "react-hook-form";
import InputError from "../../../Components/input-error-msg/InputErrorMsg";
import validator from "validator";
import {
  AuthError,
  AuthErrorCodes,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../script/firebase.config";

const Login = () => {
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm();

  const handleSubmitForm = async (data: any) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log(userCredentials);
    } catch (err) {
      const _error = err as AuthError;
      if (_error.code === AuthErrorCodes.INVALID_PASSWORD) {
        return setError("password", { type: "mismatch" });
      }
      if (_error.code === AuthErrorCodes.USER_DELETED) {
        return setError("email", { type: "notFound" });
      }
    }
  };

  console.log({ errors });
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
          <CustomInput
            placeholder="Enter your email"
            hasError={!!errors?.email}
            type="email"
            {...register("email", {
              required: true,
              validate: (value) => {
                return validator.isEmail(value);
              },
            })}
          ></CustomInput>
          {errors?.email?.type === "required" && (
            <InputError>Email Required</InputError>
          )}
          {errors?.email?.type === "validate" && (
            <InputError>Is not a valid email</InputError>
          )}
          {errors?.email?.type === "notFound" && (
            <InputError>Email not found</InputError>
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
          {errors?.password?.type === "mismatch" && (
            <InputError>Password wrong</InputError>
          )}
        </LoginInputContainer>
        <Button
          color="secondary"
          onClick={() => handleSubmit(handleSubmitForm)()}
        >
          Enter
        </Button>
      </div>
    </LoginContainer>
  );
};

export default Login;
