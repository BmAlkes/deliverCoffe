import { useState } from "react";
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

import { CustomButton } from "src/Components/Button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "src/store";
import CustomInput from "src/Components/customInput/CustomInput";
import InputError from "src/Components/input-error-msg/InputErrorMsg";
import { Cart } from "src/Components/Cart/Cart";
import { useDispatch } from "react-redux";
import { clientInformation, paymentMethod } from "src/store/cart/cart-slice";
import {
  selectProductTotalPrice,
  selectProductTotalPriceWithDelive,
} from "src/store/cart/cart-selector";
import AdressMap from "src/Components/Map/AdressMap";

const CheckOut = () => {
  const [payment, setPayment] = useState("");
  const dispatch = useDispatch();
  const { products, deliver } = useAppSelector((state) => state.cart);
  console.log(products);

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
  const productsTotalPrice = useAppSelector(selectProductTotalPrice);
  const totalPriceDeliver = useAppSelector(selectProductTotalPriceWithDelive);

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
        {/* <AdressMap /> */}
      </FormLeftSide>
      <CartRightSide>
        <h3>{t("TitleCart")}</h3>

        <div>
          {products.map((productId) => {
            return <Cart {...productId} />;
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
              <h3>${totalPriceDeliver.toFixed(2)}</h3>
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

export default CheckOut;
