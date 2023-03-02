import React, { useContext } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { CartContext } from "../../Context/cartContext";
import { AmountItem2 } from "../../Pages/Checkout/styles";
import { useAppSelector } from "../../store/store";
import { CustomButton } from "../Button";
import { CartConteinerCoffe } from "./styled";
import {
  addProductToCart,
  decreaseCartProductQuantity,
  increaseCartProductQuantity,
  removeProductFromCart,
  clearCartProducts,
  clientInformation,
  paymentMethod,
} from "../../store/cart/cart-slice";
import { useDispatch } from "react-redux";

interface CartItemProps {
  product: {
    imageUrl: string;
    name: string;
    quantity: number;
    price: number;
    id: string;
  };
}

export const Cart: React.FC<CartItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleIncreaseQuantity = () => {
    dispatch(increaseCartProductQuantity(product.id));
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseCartProductQuantity(product.id));
  };
  const handleRemoveFromCart = () => {
    dispatch(removeProductFromCart(product.id));
  };

  return (
    <CartConteinerCoffe>
      <div>
        <img src={product.imageUrl} alt="" />
        <div className="column">
          <p>{product.name}</p>
          <div className="column2">
            <AmountItem2>
              <AiOutlineMinus size={30} onClick={handleDecreaseQuantity} />
              <span>{product.quantity}</span>
              <AiOutlinePlus size={30} onClick={handleIncreaseQuantity} />
            </AmountItem2>
            <CustomButton
              color="secondary"
              onClick={() => handleRemoveFromCart()}
            >
              <BiTrash />
              Remove
            </CustomButton>
          </div>
        </div>
      </div>
      <p>${product.price}</p>
    </CartConteinerCoffe>
  );
};
