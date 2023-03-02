import React, { useContext, useEffect, useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { CustomButton } from "../../../Components/button";
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
import { UserContext } from "../../../Context/userContext";
import { useNavigate } from "react-router-dom";
import Loading from "../../../Components/loading/Loading";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm();
  const { isAutheticated } = useContext(UserContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isAutheticated) {
      navigate("/");
    }
  }, [isAutheticated]);

  const handleSubmitForm = async (data: any) => {
    try {
      setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignInGoogle = async () => {
    try {
      setIsLoading(true);
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
      setIsLoading(false);
    }
  };
  if (isLoading) return <Loading />;
  return (
    <LoginContainer>
      <img
        src="https://res.cloudinary.com/binvent/image/upload/v1676461088/BInvent%20App/Imagem_hinxg6.png"
        alt=""
      />
      <div>
        <LoginHeadline>{t("enterAccount")}</LoginHeadline>
        <CustomButton color="secondary" onClick={() => handleSignInGoogle()}>
          <BsGoogle size={20} />
          {t("google")}
        </CustomButton>
        <LoginSubtitle>{t("or")}</LoginSubtitle>
        <LoginInputContainer>
          <p>Email</p>
          <CustomInput
            placeholder={t("emailLabel") || ""}
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
          <p>{t("password")}</p>
          <CustomInput
            hasError={!!errors?.password}
            placeholder={t("passwordLabel") || ""}
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
        <CustomButton
          color="secondary"
          onClick={() => handleSubmit(handleSubmitForm)()}
        >
          {t("buttonEnter")}
        </CustomButton>
      </div>
    </LoginContainer>
  );
};

export default Login;
