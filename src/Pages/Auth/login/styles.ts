import styled from "styled-components";

export const LoginContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  svg {
    margin: 0 1rem;
  }

  img {
    max-width: 100%;
    width: 500px;
  }
  div {
    flex: 1;
    max-width: 500px;
    @media screen and (max-width: 768px) {
      width: 100%;
      padding: 0 1rem;
      margin-bottom: 1rem;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: space-around;
    justify-content: space-around;
  }
`;

export const LoginHeadline = styled.p`
  font-weight: 600;
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: ${(props) => props.theme["base-text"]};
`;

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
`;

export const LoginSubtitle = styled.p`
  color: ${(props) => props.theme["base-text"]};
  padding-bottom: 20px;
  border-bottom: 1px solid #6c757d;
  width: 100%;
  margin-top: 20px;
  text-align: center;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const LoginInputContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  p:nth-child(1) {
    font-weight: 600;
    margin-bottom: 5px;
  }
`;
