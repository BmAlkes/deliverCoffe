import { HeaderContainer, HeaderLeftSide } from "./styles";
import { BsCartFill } from "react-icons/bs";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/cartContext";

export const Header = () => {
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/checkout");
  };

  const { products } = useContext(CartContext);

  return (
    <HeaderContainer>
      <div>
        <img
          onClick={() => navigate("/")}
          src="https://res.cloudinary.com/binvent/image/upload/v1676461088/BInvent%20App/Logo_fl3mnw.png"
          alt=""
        />
      </div>
      <HeaderLeftSide>
        <p>Adress</p>
        <Button onClick={handleCheckout}>
          <BsCartFill size={22} />
          <span>{products.length}</span>
        </Button>
      </HeaderLeftSide>
    </HeaderContainer>
  );
};
