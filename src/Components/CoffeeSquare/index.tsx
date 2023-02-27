import { SquareContainer } from "./styles";
import CoffeeItem from "../CoffeeItem";
import { useAppSelector } from "../../store/store";

export const CoffeeSection = () => {
  // const { listProduct } = useContext(ProductContext);

  const listProduct = useAppSelector((state) => state.product.listProducts);

  return (
    <SquareContainer>
      {listProduct.map((product: any) => {
        return <CoffeeItem product={product} key={product.id} />;
      })}
    </SquareContainer>
  );
};
