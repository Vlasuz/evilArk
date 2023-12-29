import styled from "styled-components";

export const BonusesStyled = styled.main`

  .bonuses__block {
    display: flex;

    @media screen and (max-width: 768px) {
      display: block;
    }
  }

  .bonuses__until {
    margin: 10px;

    @media screen and (max-width: 768px) {
      margin: 30px 0;
    }

    p {
      font-size: 16px;
      color: #fff;
    }
  }
  
  .until__sum {
    font-size: 20px;
    color: #fff;
  }
  .until__name {
    font-size: 20px;
    color: #fff;
    margin-left: 15px;
  }
  
  
  .bonuses__calculate {
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 1480px) {
      //display: grid;
      //grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
  
  .calculate__info {
    font-size: 16px;
    line-height: 1.5;
    color: #fff;
    max-width: 100%;
    margin-top: 20px;
    margin-left: 10px;
    
    @media screen and (max-width: 1480px) {
      max-width: 100%;
    }
    @media screen and (max-width: 768px) {
      margin-top: 20px;
    }
  }
  
  .until__inner {
    margin-top: 20px;
    display: flex;
    @media screen and (max-width: 768px) {
      margin-top: 10px;
    }
    b {
      margin-left: 4px;
    }
  }

`
