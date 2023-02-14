import { HeaderContainer, HeaderLeftSide } from "./styles";
import Logo from "../../assets/logo.png";
import { BsCartFill } from "react-icons/bs";
import Button from "../Button";

export const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <img src={Logo} alt="" />
      </div>
      <HeaderLeftSide>
        <p>Adress</p>
        <Button variant="yellow2" variantBG="yellow">
          <BsCartFill size={22} />
        </Button>
      </HeaderLeftSide>
    </HeaderContainer>
  );
};
