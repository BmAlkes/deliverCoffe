import React from "react";
import {
  Banner,
  HomeContainer,
  Title,
  OptionsContainer,
  SubTitle,
  Divider,
} from "./styles";
import banner from "../../assets/Imagem.png";
import { BsCartFill } from "react-icons/bs";
import { MdTimer } from "react-icons/md";
import { AiOutlineInbox } from "react-icons/ai";
import { BiCoffeeTogo } from "react-icons/bi";

export const Home = () => {
  return (
    <HomeContainer>
      <Banner>
        <div>
          <Title>Find the perfect coffee for any time of day</Title>
          <SubTitle>
            With Coffee Delivery you get your coffee wherever you are, anytime
          </SubTitle>
          <OptionsContainer>
            <Divider>
              <div>
                <BsCartFill className="yellow" size={25} />
                <p>simple and safe purchase</p>
              </div>
              <div>
                <MdTimer className="darkYellow" size={25} />
                <p>Fast and tracked delivery</p>
              </div>
            </Divider>
            <Divider>
              <div>
                <AiOutlineInbox className="textBase" size={25} />
                <p>Packaging keeps the coffee intact </p>
              </div>
              <div>
                <BiCoffeeTogo className="purple" size={25} />
                <p> coffee arrives frequently to you </p>
              </div>
            </Divider>
          </OptionsContainer>
        </div>
        <div>
          <img src={banner} alt="" />
        </div>
      </Banner>
    </HomeContainer>
  );
};