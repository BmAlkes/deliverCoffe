import React from "react";
import Button from "../Button";
import { BsCartFill } from "react-icons/bs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import {
  AmountItem,
  CartContainer,
  Container,
  Pharse,
  Price,
  SpanLoop,
  SquareContainer,
} from "./styles";

export const CoffeeSection = ({ product }: any) => {
  console.log(product);
  return (
    <SquareContainer>
      {product.map((item: any) => {
        return (
          <>
            <Container key={item.id}>
              <img src={item.imageUrl} alt="" />
              <div>
                {item.type.map((item: any) => {
                  return <SpanLoop key={item}> {item}</SpanLoop>;
                })}
              </div>
              <h3>{item.name}</h3>
              <Pharse>{item.phrase}</Pharse>
              <CartContainer>
                <Price>
                  <span>$</span>
                  {item.price}
                </Price>
                <AmountItem>
                  <AiOutlineMinus size={30} />
                  <span>1</span>
                  <AiOutlinePlus size={30} />
                </AmountItem>
                <Button variant="white" variantBG="purple">
                  <BsCartFill size={22} />
                </Button>
              </CartContainer>
            </Container>
          </>
        );
      })}
    </SquareContainer>
  );
};
