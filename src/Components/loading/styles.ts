import styled from "styled-components";

export const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme["purpe-light"]};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    animation: pulse 3s infinite ease-in-out alternate;
  }
  @keyframes pulse {
    25% {
      transform: scale(0.7);
    }
    50% {
      transform: scale(1);
    }
    75% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;
