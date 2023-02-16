import React, { useState, useEffect, useContext } from "react";
import { BannerHome } from "../../Components/Banner";
import { CoffeeSection } from "../../Components/CoffeeSquare";
import { ProductContext } from "../../Context/productContext";
import { HomeContainer, SquareCoffee } from "./styles";

export const Home = () => {
  return (
    <HomeContainer>
      <BannerHome />
      <h2>Our Coffees</h2>
      <SquareCoffee>
        <CoffeeSection />
      </SquareCoffee>
    </HomeContainer>
  );
};
