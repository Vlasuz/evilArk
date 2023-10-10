import styled from "styled-components";

export const RouletteStyled = styled.main`

  .games-filter-roulette__items {
    overflow: auto;
    display: flex;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .games-filter-roulette__column,
  .slide-games-filter-roulette {
    min-width: calc(100% / 5 - 20px);
    margin: 0 10px;
    display: block;
    height: 200px;
    -webkit-border-radius: 25px;
    -moz-border-radius: 25px;
    border-radius: 25px;
    overflow: hidden;
    position: relative;
    //transition: all 5s ease-out; 
  }
  .games-filter-roulette__row {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
  }
  
  .is_scroll_roulette {
    margin-left: -9956px;
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
