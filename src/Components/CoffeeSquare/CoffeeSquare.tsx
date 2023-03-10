import { SquareContainer } from "./styles";
import CoffeeItem from "../CoffeeItem/CoffeeItem";
import { useAppSelector } from "../../store/store";
import { Product } from "../../@types/product";

export const CoffeeSection = () => {
  const listProduct = useAppSelector((state) => state.product.listProducts);

  return (
    <SquareContainer>
      {Object.keys(listProduct).map((id) => {
        return <CoffeeItem productId={id} key={id} />;
      })}
    </SquareContainer>
  );
};
