import styled from "styled-components";

export const RouletteStyled = styled.div`

  .roulette__case {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1));
    padding: 20px;
    margin: 50px 0;
    border: 1px solid rgba(255, 255, 255, 0.4);
    -webkit-border-radius: 35px;
    -moz-border-radius: 35px;
    border-radius: 35px;
    grid-gap: 15px;

    .games-filter-roulette__slide {
      margin: 0;

      img {
        object-fit: contain;
        width: 100%;
        height: 100%;
      }
    }

    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 576px) {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 7px;
      padding: 10px;
      margin: 10px 0;
    }
  }

  .games-filter-roulette__items {

    display: flex;

    overflow: hidden;
    position: relative;

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

    &::-webkit-scrollbar-thumb {
      width: 0;
      height: 0;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .games-filter-roulette__column,
  .slide-games-filter-roulette {
    margin: 0 10px;
    min-width: calc(100% / 5 - 20px);
    display: block;
    height: 200px;
    -webkit-border-radius: 25px;
    -moz-border-radius: 25px;
    border-radius: 25px;
    overflow: hidden;
    position: relative;

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

    &::-webkit-scrollbar-thumb {
      width: 0;
      height: 0;
    }

    @media screen and (max-width: 1024px) {
      min-width: calc(100% / 3 - 20px);
    }
    @media screen and (max-width: 576px) {
      min-width: calc(100% / 3 - 20px);
      height: 120px;
    }
  }

  .games-filter-roulette__row {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;

    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
      .games-filter-roulette__column:nth-child(2),
      .games-filter-roulette__column:nth-child(1) {
        display: none;
      }
    }
  }

  .is_scroll_roulette {
    margin-left: -9956px;

    @media screen and (max-width: 1024px) {
      margin-left: -5996px;
    }
    @media screen and (max-width: 576px) {
      margin-left: -4943px;
    }
  }

  .games-filter-roulette__column:not(:last-child) {
    margin: 0;
  }

  .item-games-filter-roulette__name {
    margin-left: 15px;
    margin-right: 15px;

    @media screen and (max-width: 576px) {
      width: 100%;
      margin: 0;
      padding: 5px 0;
    }
  }

  .item-games-filter-roulette {
    padding: 0;
  }

  .item-games-filter-roulette__image {
    position: static;
  }

  .rare-select-product__title {
    margin: 0;
  }

  .label-rare-select-product__row {
    margin-top: 20px;
  }
  
  .games-filter-roulette__items_in {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(4, 1fr);

    .item-games-filter-roulette__name {
      padding: 15px 5px;
    }
    
    @media screen and (max-width: 992px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 576px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 5px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  @media screen and (max-width: 576px) {
    .games-filter-roulette__slider_in {
      -webkit-transform: translate(0);-moz-transform: translate(0);-ms-transform: translate(0);-o-transform: translate(0);transform: translate(0);
      width: 100%;
      -webkit-border-radius: 20px;-moz-border-radius: 20px;border-radius: 20px;
      
      .title-games-filter-roulette__text {
        font-size: 16px;
      }
    }
  }


  .item-select-category__label,
  .item-select-category__image::before {
    opacity: 0;
    -webkit-transition: all .3s ease;-moz-transition: all .3s ease;-ms-transition: all .3s ease;-o-transition: all .3s ease;transition: all .3s ease;
  }
  
  .select-category__item {
    cursor: pointer;
    &:hover {
      .item-select-category__label,
      .item-select-category__image::before {
        opacity: 1;
      }
    }
  }
  
  .roulette__users {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    .users__name {
      margin-left: 0;
    }
    .users__item {
      margin-bottom: 0;
    }
  }
  
  @media screen and (max-width: 768px) {
    .roulette__users {
      grid-template-columns: 1fr;
    }
  }
  
  .users__body {
    width: 100%;
    margin-bottom: 10px;
  }


  .categories-filter-roulette__items {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }

  .categories-filter-roulette__link {
    display: block;
    padding: 0;
    width: 100%;
    height: 100%;
    border: none;
  }

  .categories-filter-roulette__item:hover {
    -webkit-transform: scale(1.03);
    -moz-transform: scale(1.03);
    -ms-transform: scale(1.03);
    -o-transform: scale(1.03);
    transform: scale(1.03);
  }

  .categories-filter-roulette__item:active {
    -webkit-transform: scale(0.97);
    -moz-transform: scale(0.97);
    -ms-transform: scale(0.97);
    -o-transform: scale(0.97);
    transform: scale(0.97);
  }
  
  .categories-filter-roulette__item {
    border-radius: 25px;
    background: #042148;
    width: 100%;
    border: none;
    padding: 20px;
    cursor: pointer;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -ms-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
    
    .item__image {
      width: 100%;
      height: 100%;
    }
    
    img {
      width: 100%;
      height: 100%;
      -webkit-border-radius: 10px;-moz-border-radius: 10px;border-radius: 10px;
    }
    
    p {
      color: #FFF;
      margin-top: 6px;
      text-align: center;
      font-size: 18px;
      font-weight: 500;
    }
    span {
      display: block;
      margin-top: 11px;
      color: #FFF;
      text-align: center;
      font-size: 20px;
      font-weight: 500;
    }
  }
  
  
  .filter-roulette__categories.categories-filter-roulette {
    .title-h5 {
      font-weight: 300;
      font-size: 30px;
      
      @media screen and (max-width: 768px) {
        font-size: 18px;
      }
    }
  }

`
