import styled from "styled-components";
import multipleBgd from "../../assets/img/roulette/rouletteBgd.jpg"

export const RouletteMainStyled = styled.div`
  .roulette__case {
    background: rgba(8, 28, 54, 0.70);
    width: 100%;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    &_multiple {
      background: url(${multipleBgd});
      -webkit-background-size: cover;background-size: cover;
    }

    &_spin {
      overflow: hidden;
    }

    &::-webkit-scrollbar {
      width: 0px;
      height: 0px;
      background: rgba(#04B8AD, .1);
    }

    &::-webkit-scrollbar-thumb {
      background: #04B8AD;
    }
  }

  .roulette__container {
    max-width: 100%;
  }

  .case__info {
    border: 1px solid rgba(255, 255, 255, 0.30);
    height: fit-content;
    padding: 35px 35px 40px;
    -webkit-border-radius: 35px;
    -moz-border-radius: 35px;
    border-radius: 35px;
    width: 100%;
    max-width: 518px;

    .case__title {
      color: #FFF;
      font-size: 25px;
      font-weight: 400;
      text-transform: uppercase;
      line-height: 30px; /* 120% */
      letter-spacing: -0.25px;
    }

    .case__description {
      color: #E6E6E6;
      font-size: 16px;
      font-weight: 300;
      line-height: 23px;
      letter-spacing: -0.16px;
      margin-top: 6px;
    }
  }

  .case__image {
    width: 100%;
    max-width: 350px;
    height: 347px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .case__buttons {
    width: 100%;
    max-width: 412px;
    margin-top: auto;

    h3 {
      color: #FFF;
      font-size: 25px;
      font-weight: 400;
      line-height: 30px;
      text-transform: uppercase;
      letter-spacing: -0.25px;
    }

    .title {
      color: #CBCBCB;
      font-size: 15px;
      font-weight: 400;
      line-height: 25px;
      margin-bottom: 7px;
      display: block;
      margin-top: 32px;
    }

    .input {
      position: relative;

      span {
        color: #FFF;
        text-align: right;
        font-size: 18px;
        font-weight: 600;
        line-height: 25px;
        position: absolute;
        right: 17px;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    input {
      border-radius: 7px;
      border: 1px solid rgba(255, 255, 255, 0.40);
      background: rgba(255, 255, 255, 0.10);
      height: 53px;
      width: 100%;
      padding: 0 17px;
      color: #DFDFDF;
      font-size: 18px;
      font-weight: 600;
      line-height: 25px;

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none
      }
    }
  }

  .case__count {
    margin-top: 20px;

    button {
      border-radius: 120px;
      border: 1px solid rgba(255, 255, 255, 0.40);
      background: rgba(255, 255, 255, 0.10);
      width: 64px;
      height: 53px;
      color: #DFDFDF;
      font-size: 18px;
      font-weight: 600;
      line-height: 25px;
      transition: all .3s ease;
      margin-right: 6px;

      &:hover {
        transform: scale(1.05);
      }

      &:active {
        transform: scale(0.98);
      }

      &.is-active {
        border: 1px solid #FF6C3D;
      }
    }
  }

  .case__buy {
    background: #0B1A31;
    width: 138px;
    height: 138px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid #FFF;
    cursor: pointer;
    transition: all .3s ease;
    margin-bottom: -93px;
    margin-top: 20px;

    &:hover {
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.98);
    }

    b {
      color: #FFF;
      text-align: center;
      font-size: 17px;
      line-height: 20px;
      font-weight: 600;
      display: block;
    }

    span {
      color: #FFF;
      text-align: center;
      font-size: 17px;
      font-weight: 600;
      line-height: 25px;
      margin-top: 3px;
      display: block;
    }
  }

  .roulette__buttons {
    display: flex;
    justify-content: center;

    .case-open-demo {
      background: rgba(255, 255, 255, 0.07);
      color: rgba(255, 255, 255, 0.60);
      text-align: center;
      font-size: 18px;
      font-weight: 400;
      line-height: 24px;
      width: 100%;
      max-width: 177px;
      -webkit-border-radius: 7px;
      -moz-border-radius: 7px;
      border-radius: 7px;

      -webkit-transition: all .3s ease;
      -moz-transition: all .3s ease;
      -ms-transition: all .3s ease;
      -o-transition: all .3s ease;
      transition: all .3s ease;

      &:hover {
        -webkit-transform: scale(1.05);
        -moz-transform: scale(1.05);
        -ms-transform: scale(1.05);
        -o-transform: scale(1.05);
        transform: scale(1.05);
      }

      &:active {
        -webkit-transform: scale(0.98);
        -moz-transform: scale(0.98);
        -ms-transform: scale(0.98);
        -o-transform: scale(0.98);
        transform: scale(0.98);
      }
    }

    .case-open {
      background: #FF6C3D;
      width: 100%;
      max-width: 280px;
      height: 60px;
      -webkit-border-radius: 10px;
      -moz-border-radius: 10px;
      border-radius: 10px;
      color: #FFF;
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      line-height: 24px;
      margin-right: 20px;

      -webkit-transition: all .3s ease;
      -moz-transition: all .3s ease;
      -ms-transition: all .3s ease;
      -o-transition: all .3s ease;
      transition: all .3s ease;

      &:hover {
        -webkit-transform: scale(1.05);
        -moz-transform: scale(1.05);
        -ms-transform: scale(1.05);
        -o-transform: scale(1.05);
        transform: scale(1.05);
      }

      &:active {
        -webkit-transform: scale(0.98);
        -moz-transform: scale(0.98);
        -ms-transform: scale(0.98);
        -o-transform: scale(0.98);
        transform: scale(0.98);
      }
    }

    input {
      display: none;
    }

    input:checked + label:after {
      background: #FF6C3D;
    }

    input:checked + label:before {
      right: 28px;
    }

    .fast-open {
      background: rgba(255, 255, 255, 0.10);
      border: 1px solid rgba(255, 255, 255, 0.40);
      -webkit-border-radius: 7px;
      -moz-border-radius: 7px;
      border-radius: 7px;
      padding: 16px 25px;
      display: flex;
      position: relative;
      user-select: none;
      cursor: pointer;
      margin-right: 20px;
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

      &:after {
        content: '';
        border-radius: 120px;
        background: rgba(255, 255, 255, 0.20);
        width: 51px;
        height: 28px;
        display: block;
        -webkit-transition: all .3s ease;
        -moz-transition: all .3s ease;
        -ms-transition: all .3s ease;
        -o-transition: all .3s ease;
        transition: all .3s ease;
      }

      &:before {
        content: '';
        width: 22px;
        height: 22px;
        background: #FFF;
        position: absolute;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        top: 50%;
        -webkit-transform: translatey(-50%);
        -moz-transform: translatey(-50%);
        -ms-transform: translatey(-50%);
        -o-transform: translatey(-50%);
        transform: translatey(-50%);
        right: 51px;
        -webkit-transition: all .3s ease;
        -moz-transition: all .3s ease;
        -ms-transition: all .3s ease;
        -o-transition: all .3s ease;
        transition: all .3s ease;
      }

      input {
        display: none;
      }

      span {
        color: #FFF;
        text-align: center;
        font-size: 18px;
        font-weight: 600;
        line-height: 24px;
        margin-right: 13px;
      }

      &__loading {
        cursor: default;
        
        &:before,
        &:after {
          display: none;
        }

        &:active,
        &:hover {
          transform: scale(1);
        }

        span {
          margin-right: 0;
        }
      }
    }
  }

  .roulette__contains {
    margin-top: 53px;

    .title-h3 {
      margin-bottom: 33px;
    }
  }

  .rarities {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;

    li {
      width: 100%;
      max-width: 209px;
      height: 72px;
      border: 1px solid #000;
      color: #FFF;
      font-size: 18px;
      font-weight: 400;
      line-height: 25px;
      padding: 10px 16px;
      padding-right: 50px;
      border-radius: 15px;
      display: flex;

      .box {
        width: 12px;
        min-width: 12px;
        height: 12px;
        border-radius: 3px;
        margin-top: 5px;
        margin-right: 16px;

      }
    }
  }

  .case__items {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    margin-top: 40px;
    gap: 20px;

    li {
      border: 1px solid #C62626;
      padding: 8px 8px 13px;
      border-radius: 20px;

      img {
        width: 100%;
        height: 100%;
        max-height: 169px;
        object-fit: contain;
      }

      .item__photo {
        position: relative;
      }

      .item__title {
        color: #FFF;
        font-size: 16px;
        font-weight: 400;
        margin-top: 17px;
        margin-left: 12px;
      }

      .percent {
        color: #FFF;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.24px;
        position: absolute;
        top: 0;
        right: -3px;
        background: rgba(255, 255, 255, 0.30);
        backdrop-filter: blur(3px);
        padding: 5px;
        padding-left: 9px;
        border-radius: 30px 0 0 30px;
        width: 100%;
        max-width: 62px;
        text-align: center;

        &:after {
          content: '';
          border: 3px solid transparent;
          border-bottom: 3px solid rgba(255, 255, 255, .4);
          transform: rotate(-45deg);
          display: block;
          position: absolute;
          bottom: -3px;
          right: 1.4px;
        }
      }
    }
  }

  .title-h3 {
    text-align: center;
    font-size: 35px;
  }

  .spin-single {
    display: flex;
    
    //margin-left: calc(-1 * (100vw / 5 - 46px) * 45);

    &.spin-single__spin {
      animation: spin 10s ease forwards;
    }

    &.spin-single__fast {
      &.spin-single__spin {
        animation: spin 1s ease forwards;
      }
    }
  }

  @keyframes spin {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: calc(-1 * (100vw / 5 - 46px) * 45);
    }
  }

  .card__top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      color: #FFF;
      text-align: center;
      font-size: 16px;
      font-weight: 500;
    }
  }

  .card__bottom {
    color: #FFF;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    margin-top: 8px;
    height: 40px;
  }

  .spin__card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 25px;
    background: #042148;
    min-width: calc((100vw - 230px) / 5 - 30px);
    width: 100%;
    padding: 12px 20px 28px;
    margin-right: 30px;
    border: 1px solid #000;
    box-shadow: 0 0 0 #000;

    &.is-active {
      transform: scale(1.05);
      -webkit-transition: all .3s ease;
      -moz-transition: all .3s ease;
      -ms-transition: all .3s ease;
      -o-transition: all .3s ease;
      transition: all .3s ease;
      background: rgba(8, 28, 54, 0.70);
    }

    img {
      width: 100%;
      height: 250px;
      object-fit: contain;
    }
  }

  .spin-multiple {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 448px;
    overflow: hidden;
    margin-top: -30px;
    margin-bottom: -30px;

    .multiple__line {
      animation: spinVertical 10s ease forwards;
    }

    &.spin-single__fast {
      .multiple__line {
        animation: spinVertical 1s ease forwards;
      }
    }

    .spin__card {
      margin-right: 0;
      margin-bottom: 15px;

      &:first-child {
        margin-top: -305px;
      }
    }
  }

  @keyframes spinVertical {
    0% {
      margin-left: 0;
    }
    100% {
      margin-top: calc(-395.5px * 46);
    }
  }
  
  
  @media screen and (max-width: 1500px) {
    //.spin__card {
    //  min-width: calc((100vw - 40px) / 3 - 30px);
    //}
  }
  @media screen and (max-width: 1200px) {
    .case__items {
      //grid-template-columns: repeat(3, 1fr);
      
    }
    
    .spin__card {
      width: 260px;
      max-width: 260px;
      min-width: 260px;
      margin-right: 30px;
    }
    
    .multiple__line .spin__card {
      width: 100%;
      max-width: 100%;
      min-width: 0;
      margin-right: 0;
    }
    
    @keyframes spin {
      0% {
        margin-left: 0;
      }
      100% {
        margin-left: calc(-1 * ((260px + 30px) * 47 - (100vw - 70vw)));
      }
    }
  }
  @media screen and (max-width: 992px) {
    .roulette__main {
      padding-top: 100px;
    }
    .roulette__case {
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 90px;
    }
    .case__info {
      width: 100%;
      max-width: 100%;
      order: 2;
    }
    .case__image {
      order: 1;
    }
    .case__buttons {
      order: 3;
      margin-right: auto;
    }
  }
  @media screen and (max-width: 800px) {
    .case__items {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (max-width: 600px) {
    .case__items {
      grid-template-columns: repeat(2, 1fr);
      gap: 5px;
    }
  }
  @media screen and (max-width: 576px) {
    .case__info {
      padding: 10px;
      -webkit-border-radius: 10px;-moz-border-radius: 10px;border-radius: 10px;
    }
    .roulette__case {
      padding: 15px;
    }
    .case__image {
      height: 100%;
      max-width: 100%;
    }
    .roulette__buttons {
      flex-direction: column;
    }
    .roulette__buttons .fast-open {
      justify-content: space-between;
      margin-right: 0;
    }
    .roulette__buttons .case-open-demo {
      width: 100%;
      margin-top: 10px;
      height: 50px;
      max-width: 100%;
    }
    .rarities li {
      width: 100%;
      max-width: 100%;
    }

    .spin__card {
      min-width: 150px;
    }
    .spin__card img {
      height: 100px;
    }

    .spin__card {
      width: 200px;
      max-width: 200px;
      min-width: 200px;
      margin-right: 10px;
    }

    .multiple__line .spin__card {
      width: 100%;
      max-width: 100%;
      min-width: 0;
      margin-right: 0;
      padding: 5px;
      border-radius: 10px;
      
      .card__bottom {
        overflow: hidden;
      }
      
      .rarity svg {
        width: 20px;
      }
      
      img {
        height: 100px;
      }
    }

    @keyframes spinVertical {
      0% {
        margin-left: 0;
      }
      100% {
        margin-top: calc(-209px * 46);
      }
    }
    
    @keyframes spin {
      0% {
        margin-left: 0;
      }
      100% {
        margin-left: calc(-1 * ((200px + 10px) * 47 - (100vw - 90vw)));
      }
    }
  }
`
