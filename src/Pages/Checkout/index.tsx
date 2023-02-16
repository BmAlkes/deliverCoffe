import React, { useContext } from "react";
import {
  AmountItem,
  CartRightSide,
  CheckoutContainer,
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
        <div>
          <h3>
            <CiLocationOn />
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
        </div>
        <div>
          <h3>
            <BsCurrencyDollar />
            Payment
          </h3>
          <p>Payment is made on delivery. Choose the way you want to pay</p>
          <div>
            <button>
              <BsFillCreditCard2FrontFill />
              Credit Card
            </button>
            <button>
              <BsBank />
              Debit Card
            </button>
            <button>
              <GiMoneyStack />
              Cash
            </button>
          </div>
        </div>
      </FormLeftSide>
      <CartRightSide>
        <h3>Selected Coffees</h3>
        <div>
          <div>
            {products.map((product) => {
              return (
                <>
                  <div>
                    <img src={product.imageUrl} alt="" />
                    <p>{product.name}</p>
                    <AmountItem>
                      <AiOutlineMinus size={30} />
                      <span>{product.quantity}</span>
                      <AiOutlinePlus size={30} />
                    </AmountItem>
                    <Button color="secondary">
                      <BiTrash />
                      Remove
                    </Button>
                  </div>
                  <p>${product.price}</p>
                </>
              );
            })}
            <div>
              <p>Total de items</p>
              <span>${productsTotalPrice.toFixed(2)}</span>
              <p>Deliver</p>
              <span>${deliver}</span>
              <h3>Total</h3>
              <span>${productsTotalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </CartRightSide>
    </CheckoutContainer>
  );
};
