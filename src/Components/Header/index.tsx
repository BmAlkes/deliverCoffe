import { HeaderContainer, HeaderLeftSide } from "./styles";
import { BsCartFill } from "react-icons/bs";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <div>
        <img
          src="https://res.cloudinary.com/binvent/image/upload/v1676461088/BInvent%20App/Logo_fl3mnw.png"
          alt=""
        />
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
