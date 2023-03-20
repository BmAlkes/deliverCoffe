import { SquareContainer } from "./styles";
import CoffeeItem from "../CoffeeItem/CoffeeItem";
import { useAppSelector } from "src/store";
import { Product } from "../../@types/product";
import { useLocation } from "src/hooks/useLocation";

export const CoffeeSection = () => {
  const listProduct = useAppSelector((state) => state.product.listProducts);
  return (
    <SquareContainer>
      <div></div>
      {Object.keys(listProduct).map((id) => {
        return <CoffeeItem productId={id} key={id} />;
      })}
    </SquareContainer>
  );
};
