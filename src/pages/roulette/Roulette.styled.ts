import styled from "styled-components";

export const RouletteStyled = styled.main`

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
      object-fit: cover;
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
  }
  .item-games-filter-roulette {
    padding: 0;
  }
  .item-games-filter-roulette__image {
    position: static;
  }

`
