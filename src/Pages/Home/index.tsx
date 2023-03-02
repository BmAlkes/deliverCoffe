import React, { useState, useEffect, useContext } from "react";
import { BannerHome } from "../../Components/Banner";

import { HomeContainer, SquareCoffee } from "./styles";
import { useTranslation } from "react-i18next";
import { CoffeeSection } from "../../Components/CoffeeSquare";
const Home = () => {
  const { t } = useTranslation();
  return (
    <HomeContainer>
      <BannerHome />
      <h2>{t("section")}</h2>
      <SquareCoffee>
        <CoffeeSection />
      </SquareCoffee>
    </HomeContainer>
  );
};
export default Home;
