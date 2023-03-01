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
  signInWithPopup,
} from "firebase/auth";
import { auth, db, googleProvider } from "../../../script/firebase.config";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

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

  const handleSignInGoogle = async () => {
    try {
      const userCredentials = await signInWithPopup(auth, googleProvider);
      const querySnapshot = await getDocs(
        query(
          collection(db, "users"),
          where("id", "==", userCredentials.user.uid)
        )
      );

      const user = querySnapshot.docs[0]?.data;
      if (!user) {
        const firstname = userCredentials.user.displayName?.split(" ")[0];
        const lastname = userCredentials.user.displayName?.split(" ")[1];
        await addDoc(collection(db, "users"), {
          id: userCredentials.user.uid,
          email: userCredentials.user.email,
          firstname,
          lastname,
          provider: "google",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
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
        <Button color="secondary" onClick={() => handleSignInGoogle()}>
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
