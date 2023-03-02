import React, { useState, useEffect, useContext } from "react";
import { BannerHome } from "../../Components/banner/Banner";
import { CoffeeSection } from "../../Components/coffeesquare/CoffeeSquare";
import { HomeContainer, SquareCoffee } from "./styles";
import { useTranslation } from "react-i18next";

export const Home = () => {
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
