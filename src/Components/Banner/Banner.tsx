import React from "react";
import { Banner, Title, OptionsContainer, SubTitle, Divider } from "./styles";
import { BsCartFill } from "react-icons/bs";
import { MdTimer } from "react-icons/md";
import { AiOutlineInbox } from "react-icons/ai";
import { BiCoffeeTogo } from "react-icons/bi";
import { useTranslation } from "react-i18next";

export const BannerHome = () => {
  const { t } = useTranslation();
  return (
    <Banner>
      <div>
        <Title>{t("welcome")}</Title>
        <SubTitle>{t("title")}</SubTitle>
        <OptionsContainer>
          <Divider>
            <div>
              <BsCartFill className="yellow" size={16} />
              <p>{t("sentence1")}</p>
            </div>
            <div>
              <MdTimer className="darkYellow" size={16} />
              <p>{t("sentence2")}</p>
            </div>
          </Divider>
          <Divider>
            <div>
              <AiOutlineInbox className="textBase" size={16} />
              <p>{t("sentence3")}</p>
            </div>
            <div>
              <BiCoffeeTogo className="purple" size={16} />
              <p> {t("sentence4")} </p>
            </div>
          </Divider>
        </OptionsContainer>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/landingpage2/image/upload/v1676461088/BInvent%20App/Imagem_hinxg6.png"
          alt=""
        />
      </div>
    </Banner>
  );
};
