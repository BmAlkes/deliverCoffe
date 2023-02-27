import React, { useContext, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { CartContext } from "../../Context/cartContext";
import Button from "../Button";
import {
  AmountItem,
  CartContainer,
  Container,
  Pharse,
  Price,
  SpanLoop,
} from "./styled";
import { addProductToCart } from "../../store/cart/cart-slice";
import { useDispatch } from "react-redux";
const CoffeeItem = ({ product }: any) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(product.quantity);
  // const {
  //   addProductToCart,
  //   decreaseProductQuantity,
  //   products,
  //   increaseProductQuantity,
  // } = useContext(CartContext);

  const handleAddProductToCart = () => {
    dispatch(addProductToCart(product));
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity(quantity === -1 ? quantity - 1 : 0);
  };

  return (
    <Container key={product.id}>
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
        <Button color="secondary" onClick={handleAddProductToCart}>
          <BsCartFill size={22} />
        </Button>
      </CartContainer>
    </Container>
  );
};

export default CoffeeItem;
