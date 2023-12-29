import { styled } from 'styled-components';

export const MainStyled = styled.main`

  .servidores__row svg {
    width: 24px;
    height: 24px;
    stroke: #fff;
    fill: transparent;
    transition: all 0.3s ease 0s;
    display: block;
  }
  .servidores__body {
    padding: 0;
    background: transparent;
  }
  .item-servidores__link span,
  .item-servidores__name,
  .servidores__title span {
    color: #fff;
  }
  .servidores__row button {
    background: transparent;
    border: none;
  }
  .servidores__row .server_ip {
    display: flex;
    justify-content: space-between;
  }

  .today-news__btn {
    max-width: 100%;
    width: fit-content;
    padding-left: 10px;
    padding-right: 10px;
  }
  
  .view-settings {
    margin-left: auto;
    margin-right: 10px;
  }

`
