import { CiDollar, CiLocationOn, CiTimer } from "react-icons/ci";
import { BorderContainer, Container } from "./styles";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../store/store";

const SucesssPage = () => {
  const { clientInformation, paymentMethod } = useAppSelector(
    (state) => state.cart
  );

  const { t } = useTranslation();
  return (
    <Container>
      <div>
        <h2>{t("confirm")}</h2>
        <h3>{t("wait")}</h3>
        <BorderContainer>
          <div>
            <CiLocationOn className="purple" size={22} />
            <p>
              {t("detail1")}
              {clientInformation?.name}, {t("detail4")}
              <strong>
                <br />
                {clientInformation?.street} {clientInformation?.complement}
              </strong>
              {clientInformation?.city}
            </p>
          </div>
          <div>
            <CiTimer className="yellow" size={22} />
            <p>{t("detail2")}</p>

            <strong>20min</strong>
          </div>
          <div>
            <CiDollar className="darkYellow" size={22} />
            <p>{t("detail3")}</p>
            <br />
            <p>
              <strong>{paymentMethod}</strong>
            </p>
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

export default SucesssPage;
