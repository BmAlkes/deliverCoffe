import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsCartFill } from "react-icons/bs";
import {
  // addProductToCart,
  decreaseCartProductQuantity,
  increaseCartProductQuantity,
} from "../../store/cart/cart-slice";
import { CustomButton } from "../Button";
import {
  AmountItem,
  CartContainer,
  Container,
  Pharse,
  Price,
  SpanLoop,
} from "./styled";
import { useAppSelector } from "../../store/store";
import { CartProduct } from "../../@types/product";

export const notFound: CartProduct = {
  productId: "",
  quantity: 0,
};

const CoffeeItem = ({ productId }: any) => {
  const { imageUrl, name, phrase, price, type } = useAppSelector(
    (state) => state.product.listProducts[productId]
  );
  const { quantity } = useAppSelector(
    (state) =>
      state.cart.products.find(({ productId: id }) => id === productId) ||
      notFound
  );

  const dispatch = useDispatch();

  // const handleAddProductToCart = () => {
  //   dispatch(addProductToCart(productId));
  // };

  const handleIncreaseQuantity = () => {
    dispatch(increaseCartProductQuantity(productId));
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseCartProductQuantity(productId));
  };

  return (
    <Container>
      <img src={imageUrl} alt="" />
      <div>
        {type.map((item: any) => {
          return <SpanLoop key={item}> {item}</SpanLoop>;
        })}
      </div>
      <h3>{name}</h3>
      <Pharse>{phrase}</Pharse>
      <CartContainer>
        <Price>
          <span>$</span>
          {price}
        </Price>
        <AmountItem>
          {/* add button and disabled quantity === 0  */}
          <AiOutlineMinus size={30} onClick={handleDecreaseQuantity} />
          <span>{quantity}</span>
          <AiOutlinePlus size={30} onClick={handleIncreaseQuantity} />
        </AmountItem>
        {/* <CustomButton color="secondary" onClick={handleAddProductToCart}>
          <BsCartFill size={22} />
        </CustomButton> */}
      </CartContainer>
    </Container>
  );
};

export default CoffeeItem;
