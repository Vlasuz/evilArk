import styled from "styled-components";

export const InventoryStyled = styled.div`
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
`
