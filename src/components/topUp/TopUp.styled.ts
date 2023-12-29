import styled from "styled-components";

export const TopUpStyled = styled.div`
  .servers {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px 0;
  }

  .select-category__column {
    margin: 4px;
    width: calc(100% / 3 - 8px);
    cursor: pointer;
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;

    &:hover {
      -webkit-transform: scale(1.02);
      -moz-transform: scale(1.02);
      -ms-transform: scale(1.02);
      -o-transform: scale(1.02);
      transform: scale(1.02);
    }

    &:active {
      -webkit-transform: scale(0.98);
      -moz-transform: scale(0.98);
      -ms-transform: scale(0.98);
      -o-transform: scale(0.98);
      transform: scale(0.98);
    }

    .item-select-category {
      border-width: 2px;
    }
  }

  .select-category__column._active .item-select-category__image::before {
    background: linear-gradient(180deg, transparent 0%, rgba(255, 108, 61, .7) 100%);
  }

  .select-category__column._active .item-select-category {
    border-width: 4px;
  }


  .inner-popup__payment .dropdown__button {
    font-size: 25px;
    font-weight: 600;
    color: #2B2B2B;
  }

  .inner-popup__payment input,
  .inner-popup__payment-method input {
    border: 2px solid #bebebe;
    padding: 5px 10px;
    margin: 0 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    font-size: 30px;
    font-weight: 600;
    color: #2B2B2B;
    max-width: 200px;
    text-align: center;
    width: 100%;
    height: 50px;
    appearance: none;
    -webkit-appearance: none;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }

  .inner-popup__payment-method input {
    margin: 20px auto;
    display: block;
  }
  
  .amountLimit {
    font-size: 16px;
    text-align: center;
    margin: 10px 0;
  }

  .cryptoSelected {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    align-items: center;
    width: 100%;

    span {
      color: #000;
      font-family: "MazzardM";
    }
  }

  .dropdown {
    width: 100%;
  }

  .dropdown__list {
    max-height: 150px;
    overflow: auto;
  }

  .dropdown li {
    width: 100%;
    max-width: 100%;
  }

  .dropdown__list-item:hover {
    background: grey;
  }

  .dropdown__list,
  .dropdown__list-item {
    background: #fff;
    color: #1D2A3E;
    border-color: #bebebe;
  }

  .dropdown__button {
    background: #fff;
    color: #1D2A3E;
    border: 1px solid #bebebe;

    &:before {
      filter: brightness(0);
    }

  }

  .papayment-method-inner-popup__item_crypto {
    color: #000;
    font-size: 20px;
    text-align: center;
    margin: 0 auto;
    margin-top: 10px;
  }

  .inner-popup__payment .dropdown__button,
  .inner-popup__payment .characteristics-select-product__dropdown {
    width: 150px;
    height: 50px;
    border-width: 2px;
  }

  .dropdown_error .dropdown__button {
    border-color: red;
  }
  
  .papayment-method-inner-popup__image {
    font-size: 30px;
    font-weight: bold;
    text-transform: lowercase;
    display: flex;
    align-items: center;
    color: #000;
    flex-wrap: wrap;
    justify-content: center;
    p {
      margin-left: 10px;
    }
  }
  
  .inner-popup__payment-method {
    border-top: 2px solid #ECECEC;
    //border-bottom: 2px solid #ECECEC;
    padding: 20px 0;
  }

  .inner-popup__payment {
    border-bottom: none;
  }

  .papayment-method-inner-popup__item {
    -webkit-transition: all .3s ease;-moz-transition: all .3s ease;-ms-transition: all .3s ease;-o-transition: all .3s ease;transition: all .3s ease;
  }
  .papayment-method-inner-popup__item._active {
    border-color: #FF6C3D;
  }
  
  .buttonToPay {
    font-family: "MazzardM";
    margin: 0 auto;
    display: block;
    &:disabled {
      background: grey;
    }
  }

`
