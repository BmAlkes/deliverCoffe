import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header/Header";
import { LayoutContainer } from "./styles";

const DefaultLayout = () => {
  return (
    <>
      <LayoutContainer>
        <Header />
        <Outlet />
      </LayoutContainer>
    </>
  );
};

export default DefaultLayout;
