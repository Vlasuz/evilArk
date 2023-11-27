import { styled } from 'styled-components';

export const MainStyled = styled.main`

  .servidores__row svg {
    width: 24px;
    height: 24px;
    stroke: #000;
    fill: transparent;
    transition: all 0.3s ease 0s;
    display: block;
  }
  .servidores__row button {
    background: transparent;
    border: none;
  }
  .servidores__row .server_ip {
    display: flex;
    justify-content: space-between;
  }

`
