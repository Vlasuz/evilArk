import styled from "styled-components";
import arrowWhite from './../../assets/img/icons/arrow-white.svg'

export const HeaderStyled = styled.header`
  
  .top-mobile-header {
    .header__servers {
      display: block;
      margin: 10px 0;
      margin-top: 15px;
    }  
  }
  .header__servers {
    position: relative;
    margin-right: 20px;
    
    @media screen and (max-width: 576px) {
      display: none;
    }

    select {
      appearance: none;
      background: transparent;
      border: none;
      padding-right: 20px;

      font-size: 16px;
      font-weight: 500;
      line-height: 118.75%;
      letter-spacing: -0.01em;
      color: #fff;
      transition: all 0.3s ease 0s;
    }
    option {
      color: #000000;
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
