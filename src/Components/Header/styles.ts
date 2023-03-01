import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0;
  @media (max-width: 769px) {
    flex-direction: column;
    margin-bottom: 1rem;
  }
  img {
    cursor: pointer;
  }
`;
export const HeaderLeftSide = styled.div`
  display: flex;
  gap: 10px;
  width: 240px;
  align-items: stretch;
  justify-content: center;

  p {
    padding: 5px;
    text-align: center;
    background: ${(props) => props.theme["purpe-light"]};
    width: 100%;
    border-radius: 4px;
    color: ${(props) => props.theme["purple-dark"]};
  }
  button {
    width: 90px;
  }
`;
