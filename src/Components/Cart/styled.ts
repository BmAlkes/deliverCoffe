import styled from "styled-components";

export const CartConteinerCoffe = styled.div`
  display: flex;
  border-bottom: 1px solid #d7d5d5;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 0 !important;
    flex-direction: column;
  }

  div {
    display: flex;
    padding: 1rem;
    @media (max-width: 768px) {
      padding: 1rem 0;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
  img {
    width: 70px;
    object-fit: contain;
    margin-top: 20px;
  }
  .column {
    flex-direction: column;
    p {
      margin-bottom: 15px;
    }
  }
  .column2 {
    padding: 0;
    @media (max-width: 768px) {
      padding: 1rem 0;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  }
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
    color: #574f4d;
  }
`;
