import styled from "styled-components";

export const TableNextBonusesStyled = styled.div`
  td {
    font-size: 15px;
    color: #fff;
    padding: 15px 30px;
    border: 1px solid #3D4C5F;
  }

  .table {
    border: 1px solid #3D4C5F;
    overflow: hidden;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
    background: linear-gradient(0deg, rgba(8, 28, 54, 0.7), rgba(8, 28, 54, 0.7));
    width: fit-content;

    @media screen and (max-width: 1480px) {
      margin-left: auto;
    }
    @media screen and (max-width: 768px) {
      margin-top: 20px;
      margin-left: 0;
    }
  }

  table {
    border-collapse: collapse;
    overflow: hidden;
    border: 1px solid #3D4C5F;
    margin: -1px;
  }
`
