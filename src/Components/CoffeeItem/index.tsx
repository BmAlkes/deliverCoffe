import React, { useContext, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { CartContext } from "../../Context/cartContext";
import { CustomButton } from "../button/index";
import {
  AmountItem,
  CartContainer,
  Container,
  Pharse,
  Price,
  SpanLoop,
} from "./styled";
import {
  addProductToCart,
  increaseCartProductQuantity,
  decreaseCartProductQuantity,
} from "../../store/cart/cart-slice";
import { useDispatch } from "react-redux";
const CoffeeItem = ({ product }: any) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(product.quantity);
  // const {
  //   addProductToCart,
  //   decreaseProductQuantity,
  //   products,
  //   increaseProductQuantity,
  const newProduct = { ...product, quantity: quantity };
  const handleAddProductToCart = () => {
    dispatch(addProductToCart(newProduct));
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity(quantity === -1 ? quantity - 1 : 0);
  };

  return (
    <Container data-productid={product.id}>
      <img src={product.imageUrl} alt="" />
      <div>
        {product.type.map((item: any) => {
          return <SpanLoop key={item}> {item}</SpanLoop>;
        })}
      </div>
      <h3>{product.name}</h3>
      <Pharse>{product.phrase}</Pharse>
      <CartContainer>
        <Price>
          <span>$</span>
          {product.price}
        </Price>
        <AmountItem>
          <AiOutlineMinus size={30} onClick={handleDecreaseQuantity} />
          <span>{quantity}</span>
          <AiOutlinePlus size={30} onClick={handleIncreaseQuantity} />
        </AmountItem>
        <CustomButton color="secondary" onClick={handleAddProductToCart}>
          <BsCartFill size={22} />
        </CustomButton>
      </CartContainer>
    </Container>
  );
};

export default CoffeeItem;
