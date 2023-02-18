import React, { useContext, useState } from "react";
import {
  AmountItem2,
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

export const Checkout = () => {
  const { products, productsTotalPrice, deliver, dataClient, paymentMethod } =
    useContext(CartContext);
  const navigate = useNavigate();
  const [payment, setPayment] = useState("");
  const { register, handleSubmit } = useForm();

  function handleCreateForm(data: any) {
    dataClient(data);
  }
  paymentMethod(payment);

  return (
    <CheckoutContainer>
      <FormLeftSide>
        <form onSubmit={handleSubmit(handleCreateForm)} action="">
          <h2>Complete Your Order</h2>
          <DivContainer>
            <h3>
              <CiLocationOn size={25} />
              Adress for Deliver
            </h3>
            <p>Inform the adress, where you wish to receive your order</p>

            <input
              type="text"
              placeholder=" Name of Order"
              {...register("name")}
            />
            <input type="text" placeholder="Street" {...register("street")} />
            <input type="number" placeholder="Number" {...register("number")} />
            <input
              type="text"
              placeholder="Complement Ap.floor"
              {...register("complement")}
            />
            <input type="text" placeholder="City" {...register("city")} />
            <input type="number" placeholder="Phone" {...register("phone")} />
          </DivContainer>
          <DivContainer>
            <h3>
              <BsCurrencyDollar className="dollar" size={20} />
              Payment
            </h3>
            <p>Payment is made on delivery. Choose the way you want to pay</p>
            <ButtonContainer>
              <button
                onClick={() => {
                  setPayment("Credit Card");
                }}
              >
                <BsFillCreditCard2FrontFill size={20} />
                Credit Card
              </button>
              <button
                onClick={() => {
                  setPayment("Debit Card");
                }}
              >
                <BsBank size={20} />
                Debit Card
              </button>
              <button
                onClick={() => {
                  setPayment("Cash Card");
                }}
              >
                <GiMoneyStack size={20} />
                Cash
              </button>
            </ButtonContainer>
          </DivContainer>
        </form>
      </FormLeftSide>
      <CartRightSide>
        <h3>Selected Coffees</h3>

        <div>
          {products.map((product) => {
            return <Cart product={product} key={product.id} />;
          })}
          <ContainerValue>
            <div>
              <p>Total de items</p>
              <span>${productsTotalPrice.toFixed(2)}</span>
            </div>
            <div>
              <p>Deliver</p>
              <span>${deliver}</span>
            </div>
            <div>
              <h3>Total</h3>
              <h3>${productsTotalPrice.toFixed(2)}</h3>
            </div>
          </ContainerValue>
        </div>
        <Button color="Three" type="submit" onClick={() => navigate("/sucess")}>
          Confirm Order
        </Button>
      </CartRightSide>
    </CheckoutContainer>
  );
};
