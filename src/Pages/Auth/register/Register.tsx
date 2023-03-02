import Button from "../../../Components/button/Button";
import CustomInput from "../../../Components/customInput/CustomInput";
import {
  RegisterContainer,
  LoginHeadline,
  LoginInputContainer,
} from "./styles";
import { useForm } from "react-hook-form";
import InputError from "../../../Components/input-error-msg/InputErrorMsg";
import { ImEnter } from "react-icons/im";
import {
  AuthError,
  AuthErrorCodes,
  createUserWithEmailAndPassword,
  User,
} from "firebase/auth";
import { auth, db } from "../../../script/firebase.config";
import { addDoc, collection } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import validator from "validator";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../Context/userContext";
import Loading from "../../../Components/loading/Loading";

const Login = () => {
  const [isLoading, setLoading] = useState(false);
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { isAutheticated } = useContext(UserContext);

  useEffect(() => {
    if (isAutheticated) {
      navigate("/");
    }
  }, [isAutheticated]);
  const handleSubmitPress = async (data: any) => {
    try {
      setLoading(true);
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await addDoc(collection(db, "users"), {
        id: userCredentials.user.uid,
        displayName: data.name,
        email: userCredentials.user.email,
        adress: data.adress,
        city: data.city,
        phone: data.phone,
        provider: "firebase",
      });
    } catch (err) {
      console.log(err);
      const _error = err as AuthError;
      if (_error.code === AuthErrorCodes.EMAIL_EXISTS) {
        return setError("email", { type: "alreadyInUse" });
      }
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) return <Loading />;
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
            <InputError>email is not valid</InputError>
          )}
          {errors?.email?.type === "alreadyInUse" && (
            <InputError>Email is already used</InputError>
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
          onClick={() => handleSubmit(handleSubmitPress)()}
        >
          <ImEnter size={20} />
          Register Account
        </Button>
      </div>
    </RegisterContainer>
  );
};

export default Login;
