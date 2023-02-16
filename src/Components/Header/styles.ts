import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0;
  img {
    cursor: pointer;
  }
`;
export const HeaderLeftSide = styled.div`
  display: flex;
  gap: 20px;

  p {
    padding: 8px;
    background: ${(props) => props.theme["purpe-light"]};
    width: 100%;
    border-radius: 4px;
    color: ${(props) => props.theme["purple-dark"]};
  }
`;
