import styled from "styled-components";
import arrowBtnIcon from './../../assets/img/icons/arrow-white.svg'
import check from './../../assets/img/icons/checkOrange.svg'

export const ShopStyled = styled.main`
  .LoadingProducts,
  .NotFound {
    font-size: 40px;
    color: #fff;
    text-align: center;
    margin: 0 auto;
  }

  .select-product__bottom h3 {
    text-align: right;
    color: #fff;
    font-size: 30px;
    margin-bottom: 20px;
  }


  .shop__pagination button {
    margin: 0 4px;
  }

  .shop__pagination button {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    border-radius: 5px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.4);
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1));
    font-size: 18px;
    line-height: 177.7777777778%;
    letter-spacing: -0.01em;
    color: #FFFFFF;
    opacity: 1;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -ms-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
    margin: 0 4px;

    &:hover {
      border: 1px solid rgba(255, 108, 61, 0.4);
      background: linear-gradient(0deg, rgba(255, 108, 61, 0.1), rgba(255, 108, 61, 0.1));
    }

    &._active {
      border: 1px solid rgba(255, 108, 61, 0.4);
      background: linear-gradient(0deg, rgba(255, 108, 61, 0.1), rgba(255, 108, 61, 0.1));
    }
  }

  .shop__pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }

  .shop__pagination button:first-child,
  .shop__pagination button:last-child {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    font-size: 0;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex: 0 0 45px;
    width: 45px;
    height: 45px;
    border-radius: 5px;
    overflow: hidden;
    background: url(${arrowBtnIcon}) center no-repeat;
    background-color: #FF6C3D;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -ms-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
    cursor: pointer;

    &:hover {
      background-color: #e76134;
    }
  }

  .shop__pagination button:first-child {
    transform: rotate(-90deg);
    margin: 0 6px 0 0;
  }

  .shop__pagination button:last-child {
    transform: rotate(90deg);
    margin: 0 0 0 6px;
  }

  .rare-select-product__item {
    margin-bottom: 15px;
  }

  .parameters-select-product {
    //max-width: 100%;
    width: fit-content;
  }

  .parameters-select-product__body {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 516px;
    width: fit-content;

    .parameters-select-product__item {
      flex: 0 1 50%;

      &:nth-child(2n + 1) {
        .label-parameters-select-product__column:after {
          content: '';
          background: linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1));
          position: absolute;
          top: 0;
          left: 0;
          width: 200%;
          height: 100%;
        }
      }

    }

    .label-parameters-select-product__item {
    }

    .value-parameters-select-product__column {
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      align-items: center;
      font-size: 16px;
      line-height: 156.25%;
      color: #DFDFDF;
      padding: 11px 38px;
    }

    .label-parameters-select-product__column {
      padding: 24px 38px;
      width: 100%;
      position: relative;
    }
  }

  .filter-top-cards-categories__item.active .filter-top-cards-categories__link {
    border-color: #FF6C3D;
  }

  .cards-categories__column a {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    background: rgba(0, 0, 0, .1);
    border-color: #ffffff80;
  }

  .item-cards-categories__image {
    margin: 0 auto;
    margin-bottom: 10px;
    margin-top: auto;
  }

  .item-cards-categories__name {
    line-height: 1.2;
  }

  .bottom-item-cards-categories__price_now {
    width: 100%;
  }


  .show-more-description {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 46px;
    padding: 5px 22px;
    border-radius: 5px;
    overflow: hidden;
    background-color: #FF6C3D;
    font-family: Barlow;
    font-size: 15px;
    font-weight: 600;
    color: #FFFFFF;
    transition: all 0.3s ease 0s;
    margin-top: 10px;

    &:hover {
      background: #e76134;
    }
  }


  .time-to-sales-end {
    margin-right: auto;
    display: block;
  }

  .bottom-item-cards-categories__number {
    font-weight: 400;
    font-size: 14px;
  }

  .select-product__title {
    font-size: 40px;
  }

  .select-product__about-product {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .select-product__bottom {
    margin-left: auto;
  }

  .select-product__rare.rare-select-product {
    margin-top: 20px;

    .rare-select-product__title {
      margin-left: 0;
      grid-column-end: 4;
    }

    .rare-select-product__options {
      grid-template-columns: repeat(3, 1fr);
    }

    .label-rare-select-product__row {
      flex-direction: column;
    }

    .label-rare-select-product__name {
      margin-top: 10px;
      margin-right: 0;
    }

    .label-rare-select-product__image {
      flex: 0 0 140px;
      width: 140px;
      height: 140px;
      padding: 10px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .placeholder {
    margin-bottom: 20px;
  }


  .proposal {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    padding-top: 20px;
  }

  .proposal ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    li {
      padding: 20px;
      position: relative;
    }

    label {
      cursor: pointer;
      position: relative;
      display: flex;
      flex-direction: column;
      height: 100%;
      
      img {
        margin-top: auto;
      }

      &:before {
        content: '';
        width: 50px;
        height: 50px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        border: 1px solid #FF6C3D;
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, .8);
      }
    }
    
    input:checked + label:before {
      background-image: url(${check});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 25px;
    }
    
    button {
      background: transparent;
      width: 100%;
      height: 75%;
      top: 0;
      left: 0;
      position: absolute;
    }

    p {
      color: #fff;
      font-size: 22px;
      text-align: center;
      padding-bottom: 20px;
    }

    input {
      display: none;
    }
    
    .price {
      margin-left: auto;
      font-size: 18px;
      padding-bottom: 0;
      height: 50px;
      display: flex;
      align-items: center;
    }

    img {
      width: 100%;
    }

    @media screen and (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 576px) {
      li {
        padding: 10px;
      }
      p {
        font-size: 15px;
      }
      label:before {
        width: 30px;
        height: 30px;
      }
      input:checked+label:before {
        -webkit-background-size: 15px;background-size: 15px;
      }
    }
  }


  @media (max-width: 767.98px) {
    .value-parameters-select-product__item img {
      width: 13px;
      height: 13px;
    }
  }

  @media (max-width: 1550px) {
    .value-parameters-select-product__item {
      font-size: 15px;
    }
  }

  @media (max-width: 991.98px) {
    .value-parameters-select-product__item {
      font-size: 14px;
    }
  }

  @media (max-width: 768px) {
    .cards-categories__column {
      flex: 0 1 49%;
      padding: 0 5px;
    }
  }
  @media (max-width: 479.98px) {
    .bottom-item-cards-categories__row {
      flex-direction: column;
    }

    .value-parameters-select-product__item {
      font-size: 13px;
    }

    .bottom-item-cards-categories__price {
      //flex-direction: column;
      margin-top: 10px;
    }
  }
`
