import React, { useContext } from "react";
import Button from "../Button";
import { BsCartFill } from "react-icons/bs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { SquareContainer } from "./styles";
import { CartContext } from "../../Context/cartContext";
import { ProductContext } from "../../Context/productContext";
import CoffeeItem from "../CoffeeItem";

export const CoffeeSection = () => {
  const { listProduct } = useContext(ProductContext);

  return (
    <SquareContainer>
      {listProduct.map((product: any) => {
        return <CoffeeItem product={product} key={product.id} />;
      })}
    </SquareContainer>
  );
};
