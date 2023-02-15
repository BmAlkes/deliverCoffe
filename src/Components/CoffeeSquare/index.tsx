import React from "react";
import Button from "../Button";
import { BsCartFill } from "react-icons/bs";

import { Container, SquareContainer } from "./styles";

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
                  return <span key={item}> {item}</span>;
                })}
              </div>
              <h3>{item.name}</h3>
              <p>{item.phrase}</p>
              <div>
                <span>${item.price}</span>
                <Button variant="white" variantBG="purple">
                  <BsCartFill size={22} />
                </Button>
              </div>
            </Container>
          </>
        );
      })}
    </SquareContainer>
  );
};
