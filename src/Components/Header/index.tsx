import { HeaderContainer, HeaderLeftSide } from "./styles";
import { BsCartFill } from "react-icons/bs";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/cartContext";
import { LanguageSwitcher } from "../LanguegeSwitcher";
import { useAppSelector } from "../../store/store";

export const Header = () => {
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/checkout");
  };

  const cart = useAppSelector((state) => state.cart.products);
  const [user, setUser] = useState(true);

  return (
    <HeaderContainer>
      <div>
        <img
          onClick={() => navigate("/")}
          src="https://res.cloudinary.com/binvent/image/upload/v1676461088/BInvent%20App/Logo_fl3mnw.png"
          alt=""
        />
      </div>
      <LanguageSwitcher />
      <HeaderLeftSide>
        <Button onClick={() => navigate("/login")} color="secondary">
          Login
        </Button>
        <Button onClick={() => navigate("/register")} color="secondary">
          Register
        </Button>
        <p>Tel Aviv-IL</p>{" "}
        <Button onClick={handleCheckout}>
          <BsCartFill size={22} />
          <span>{cart.length}</span>
        </Button>
      </HeaderLeftSide>
    </HeaderContainer>
  );
};
