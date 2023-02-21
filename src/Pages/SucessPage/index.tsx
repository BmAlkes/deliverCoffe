import { BsCartFill } from "react-icons/bs";
import { CiDollar, CiLocationOn, CiTimer } from "react-icons/ci";
import { BorderContainer, Container } from "./styles";
import { useContext } from "react";
import { CartContext, useCartContext } from "../../Context/cartContext";

export const SucesssPage = () => {
  const { clientInformation, paymentMethodClient } = useCartContext();
  return (
    <Container>
      <div>
        <h2>Uhu! order Confirm</h2>
        <h3>Now just wait for the coffee to come to you soon</h3>
        <BorderContainer>
          <div>
            <CiLocationOn className="purple" size={22} />
            <p>
              Deliver to {clientInformation.name}, on the street
              <strong>
                {clientInformation.street} {clientInformation.complement}
              </strong>
              {clientInformation.city}
            </p>
          </div>
          <div>
            <CiTimer className="yellow" size={22} />
            <p>Estimate Deliver</p>
            <p>
              <strong>20min</strong>
            </p>
          </div>
          <div>
            <CiDollar className="darkYellow" size={22} />
            <p>Payment on delivery</p>
            <span>
              <strong>{paymentMethodClient}</strong>
            </span>
          </div>
          <div></div>
        </BorderContainer>
      </div>
      <img
        src="https://res.cloudinary.com/binvent/image/upload/v1676461088/BInvent%20App/Illustration_zably4.png"
        alt=""
      />
    </Container>
  );
};
