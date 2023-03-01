import styled from "styled-components";

export const RegisterContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 1rem 0;

  svg {
    margin-right: 1rem;
  }

  img {
    max-width: 100%;
    width: 500px;
    padding: 1rem;
  }
  div {
    flex: 1;
    max-width: 500px;
    @media screen and (max-width: 768px) {
      width: 100%;
      padding: 0 1rem;
      margin-bottom: 1rem;
      margin-top: 0.2rem;
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
  border-bottom: 1px solid #6c757d;
  padding: 0.7rem 0;
`;

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
`;

export const LoginInputContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  p:nth-child(1) {
    font-weight: 600;
    margin-bottom: 5px;
  }
`;
