import React from "react";
import { Banner, Title, OptionsContainer, SubTitle, Divider } from "./styles";
import { BsCartFill } from "react-icons/bs";
import { MdTimer } from "react-icons/md";
import { AiOutlineInbox } from "react-icons/ai";
import { BiCoffeeTogo } from "react-icons/bi";

export const BannerHome = () => {
  return (
    <Banner>
      <div>
        <Title>Find the perfect coffee for any time of your day</Title>
        <SubTitle>
          With Coffee Delivery you wil get your coffee wherever you are,
          anytime.
        </SubTitle>
        <OptionsContainer>
          <Divider>
            <div>
              <BsCartFill className="yellow" size={16} />
              <p>Simple and safe purchase</p>
            </div>
            <div>
              <MdTimer className="darkYellow" size={16} />
              <p>Fast and tracked delivery</p>
            </div>
          </Divider>
          <Divider>
            <div>
              <AiOutlineInbox className="textBase" size={16} />
              <p>Packaging keeps the coffee intact </p>
            </div>
            <div>
              <BiCoffeeTogo className="purple" size={16} />
              <p> Coffee arrives frequently to you </p>
            </div>
          </Divider>
        </OptionsContainer>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/binvent/image/upload/v1676461088/BInvent%20App/Imagem_hinxg6.png"
          alt=""
        />
      </div>
    </Banner>
  );
};
