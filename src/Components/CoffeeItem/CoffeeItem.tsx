import { useDispatch } from "react-redux";
import { RootState, useAppSelector } from "../../store";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { CartProduct, Product } from "../../@types/product";
import {
  // addProductToCart,
  decreaseCartProductQuantity,
  increaseCartProductQuantity,
} from "../../store/cart/cart-slice";
import { CustomButton } from "../Button";
import {
  AmountItem,
  CartContainer,
  Container,
  Pharse,
  Price,
  SpanLoop,
} from "./styled";

export const notFound: CartProduct = {
  productId: "",
  quantity: 0,
};

const selectedProductById = (productId: Product["id"]) => (state: RootState) =>
  state.product.listProducts[productId];

const selectCartByProductId =
  (productId: Product["id"]) => (state: RootState) =>
    state.cart.products.find(({ productId: id }) => id === productId) ||
    notFound;

const CoffeeItem = ({ productId }: any) => {
  const { imageUrl, name, phrase, price, type } = useAppSelector(
    selectedProductById(productId)
  );

  const { quantity } = useAppSelector(selectCartByProductId(productId));

  const dispatch = useDispatch();

  // const handleAddProductToCart = () => {
  //   dispatch(addProductToCart(productId));
  // };

  const handleIncreaseQuantity = () => {
    dispatch(increaseCartProductQuantity(productId));
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseCartProductQuantity(productId));
  };

  return (
    <Container>
      <img src={imageUrl} alt="" />
      <div>
        {type.map((item: any) => {
          return <SpanLoop key={item}> {item}</SpanLoop>;
        })}
      </div>
      <h3>{name}</h3>
      <Pharse>{phrase}</Pharse>
      <CartContainer>
        <Price>
          <span>$</span>
          {price}
        </Price>
        <AmountItem>
          {/* add button and disabled quantity === 0  */}
          {quantity <= 0 ? (
            ""
          ) : (
            <CustomButton color="secondary">
              <AiOutlineMinus
                size={30}
                onClick={handleDecreaseQuantity}
                color="white"
              />
            </CustomButton>
          )}

          <span>{quantity}</span>
          <CustomButton color="secondary">
            <AiOutlinePlus
              size={30}
              onClick={handleIncreaseQuantity}
              color="white"
            />
          </CustomButton>
        </AmountItem>
        {/* <CustomButton color="secondary" onClick={handleAddProductToCart}>
          <BsCartFill size={22} />
        </CustomButton> */}
      </CartContainer>
    </Container>
  );
};

export default CoffeeItem;
