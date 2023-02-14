import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 160px;
  margin: 0 160px;
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
