import styled from "styled-components";
import arrowWhite from './../../assets/img/icons/arrow-white.svg'

export const HeaderStyled = styled.header`

  .characteristics-select-product__dropdown {
    white-space: nowrap;
    margin: 0 10px;
    min-width: 170px;
    
    @media screen and (max-width: 576px) {
      display: none;
    }

    .dropdown__button {
      padding-left: 8px;
      padding-right: 8px;
    }

    .dropdown__button::before {
      right: 10px;
    }
  }

  .top-mobile-header {
    .header__servers {
      display: block;
      margin: 10px 0;
      margin-top: 15px;
    }
  }

  @media screen and (max-width: 576px) {
    .mobile-header__top .characteristics-select-product__dropdown {
      display: block;
      margin: 0;
    }
  }

  .header__servers::before {
    position: absolute;
    content: "";
    top: 5px;
    right: 0;
    display: block;
    width: 14px;
    height: 8.2px;
    transition: all 0.3s ease 0s;
    background: url(${arrowWhite}) center no-repeat;
    background-size: cover;
    transform: rotate(180deg);
  }
`
