import { HeaderContainer, HeaderLeftSide } from "./styles";
import { BsCartFill } from "react-icons/bs";
import { CustomButton } from "../button/Button";
import { useNavigate } from "react-router-dom";
import { LanguageSwitcher } from "../languegeswitcher/Language";
import { useAppSelector } from "../../store/store";
import { GoSignOut } from "react-icons/go";
import { signOut } from "firebase/auth";
import { auth } from "../../script/firebase.config";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/user/user.actions";

export const Header = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, currentUser } = useAppSelector(
    (state) => state.userReducer
  );
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/checkout");
  };

  const handleSignOutClick = () => {
    dispatch(logoutUser());
    signOut(auth);
  };
  const cart = useAppSelector((state) => state.cart.products);

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
        {!isAuthenticated && (
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

        {isAuthenticated ? <p>{currentUser?.city}</p> : <p>Israel</p>}
        <CustomButton onClick={handleCheckout}>
          <BsCartFill size={22} />
          <span>{cart.length}</span>
        </CustomButton>
        {isAuthenticated && (
          <CustomButton onClick={handleSignOutClick}>
            <GoSignOut size={20} />
          </CustomButton>
        )}
      </HeaderLeftSide>
    </HeaderContainer>
  );
};
