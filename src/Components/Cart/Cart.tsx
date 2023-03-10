import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { AmountItem2 } from "../../Pages/Checkout/styles";
import { useAppSelector } from "../../store/store";
import { CustomButton } from "../Button";
import { CartConteinerCoffe } from "./styled";
import {
  decreaseCartProductQuantity,
  increaseCartProductQuantity,
  removeProductFromCart,
} from "../../store/cart/cart-slice";
import { useDispatch } from "react-redux";
import { CartProduct } from "../../@types/product";
import { notFound } from "../CoffeeItem/CoffeeItem";

export const Cart: React.FC<CartProduct> = ({ productId }) => {
  console.log(productId);
  const { imageUrl, name, price } = useAppSelector(
    (state) => state.product.listProducts[productId]
  );
  const { quantity } = useAppSelector(
    (state) =>
      state.cart.products.find(({ productId: id }) => id === productId) ||
      notFound
  );

  const dispatch = useDispatch();

  const handleIncreaseQuantity = () => {
    dispatch(increaseCartProductQuantity(productId));
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseCartProductQuantity(productId));
  };
  const handleRemoveFromCart = () => {
    dispatch(removeProductFromCart(productId));
  };

  return (
    <CartConteinerCoffe>
      <div>
        <img src={imageUrl} alt="" />
        <div className="column">
          <p>{name}</p>
          <div className="column2">
            <AmountItem2>
              <AiOutlineMinus size={30} onClick={handleDecreaseQuantity} />
              <span>{quantity}</span>
              <AiOutlinePlus size={30} onClick={handleIncreaseQuantity} />
            </AmountItem2>
            <CustomButton color="secondary" onClick={handleRemoveFromCart}>
              <BiTrash />
              Remove
            </CustomButton>
          </div>
        </div>
      </div>
      <p>${price}</p>
    </CartConteinerCoffe>
  );
};
