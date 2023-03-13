import { BannerHome } from "../../Components/Banner/Banner";

import { HomeContainer, SquareCoffee } from "./styles";
import { useTranslation } from "react-i18next";
import { CoffeeSection } from "../../Components/CoffeeSquare/CoffeeSquare";
import Welcome from "../../Components/WelcomeBanner/WelcomeBanner";
import { useAppSelector } from "../../store";
const Home = () => {
  const { t } = useTranslation();
  const { isAuthenticated } = useAppSelector((state) => state.userReducer);
  return (
    <HomeContainer>
      {isAuthenticated && <Welcome />}
      <BannerHome />
      <h2>{t("section")}</h2>
      <SquareCoffee>
        <CoffeeSection />
      </SquareCoffee>
    </HomeContainer>
  );
};
export default Home;
