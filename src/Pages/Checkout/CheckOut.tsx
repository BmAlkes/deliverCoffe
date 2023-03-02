import React, { useContext, useState } from "react";
import {
  ButtonContainer,
  CartRightSide,
  CheckoutContainer,
  ContainerValue,
  DivContainer,
  FormLeftSide,
  InputContainer,
} from "./styles";
import { MdLocationOn } from "react-icons/md";
import {
  BsBank,
  BsCurrencyDollar,
  BsFillCreditCard2FrontFill,
} from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";

import { CartContext } from "../../Context/cartContext";
import { CustomButton } from "../../Components/button/Button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  addProductToCart,
  clearCartProducts,
  decreaseCartProductQuantity,
  increaseCartProductQuantity,
  removeProductFromCart,
} from "../../store/cart/cart-slice";
import { useAppSelector } from "../../store/store";
import CustomInput from "../../Components/customInput/CustomInput";
import InputError from "../../Components/input-error-msg/InputErrorMsg";
import { Cart } from "../../Components/cart/Cart";
import { useDispatch } from "react-redux";
import { clientInformation, paymentMethod } from "../../store/cart/cart-slice";

export const CheckOut = () => {
  const [payment, setPayment] = useState("");
  const dispatch = useDispatch();
  const { products, deliver, productsTotalPrice } = useAppSelector(
    (state) => state.cart
  );

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { t } = useTranslation();

  function handleCreateForm(data: any) {
    dispatch(clientInformation(data));
    dispatch(paymentMethod(payment));
    navigate("/sucess");
  }

  console.log({ errors });
  return (
    <CheckoutContainer>
      <FormLeftSide>
        <h2>{t("order")}</h2>
        <DivContainer>
          <h3>
            <MdLocationOn size={25} />
            {t("adress")}
          </h3>
          <p>{t("sub")}</p>

          <InputContainer>
            <CustomInput
              hasError={!!errors?.name}
              type="text"
              placeholder={t("name") || ""}
              {...register("name", { required: true })}
            />
            {errors?.name?.type === "required" && (
              <InputError>Name Required</InputError>
            )}
          </InputContainer>
          <InputContainer>
            <CustomInput
              hasError={!!errors?.street}
              type="text"
              placeholder={t("street") || ""}
              {...register("street", { required: true })}
            />
            {errors?.name?.type === "required" && (
              <InputError>Street Required</InputError>
            )}
          </InputContainer>
          <InputContainer>
            <CustomInput
              hasError={!!errors?.number}
              type="number"
              placeholder={t("number") || ""}
              {...register("number", { required: true })}
            />
          </InputContainer>
          <InputContainer>
            <CustomInput
              type="text"
              placeholder={t("complement") || ""}
              {...register("complement")}
            />
          </InputContainer>
          <InputContainer>
            <CustomInput
              hasError={!!errors?.city}
              type="text"
              placeholder={t("city") || ""}
              {...register("city", { required: true })}
            />
          </InputContainer>
          <InputContainer>
            <CustomInput
              hasError={!!errors?.phone}
              type="number"
              placeholder={t("phone") || ""}
              {...register("phone", { required: true })}
            />
          </InputContainer>
        </DivContainer>
        <DivContainer>
          <h3>
            <BsCurrencyDollar className="dollar" size={20} />
            {t("Payment")}
          </h3>
          <p>{t("sub")}</p>
          <ButtonContainer>
            <button
              onClick={() => {
                setPayment("Credit Card");
              }}
            >
              <BsFillCreditCard2FrontFill size={20} />
              {t("credidCard")}
            </button>
            <button
              onClick={() => {
                setPayment("Debit Card");
              }}
            >
              <BsBank size={20} />
              {t("Debit Card")}
            </button>
            <button
              onClick={() => {
                setPayment("Cash Card");
              }}
            >
              <GiMoneyStack size={20} />
              {t("Cash")}
            </button>
          </ButtonContainer>
        </DivContainer>
      </FormLeftSide>
      <CartRightSide>
        <h3>{t("TitleCart")}</h3>

        <div>
          {products.map((product) => {
            return <Cart product={product} key={product.id} />;
          })}
          <ContainerValue>
            <div>
              <p>{t("TotalItens")}</p>
              <span>${productsTotalPrice.toFixed(2)}</span>
            </div>
            <div>
              <p>{t("Deliver")}</p>
              <span>${deliver}</span>
            </div>
            <div>
              <h3>{t("Total")}</h3>
              <h3>${productsTotalPrice.toFixed(2)}</h3>
            </div>
          </ContainerValue>
        </div>
        <CustomButton
          color="Three"
          type="submit"
          onClick={() => handleSubmit(handleCreateForm)()}
        >
          {t("Confirm Order")}
        </CustomButton>
      </CartRightSide>
    </CheckoutContainer>
  );
};
