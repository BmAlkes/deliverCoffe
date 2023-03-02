import React, { useContext } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { CartContext } from "../../Context/cartContext";
import { AmountItem2 } from "../../Pages/Checkout/styles";
import { CustomButton } from "../button/index";
import { CartConteinerCoffe } from "./styled";

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
  const {
    decreaseProductQuantity,
    increaseProductQuantity,
    removeProductFromCart,
  } = useContext(CartContext);

  const handleIncreaseQuantity = () => {
    increaseProductQuantity(product.id);
  };

  const handleDecreaseQuantity = () => {
    decreaseProductQuantity(product.id);
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
              onClick={() => {
                removeProductFromCart(product.id);
              }}
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
