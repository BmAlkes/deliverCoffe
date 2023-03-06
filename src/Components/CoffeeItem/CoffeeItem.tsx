import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsCartFill } from "react-icons/bs";
import { addProductToCart } from "../../store/cart/cart-slice";
import { CustomButton } from "../Button";
import {
  AmountItem,
  CartContainer,
  Container,
  Pharse,
  Price,
  SpanLoop,
} from "./styled";

const CoffeeItem = ({ product }: any) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState<number>(product.quantity);

  const newProduct = { ...product, quantity: quantity };
  const handleAddProductToCart = () => {
    dispatch(addProductToCart(newProduct));
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity === 0 ? 0 : prevQuantity - 1));
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
