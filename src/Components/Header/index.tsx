import { HeaderContainer, HeaderLeftSide } from "./styles";
import Logo from "../../assets/logo.png";
import { BsCartFill } from "react-icons/bs";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <div>
        <img src={Logo} alt="" />
      </div>
      <HeaderLeftSide>
        <p>Adress</p>
        <Button>
          <BsCartFill size={22} />
        </Button>
      </HeaderLeftSide>
    </HeaderContainer>
  );
};
