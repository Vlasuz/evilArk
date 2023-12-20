import styled from "styled-components";

export const InventoryStyled = styled.main`
  
  .purchases__column {
    height: 100%;
  }
  
  .loader {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }
  
  img.loading {
    filter: brightness(.4);
  }

  .purchases__item {
    height: 100%;
  }
  .item-purchases__bottom {
    margin-top: auto;
  }
  .swiper-slide, swiper-slide {
    height: auto;
  }
  
  p {
    font-size: 20px;
    color: #fff;
    height: auto;
  }
`
