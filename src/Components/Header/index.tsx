import { HeaderContainer, HeaderLeftSide } from "./styles";
import { BsCartFill } from "react-icons/bs";
import { CustomButton } from "../button";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { LanguageSwitcher } from "../languegeswitcher";
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
            <CustomButton onClick={() => navigate("/login")} color="secondary">
              Login
            </CustomButton>
            <CustomButton
              onClick={() => navigate("/register")}
              color="secondary"
            >
              Register
            </CustomButton>
          </>
        )}

        {isAutheticated ? <p>{currentUser?.city}</p> : <p>Israel</p>}
        <CustomButton onClick={handleCheckout}>
          <BsCartFill size={22} />
          <span>{cart.length}</span>
        </CustomButton>
        {isAutheticated && (
          <CustomButton onClick={() => signOut(auth)}>
            <GoSignOut size={20} />
          </CustomButton>
        )}
      </HeaderLeftSide>
    </HeaderContainer>
  );
};
