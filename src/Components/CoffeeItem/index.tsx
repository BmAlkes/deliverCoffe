import React, { useContext } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsCartFill } from "react-icons/bs";
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

const CoffeeItem = ({ product }: any) => {
  const {
    addProductToCart,
    decreaseProductQuantity,
    products,
    increaseProductQuantity,
  } = useContext(CartContext);

  const handleAddProductToCart = () => {
    addProductToCart(product);
  };

  console.log(products);
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
          <AiOutlineMinus size={30} />
          <span>{product.quantity}</span>
          <AiOutlinePlus size={30} />
        </AmountItem>
        <Button color="secondary" onClick={handleAddProductToCart}>
          <BsCartFill size={22} />
        </Button>
      </CartContainer>
    </Container>
  );
};

export default CoffeeItem;
