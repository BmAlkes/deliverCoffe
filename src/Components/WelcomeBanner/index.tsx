import React from "react";
import { useAppSelector } from "../../store/store";
import { Container } from "./styles";

const Welcome = () => {
  const { isAuthenticated, currentUser } = useAppSelector(
    (state) => state.userReducer
  );
  return <Container>Welcome back {currentUser.name}</Container>;
};

export default Welcome;
