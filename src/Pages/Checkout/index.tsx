import React, { useContext, useState } from "react";
import {
  ButtonContainer,
  CartRightSide,
  CheckoutContainer,
  ContainerValue,
  DivContainer,
  FormLeftSide,
} from "./styles";
import { CiLocationOn } from "react-icons/ci";
import {
  BsBank,
  BsCurrencyDollar,
  BsFillCreditCard2FrontFill,
} from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";

import { CartContext } from "../../Context/cartContext";
import Button from "../../Components/Button";
import { Cart } from "../../Components/Cart";
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

export const Checkout = () => {
  const { productsTotalPrice, deliver, dataClient, paymentMethod } =
    useContext(CartContext);
  const { products } = useAppSelector((state) => state.cart);

  const navigate = useNavigate();
  const [payment, setPayment] = useState("");
  const { register, handleSubmit } = useForm();
  const { t } = useTranslation();

  function handleCreateForm(data: any) {
    dataClient(data);
  }
  paymentMethod(payment);

  return (
    <CheckoutContainer>
      <FormLeftSide>
        <form onSubmit={handleSubmit(handleCreateForm)} action="">
          <h2>{t("order")}</h2>
          <DivContainer>
            <h3>
              <CiLocationOn size={25} />
              {t("adress")}
            </h3>
            <p>{t("sub")}</p>

            <input
              type="text"
              placeholder={t("name") || ""}
              {...register("name")}
            />
            <input
              type="text"
              placeholder={t("street") || ""}
              {...register("street")}
            />
            <input
              type="number"
              placeholder={t("number") || ""}
              {...register("number")}
            />
            <input
              type="text"
              placeholder={t("complement") || ""}
              {...register("complement")}
            />
            <input
              type="text"
              placeholder={t("city") || ""}
              {...register("city")}
            />
            <input
              type="number"
              placeholder={t("phone") || ""}
              {...register("phone")}
            />
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
        </form>
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
        <Button color="Three" type="submit" onClick={() => navigate("/sucess")}>
          {t("Confirm Order")}
        </Button>
      </CartRightSide>
    </CheckoutContainer>
  );
};
