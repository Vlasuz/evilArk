import styled from "styled-components";

export const ProfileStyled = styled.div`
  .history-profile {
    p {
      height: auto;
      width: 100%;
      color: #fff;
      font-size: 20px;
    }
  }

  .connect-to-asa {
    margin-left: auto;
    margin-right: 10px;
    padding: 10px 20px;
    height: auto;
  }

  .promo__form {
    width: 100%;
    max-width: 500px;

    @media screen and (max-width: 850px) {
      margin-bottom: 40px;
    }

    .calculator-replenishment-bonuses__input {
      width: 100%;
      text-align: left;
    }

    button {
      margin-top: 20px;
      height: 55px;

      @media screen and (max-width: 768px) {
        height: 44px;
      }
    }
  }

  .profile__promo {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media screen and (max-width: 850px) {
      flex-direction: column;
    }
    
    .placeholder {
      margin-bottom: 0;
    }

    b,
    p {
      color: #fff;
      font-size: 16px;
      display: block;
    }

    .your-promo {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      * {
        font-size: 20px;
      }

      b {
        margin-left: 10px;
        cursor: pointer;
      }

      @media screen and (max-width: 768px) {
        display: block;
        b {
          margin-left: 0;
          margin-top: 10px;
        }
      }

    }
  }


  .table {
    border: 1px solid #3D4C5F;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
    background: linear-gradient(0deg, rgba(8, 28, 54, 0.7), rgba(8, 28, 54, 0.7));
    width: 100%;
    overflow: auto;
    margin-top: 20px;
    @media screen and (max-width: 1480px) {
      margin-left: auto;
    }
    @media screen and (max-width: 768px) {
      margin-top: 20px;
      margin-left: 0;
    }

    .user {
      .user__info {
        max-width: 150px;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #fff;
      }
    }

    td {
      font-size: 15px;
      color: #fff;
      padding: 15px 10px;
      border: 1px solid #3D4C5F;
    }

    table {
      border-collapse: collapse;
      overflow: hidden;
      //border: 1px solid #3D4C5F;
      //margin: -1px;
      //width: calc(100% + 1px);
      width: 100%;
    }
  }
  
  .balance-info-profile {
    margin-bottom: 10px;
  }


`
