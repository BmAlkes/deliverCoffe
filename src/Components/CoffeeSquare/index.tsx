import React, { useContext } from "react";
import Button from "../Button";
import { BsCartFill } from "react-icons/bs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { SquareContainer } from "./styles";
import { CartContext } from "../../Context/cartContext";
import { ProductContext } from "../../Context/productContext";
import CoffeeItem from "../CoffeeItem";
import { useAppSelector } from "../../redux/features/store";

export const CoffeeSection = () => {
  // const { listProduct } = useContext(ProductContext);

  const listProduct = useAppSelector((state) => state.cart.products);

  return (
    <SquareContainer>
      {listProduct.map((product: any) => {
        return <CoffeeItem product={product} key={product.id} />;
      })}
    </SquareContainer>
  );
};
