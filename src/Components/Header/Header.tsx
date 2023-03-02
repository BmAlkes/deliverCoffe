import { HeaderContainer, HeaderLeftSide } from "./styles";
import { BsCartFill } from "react-icons/bs";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { LanguageSwitcher } from "../languegeswitcher/LanguageSwitcher";
import { useAppSelector } from "../../store/store";
import { GoSignOut } from "react-icons/go";
import { signOut } from "firebase/auth";
import { auth } from "../../script/firebase.config";
import { UserContext } from "../../Context/userContext";

export const Header = () => {
  const { isAutheticated, currentUser } = useContext(UserContext);
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
        {!isAutheticated && (
          <>
            <Button onClick={() => navigate("/login")} color="secondary">
              Login
            </Button>
            <Button onClick={() => navigate("/register")} color="secondary">
              Register
            </Button>
          </>
        )}

        {isAutheticated ? <p>{currentUser?.city}</p> : <p>Israel</p>}
        <Button onClick={handleCheckout}>
          <BsCartFill size={22} />
          <span>{cart.length}</span>
        </Button>
        {isAutheticated && (
          <Button onClick={() => signOut(auth)}>
            <GoSignOut size={20} />
          </Button>
        )}
      </HeaderLeftSide>
    </HeaderContainer>
  );
};
