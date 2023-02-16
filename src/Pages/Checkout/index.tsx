import React, { useContext } from "react";
import {
  AmountItem2,
  ButtonContainer,
  CartConteinerCoffe,
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
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Button from "../../Components/Button";
import { BiTrash } from "react-icons/bi";

export const Checkout = () => {
  const { products, productsTotalPrice, deliver } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <FormLeftSide>
        <h2>Complete Your Order</h2>
        <DivContainer>
          <h3>
            <CiLocationOn size={25} />
            Adress for Deliver
          </h3>
          <p>Inform the adress, where you wish to receive your order</p>

          <form>
            <input type="text" placeholder=" Name of Order" />
            <input type="text" placeholder="Street" />
            <input type="number" placeholder="Number" />
            <input type="text" placeholder="Complement Ap.floor" />
            <input type="text" placeholder="City" />
            <input type="number" placeholder="Phone" />
          </form>
        </DivContainer>
        <DivContainer>
          <h3>
            <BsCurrencyDollar className="dollar" size={20} />
            Payment
          </h3>
          <p>Payment is made on delivery. Choose the way you want to pay</p>
          <ButtonContainer>
            <button>
              <BsFillCreditCard2FrontFill size={20} />
              Credit Card
            </button>
            <button>
              <BsBank size={20} />
              Debit Card
            </button>
            <button>
              <GiMoneyStack size={20} />
              Cash
            </button>
          </ButtonContainer>
        </DivContainer>
      </FormLeftSide>
      <CartRightSide>
        <h3>Selected Coffees</h3>

        <div>
          {products.map((product) => {
            return (
              <CartConteinerCoffe>
                <div>
                  <img src={product.imageUrl} alt="" />
                  <div className="column">
                    <p>{product.name}</p>
                    <div className="column2">
                      <AmountItem2>
                        <AiOutlineMinus size={30} />
                        <span>{product.quantity}</span>
                        <AiOutlinePlus size={30} />
                      </AmountItem2>
                      <Button color="secondary">
                        <BiTrash />
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
                <p>${product.price}</p>
              </CartConteinerCoffe>
            );
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
              <span>${productsTotalPrice.toFixed(2)}</span>
            </div>
            <Button color="Three">Confirm Order</Button>
          </ContainerValue>
        </div>
      </CartRightSide>
    </CheckoutContainer>
  );
};
